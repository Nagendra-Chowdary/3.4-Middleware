import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({encoded:true}));

var bandName="";
function displayName(req,res,next){
  bandName=req.body["street"] + req.body["pet"];
  next();
}
app.use(displayName)
app.post("/submit",(req,res)=>{
  console.log(req.body);
  res.send(`<h1>${bandName}</h1>`)
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/public/index.html")
});