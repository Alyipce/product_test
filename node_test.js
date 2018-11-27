//函数作为另一个函数参数执行的顺序
var res = function say(name){
  console.log('hi,I am '+name);
  return 'hi,I am '+name;
}

function execute(functionName,name){
      console.log('go into outside method');
      functionName(name);
      console.log('invoked the inside method');
}

// execute(say,'翠花');

execute(function(name){console.log(res)},'翠花');
;
