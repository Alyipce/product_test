// 使用 Mock
var Mock = require('mockjs')

// console.log(Mock.mock('@name'));
var n = 8;
execute(getNames,n);
execute(getEmails, n);
execute(getPassword, n);



function execute(callback,n){
    callback(n);
}

function getNames(n){
    for (i = 0; i < n; i++) {
        let name = Mock.mock('@name');
        console.log(name);
    }
    console.log('-----------------');
}

function getEmails(n){
    for (i = 0; i < n; i++) {
        let email = Mock.mock('@email')
        console.log(email);
    }
    console.log('-----------------');
}

function getPassword(n) {
    for (i = 0; i < n; i++) {
        let pd = Mock.mock('@domain')
        console.log(pd);
    }
    console.log('-----------------');
}


