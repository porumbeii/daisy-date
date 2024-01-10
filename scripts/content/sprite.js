"use strict";
class Sprite {
    constructor(source) {
        this.Source = source;
        this.IsLoaded = false;
        Content.Items.push(this);
        this.Image = new Image();

        this.Image.onload = (e) => {
            this.Width = e.target.width;
            this.Height = e.target.height;
            this.IsLoaded = true;
        };

        this.Image.src = source;
    }
}