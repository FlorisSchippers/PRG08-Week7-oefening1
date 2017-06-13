class Score implements View {

    private game: Game;
    public div: HTMLElement;
    
    constructor(g:Game) {    
        this.game = g;

        this.div = document.createElement("start");
        g.container.appendChild(this.div);

        this.div.innerHTML = 'Score: ' + Level.score;
    }
}