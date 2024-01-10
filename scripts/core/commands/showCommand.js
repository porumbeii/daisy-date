class ShowCommand {
    constructor(characterImageName, location = null) {
        this.Type = Commands.Show;
        this.WaitForPlayer = false;
        this.IsExecuted = false;

        this.CharacterName = characterImageName.split("_")[0].toLowerCase();

        this.IsExistingCharacter = false;
        if (location === null)
            this.IsExistingCharacter = true;

        this.CharacterImageName = characterImageName.toLowerCase();
        this.Location = location;

        this.LoadAsset();
    }

    LoadAsset() {
        let spritefullpath = `assets/sprites/${this.CharacterImageName}.png`;
        if (Content.GetItem(spritefullpath) === null) {
            this.Sprite = new Sprite(spritefullpath);
        } else
            this.Sprite = Content.GetItem(spritefullpath);
    }

    Update() {

    }

    Execute() {
        if (this.IsExistingCharacter) {
            game.SceneManager.Characters.find(character => character.Name === this.CharacterName).Sprite = this.Sprite;
        }
        else
            game.SceneManager.Characters.push(new Character(this.CharacterName, this.Sprite, this.Location));
        this.IsExecuted = true;
    }
}

class Character {
    constructor(name, sprite, location) {
        this.Name = name;
        this.Sprite = sprite;
        this.Location = location;
        this.Opacity = 0;
        this.IsMarkedForRemoval = false;
        this.IsMarkedToBeShown = true;
    }

    Update() {

    }
}
