var express = require('express');
var nodeExcel = require('excel-export');
var app = express();
app.listen(8081);

app.get('/excel',function(req,res){
     var conf = [];
     conf.name = 'mySheet';
     conf.cols = [{
        caption = 

     }]

})
