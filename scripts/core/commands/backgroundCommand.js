class BackgroundCommand {
    constructor(backgroundImageName) {
        this.Type = Commands.Background;
        this.WaitForPlayer = false;
        this.IsExecuted = false;

        this.BackgroundImageName = backgroundImageName;

        this.LoadAsset();
    }

    LoadAsset() {
        let spritefullpath = `assets/sprites/${this.BackgroundImageName}.png`;
        if (!Content.Items.includes(spritefullpath)) {
            this.Sprite = new Sprite(spritefullpath);
        } else
            this.Sprite = Content.GetItem(spritefullpath);

        let horizontalRatio = canvas.width / this.Sprite.Image.width;
        let verticalRatio = canvas.height / this.Sprite.Image.height;
        this.Ratio = Math.min(horizontalRatio, verticalRatio);
    }

    Update(){}
    Execute() {
        
        game.SceneManager.Background = this.Sprite;
        this.IsExecuted = true;
    }

}