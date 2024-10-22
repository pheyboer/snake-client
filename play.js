const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // handle incoming data
  conn.on("data", (data) => {
    console.log(data);
  });

  //handle connection errors
  conn.on("error", (error) => {
    console.log("Connection Error:", error.message);
  });

  return conn;
};

console.log("Connecting ...");
connect();