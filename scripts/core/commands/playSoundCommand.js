class PlayAudioCommand {
    constructor(fileName, loop = false) {
        this.Type = Commands.PlayAudio;
        this.WaitForPlayer = false;
        this.IsExecuted = false;

        this.FileName = fileName;
        this.Loop = loop;

        this.LoadAsset();
    }

    LoadAsset() {
        let audioFullPath = `assets/sounds/${this.FileName}.mp3`;

        if (Content.GetItem(audioFullPath) === null)
            this.Sound = new Sound(audioFullPath);
        else
            this.Sound = Content.GetItem(audioFullPath);
    }

    Update() { }

    Execute() {
        this.Sound.Play(this.Loop);
        this.IsExecuted = true;
    }
}