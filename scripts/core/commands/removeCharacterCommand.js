class RemoveCharacter {
    constructor(characterName) {
        this.Type = Commands.RemoveCharacter;
        this.IsExecuted = false;
        this.WaitForPlayer = false;
        this.CharacterName = characterName
    }

    Update() { }

    Execute() {
        let character = game.SceneManager.Characters.find(character => character.Name.toLowerCase() === this.CharacterName.split("_")[0].toLowerCase());
        character.IsMarkedForRemoval = true;
        character.IsMarkedToBeShown = false;
        character.Opacity = 1;
        this.IsExecuted = true;
    }
}