const express=require("express");
const res = require("express/lib/response");
const app=express();
const path = require("path");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Main page
app.get("/", (req, res) => {
    console.log("Yo");
    res.send("Hi there! This is Garima's first backend task.<ul><li> Use a / (forward slash) with your name to get a customised message for yourself.</li><li> Use /aveg for average calculator.</li> <li>/check for check success</li><li>Type /serveHtml for displaying Garima's restaurant</li>");
});
app.get("/check",(req,res)=>{
    res.send("check success");
});
//Opening the file for average calculation
app.get("/aveg", (req, res) => {
    res.sendFile(__dirname + "/aveg.html");
});
//Calculating average
app.post("/aveg", (req, res) => {
    var number1 = Number(req.body.number1);
    var number2 = Number(req.body.number2);
    var number3 = Number(req.body.number3);
    var avggg = (number1+number2+number3)/3;
    res.send(avggg.toString());
});

//Front-end task
app.use(express.static("public"))
app.get("/serveHtml",(req,res) => {
    res.sendFile(path.join(__dirname,"/public/index.html"));
});

//Input your name to get a customised message 
app.get("/:name",(req,res)=>{
    res.send("Hello "+ req.params.name + ", thank you for visiting my website");
    console.log(req.params);
});
//On which port is the server running on?
app.listen(5000, () => {
    console.log("The server is running on port 5000");
});