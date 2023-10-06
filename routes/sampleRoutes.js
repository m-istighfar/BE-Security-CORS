const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Read success" });
});

router.post("/", (req, res) => {
  res.json({ message: "Create success" });
});

router.put("/", (req, res) => {
  res.json({ message: "Update success" });
});

router.delete("/", (req, res) => {
  res.json({ message: "Delete success" });
});

module.exports = router;
