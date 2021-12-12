//jshint esversion:6

const express= require("express");
const bodyParser= require("body-parser");
const date= require(__dirname + "/date.js");
const {google} = require('googleapis');
const{OAuth2} = google.auth;
var ejs = require('ejs');
var http = require('http');
const main= require(__dirname + "/main.js");


const app= express();
const items= [];
let time=[];


app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home")  
});

app.get("/dashboard", function(req, res){
    let day= date.getDate();
    
    res.render("list", {
        listTitle: day, 
        newListItems: items,
        Minutes: time,
    });
});

app.post("/dashboard", function(req, res){

    let item= req.body.newItem;
    if(item!=" "){
        items.push(item);
        
    }
       
    res.redirect("/dashboard");
});

app.post("/dashboard", function(req, res){

    
        let min = req.body.userminutes;
    let sec=req.body.userseconds;

    


    time[0]=min;
    time[1]=sec;
    res.redirect("/dashboard");
});



app.listen(3000, function(){
        console.log("Server started on port 3000");
});










