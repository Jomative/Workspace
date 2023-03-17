const can = document.getElementById("can");
const ctx = can.getContext("2d");
can.width = 1024;
can.height = 576;

let gravity = 0.05;

let balls = [];

class Ball{
    x;
    y;
    vx;
    vy;
    r;
    constructor(x, y, vx, vy, r){
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.r = r;
    }
    draw(){
        ctx.fillStyle = "darkcyan";
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
        ctx.stroke();

    }
    update(){
        for(let i = 0; i < balls.length; i++){
            //collision
        }
        this.draw();
    }
}

function genBalls(count){
    for(let i = 0; i < count; )
}

function update(){
    requestAnimationFrame(update);

}
update();