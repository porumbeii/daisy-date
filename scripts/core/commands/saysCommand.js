class SaysCommand {
    constructor(character, text) {
        this.Type = Commands.Says;
        this.IsExecuted = false;
        this.WaitForPlayer = true;

        this.CharacterName = character;
        if (this.CharacterName.toLowerCase() === "narrator") {
            this.IsNarator = true;
        }
        else {
            this.IsNarator = false;
        }

        this.Text = text;
        this.LabelsAreShown = false;
    }

    Update() {
        if (!this.IsNarator)
            this.CharacterLabel.Update();
        this.TextLabel.Update();
    }

    Execute() {
        if (this.LabelsAreShown) {
            if (!this.IsNarator)
                this.CharacterLabel.Draw();
            this.TextLabel.Draw();
        } else {

            //this.CharacterLabel = new TypewriterLabel(this.CharacterName, game.Canvas.width * 0.5, game.Canvas.height - 250);
            let labelwidth = game.Context.measureText(this.Text).width;
            if (labelwidth > 400)
                labelwidth = 400;
            this.TextLabel = new TypewriterSpeachBubble(this.Text, (game.Canvas.width - labelwidth - 100) * 0.5, game.Canvas.height - 35, 400);

            this.CharacterLabel = new CharacterSpeachBubble(
                this.CharacterName,
                (game.Canvas.width - labelwidth + 10) * 0.5,
                this.TextLabel.Position.Y - this.TextLabel.Height * 0.5 - 55,
                400);
            this.LabelsAreShown = true;


        }
    }
}