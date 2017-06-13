class Start implements View {

    private game: Game;
    public div: HTMLElement;
    private btn:HTMLElement;
    
    constructor(g:Game) {    
        this.game = g;

        this.div = document.createElement("start");
        g.container.appendChild(this.div);

        let title = document.createElement("title");
        this.div.appendChild(title);

        this.btn = document.createElement("startbutton");
        this.div.appendChild(this.btn);

        // STARTPOSITIE MET TWEENLITE
        // TweenLite.set(title, {x:134, y:-230});

        // ANIMATIE ONTWERPEN - zie documentatie cheatsheet
        // ANIMATIETYPE IS 'Bounce', 'Back', 'Cubic', 'Linear'
        // EASE IS easeIn, easeInOut, easeOut, easeNone
        // TweenLite.to(title, 1, {y: 100, ease: ...});

        // VOORBEELD MET CALLBACK
        //TweenLite.to(this.btn, 1, { x: 400, onComplete: this.makeButton, onCompleteScope: this });
    
        // DE BUTTON MOET 
        // - DE DIV WEGHALEN
        // - game.showView AAN GAAN ROEPEN
    }
}