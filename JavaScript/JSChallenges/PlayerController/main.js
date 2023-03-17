/**@type {HTMLCanvasElement} */
const can = document.getElementById("can");
const ctx = can.getContext("2d");

let keys = {};

class Player {
    x;
    y;
    lastX;
    lastY;
    vx = 0;
    vy = 0;
    w = 10;
    h = 10;
    speed = 0.1;
    drag;
    gravity = 0.1;
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    draw(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
    update(){
        // if collide with floor, die y <= 0
        this.vy += this.gravity;
        let move = (vx, vy)=>{ //lambda for this reference purposes
            this.x+= Math.floor(vx);
            this.y+= Math.floor(vy);
            this.lastX = this.x;
            this.lastY = this.y;
            
            for(let i = 0; i < platforms.length; i++){
                let plat = platforms[i];
                //checks for no possible collision, then continue if all true
                if(this.x + this.w <= plat.x) continue; //if right side of player is less than left side of platform
                if(this.x >= plat.x + plat.w) continue;
                if(this.y + this.h <= plat.y) continue;
                if(this.y >= plat.y + plat.h) continue;
                this.x = this.lastX;
                this.y = this.lastY;
                this.vx = 0;
                this.vy = 0;
                console.log('this gets run')
                
                
            }
        }
                
        this.draw();
               
            
        if(keys['a']){
            this.speed = -Math.abs(this.speed);
            this.vx += this.speed;
        }
        if(keys['d']){
            this.speed = Math.abs(this.speed);
            this.vx += this.speed;
        }
        
        move(this.vx, 0);
        move(0, this.vy);
    }

}

/*
where to do collision calc and drawing, same variables scope? 
should i be calling collision checks function every frame?

*/
class Platform {
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
let platforms = [];
platforms.push(new Platform(10, can.height-30, 100, 10))

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