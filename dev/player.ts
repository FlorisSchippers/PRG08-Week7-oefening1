class Player {

    public div: HTMLElement;    
    public x:number;
    public y:number;
    public width:number;
    public height:number;

    private callback:EventListener;

    constructor(parent:HTMLElement) {
        this.x = 400;
        this.y = 670;
        this.width = 61;
        this.height = 102;

        this.div = document.createElement("player");
        parent.appendChild(this.div);

        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";

        this.callback = (e:KeyboardEvent) => this.onKeyDown(e);
        window.addEventListener("keydown", this.callback);
    }

    public removeMe():void {
        this.div.remove();
        window.removeEventListener("keydown", this.callback);
    }

    // W A S D
    private onKeyDown(event:KeyboardEvent):void {
        switch(event.keyCode){
        case 65:
            this.x -= this.width;
            break;
        case 68:
            this.x += this.width;
            break;
        case 87:
            this.y -= 50;
            if(this.y<-100)this.y = 670;
            break;
        case 83:
            this.y += 50;
            break;
        }
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }

}