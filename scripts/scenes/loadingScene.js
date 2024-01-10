"using strinct";
class LoadingScene {
    constructor() {
        this.LoadingIcon = new FlipbookLoader(game.Canvas.width * 0.5 - 65, game.Canvas.height * 0.5 - 55);
        Content.LoadStory();
        this.ParserStarted = false;
        this.Parser = null;
    }

    Update() {
        this.LoadingIcon.Update();
        Content.Update();
        if (Content.StoryIsLoaded && !this.ParserStarted) {
            this.Parser = new Parser(Content.Story.Data);
            this.ParserStarted = true;
        }

        if (Content.IsLoaded)
            game.SceneManager.ShowScene(new PlayScene(this.Parser.Commands), true);
    }

    Draw(context) {
        this.LoadingIcon.Draw(context);
    }
}