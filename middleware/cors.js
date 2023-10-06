const cors = require("cors");

module.exports = (app) => {
  const whitelist = ["http://localhost:5000", "http://localhost:5001"];
  const corsOptionsDelegate = (req, callback) => {
    let corsOptions;
    if (whitelist.indexOf(req.header("Origin")) !== -1) {
      corsOptions = {
        origin: true,
        methods:
          req.header("Origin") === "http://localhost:5000"
            ? ["GET", "POST"]
            : ["GET", "POST", "PUT", "DELETE"],
      };
    } else {
      corsOptions = { origin: false };
    }
    callback(null, corsOptions);
  };

  app.use(cors(corsOptionsDelegate));
};
