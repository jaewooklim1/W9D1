export default class Bird {
    constructor(dimensions) {
        this.dimensions = dimensions;
        this.velocity = 0;
        this.posX = 160; 
        this.posY = 320;
    }

    drawBird(ctx) {
        ctx.fillStyle = "yellow"
        ctx.fillRect(this.posX, this.posY, 40, 30);
    }

    animate(ctx) {
        this.drawBird(ctx);

    }

    
}

