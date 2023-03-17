/**@type {HTMLCanvasElement} */
const can = document.getElementById("can");
const ctx = can.getContext("2d");
let slider = document.getElementById("slider");

let rotation = 0.5;

class Bucket{
    level;
    x;
    y;
    w;
    h;
    waterheight;

    constructor(w, h, level){
        this.w = w;
        this.h = h;
        this.x = (can.width/2)-(this.w/2);
        this.y = (can.height/2)-(this.h/2);
        this.level = level;
    }

    drawBucket(){
        ctx.fillStyle = "dodgerblue";
        ctx.strokeStyle = "black";
        ctx.strokeRect(this.x, this.y, this.w, this.h);
        ctx.clearRect(this.x, this.y, this.w, 4);
        this.setLevel();
    }

    setLevel(){
        this.level = rotation;
        this.waterheight = this.level*this.h;
        ctx.fillRect(this.x+1, Math.floor((this.y+this.h)-this.waterheight), this.w-2, this.waterheight);
    }

}

let bucket = new Bucket(50, 50, 10);

function update(){
    ctx.clearRect(0, 0, can.width, can.height);
    bucket.drawBucket();
    requestAnimationFrame(update);
    // bucket.setLevel(0.5);

}
update();

slider.oninput = function(e){
    rotation = slider.value;
};

