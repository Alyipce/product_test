// //第一步先想起你的名字 think 姓氏 + 名字
// //第二步再说出你的名字，这里需要想这个动作(think)，同时告诉想的内容
// //去执行这两个动作
//
// //想
// function think(name1,name2){
//     console.log('第一步想:'+name1+' '+name2);
//     var name = name1+' '+name2;
//     return name;
// }
//
//
// //横向执行执行
// //说
// function speak(callback,name1,name2){
//      var name = callback(name1,name2)
//     console.log('我是说出来的： hi,'+name);
// }
// //写
// function write(callback,name1,name2){
//      var name = callback(name1,name2)
//     console.log('我是写出来的： hi,'+name);
// }
//
// function execute(callback1,callback2,param1,param2){
//       console.log('广度');
//      callback2(callback1,param1,param2);
// }
// execute(think,write,'yu','peng');
// execute(think,speak,'yu','peng');
//
//
// //深度执行
// //说
// function speak1(name1,name2){
//      var name = think(name1,name2)
//     console.log('我是说出来的： hi,'+name);
// }
// //想
// function write1(name1,name2){
//      var name = think(name1,name2)
//     console.log('我是写出来的： hi,'+name);
// }
// function execute1(callback1,param1,param2){
//   console.log('深度');
//   callback1(param1,param2);
// }
// execute1(write1,'yu','peng');
// execute1(speak1,'yu','peng');
//
// //现在是表达出来
// function execute2(callback,param1,param2){
//   console.log('深度');
//   callback(param1,param2);
// };
// //规矩定义函数的时候，参数一定不能包含匿名函数
// //回调函数只会存在于函数执行中，而不申请
// function express(name1,name2) {
//     var name = think(name1,name2)
//    console.log('我是表达出来的： hi,'+name);
// }
// execute2(express,'yu','peng');


//将一个函数，以参数的形式放到一个将要执行函数中执行
//如果这个函数有被另外一个函数 回调
function test1(name){
    console.log('test1,'+name);
}
function test2(callback,name){
    console.log('test2,'+name);
    test1(name);
}

function exec1(callback,name){
   callback(name);
}
exec1(function(){},'11');
