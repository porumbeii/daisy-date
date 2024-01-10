class SceneManager {

    #background = null;
    #backgroundToAdd = null;

    get Background() {
        return this.#background;
    }

    set Background(value) {
        if (this.#background != null) {
            this.#backgroundToAdd = value;
            this.backgroundFadeValue = 1;
            this.backgroundIsInTransition = true;
            this.backgroundTransitionCounter = 0;
        } else this.#background = value;
    }

    constructor() {
        this.CurrentScene = null;
        this.Characters = [];
        this.SnowFlakes = [];
        this.ShowSnow = false;

        this.IsInTransition = false;
        this.TransitionCounter = 0;
        this.TransitionFadeValue = 0;

        this.backgroundIsInTransition = false;
        this.backgroundTransitionCounter = 0;
        this.backgroundFadeValue = 1;

        this.BlurScene = false;
        this.BlurValue = 0;
    }

    ShowScene(scene, withTransition = false) {
        if (withTransition) {
            this.SceneToHide = this.CurrentScene;
            this.SceneToShow = scene;
            this.IsInTransition = true;
        }
        else
            this.CurrentScene = scene;
    }

    Update() {
        this.CurrentScene.Update();

        if (this.ShowSnow)
            this.SnowFlakes.forEach(snowFlake => {
                snowFlake.Update();
            });

        if (this.IsInTransition)
            this.UpdateTransition();
    }

    Draw(context) {
        if (this.BlurScene) {
            if (this.BlurValue <= 4)
                this.BlurValue += 0.1;
            context.filter = `blur(${this.BlurValue}px)`;
        }

        if (!this.BlurScene & this.BlurValue > 0) {
            this.BlurValue -= 0.1;
            if (this.BlurValue < 0)
                this.BlurValue = 0;
            context.filter = `blur(${this.BlurValue}px)`;
        }

        this.DrawBackground();

        this.DrawCharacters(game.Context);
        context.filter = 'none';



        if (this.ShowSnow) {
            game.Context.fillStyle = '#f2f2f2';
            this.SnowFlakes.forEach(snowFlake => {
                snowFlake.Draw();
            });

        }

        this.CurrentScene.Draw(context);

        if (this.IsInTransition)
            this.DrawTransition(context);
    }

    UpdateTransition() {

        this.TransitionCounter++;

        if (this.TransitionCounter <= 25)
            this.TransitionFadeValue++;
        else
            this.TransitionFadeValue--;

        if (this.TransitionCounter === 25) {
            this.CurrentScene = this.SceneToShow;
            this.SceneToHide = null;
            this.SceneToShow = null;
        }

        if (this.TransitionCounter >= 50) {
            this.TransitionCounter = 0;
            this.IsInTransition = false;
        }
    }

    DrawBackground() {
        if (this.backgroundIsInTransition) {
            this.backgroundTransitionCounter++;

            if (this.backgroundTransitionCounter <= 25) {
                this.backgroundFadeValue -= 0.04;
                if (this.backgroundFadeValue < 0)
                    this.backgroundFadeValue = 0;
            }

            if (this.backgroundTransitionCounter > 25) {
                this.backgroundFadeValue += 0.04;
                if (this.backgroundFadeValue > 1)
                    this.backgroundFadeValue = 1;
            }

            if (this.backgroundTransitionCounter === 25) {
                this.#background = this.#backgroundToAdd;
            }

            if (this.backgroundTransitionCounter >= 50) {
                this.backgroundTransitionCounter = 0;
                this.backgroundIsInTransition = false;
                this.backgroundFadeValue = 1;
            }
        }

        if (this.#background !== null) {
            let context = game.Context;

            if (this.backgroundFadeValue <= 1) {
                context.save();
                context.globalAlpha = this.backgroundFadeValue;
            }

            let ratio = Math.min(game.Canvas.width / this.#background.Image.width, game.Canvas.height / this.#background.Image.height);

            context.drawImage(
                this.#background.Image,
                (game.Canvas.width - this.#background.Image.width * ratio) * 0.5,
                (game.Canvas.height - this.#background.Image.height * ratio) * 0.5,
                this.#background.Image.width * ratio,
                this.#background.Image.height * ratio);

            if (this.backgroundFadeValue <= 1)
                game.Context.restore();
        }
    }

    DrawCharacters(context) {
        for (let index = 0; index < this.Characters.length; index++) {
            let character = this.Characters[index];
            let location = character.Location;


            if (character.IsMarkedForRemoval && character.Opacity >= 0)
                character.Opacity -= 0.03;

            if (character.IsMarkedToBeShown)
                character.Opacity += 0.03;

            if (character.Opacity < 0)
                character.Opacity = 0;

            if (character.Opacity <= 1) {
                context.save();
                context.globalAlpha = character.Opacity;
            }

            let height = (game.Canvas.height / 1.5);
            let scale = height / 500;
            let width = character.Sprite.Image.width * scale;

            if (location === "left") {
                context.drawImage(
                    character.Sprite.Image,
                    game.Canvas.width * 0.25 - width * 0.5,
                    game.Canvas.height - height,
                    width,
                    height);
            }

            if (character.Location === "right")
                context.drawImage(
                    character.Sprite.Image,
                    game.Canvas.width * 0.75 - width * 0.5,
                    game.Canvas.height - height,
                    width,
                    height);

            if (character.Location === "center")
                context.drawImage(
                    character.Sprite.Image,
                    (game.Canvas.width - width) * 0.5,
                    game.Canvas.height - height,
                    width,
                    height);

            if (character.Opacity <= 1)
                context.restore();

            if (character.Opacity <= 0 && character.IsMarkedForRemoval) {
                this.Characters.splice(this.Characters.indexOf(character), 1)
            }
        }
    }

    DrawTransition(context) {
        context.fillStyle = `rgba(255,255,255,${this.TransitionFadeValue * 4 / 100})`;
        context.fillRect(0, 0, canvas.width, canvas.height);
    }

}