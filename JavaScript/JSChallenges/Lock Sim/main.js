const num1Div = document.getElementById("num1");
const num2Div = document.getElementById("num2");
const num3Div = document.getElementById("num3");
const lock = document.getElementById("lockCont");

let num1 = 0;
let num2 = 0;
let num3 = 0;

let passcode = "1 2 3";

function update(){
    requestAnimationFrame(update);
    num1Div.textContent = num1;
    num2Div.textContent = num2;
    num3Div.textContent = num3;

    if((num1 + " " + num2 + " " + num3) == passcode){
        lock.style.backgroundImage = "url(images/unlocked.png)";
    } else {
        lock.style.backgroundImage = "url(images/locked.png)";
    }
}
update();

num1Div.addEventListener('wheel', (e) => {
    if(e.deltaY < 0) num1++;
    else{
        num1--;
    }
    if(num1 > 9) num1 = 0;
    if(num1 < 0) num1 = 9;
});

num2Div.addEventListener('wheel', (e) => {
    if(e.deltaY < 0) num2++;
    else{
        num2--;
    }
    if(num2 > 9) num2 = 0;
    if(num2 < 0) num2 = 9;
});

num3Div.addEventListener('wheel', (e) => {
    if(e.deltaY < 0) num3++;
    else{
        num3--;
    }
    if(num3 > 9) num3 = 0;
    if(num3 < 0) num3 = 9;
})

document.addEventListener('scroll', ()=> {
    body.style.backgroundColor = 'red';
});