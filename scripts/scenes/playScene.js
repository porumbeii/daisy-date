class PlayScene {
    constructor(commands) {
        this.Interpreter = new Interpreter(commands);
    }

    Update() {
        this.Interpreter.Update();
    }

    Draw() {
        this.Interpreter.Execute();
    }
}