class FadeInText {
    constructor(text, x, y) {
        this.Text = text;
        this.Position = new Vector(x, y);

        this.Context = game.Context;
        this.Width = this.Context.measureText(this.Text).width;

        this.AlphaValue = 0;
    }

    Update() {

        if (this.AlphaValue <= 1)
            this.AlphaValue += 0.005;
    }

    Draw() {
        this.Context.fillStyle = `rgba(0, 0, 0, ${this.AlphaValue})`;
        this.Context.fillText(this.Text, this.Position.X - this.Width * 0.5, this.Position.Y);
    }
}

