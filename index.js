const express = require('express');
const RapidAPI = require('./rapidapi');

const app = new express();
const PORT = 8181;

const rapid = new RapidAPI("Dashboard", "0b7f82c1-cf1d-4e02-af9a-de129afe54b2");

app.get('/', function (req, res) {
    res.send("Hello World!");
});

app.listen(PORT, function () {
    rapid.listen("Github", "webhooks", {}, {
        onMessage: msg => console.log(msg),
        onClose: (code, reason) => console.log("Closed: ", code, reason)
    });
    rapid.listen("Slack", "slashCommand", {token: "ydt3vFyVEoW51ZFCC2i5QKab"}, {
        onMessage: msg => console.log(msg),
        onClose: reason => console.log("Closed: ", reason)
    });
});
