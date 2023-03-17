/**@type {HTMLCanvasElement} */
const can = document.getElementById("can");
const ctx = can.getContext("2d");
can.width = 1024;
can.height = 576;
ctx.fillRect(0, 0, can.width, can.height);
ctx.fillText("hiiiiiii", 0, 0);

class Sprite {
    constructor(position) {
        this.position = position;

    }
}

const player = new Sprite() 