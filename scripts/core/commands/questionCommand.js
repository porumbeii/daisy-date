class QuestionCommand {
    constructor(question, answers) {
        this.Type = Commands.Question;
        this.WaitForPlayer = true;
        this.IsExecuted = false;

        this.Question = question;
        this.Answers = answers;
        this.DialogIsShown = false;
    }

    Update() {
        this.Dialog.Update();
        if (this.Dialog.SelectedLabelIndex !== null) {
            let label = this.Dialog.SelectedLabelIndex;

            let commands = game.SceneManager.CurrentScene.Interpreter.Commands;
            let labelCommand = commands.find(command => command.Type === Commands.Label && command.LabelName === label);
            let index = commands.indexOf(labelCommand);
            game.SceneManager.CurrentScene.Interpreter.CurrentCommandIndex = index;
            game.SceneManager.BlurScene = false;
            this.IsExecuted = true;
        }
    }
    Execute() {
        if (!this.DialogIsShown) {
            this.Dialog = new Dialog(this.Question, this.Answers);
            this.Dialog.SelectedLabelIndex = null;
            this.DialogIsShown = true;
            game.SceneManager.BlurScene = true;
        } else
            this.Dialog.Execute();
    }
}