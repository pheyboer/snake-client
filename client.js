const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //event listener for successful connection
  conn.on('connect', () => {
    console.log('Successfully connected to the game server!');
    conn.write("Name: PRH");
    
    /*
    conn.write("Move: up");

    setTimeout(() => {
      conn.write("Move: right");
    }, 50);

    setInterval(() => {
      conn.write("Move: up");
    }, 50);
    */
  });

  // handle incoming data
  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };