/// <reference path="../car.ts"/>
/// <reference path="../player.ts"/>

class Level implements View {
    
    public div: HTMLElement;
    public x:number;
    public y:number;
    public width:number;
    public height:number;
    private intervalID:number;
    private game:Game;
    
    private cars:Array<Car> = new Array<Car>();
    private player:Player;
    
    constructor(g:Game) {    
        this.game = g;

        this.div = document.createElement("level");
        g.container.appendChild(this.div);
        
        this.intervalID = setInterval(()=> this.createCar(), 1400);
        this.player = new Player(this.div);

        requestAnimationFrame(()=>this.gameLoop());
    }

    private createCar():void {
        this.cars.push(new Car(this));
    }

    private gameLoop() : void {
        // hit car
        let hitCar:boolean = false;
        for(let c of this.cars){
            c.update();
            if(Util.checkCollision(c, this.player)){
                hitCar = true;
            }
        }

        

        // TO DO 
        // REQUEST ANIMATION FRAME ALLEEN AANROEPEN ALS ER GEEN HITCAR IS!!!!
        if(hitCar){
            console.log("game over!!!");
        }

        requestAnimationFrame(()=>this.gameLoop());
    }

    private gameOver():void {
        clearInterval(this.intervalID);
        // ALS JE DOOD BENT MOET JE
        // de div weghalen
        // game.showView AAN GAAN ROEPEN
    }

    public removeCar(c:Car){
        let i:number = this.cars.indexOf(c);
        if(i != -1) {
            this.cars.splice(i, 1);
        }
    }

}