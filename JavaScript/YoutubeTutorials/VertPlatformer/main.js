const can = document.getElementById("can");
const ctx = can.getContext('2d');
can.width = 1024;
can.height = 576;

class Player {
    constructor(){
        // this.x = x;
        // this.y = y;
        this.position = {
            x: 10,
            y: 10,
        }
    }
    
    draw(){
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, 100, 100);
    }

    update(){ // an update function on the player?
        this.draw();
        this.position.y++;
    }
}

const player = new Player();
function animate(){
    window.requestAnimationFrame(animate);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, can.width, can.height);
    // ctx.clearRect(0,0,can.width,can.height);//erase canvas each time

    player.update();
    

}

animate();