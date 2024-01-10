class RemoveBackground {
    constructor() {
        this.Type = Commands.RemoveBackground;
        this.IsExecuted = false;
        this.WaitForPlayer = false;
    }

    Update() { }

    Execute() {
        game.SceneManager.Background = null;
        this.IsExecuted = true;
    }
}