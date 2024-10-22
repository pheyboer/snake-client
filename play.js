// establishes a connection with the game server
const { connect } = require("./client");
const { setupInput } = require("./input")

//handle error outside of connect function
const handleError = (conn) => {
  conn.on("error", (error) => {
    console.log("Connection Error:", error.message);
    conn.end(); 
  });
};

console.log("Connecting ...");
const connection = connect(); //get connection info and hold in new variable
//setupInput also uses this as reference
handleError(connection); // pass connection info to handleError

//calling setupInput
setupInput(connection);