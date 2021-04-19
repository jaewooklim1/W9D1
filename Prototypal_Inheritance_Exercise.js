// Function.prototype.inherits = function (SuperClass) {
//     function Surrogate () {};
//     Surrogate.prototype = SuperClass.prototype;
//     this.prototype = new Surrogate();
//     this.prototype.constructor = this;
    
// }

Function.prototype.inherits = function (SuperClass) {
    this.prototype = Object.create(SuperClass.prototype);
    this.prototype.constructor = this;
}
    

function MovingObject () {}
MovingObject.prototype.fly = function () {
    console.log("flying!");
}

function Ship () {}
Ship.inherits(MovingObject);
Ship.prototype.shoot = function () {
    console.log("firing lasers");
}

function Asteroid () {}
Asteroid.inherits(MovingObject);
Asteroid.prototype.crash = function () {
    console.log("crashing");
}

let s = new Ship();
s.fly();
s.shoot();
// s.crash();

MovingObject.inherits(Ship);

let y = new MovingObject();
y.fly();
y.shoot();
// y.crash();