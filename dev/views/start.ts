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

        // BTN ONCLICK: ROEP SHOWVIEW AAN IN GAME.TS
        // this.game.showView(new Level(this.game)); 
        // btn.addEventListener(...);

        // STARTPOSITIE MET TWEENLITE
        // TweenLite.set(title, {x:134, y:-200});
        // TweenLite.set(btn, {x:361, y:-200});

        // ANIMATIE ONTWERPEN
        // ANIMATIETYPE IS 'Bounce', 'Back', 'Cubic', 'Linear'
        // EASE IS easeIn, easeInOut, easeOut, easeNone
        // TweenLite.to(title, TIJD, {y: YWAARDE, ease: ANIMATIETYPE.easeOut});
        // TweenLite.to(btn, TIJD, {delay:PAUZE, y:YWAARDE, ease: ANIMATIETYPE.easeOut});

        // VOORBEELD MET CALLBACK
        // TweenLite.to(btn, 1, { x: 400, y: 400, ease: Bounce.easeOut, onComplete: this.doSomething, onCompleteScope: this });

        
    }
}