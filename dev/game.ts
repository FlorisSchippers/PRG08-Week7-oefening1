/// <reference path="views/level.ts"/>

class Game {
    
    private view:View;
    public container:HTMLElement;
     
    constructor() {
        this.container = document.createElement("container");
        document.body.appendChild(this.container);
        
        // TODO hier gaan we een new Level doorgeven aan showView !
        // this.showView();
    }

    public showView(v:View):void {
        this.view = v;

    }
    
} 


window.addEventListener("load", function() {
    new Game();
});