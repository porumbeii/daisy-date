class FontCommand {
    constructor(fontName, size) {
        this.Type = Commands.Font;
        this.WaitForPlayer = false;
        this.IsExecuted = false;

        this.FontName = fontName;
        this.Size = size;
        this.LoadAsset();
    }

    LoadAsset() {
        let fontPath = `assets/fonts/${this.FontName}.ttf`;
        if (Content.GetItem(fontPath) === null) {
            new Font(this.FontName, fontPath);
        }
    }

    Update() { }

    Execute() {
        game.Context.font = `${this.Size}px ${this.FontName}`;
        this.IsExecuted = true;
    }
}