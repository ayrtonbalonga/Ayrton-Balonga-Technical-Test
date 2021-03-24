// REST API in node.js
var express = require('express');
var app = express();
var fs = require('fs');
const dirTree = require("directory-tree");

const cors = require('cors');
// Endpoint to Get a list of users
app.get('/getFullPath', function(req, res){
     
   
    const tree = dirTree('/AllNodeApp/Test_App/');
    //  res.setHeader('Access-Control-Allow-Origin','*');
   // console.log(tree);
    res.send(tree); // you can also use res.send()
   
})


// Create a server to listen at port 8080
var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
})