/**@type {HTMLCanvasElement} */
const can = document.getElementById("can");
can.width = 300;
can.height = 100;
const ctx = can.getContext("2d");
const obj = {
	x:0,
	y:0,
	w:10,
    h:10
}
let keys = {};
let speed = 0.1;

function update(){
		requestAnimationFrame(update);
        ctx.clearRect(0,0,can.width,can.height);
		if(keys.d) obj.x += speed;
		if(keys.a) obj.x -= speed;
		if(keys.w) obj.y -= speed;
		if(keys.s) obj.y += speed;

        if(obj.x < 0) obj.x = 0;
        if(obj.x > can.width-10) obj.x = can.width-10;
        if(obj.y < 0) obj.y = 0;
        if(obj.y > can.height-10) obj.y = can.height-10;

        ctx.fillStyle = "red";
        ctx.fillRect(Math.floor(obj.x), Math.floor(obj.y), obj.w, obj.h);
        
}
update();

document.addEventListener("keydown",e=>{
    let key = e.key.toLowerCase();
    keys[key] = true;
});
document.addEventListener("keyup",e=>{
    let key = e.key.toLowerCase();
    keys[key] = false;
});

