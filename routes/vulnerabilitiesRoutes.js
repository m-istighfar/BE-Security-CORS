const express = require("express");
const router = express.Router();

router.get("/xss", (req, res) => {
  const name = req.query.name;
  res.send(`<h1>Hello, ${name}</h1>`);
});

router.get("/click-jacking", (req, res) => {
  res.send(`
     <form action="/click-jacking" method="post">
       <label for="username">Username:</label><br>
       <input type="text" id="username" name="username"><br>
       <label for="password">Password:</label><br>
       <input type="password" id="password" name="password"><br>
       <input type="submit" value="Submit">
     </form>
   `);
});

router.post("/click-jacking", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  res.json({ username: username, password: password });
});

module.exports = router;
