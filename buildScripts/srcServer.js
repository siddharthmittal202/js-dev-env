//this file will configure the webserver that serve up the file in our source directory


import express from 'express'; //
import path from 'path';
import open from 'open'; //require to open site in browser
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console    */
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

app.listen(port,function(err){
  if(err){
    console.log(err);
  }else{
    open('http://localhost:'+port);
  }
});
