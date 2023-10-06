const cors = require("cors");

module.exports = (app) => {
  const whitelist = [
    "https://w-15-clientx.netlify.app",
    "https://w-15-clienty.netlify.app",
  ];
  const corsOptionsDelegate = (req, callback) => {
    let corsOptions;
    if (whitelist.indexOf(req.header("Origin")) !== -1) {
      corsOptions = {
        origin: true,
        methods:
          req.header("Origin") === "https://w-15-clientx.netlify.app"
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
