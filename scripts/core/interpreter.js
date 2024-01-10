class Interpreter {
    constructor(commands) {
        this.Commands = commands;
        this.CurrentCommandIndex = 0;
        this.ComandsLength = this.Commands.length;
        this.CurrentCommand = this.Commands[this.CurrentCommandIndex];
    }

    Update() {
        if (this.CurrentCommandIndex === this.ComandsLength - 1)
            return;

        this.CurrentCommand.Update();

        if ((this.CurrentCommand.WaitForPlayer && (Mouse.Released || Keyboard.IsKeyUp(Keys.Space) || Keyboard.IsKeyUp(Keys.Enter)) && this.CurrentCommand.Question === undefined) || this.CurrentCommand.IsExecuted) {
            this.CurrentCommandIndex++;
            this.CurrentCommand = this.Commands[this.CurrentCommandIndex];
        }
    }

    Execute() {
        if (this.CurrentCommandIndex < this.ComandsLength) {
            this.CurrentCommand.Execute();
        }
    }
}