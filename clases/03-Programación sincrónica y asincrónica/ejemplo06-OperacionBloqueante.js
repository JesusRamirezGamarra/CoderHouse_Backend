
function a(){
    console.log('1')
    b();
    console.log('a')
}

function b(){
    console.log('2')
    c();
    console.log('b')
}

function c(){
    console.log('3')
    console.log('c')
}

a();