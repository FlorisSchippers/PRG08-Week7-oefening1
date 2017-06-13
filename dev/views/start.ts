class Start implements View {

    private game: Game;
    public div: HTMLElement;
    private btn: HTMLElement;

    constructor(g: Game) {
        this.game = g;

        this.div = document.createElement("start");
        g.container.appendChild(this.div);

        let title = document.createElement("title");
        this.div.appendChild(title);

        this.btn = document.createElement("startbutton");
        this.div.appendChild(this.btn);

        this.btn.addEventListener("click", () => this._onclick());

        TweenLite.set(title, { x: 100, y: -250 });
        TweenLite.set(this.btn, { x: 325, y: -250 });
        TweenLite.to(title, 1, { y: 100 });
        TweenLite.to(this.btn, 1, { y: 500 });
    }

    private _onclick() {
        this.div.remove();
        this.game.showView(new Level(this.game));
    }
}