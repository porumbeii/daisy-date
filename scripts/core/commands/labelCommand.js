class LabelCommand {
    constructor(labelName) {
        this.Type = Commands.Label;
        this.WaitForPlayer = false;
        this.IsExecuted = false;

        this.LabelName = labelName;
    }

    Update() {

    }

    Execute() {
        let commands = game.SceneManager.CurrentScene.Interpreter.Commands;
        let endLabelCommand = commands.find(command => command.Type === Commands.EndLabel && command.LabelName === this.LabelName);
        let index = commands.indexOf(endLabelCommand);
        game.SceneManager.CurrentScene.Interpreter.CurrentCommandIndex = index;
        this.IsExecuted = true;
    }
}