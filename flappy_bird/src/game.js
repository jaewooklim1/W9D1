import Level from './level';

export default class FlappyBird {
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };

  }
}

FlappyBird.prototype.animate = function() {
  this.level.animate(this.ctx);
  // this.bird.animate();
}


FlappyBird.prototype.restart = function() {
  this.level = new Level(this.dimensions);
  this.animate();
}

