"use strict";
class Font {
    constructor(name, source) {
        
        this.Source = source;
        let instance = this;

        this.IsLoaded = false;
        Content.Items.push(this);

        this.FontFace = new FontFace(name, `url(${source})`);

        this.FontFace.load().then(function (loaded_face) {
            document.fonts.add(loaded_face);
            instance.IsLoaded = true;
        });
    }
}