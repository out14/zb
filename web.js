let express = require("express");

const app = express();

app.use(express.static(path.join(__dirname, '/build')));

app.get("/",(req, res)=>{
    res.sendFile(path.join(__dirname, "build/index.html"));
})

app.get("/armories",(req, res)=>{
    res.sendFile(path.join(__dirname, "build/armories.html"));
})

app.get("/event",(req, res)=>{
    res.sendFile(path.join(__dirname, "build/event.html"));
})