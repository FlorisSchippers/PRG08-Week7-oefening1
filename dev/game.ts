/// <reference path="level.ts"/>

class Game {
    
    private view:View;
    public container:HTMLElement;
     
    constructor() {
        this.container = document.createElement("container");
        document.body.appendChild(this.container);
        this.showView(new Level(this)); 
    }

    public showView(v:View):void {
        this.view = v;
    }
    
} 


window.addEventListener("load", function() {
    new Game();
});