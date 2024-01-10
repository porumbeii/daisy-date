"use strict";
class TypewriterSpeachBubble {
    constructor(text, x, y, fitWidth=400) {
        this.Text = text;
        this.Position = new Vector(x, y);
        this.FitWidth = fitWidth;

        this.TextLabel = new TypewriterLabel(text, x + 50, y + 15, fitWidth);

        this.Height = this.TextLabel.Height;
        this.Width = this.TextLabel.Width + 15;

        this.TextLabel.Position.Y -= this.Height * 0.5;

        this.SpeachBubble = new SpeachBubble(x, y, this.Width, this.Height);

    }

    Update() {
        this.SpeachBubble.Update();
        this.TextLabel.Update();
    }

    Draw() {
        this.SpeachBubble.Draw();
        this.TextLabel.Draw();
    }
}