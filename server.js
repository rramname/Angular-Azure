var http=require('http')
console.log(__dirname)
function build(){
    
    var exec = require('child_process').exec,child;

child = exec(__dirname+'//node_modules//.bin//ng  build', function(error,stdout,stderr) { 
    if (error) {
      console.log(error.stack); 
    
      }
      else{
        const express = require('express');
        
        const port=process.env.PORT || 3000
        
        
        const app=express();
        
        app.use(express.static("dist"))
        app.listen(port,function(){console.log('server started')});
      }
   
  });
} 
build();

