const http = require("http");
const express = require("express");
var cors = require("cors");
const websock = require("ws");
const fs = require("fs");

const app = express();

const server = http.createServer(app);
const wss = new websock.Server({ server });

app.use(express.static("public"));
app.use(cors());
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", function (req, res) {

    res.render("index");
    res.end();
});

app.get("/api/:id", function (req, res) {
    // res.send(req.params.id);
    res.json({ username: req.params.id })
    res.end();
});
app.get('/getck', function (req, res) {
    res.send('doi lay data');
    res.end();
});
wss.on("connection", function (ws) {
    ws.on("message", function (dt) {
        console.log(dt.data);
        ws.send('da nhan dc data')
    });
    ws.send('ok');
});
server.listen(80, function () {

});