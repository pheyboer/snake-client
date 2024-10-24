//stores the active TCP connection object. Defaults to undefined
let connection; 

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;  // create variable to hold the stdin object so we don't have to type process.stdin multiple times
  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume(); // resume stdin so the program can listen for input
  stdin.on("data", handleUserInput); //event listener
  return stdin;   // return the stdin object so we can use it elsewhere in the program
};

//function to handle user input
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit(); // CNTRL + C will exit game
  }

  //handle movement commands
  if (key === 'w') {
    connection.write("Move: up");
  } else if (key === 's') {
    connection.write("Move: down");
  } else if (key === 'a') {
    connection.write("Move: left");
  } else if (key === 'd') {
    connection.write("Move: right");
  }

  //adding special keys for canned messages for all to see
  if (key === '1') {
    connection.write("Say: SLOW DOWN");
  } else if (key === '2') {
    connection.write("Say: COME BACK");
  } else if (key === '3') {
    connection.write("Say: I'm a SNAKKKKKEE");
  } else if (key === '4') {
    connection.write("Say: HALLLLP");
  }
};

module.exports = { setupInput };