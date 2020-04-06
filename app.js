if(process.env.NODE_ENV!="production")
{
  require("dotenv").config();
}


const express=require("express");
const app=express();
const expressLayout=require("express-ejs-layouts");
const mongoose=require("mongoose");
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true, useUnifiedTopology: true });
const db =mongoose.connection;
db.on("error",error=>console.error(error));
db.once("open",function(){
  console.log("connected");
});
const ejs=require("ejs");
app.set("layout","layout/layout");
app.set("views",__dirname+"/views");
app.set("view engine","ejs");
app.use(expressLayout);
app.use(express.static("public"));
app.get("/",function(req,res)
{
  res.render("index2");
});
app.get("/about",function(req,res)
{
  res.render("index")
});
app.listen(process.env.PORT||3000);
