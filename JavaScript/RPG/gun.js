class Gun{
    color = COLORS.black;
    constructor(){
        
    }
    
    /**
     * 
     * @param {Living} player 
     */

    attack(player){
        if(gameFrames%10 != 0) return;
        let dx = mx - (player.x+20);
        let dy = my - (player.y-15);

        let dist = Math.sqrt((dx**2)+(dy**2));//hypotenuse
        entities.push(new Bullet(player.x+20, player.y-15, dx/dist, dy/dist));

    }

}

class Bullet{
    x;
    y;
    vx;
    vy;
    constructor(x, y, vx, vy){
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
    }

    draw(){
        nob.setPixel(this.x, this.y, COLORS.black);
    }
}