const can = document.getElementById("can");
const ctx = can.getContext("2d");
const nob = new NobsinCtx(ctx);
let jack = tl.load("jack.png");
let jack_walk = tl.loadAnim("jack_walk.png",64,64);

/**@type {Living[]} */
let entities = [];
let keys = {};
let mx = 0;
let my = 0;
entities.push(new Player(nob.centerX,nob.centerY));
entities.push(new Enemy(nob.centerX + 30, nob.centerY + 30));


let gameFrames = 0;
function update(){
    requestAnimationFrame(update);
    gameFrames++;
    
    nob.updateStart();
    
    for(let i = 0; i < entities.length; i++){
        let o = entities[i];

        if(o instanceof Bullet){ //if o is a bullet
            o.x += o.vx;
            o.y += o.vy;
            if(o.x < 0 || o.x > nob.width || o.y < 0 || o.y > nob.height){
                entities.splice(i, 1);
                i--;
                continue;//breaks out of current for loop iteration
            }
            // use separate if statements for efficiency
            for(let j = 0; j < entities.length; j++){
                let o2 = entities[j];
                if(o2 instanceof Enemy){
                    if(
                        o.x >= o2.x-(o2.w/2) &&
                        o.x <= o2.x+(o2.w/2) &&
                        o.y >= o2.y-o2.h &&
                        o.y <= o2.y
                    ){
                        entities.splice(i, 1);
                        i--;
                        o2.takeDamage(1);
                        if(!o2.alive) entities.splice(j, 1);
                        continue; 
                    }
                }
            }
        }

        o.draw();
    }
    let speed = 2.5;
    if(keys.a) entities[0].moveBy(-speed, 0);
    if(keys.d) entities[0].moveBy(speed, 0);
    if(keys.w) entities[0].moveBy(0, -speed);
    if(keys.s) entities[0].moveBy(0, speed);
    if(keys.f) entities[0].weapon.attack(entities[0]);

    nob.updateEnd();
    
}
update();

document.addEventListener("keydown", function(e){
    keys[e.key.toLowerCase()] = true;
    
});

document.addEventListener("keyup", function(e){
    keys[e.key.toLowerCase()] = false;
    
});

document.addEventListener("mousemove", function(e){ //coord nouse conversion
    mx = e.clientX/can.offsetWidth*nob.width;
    my = e.clientY/can.offsetHeight*nob.height;
})

