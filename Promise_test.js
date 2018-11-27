let p = new Promise(function(resolve,reject){
        console.log('promise');
        resolve();
})

let test = function(){
  console.log('test');
    return('新的值');
}

p.then(function(){console.log('1');})
.then(function(){console.log('2');})
.then(test)

// //
//
// // let promise = new Promise(function(resolve,reject){
// //         resolve();
// // });
// //
// // promise.then(function(){
// //      sleep(600);
// //       console.log("setTimeout");
// // }).then(function(){
// //       console.log("resolved2");
// // })
// // console.log("hi");
// //
// //
// // function sleep(n) {
// //
// //     var start = new Date().getTime();
// //
// //     while(true)  if(new Date().getTime()-start > n) break;
// //
// //     }
// //
// //
// //     // 异步函数a
// //     var a = function () {
// //       return new Promise(function (resolve, reject) {
// //         setTimeout(function () {
// //           resolve('a')
// //         }, 1000)
// //       })
// //     }
// //
// //     // 异步函数b
// //     var b = function (data) {
// //       return new Promise(function (resolve, reject) {
// //         resolve(data + 'b')
// //       })
// //     }
// //
// //     // 异步函数c
// //     var c = function (data) {
// //       return new Promise(function (resolve, reject) {
// //         setTimeout(function () {
// //           resolve(data + 'c')
// //         }, 500)
// //       })
// //     }
// //
// //     a()
// //     .then(function (data) {
// //       setTimeout(function () {
// //         console.log(data);
// //       }, 500);
// //       return b(data)
// //     })
// //     .then(function (data) {
// //       console.log(data);
// //       return c(data)
// //     })
// //     .then(function (data) {
// //       console.log(data)// abc
// //     })
// let func = function() {
//     return new Promise((resolve, reject) => {
//         resolve('返回值');
//     });
// };
//
// let cb = function() {
//     // return '新的值';
//     console.log('新的值');
// }
//
//
// let cb1 = function() {
//     console.log('1新的值');
// }
//
// // func().then(function () {
// //     return cb();
// // }).then(resp => {
// //     console.warn(resp);
// //     console.warn('1 =========<');
// // });
// let ss = {}
// func()
// .then(cb())
// .then(cb1())
// // .then(resp => {
// //   ss.test3 = 'test3';
// //     console.warn(resp);
// //     console.warn('2 =========<',ss);
// // });
//
// // func().then(cb()).then(resp => {
// //     console.warn(resp);
// //     console.warn('3 =========<');
// // });
// //
// // func().then(cb).then(resp => {
// //     console.warn(resp);
// //     console.warn('4 =========<');
// // });
