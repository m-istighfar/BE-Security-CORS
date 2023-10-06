const applyBodyParser = require("./bodyParser");
const applyHelmet = require("./helmet");
const applyCors = require("./cors");
const applyRequestIdMiddleware = require("./requestIdMiddleware");
const applyMorgan = require("./morgan");

module.exports = (app) => {
  applyMorgan(app);
  applyHelmet(app);
  applyCors(app);
  applyBodyParser(app);
  applyRequestIdMiddleware(app);
};
