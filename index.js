const axios = require("axios");
const express = require("express");
const { acceptsEncoding } = require("express/lib/request");
const app = express();

app.get("/endpoint", function (req, res) {
  axios.get("https://reqres.in/api/users").then(function (response) {
    // handle success
    res.send(response.data.data);
    console.log("autofill microservice is called");
    //console.log(response.data.data);
  });
});

console.log("App is running");

app.listen(3001);
