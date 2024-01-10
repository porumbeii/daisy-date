"use strict";
class Sound {
    constructor(source) {
        this.Source = source;

        this.Audio = new Audio();
        this.IsLoaded = false;
        this.Audio.onloadeddata = (event) => {
            this.Duration = event.target.duration;
            this.IsLoaded = true;
        }
        this.Audio.src = source;
        this.Audio.preload = 'auto';
        Content.Items.push(this);
    }

    Play(loop = false) {
        this.Audio.play();
        if (loop)
            this.Audio.loop = true;
    }

    Stop() {
        this.Audio.pause();
        this.Audio.currentTime = 0;
    }

    Pause() {
        this.Audio.pause();
    }
}
