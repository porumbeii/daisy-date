class MoveCommand {
    constructor(characterName, location) {
        this.Type = Commands.Move;
        this.WaitForPlayer = false;
        this.IsExecuted = false;

        this.CharacterName = characterName;
        this.Location = location;
    }
    Update() { }

    Execute() {
        game.SceneManager.Characters.find(character => character.Name === this.CharacterName).Location = this.Location;
        this.IsExecuted = true;
    }

}