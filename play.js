const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //event listener for successful connection
  conn.on('connect', () => {
    console.log('Successfully connected to the server!');
  });

  // handle incoming data
  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

//handle error outside of connect function
const handleError = (conn) => {
  conn.on("error", (error) => {
    console.log("Connection Error:", error.message);
    conn.end(); 
  });
};

console.log("Connecting ...");
const connection = connect(); //get connection info and hold in new variable
handleError(connection); // pass connection info to handleError