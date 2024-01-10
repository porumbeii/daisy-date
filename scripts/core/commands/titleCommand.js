class TitleCommand {
    constructor(text) {
        this.Type = Commands.Title;
        this.IsExecuted = false;
        this.WaitForPlayer = true;

        this.Text = text;
        this.TextLabelIsCreated = false;
    }

    Update() {
        this.TextLabel.Update();
    }

    Execute() {
        if (this.TextLabelIsCreated) {
            this.TextLabel.Draw();
        } else {
            this.TextLabel = new FadeInText(this.Text, game.Canvas.width * 0.3, game.Canvas.height * 0.5);
            this.TextLabelIsCreated = true;
        }
    }
}