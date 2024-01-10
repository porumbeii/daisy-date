class Rectangle {
    constructor(x, y, width, height) {
        this.Position = new Vector(x, y);
        this.Width = width;
        this.Height = height;
    }

    IntersectsVector(vector) {
        return this.Position.X < vector.X &&
            vector.X < this.Position.X + this.Width &&
            this.Position.Y < vector.Y &&
            vector.Y < this.Position.Y + this.Height
    }

    Intersects(x, y) {
        return this.Position.X < x &&
            x < this.Position.X + this.Width &&
            this.Position.Y < y &&
            y < this.Position.Y + this.Height
    }
}