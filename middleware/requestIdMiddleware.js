const { v4: uuidv4 } = require("uuid");

module.exports = (app) => {
  app.use((req, res, next) => {
    if (req.headers["x-request-id"]) {
      res.setHeader("x-request-id", req.headers["x-request-id"]);
    } else {
      res.setHeader("x-request-id", uuidv4());
    }
    next();
  });
};
