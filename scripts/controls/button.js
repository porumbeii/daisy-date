"use strict";
class Button {
    constructor(text, x, y, handler = null, handlerParam = null) {
        this.Text = text;
        this.Position = new Vector(x, y);
        this.Handler = handler;
        this.HandlerParam = handlerParam;

        let metrics = game.Context.measureText(text);
        this.Width = metrics.width;
        this.Height = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
        this.BoundingRectangle = new Rectangle(this.Position.X - this.Width * 0.5 - 10, this.Position.Y - this.Height * 0.5 - 10, this.Width + 20, this.Height + 20)
        this.IsHovering = false;
        this.IsDown = false;
        this.IsClicked = false;
    }

    Update() {
        this.IsHovering = false;
        this.IsDown = false;
        this.IsClicked = false;

        if (this.BoundingRectangle.Intersects(Mouse.X, Mouse.Y)) {
            this.IsHovering = true;
            if (Mouse.State === MouseStates.Down)
                this.IsDown = true;
            if (Mouse.Released) {
                this.IsClicked = true;
                if (this.handlerParam !== null)
                    this.Handler(this.HandlerParam);
                else
                    this.Handler();
            }
        }
    }

    Draw() {
        let context = game.Context;

        context.fillStyle = 'white'
        if (this.IsHovering)
            context.fillStyle = 'lightgray';
        if (this.IsDown)
            context.fillStyle = '#e76f51';
        if (this.IsClicked)
            context.fillStyle = '#f4a261';

        context.fillRect(this.BoundingRectangle.Position.X, this.BoundingRectangle.Position.Y, this.BoundingRectangle.Width, this.BoundingRectangle.Height);

        context.fillStyle = "black";
        context.fillText(this.Text, this.Position.X - this.BoundingRectangle.Width * 0.5 + 10, this.Position.Y + 10);

        context.strokeStyle = "black";
        context.beginPath();
        this.AddJitteryBezier(this.BoundingRectangle.Position.X, this.BoundingRectangle.Position.Y + this.BoundingRectangle.Height, this.BoundingRectangle.Position.X + this.BoundingRectangle.Width, this.BoundingRectangle.Position.Y+ this.BoundingRectangle.Height, context);
        this.AddJitteryBezier(this.BoundingRectangle.Position.X + this.BoundingRectangle.Width, this.BoundingRectangle.Position.Y+ this.BoundingRectangle.Height, this.BoundingRectangle.Position.X + this.BoundingRectangle.Width, this.BoundingRectangle.Position.Y, context);
        this.AddJitteryBezier(this.BoundingRectangle.Position.X + this.BoundingRectangle.Width, this.BoundingRectangle.Position.Y , this.BoundingRectangle.Position.X, this.BoundingRectangle.Position.Y , context);
        this.AddJitteryBezier(this.BoundingRectangle.Position.X, this.BoundingRectangle.Position.Y , this.BoundingRectangle.Position.X, this.BoundingRectangle.Position.Y+ this.BoundingRectangle.Height, context);
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