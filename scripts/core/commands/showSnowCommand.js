class ShowSnowCommand {
    constructor() {
        this.Type = Commands.ShowSnow;
        this.WaitForPlayer = false;
        this.IsExecuted = false;
    }

    Update() {

    }

    Execute() {
        if (this.IsExecuted === false) {
            if (game.SceneManager.SnowFlakes.length === 0)
                for (let i = 0; i < 100; i++) {
                    game.SceneManager.SnowFlakes.push(new Snowflake());
                }
            game.SceneManager.ShowSnow = true;
            this.IsExecuted = true;
        }
    }
}

class Snowflake {
    static Character = Math.random() * Math.PI * 2;
    constructor() {
        this.Initialize();
    }

    Initialize() {
        this.X = Math.random() * game.Canvas.width;
        this.Y = Math.random() * game.Canvas.height;
        this.Weight = 2 + Math.random() * 5;
        this.Angle = Math.random() * Math.PI * 2;
        this.Radius = 2 + Math.random() * 5;
        this.Spin = Math.random() * 0.2;
    }

    Update() {
        this.Angle += Math.random() / 10 + this.Spin;
        this.Y += this.Weight / 5;
        this.X += Math.cos(this.Y / (this.Weight * 30) + Snowflake.Character) * 3;
        if (this.Y > game.Canvas.height)
            this.Initialize();
    }

    Draw() {
        game.Context.beginPath();
        game.Context.ellipse(this.X, this.Y, this.Weight, this.Radius, this.Angle, 0, 2 * Math.PI);
        // game.Context.arc(this.X, this.Y, this.Weight, 0, 2 * Math.PI);
        game.Context.fill();
    }
}