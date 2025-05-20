const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 8001;

app.use(express.static(path.join(__dirname, '/dist')));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.get("/armories", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/armories.html"));
});

app.get("/event", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/event.html"));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});