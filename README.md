# PRG08 Week7 oefening1

## Interface and scoreboard

[Demo](https://hr-cmgt.github.io/PRG08-Week7-oefening1-completed/)

In deze oefening bouwen we een startscherm, spelscherm en eindscherm. Alleen level.ts bevat een gameloop. 

## Opdracht

Game.ts heeft een functie om nieuwe views te laden. Roep deze functie steeds aan vanuit de drie verschillende schermen.

- Laad eerst het startscherm in plaats van level.ts als de game start
- Als je in startscherm op start klikt, dan gaat de game level.ts tonen
- Als het game over is, dan zegt level.ts tegen game dat het eindscherm getoond moet worden

**Tonen startscherm in game.ts**
```
class Game {
     
    constructor() {
        this.showView(new Level(this)); 
    }

    public showView(v:View):void {
        this.view = v;
    }
    
} 
```

**Aanroepen showView vanuit een andere view**
```
class GameView {

    public gameOver():void {
        this.game.showView(new ScoreScreen(this.game)); 
    }
    
} 
```

## Animaties toevoegen aan het startscherm

De interface animaties in het start en eindscherm kan je maken met Greensock. Deze repository heeft alle benodigde bestanden om met Greensock te werken:

- greensock.d.ts bestand in de definitions folder
- inladen van de greensock library in index.html

**Startknop in beeld laten vliegen**
```
TweenLite.to(startDiv, 1, { x: 400, y: 400, ease: Bounce.easeOut, onComplete: this.doSomething, onCompleteScope: this });
```