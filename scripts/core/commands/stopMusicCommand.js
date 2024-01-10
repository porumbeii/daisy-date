class StopMusicCommand {
    constructor(fileName) {
        this.Type = Commands.StopMusic;
        this.IsExecuted = false;
        this.WaitForPlayer = false;

        this.Sound = Content.GetItem(`assets/sounds/${fileName}.mp3`);
    }

    Update() { }

    Execute() {
        this.Sound.Stop();
        this.IsExecuted = true;
    }
}