var Car = (function () {
    function Car(l) {
        this.speed = 0;
        this.div = document.createElement("car");
        l.div.appendChild(this.div);
        this.level = l;
        this.x = -168;
        this.y = Math.ceil(Math.random() * 5) * 110;
        this.width = 168;
        this.height = 108;
        this.speed = Math.random() * 2 + 2;
        this.setColor();
        this.update();
    }
    Car.prototype.update = function () {
        this.x += this.speed;
        if (this.x > window.innerWidth) {
            this.div.remove();
            this.level.removeCar(this);
        }
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Car.prototype.setColor = function () {
        var color = Math.random() * 360;
        this.div.style.webkitFilter = "hue-rotate(" + color + "deg)";
        this.div.style.filter = "hue-rotate(" + color + "deg)";
    };
    return Car;
}());
var Player = (function () {
    function Player(parent) {
        var _this = this;
        this.x = 400;
        this.y = 670;
        this.width = 61;
        this.height = 102;
        this.div = document.createElement("player");
        parent.appendChild(this.div);
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        this.callback = function (e) { return _this.onKeyDown(e); };
        window.addEventListener("keydown", this.callback);
    }
    Player.prototype.removeMe = function () {
        this.div.remove();
        window.removeEventListener("keydown", this.callback);
    };
    Player.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case 65:
                this.x -= this.width;
                break;
            case 68:
                this.x += this.width;
                break;
            case 87:
                this.y -= 50;
                if (this.y < -100)
                    this.y = 670;
                break;
            case 83:
                this.y += 50;
                break;
        }
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Player;
}());
var Level = (function () {
    function Level(g) {
        var _this = this;
        this.cars = new Array();
        this.game = g;
        this.div = document.createElement("level");
        g.container.appendChild(this.div);
        this.intervalID = setInterval(function () { return _this.createCar(); }, 1400);
        this.player = new Player(this.div);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Level.prototype.createCar = function () {
        this.cars.push(new Car(this));
    };
    Level.prototype.gameLoop = function () {
        var _this = this;
        var hitCar = false;
        for (var _i = 0, _a = this.cars; _i < _a.length; _i++) {
            var c = _a[_i];
            c.update();
            if (Util.checkCollision(c, this.player)) {
                hitCar = true;
            }
        }
        if (hitCar) {
            this.gameOver();
        }
        else {
            requestAnimationFrame(function () { return _this.gameLoop(); });
        }
    };
    Level.prototype.gameOver = function () {
        clearInterval(this.intervalID);
        this.game.showView(new Score(this.game));
    };
    Level.prototype.removeCar = function (c) {
        var i = this.cars.indexOf(c);
        if (i != -1) {
            this.cars.splice(i, 1);
        }
    };
    return Level;
}());
var Game = (function () {
    function Game() {
        this.container = document.createElement("container");
        document.body.appendChild(this.container);
        this.showView(new Start(this));
    }
    Game.prototype.showView = function (v) {
        this.view = v;
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Util = (function () {
    function Util() {
    }
    Util.checkCollision = function (car, player) {
        return (car.x < player.x + player.width &&
            car.x + car.width > player.x &&
            car.y < player.y + player.height &&
            car.height + car.y > player.y);
    };
    return Util;
}());
var Score = (function () {
    function Score(g) {
        this.game = g;
        this.div = document.createElement("start");
        g.container.appendChild(this.div);
    }
    return Score;
}());
var Start = (function () {
    function Start(g) {
        this.game = g;
        this.div = document.createElement("start");
        g.container.appendChild(this.div);
        var title = document.createElement("title");
        this.div.appendChild(title);
        var btn = document.createElement("startbutton");
        this.div.appendChild(btn);
    }
    return Start;
}());
//# sourceMappingURL=main.js.map