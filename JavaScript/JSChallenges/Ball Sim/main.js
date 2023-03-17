/**@type {HTMLCanvasElement} */
const can = document.getElementById("can");
const ctx = can.getContext("2d");
can.width = 1024;
can.height = 576;

let gravity = 7;
let ballSize = 15;
let balls = [];
// let initVelocity = Math.random()-0.5; doesn't get random v for each ball


class Ball{
    x;
    y;
    r;
    vx = Math.random()-0.5;
    vy = Math.random()-0.5;
    id;
    constructor(x, y, r, i){
        this.x = x;
        this.y = y;
        this.r = r;
        this.id = i;
    }
    draw(){
        ctx.fillStyle = "darkcyan";
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = "white";
        ctx.fillText(this.id, this.x, this.y);
        
    }
    update(){
        this.x += this.vx;
        this.y += this.vy;
        this.y += gravity;
        if(this.y + this.r > can.height) this.y = can.height-this.r;
        if(this.x + this.r < 0){
            this.x = 0 + this.r;
            this.vx = 0;
        } 
        if(this.x + this.r > can.width) this.x = can.width - this.r;
        this.draw();
    }
}

function ballsCollision(){
    for(let i = 0; i < balls.length; i++){
        for(let j = 0; j < balls.length; j++){
            let b1 = balls[i];
            let b2 = balls[j];
            if(b1 == b2) continue;
            let dist = Math.sqrt(Math.pow(b2.x - b1.x, 2) + Math.pow(b2.y - b1.y, 2));
            // console.log('not paused')
            let optimalDist = b1.r + b2.r; //right flush outside the other ball;
            if(dist <= optimalDist){ //if it's inside or colliding;
                
                let dy = b2.y - b1.y;  //think triangle stuff
                let dx = b2.x - b1.x;   //we're getting the sides of the triangle, so we can get the hypotenuse

                let angle = Math.atan2(dy, dx) + Math.PI; //atan2 takes two legs of the triangle, and gives you the angle from the base to the hypotenuse;; +Math.PI to flip it to the correct direction since ball 2 wascoming toward ball 1 at a negative angle 
                let my = optimalDist * Math.sin(angle) + b2.y; //now we get the legs of the new triangle we want, the legs 
                let mx = optimalDist * Math.cos(angle) + b2.x;
                
                
                b1.y = my;
                b1.x = mx;
                b1.vx = -b1.vx*0.5;
                b1.vy = -b1.vy*0.5;


                // b2.vx = -b2.vx;
                // b2.vy = -b2.vy;

            }

            
        }
    }
}

function genBalls(count){
    for(let i = 0; i < count; i++){
        balls.push(new Ball(Math.random()*can.width, 0, ballSize, i));
    }
}
genBalls(20);
function update(){
    requestAnimationFrame(update);
    ctx.clearRect(0, 0, can.width, can.height);
    ballsCollision();
    for(let i = 0; i < balls.length; i++){
        balls[i].update();
    }

}

update();

/*
my = -dy/dist * 

-/+dy/dist = sin(angle)
/*
const angle = Math.atan2(ball2.y - ball1.y, ball2.x - ball1.x);

    // Calculate the velocity of each ball in the x and y directions
    const v1x = ball1.dx * Math.cos(angle) + ball1.dy * Math.sin(angle);
    const v1y = ball1.dy * Math.cos(angle) - ball1.dx * Math.sin(angle);
    const v2x = ball2.dx * Math.cos(angle) + ball2.dy * Math.sin(angle);
    const v2y = ball2.dy * Math.cos(angle) - ball2.dx * Math.sin(angle);

    // Swap the velocities of the two balls
    ball1.dx = v2x;
    ball1.dy = v2y;
    ball2.dx = v1x;
    ball2.dy = v1y;

    // Move the balls away from each other
    ball1.x += ball1.dx;
    ball1.y += ball1.dy;
    ball2.x += ball2.dx;
    ball2.y += ball2.dy;
    */


//prior attempt at collision respons
/*
// console.log('got here')
                let angle = Math.atan2(b2.y - b1.y, b2.x - b1.x);
                const v1x = b1.vx * Math.cos(angle) + b1.vy * Math.sin(angle);
                const v1y = b1.vy * Math.cos(angle) - b1.vx * Math.sin(angle);
                const v2x = b2.vx * Math.cos(angle) + b2.vy * Math.sin(angle);
                const v2y = b2.vy * Math.cos(angle) - b2.vx * Math.sin(angle);

                // Swap the velocities of the two balls
                b1.vx = v2x;
                b1.vy = v2y;
                b2.vx = v1x;
                b2.vy = v1y;

                // Move the balls away from each other
                b1.x += b1.vx/3;
                b1.y += b1.vy/3;
                b2.x += b2.vx/3;
                b2.y += b2.vy/3;
*/

/*
Issue is the order of the balls array is determining which ball 
gets pushed where, despite being pushed into another ball,
so a potential solution is to have a third for loop that rechecks again, 
where the original b2/b1 becomes b1/b2.
 -but with this potential solution 
*/