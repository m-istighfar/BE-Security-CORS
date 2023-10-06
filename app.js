const express = require("express");
const applyMiddleware = require("./middleware");
const sampleRoutes = require("./routes/sampleRoutes");
const vulnerabilitiesRoutes = require("./routes/vulnerabilitiesRoutes");

const app = express();
applyMiddleware(app);

app.use("/sample", sampleRoutes);
app.use("/vulnerabilities", vulnerabilitiesRoutes);

const server = app.listen(3000, () => {
  console.log(`Server started on port 3000`);
});

module.exports = { app, server };
