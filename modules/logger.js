function log(message) {
  var time = new Date().toLocaleTimeString();
  console.log("[" + time + "] " + message);
}

module.exports = log;