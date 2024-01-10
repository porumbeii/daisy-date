class HideSnowCommand {
    constructor() {
        this.Type = Commands.ShowSnow;
        this.WaitForPlayer = false;
        this.IsExecuted = false;
    }

    Update() {

    }

    Execute() {
        if (this.IsExecuted === false) {
            game.SceneManager.ShowSnow = false;
            this.IsExecuted = true;
        }
    }
}