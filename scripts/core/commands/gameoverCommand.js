class GameOverCommand {
    constructor(message) {
        this.Message = message;
        this.Type = Commands.Background;
        this.WaitForPlayer = true;
        this.IsExecuted = false;
    }
    Update() {

    }

    Execute() {
        if (!this.IsExecuted) {
            location.reload();

/*            game.SceneManager.CurrentScene.Interpreter.Commands.forEach(command => {
                command.IsExecuted = false;
            });
            game.SceneManager.CurrentScene.Interpreter.CurrentCommandIndex = 0;
            game.SceneManager.CurrentScene.Interpreter.CurrentCommand = game.SceneManager.CurrentScene.Interpreter.Commands[0];
         */   
        }
    }
}