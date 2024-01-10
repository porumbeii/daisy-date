class CharacterSpeachBubble {
    constructor(character, x, y) {
        this.Character = character;
        this.Position = new Vector(x, y);
        let metrics = game.Context.measureText(this.Character);
        this.Width = metrics.width + 20;
        this.Height = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent + 10;
        this.CurrentY = this.Position.Y + this.Height;
    }

    Update() {
        if (this.CurrentY > this.Position.Y)
            this.CurrentY -= (this.CurrentY - this.Position.Y) * 0.1;
    }

    Draw() {
        let context = game.Context;
        context.fillStyle = '#f2f2f2';
        context.fillRect(this.Position.X, this.CurrentY, this.Width, this.Height);

        context.strokeStyle = 'black';
        context.beginPath();
        this.AddJitteryBezier(this.Position.X, this.CurrentY + this.Height, this.Position.X + this.Width, this.CurrentY + this.Height, context);
        this.AddJitteryBezier(this.Position.X + this.Width, this.CurrentY + this.Height, this.Position.X + this.Width, this.CurrentY, context);
        this.AddJitteryBezier(this.Position.X + this.Width, this.CurrentY, this.Position.X, this.CurrentY, context);
        this.AddJitteryBezier(this.Position.X, this.CurrentY, this.Position.X, this.CurrentY + this.Height, context);
        context.stroke();
        
        context.fillStyle = 'black';
        context.fillText(this.Character, this.Position.X + 10, this.CurrentY + this.Height * 0.5 + 3);
    }

    AddJitteryBezier(fromx, fromy, tox, toy, context) {
        context.moveTo(fromx, fromy);
        context.bezierCurveTo(
            fromx + 4 - Math.random() * 8, fromy + 2 - Math.random() * 4,
            fromx + 4 - Math.random() * 8, fromy + 2 - Math.random() * 4,
            tox, toy);
    }
}