# PRG08 Week7 oefening1

## Interface and scoreboard

[Demo](https://hr-cmgt.github.io/PRG08-Week7-oefening1-completed/)

In deze oefening bouwen we een startscherm, spelscherm en eindscherm. Alleen level.ts bevat een gameloop. 

## Opdracht

Game.ts heeft een functie om nieuwe views te laden. Roep deze functie steeds aan vanuit de drie verschillende schermen.

- Laad het startscherm als de game start
- In het startscherm gaan we de titel en button animeren
- De starbutton roept de showView functie in game.ts aan
- Level.ts wordt dan de nieuwe view
- In level.ts maak je een gameover functie die het eindscherm toont

**Tonen startscherm in game.ts**
```
class Game {
     
    constructor() {
        this.showView(...); 
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
        this.game.showView(...); 
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

## Cheat Sheet

![Cheatsheet](docs/images/tween_cheatsheet.png?raw=true "Cheat Sheet")