class TypewriterLabel {
    constructor(text, x, y, fitWidth = 250) {
        this.Text = text;
        this.Position = new Vector(x, y);
        this.FitWidth = fitWidth;

        let metrics = game.Context.measureText(text);
        this.TextLineHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;

        this.TextLines = [];
        if (metrics.width < fitWidth) {
            this.FitWidth = metrics.width;
            this.Width = this.FitWidth;
            this.TextLines.push(this.Text);
        }
        else
            this.SplitTextInLines();

        this.Height = this.TextLineHeight * this.TextLines.length;

        this.CurrentLineText = "";
        this.CurrentLineTextIndex = 0;
        this.CurrentLineIndex = 0;
        this.FrameCounter = 0;
        this.ShowCaret = false;
    }

    Update() {
        this.FrameCounter++;
        if (this.FrameCounter % 2 === 0) {

            if (this.CurrentLineIndex < this.TextLines.length) {

                if (this.CurrentLineTextIndex < this.TextLines[this.CurrentLineIndex].length) {
                    this.CurrentLineText += this.TextLines[this.CurrentLineIndex].charAt(this.CurrentLineTextIndex);
                    this.CurrentLineTextIndex++;
                }

                if (this.CurrentLineTextIndex === this.TextLines[this.CurrentLineIndex].length) {
                    this.CurrentLineTextIndex = 0;
                    this.CurrentLineText = "";
                    this.CurrentLineIndex++
                }
            }
        }

        if (this.FrameCounter % 25 === 0) {
            this.ShowCaret = !this.ShowCaret;
        }
    }

    Draw() {
        game.Context.fillStyle = 'black';
        for (let index = 0; index < this.TextLines.length; index++) {
            if (index < this.CurrentLineIndex) {
                game.Context.fillText(this.TextLines[index], this.Position.X, this.Position.Y + (this.TextLineHeight) * index);
                //if (this.ShowCaret && index === this.TextLines.length - 1)
                //   game.Context.fillText("|", this.Position.X + game.Context.measureText(this.TextLines[index]).width, this.Position.Y + (this.TextLineHeight) * index);
            }
            if (index === this.CurrentLineIndex) {
                game.Context.fillText(this.CurrentLineText, this.Position.X, this.Position.Y + (this.TextLineHeight) * index);
                game.Context.fillText("|", this.Position.X + game.Context.measureText(this.CurrentLineText).width, this.Position.Y + (this.TextLineHeight) * index);
            }
        }

    }

    SplitTextInLines() {
        let textLine = "";
        let textLinesIndex = 0;
        let words = this.Text.split(" ");
        let maxLineWidth = 0;
        for (let index = 0; index < words.length; index++) {
            textLine += words[index] + " ";
            let lineWidth = game.Context.measureText(textLine).width;
            if (lineWidth > this.FitWidth) {
                this.TextLines.push(textLine);
                textLine = "";
                textLinesIndex++;
                if (lineWidth > maxLineWidth)
                    maxLineWidth = lineWidth;
            }
            if (index === words.length - 1) {
                if (this.TextLines[textLinesIndex] !== textLine && textLine !== "")
                    this.TextLines.push(textLine);
            }
        }
        this.Width = maxLineWidth;
    }
}