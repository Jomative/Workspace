let speed = 1;
class Particle{

    x;
    y;
    tx;
    ty;
    letterSel = false;
    
    
    constructor(x, y, tx, ty){
        this.x = x;
        this.y = y;
        this.tx = tx;
        this.ty = ty;
    }

    draw(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, 5, 5)
    }

    moveTo(){
        
        let dx = this.tx - this.x;
        let dy = this.ty - this.y; 
        let dist = Math.sqrt((dx**2)+(dy**2));
        this.x += (dx/dist)*speed;
        this.y += (dy/dist)*speed;
        if(dist > 5) speed += 0.5;
        speed *= 0.97;
        
    }
    
    update(){
        this.moveTo(this.tx, this.ty);
        this.draw();
    }
    moveOnce(){
        let key = accessboard[text[currentLet]];
        if(!key) return;
        console.log(key)
        this.tx = key.x;
        this.ty = key.y;
        currentLet++;
    }

}