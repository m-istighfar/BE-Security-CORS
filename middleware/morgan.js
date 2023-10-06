const morgan = require("morgan");
const fs = require("fs");
const path = require("path");

module.exports = (app) => {
  const accessLogStream = fs.createWriteStream(
    path.join(__dirname, "../logger/request.log"),
    { flags: "a" }
  );

  app.use(morgan("combined", { stream: accessLogStream }));
};
