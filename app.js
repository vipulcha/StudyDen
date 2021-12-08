//jshint esversion:6

const express= require("express");
const bodyParser= require("body-parser");
const date= require(__dirname + "/date.js");

var ejs = require('ejs');
var http = require('http');


const app= express();
const items= [];

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home")  
});

app.get("/dashboard", function(req, res){
    let day= date.getDate();
    res.render("list", {listTitle: day, newListItems: items});
});

app.post("/dashboard", function(req, res){

    let item= req.body.newItem;
    items.push(item);
    res.redirect("/dashboard");

   /* res.render("list", {listTitle: day, newListItems: items}); */
});


app.listen(3000, function(){
        console.log("Server started on port 3000");
});
