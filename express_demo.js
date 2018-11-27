var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
// //创建监听
// var server = app.listen(8081,function(){
//   var host = server.address().addree
//   var post = server.address().post
//   console.log(host+':'+post)
// })
app.listen(8081);

//静态文件
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(multer({
  dest: '/tmp/'
}).array('image'));

//相应请求
app.get('/', function(req, res) {
  res.send("hello");
})

//获取所有用户
app.get('/listUsers', function(req, res) {
  fs.readFile(__dirname + "/data_test/users.json", 'utf-8', function(err, data) {
    if (!err) {
      res.send(data);
    }
  })
})
//add
var newUser = {
  "user4": {
    "name": "Dean",
    "password": "password4",
    "profession": "clerk",
    "id": 4
  }
}
app.get('/addUser', function(req, res) {
  fs.readFile(__dirname + "/data_test/users.json", 'utf-8', function(err, data) {
    if (!err) {
      data = JSON.parse(data);
      console.log(data);
      data["user4"] = newUser["user4"];
      res.end(JSON.stringify(data));
    }
    res.send(err);
  })
})

//delete
app.get('/deleteUser', function(req, res) {
  fs.readFile(__dirname + "/data_test/users.json", 'utf-8', function(err, data) {
    if (!err) {
      data = JSON.parse(data);
      delete data["user2"];
      res.end(JSON.stringify(data));
    }
    res.send(err);
  })
})

//通过Id获取详情

app.get('/:id', function(req, res) {
  fs.readFile(__dirname + "/data_test/users.json", 'utf-8', function(err, data) {
    data = JSON.parse(data);
    var dd = data["user" + req.params.id];
    dd = JSON.stringify(dd);
    res.send(dd);
  })
})

//文件上传
app.post('/file_upload', function(req, res) {
  var filePath = __dirname + "/public/upload/" + req.files[0].originalname;
  fs.readFile(req.files[0].path, function(err, data) {
    fs.writeFile(filePath, data, function(err) {
      if (err) {
        console.log(err);
      } else {
        response = {
          "message": "upload success",
          "filename": req.files[0].originalname
        }
          res.send(JSON.stringify(response));
      }
    })
  })
})
