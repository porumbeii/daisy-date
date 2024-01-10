class SpeachBubble {
    constructor(x, y, width, height) {
        this.Position = new Vector(x, y);
        this.Width = width;
        this.Height = height;

        this.FillPoints = [
        //    this.Position.X, this.Position.Y,
         //   this.Position.X + 20, this.Position.Y - 20,
         //   this.Position.X + 30, this.Position.Y - 15,
         //   this.Position.X + 40, this.Position.Y - 25,

            this.Position.X + 40, Math.trunc(this.Position.Y - this.Height * 0.5 - 20),
            this.Position.X + 40 + this.Width, Math.trunc(this.Position.Y - this.Height * 0.5 - 30),
            this.Position.X + 45 + this.Width, Math.trunc(this.Position.Y + this.Height * 0.5 - 5),
            this.Position.X + 40, Math.trunc(this.Position.Y + this.Height * 0.5),
            this.Position.X + 40, Math.trunc(this.Position.Y - this.Height * 0.5 - 20)];

         //   this.Position.X + 40, this.Position.Y - 10,
         //   this.Position.X + 30, this.Position.Y - 5,
         //   this.Position.X + 20, this.Position.Y - 10,
         //   this.Position.X, this.Position.Y];

    }

    Update() {

    }

    Draw() {

        let context = game.Context;

        context.fillStyle = "white";
        context.beginPath();
        context.moveTo(this.FillPoints[0], this.FillPoints[1]);
        for (let index = 0; index < this.FillPoints.length; index += 2) {
             context.lineTo(this.FillPoints[index], this.FillPoints[index + 1]);
        }
        context.fill();

        context.strokeStyle = "black";
        context.beginPath();
        for (let index = 0; index < this.FillPoints.length; index += 2) {
            this.AddJitteryBezier(this.FillPoints[index], this.FillPoints[index + 1], this.FillPoints[index + 2], this.FillPoints[index + 3], context);
        }
        context.stroke();
    }
 
    AddJitteryBezier(fromx, fromy, tox, toy, context) {
        context.moveTo(fromx, fromy);
        context.bezierCurveTo(
            fromx + 4 - Math.random() * 8, fromy + 2 - Math.random() * 4,
            fromx + 4 - Math.random() * 8, fromy + 2 - Math.random() * 4,
            tox, toy
        );
    }
}