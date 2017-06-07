class Start implements View {

    private game: Game;
    public div: HTMLElement;
    
    constructor(g:Game) {    
        this.game = g;

        this.div = document.createElement("start");
        g.container.appendChild(this.div);

        let title = document.createElement("title");
        this.div.appendChild(title);

        let btn = document.createElement("startbutton");
        this.div.appendChild(btn);

        // TODO ANIMEER DE START BUTTON EN DE TITLE MET TWEENLITE
        // TweenLite.set(startDiv, {x:100, y:100});
        // TweenLite.to(startDiv, 1, { x: 400, y: 400, ease: Bounce.easeOut, onComplete: this.doSomething, onCompleteScope: this });

        // TODO ONCLICK: ROEP SHOWVIEW AAN IN GAME.TS
        // this.game.showView(new Level(this.game)); 
    }
}