const Express = require("express");
const App = Express();
const port = 80;
//const Person = require("./Person.js");

App.use("/public", Express.static("public"));

/*
App.get("/api", function (Request, Response) {
    Response.send("Hi!2");
}); 


let p = new Person("Dswole", "gold");

App.get("/",function(Request, Response){
  Response.send("Hi!");
  console.log("You got a request!"); });

App.get("/name", function (Request, Response) {
    Response.send("p.getName");

});*/

App.get("/", function (Request, Response) {
    Response.send("Hello World!");

});

App.listen(port,function(){
        console.log("Server running!");
    });