var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';
mongoClient.connect(url,function(err,db){
        if(err) throw err;
         var testDb = db.db('test');
         var testCollection = testDb.collection('test');

        // var myobj = { name: "菜鸟教程", url: "www.runoob" };
        // testCollection.insertOne(myobj,function(err,res){
        // if(err) throw err;
        // console.log(res);
        // })

       //  var myobj =  [
       //  { name: '菜鸟工具', url: 'https://c.runoob.com', type: 'cn'},
       //  { name: 'Google', url: 'https://www.google.com', type: 'en'},
       //  { name: 'Facebook', url: 'https://www.google.com', type: 'en'}
       // ];
       //  testCollection.insertMany(myobj,function(err,res){
       //    if(err) throw err;
       //    console.log(res.insertedCount);
       //  })

        // var whereStr = {'name': '菜鸟教程'};
        // testCollection.find(whereStr).toArray(function(err,result){
        //   if(err) throw err;
        //   console.log(result);
        // })

         // var whereStr = {"name": "菜鸟教程"};
         // var updateStr = {$set : {"name": "菜鸟工具"}};
         // testCollection.updateOne(whereStr,updateStr,function(err,res){
         //   if(err) throw err;
         //   console.log(res);
         // })

         // var whereStr = {"type": "cn"};
         // var updateStr = {$set : {"type": "en"}};
         // testCollection.updateMany(whereStr,updateStr,function(err,res){
         //   if(err) throw err;
         //   console.log(res);
         // })

         // var whereStr = {'name':'Facebook'};
         // testCollection.deleteOne(whereStr,function(err,res){
         //   if(err) throw err;
         //   console.log(res);
         // })

         // var whereStr = {'name':'Facebook'};
         // testCollection.deleteMany(whereStr,function(err,res){
         //   if(err) throw err;
         //   console.log(res);
         // })

         // 存疑
         // testCollection.find().sort({'type':-1}).toArray(function(err,res){
         //   if(err) throw err;
         //   console.log(res);
         // })

       //
       testCollection.find().skip(5).limit(3).toArray(function(err,res){
         if(err) throw err;
         console.log(res);
       })

        db.close();
})
