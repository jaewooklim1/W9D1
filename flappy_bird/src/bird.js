const CONSTANTS = {
    GRAVITY:  0.8,
    FLAP_SPEED:  -8,
    TERMINAL_VEL:  12,
    BIRD_WIDTH:  40,
    BIRD_HEIGHT:  30
};
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
        this.move();
        this.drawBird(ctx);
    }

    move() {
        this.posY += this.velocity;
        this.velocity += CONSTANTS.GRAVITY;
    }

    flap() {
        this.velocity = CONSTANTS.FLAP_SPEED;
    }

}



