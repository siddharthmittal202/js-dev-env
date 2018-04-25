//this file will configure the webserver that serve up the file in our source directory


import express from 'express'; //
import path from 'path';
import open from 'open'; //require to open site in browser
import compression from 'compression'; //enable gzip compression


const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

//routes
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'../src/index.html'));
});


app.listen(port,function(err){
  if(err){
    console.log(err);  //eslint-disable-line no-console
  }else{
    open('http://localhost:'+port);
  }
});
