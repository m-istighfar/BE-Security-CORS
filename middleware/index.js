const applyBodyParser = require("./bodyParser");
const applyHelmet = require("./helmet");
const applyCors = require("./cors");
const applyRequestIdMiddleware = require("./requestIdMiddleware");

module.exports = (app) => {
  applyHelmet(app);
  applyCors(app);
  applyBodyParser(app);
  applyRequestIdMiddleware(app);
};
