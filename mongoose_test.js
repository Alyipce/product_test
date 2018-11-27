const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function(){console.log('connectted')})

var animalSchema = new mongoose.Schema({name:String,type:String});
animalSchema.methods.speaks = function(){
     var greeting = this.name?'我是一个'+this.type +'，我的名字是'+this.name:'I do not have a name.';
     console.log(greeting);
}
// console.log(kettySchema);
  var AnimalEntity = mongoose.model('animals',animalSchema);
// console.log(KettyModel);
var cat1 = new AnimalEntity({name:'翠花',type:'猫'});
var dog1 = new AnimalEntity({name:'灰灰',type:'狗'});
var dog2 = new AnimalEntity({name:'六一',type:'狗'});
//相当于commit操作 将内存对象持久化到数据库
// cat1.save(function(err,cat1){
//     if(err) console.error(err);
//     else cat1.speaks();
// })

//直接根据Model名称
AnimalEntity.find(function(err,animal){
  if(err) console.error(err);
  else console.log(animal);
})


//自定义一个博客Schema
// 1.数据类型
// var blogShema = new Schema({
//     title : String,
//     author : String,
//     body  : String,
//     comment : {body:String,date:Date},
//     date : {type:Date,default:Date.now},
//     hidden : Boolean,
//     meta : {
//       votes : Number,
//       favs  : Number
//     }
// });
// blogShema.methods.views = function(){
//      return this.model('blogs1').find();
// }
//
// //生成Model
// var BlogModel = mongoose.model('blogs',blogShema);
// //生成实例 调用实例方法
// var blogs1 =new BlogModel();
