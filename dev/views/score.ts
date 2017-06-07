class Score implements View {

    private game: Game;
    public div: HTMLElement;
    
    constructor(g:Game) {    
        this.game = g;

        this.div = document.createElement("start");
        g.container.appendChild(this.div);

        // TODO TOON HIER DE HISCORE LIJST

        // TODO VOEG HIER EEN RESTARTBUTTON TOE

        // TODO ANIMEER DE LIJST EN DE START BUTTON MET TWEENLITE

        // TODO ONCLICK: GAME SHOWVIEW(LEVEL)
        // this.game.showView(new Level(this.game)); 
    }
}