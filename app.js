function input(){
    let div = document.getElementById('divBtn');
    let btn = div.getElementsByTagName('button');
    let input1 = document.getElementById('inputField');

    for(var i=0; i<btn.length; i++){
        btn[i].addEventListener('click', function(){
            input1.value += this.textContent;
        });
    }
}
input()

function addition(a,b){
    return a + b;
}
function subtraction(a,b){
    return a - b;
}
function multiplation(a,b){
    return a * b;
}
function divided(a,b){
    return a / b;
}
// function 