"use strict";
class Game {
    constructor() {
        this.Canvas = document.getElementById("canvas");
        this.Context = canvas.getContext("2d");
    }

    Initialize() {
        this.ResizeCanvas();
        window.addEventListener("resize", this.ResizeCanvas, false);
        this.SceneManager = new SceneManager();
        this.SceneManager.ShowScene(new LoadingScene());
    }

    Update() {
        Mouse.Update();
        Keyboard.Update();
        game.SceneManager.Update();
    }

    Draw(context) {
        context.clearRect(0, 0, this.Canvas.width, this.Canvas.height);
        game.SceneManager.Draw(context);
    }

    Loop() {
        game.Update();
        game.Draw(game.Context);
        requestAnimationFrame(game.Loop);
    }

    ResizeCanvas() {
        let font = game.Context.font;
        game.Canvas.width = window.innerWidth;
        game.Canvas.height = window.innerHeight;
        game.Context.font = font;
    }
}