const can = document.getElementById("can");
const ctx = can.getContext("2d");
can.width = 1024;
can.height = 576;

let text = 'TEXT';
let currentLet = 0;


let gx = 0;
let gy = 0;


class Key{
    x;
    y;
    letter;
    constructor(x, y, letter){
        this.x = x;
        this.y = y;
        this.letter = letter;
    }
}
let keyboard = [];

/**
 * @type {{[k:string]:Key}}
 */
let accessboard = {};

let keys = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
]

let map = [
    [[325, 410], [375, 410], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], []]
]

let particles = [];

function genParticles(num){
    for(let i = 0; i < num; i++){
        particles.push(new Particle(Math.random()*can.width, Math.random()*can.height, 0, 0));
    }
}

function genBoard(){
    
    ctx.font = "50px Monospace";
    for(let i = 0, y = (can.height-150); i < keys.length; i++, y+=50){
        for(let j = 0, x = ((can.width/2)-200); j < keys[i].length; j++, x+=50){
            if(i==1 && j==0) x+=30;
            if(i==2 && j==0) x+=60;
            ctx.strokeText(keys[i][j], x, y);
            if(!keyboard[i]) keyboard[i] = [];
            if(!keyboard[i][j]){
                keyboard[i][j] = new Key(x+10, y-15, keys[i][j]);
                accessboard[keys[i][j]] = keyboard[i][j];
            }

            ctx.moveTo(x-15, y+10);
            ctx.lineTo(x+35, y+10);
            ctx.lineTo(x+35, y-40);
            ctx.lineTo(x-15, y-40);
            ctx.stroke();
            
        }
    }
    ctx.moveTo(297, 385);
    ctx.lineTo(297, 435);
    ctx.moveTo(327, 486);
    ctx.lineTo(327, 435);
    ctx.moveTo(357, 535);
    ctx.lineTo(357, 486);
    ctx.stroke();
    
}

genBoard();

genParticles(30);
function update(){
    requestAnimationFrame(update);
    ctx.clearRect(0, 0, can.width, can.height);
    genBoard();
    console.log("x: " + ((Math.floor((gx/can.offsetWidth)*can.width))) + ", y: " + ((Math.floor((gy/can.offsetHeight)*can.height))));
    ctx.fillRect(((Math.floor((gx/can.offsetWidth)*can.width))), ((Math.floor((gy/can.offsetHeight)*can.height))), 1, 1)
    
    for(let i = 0; i < particles.length; i++){
        particles[i].update();
    }
}
selLet(text);

update();

function selLet(text){
    // for(let i = 0; i < text.length; i++){
    //     for(let j = 0; j < keys.length; j++){
    //         for(let l = 0; l < keys[j].length; l++){
    //             for(let k = 0; k < particles.length; k++){
    //                 if(text[i] == keys[j][l]){
    //                     particles[k].tx = accessboard.keys[j][l].x;
    //                     particles[k].tx = accessboard.keys[j][l].y;
    //                     console.log("got here")
    //                 }
    //             }
    //         }
    //     }
    // }
        for(let j = 0; j < particles.length; j++){
            particles[j].moveOnce();
        }
        
        
       

    

}

document.addEventListener("mousemove", function(e){
    let rect = can.getBoundingClientRect();
    gx = e.clientX-rect.left;
    gy = e.clientY-rect.top;
});

