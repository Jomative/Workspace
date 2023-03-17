class Living{
    hp = 0;
    x;
    y;
    w;
    h;
    weapon;
    alive = true;
    constructor(hp, x, y, w, h){
        this.hp = hp;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.weapon = new Gun();
    }

    draw(){}

    takeDamage(dmg){
        this.hp-=dmg;
        if(this.hp <= 0) this.alive = false;
    }

    moveBy(x, y){
        this.x += x;
        this.y += y;
        this.anim.startAnim(jack_walk);
    }
    
    anim = new Animator();
}

class Animator{
    constructor(){}
    i = 0;
    frameI = 0;
    anim = null;
    delay = 5;
    startAnim(anim){
        if(this.anim) return;
        this.anim = anim;
        this.i = 0;
        this.frameI = 0;
    }
    run(){
        let t = this;
        if(!t.anim) return null;
        t.i++;
        if(t.i > t.delay){
            t.i = 0;
            t.frameI++;
            if(t.frameI >= t.anim.length){
                t.i = 0;
                t.frameI = 0;
                t.anim = null;
                return null;
            }
        }
        return t.anim[t.frameI];
    }
}

class Player extends Living{
    constructor(x, y){
        super(10, x, y, 10, 10);
    }

    draw(){
        // nob.drawRect(this.x-this.w/2,this.y-this.h,this.w,this.h,COLORS.red);
        let img = this.anim.run();
        if(!img) img = jack;
        
        nob.drawImage_basic(img, this.x-img.w/2, this.y-img.h);
    }
}

class Enemy extends Living{
    constructor(x, y){
        super(5, x, y, 15, 20);
    }
    /**@type {Living} */
    target;
    draw(){
        // nob.drawRect(this.x-this.w/2,this.y-this.h,this.w,this.h,COLORS.green);
        this.update();
    }

    update(){
        if(!this.target){
            //look for target
            for(let i = 0; i < entities.length; i++){
                if(entities[i] instanceof Player) {
                    this.target = entities[i];
                    break;
                }                 
            }
            return;
        }
        let dx = this.x - this.target.x;
        let dy = this.y - this.target.y;
        let dist = Math.sqrt(dx**2 + dy**2);
        let vx = dx/dist;
        let vy = dy/dist;

        // console.log(typeof vx, typeof vy, typeof this.target.);

        let speed = 2;
        this.x-=vx*speed*0.75;
        this.y-=vy*speed*0.75;


    }

}

