/**@type {HTMLCanvasElement} */
const can = document.getElementById("can");
const ctx = can.getContext("2d");

let keys = {};

class Player{
    x;
    y;
    w;
    h;
    vx;
    vy;
    speed;
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.w = 10;
        this.h = 10;
        this.speed = 2;
    }
    draw(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
    update(){
        
        this.draw();
    }
}

let platforms = [];

class Platform{
    x;
    y;
    w;
    h;
    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    draw(){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
    
}

platforms.push(new Platform(10, can.height-30, 100, 10));

let p1 = new Player(25, 25);
function update(){
    requestAnimationFrame(update);
    ctx.clearRect(0, 0, can.width, can.height);
    p1.update();
    for(let i = 0; i < platforms.length; i++){
        platforms[i].draw();
    }

}

update();

document.addEventListener("keydown", function(e){
    let key = e.key.toLowerCase();
    keys[key] = true; 
});

document.addEventListener("keyup", function(e){
    let key = e.key.toLowerCase();
    keys[key] = false; 
});

