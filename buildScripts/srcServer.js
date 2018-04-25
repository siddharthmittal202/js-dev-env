//this file will configure the webserver that serve up the file in our source directory


import express from 'express'; //
import path from 'path';
import open from 'open'; //require to open site in browser
import webpack from 'webpack';
import config from '../webpack.config.dev';


const port = 3000;
const app = express();
const compiler = webpack(config);

app.use( require('webpack-dev-middleware')(compiler,{
  noInfo: true,
  publicPath: config.output.publicPath
}));

//routes
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'../src/index.html'));
});

app.get('/users',function(req,res){
  res.json([
    {"id":1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
    {"id":2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@gmail.com"},
    {"id":1,"firstName":"Tina","lastName":"Lee","email":"lee.tina@gmail.com"}
  ]);
});

app.listen(port,function(err){
  if(err){
    console.log(err);  //eslint-disable-line no-console
  }else{
    open('http://localhost:'+port);
  }
});
