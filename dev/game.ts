/// <reference path="views/level.ts"/>

class Game {
    
    private view:View;
    public container:HTMLElement;
     
    constructor() {
        this.container = document.createElement("container");
        document.body.appendChild(this.container);
        
        this.showView(new Start(this));
    }

    public showView(v:View):void {
        this.view = v;
    }
    
} 


window.addEventListener("load", function() {
    new Game();
});