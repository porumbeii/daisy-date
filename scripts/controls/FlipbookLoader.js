class FlipbookLoader {
    constructor(x, y, width = 125, height = 105) {
        this.Position = new Vector(x, y);
        this.Width = width;
        this.Heigth = height;
        this.PageWidth = this.Width * 0.5;
        this.PageHeight = this.Heigth;
        this.Pages = [];
        this.PagesFliped = 0;
        this.PageIndex = 0;
        this.PagesLength = 6;
        for (this.PageIndex; this.PageIndex < this.PagesLength; this.PageIndex++) {
            this.Pages.push(new FlipingPage(x, y, this.Width, this.Heigth, this.PageIndex));
        }

        this.Counter = 0;
    }

    Update() {
        this.Counter++;

        this.PagesFliped = 0;
        this.PageIndex = 0;
        for (this.PageIndex; this.PageIndex < this.PagesLength; this.PageIndex++) {
            this.Pages[this.PageIndex].Update();
            if (this.Pages[this.PageIndex].IsFliped)
                this.PagesFliped++;
        };

        if (this.PagesFliped === this.Pages.length) {
            this.PageIndex = 0;
            for (this.PageIndex; this.PageIndex < this.PagesLength; this.PageIndex++) {
                this.Pages[this.PageIndex].InitializePage();
                this.PagesFliped = false;
            }
        }
    }

    Draw(context) {
        context.strokeStyle = 'black';
        context.lineWidth = 2;
        context.strokeRect(this.Position.X, this.Position.Y, this.Width, this.Heigth);

        this.PageIndex = 0;
        for (this.PageIndex; this.PageIndex < this.PagesLength; this.PageIndex++) {
            this.Pages[this.PageIndex].Draw(context);
        }
    }
}

class FlipingPage {
    constructor(x, y, width, height, index) {
        this.Position = new Vector(x, y);
        this.Width = width;
        this.Height = height;
        this.Index = index;
        this.InitializePage();
    }

    InitializePage() {
        this.Delay = 15 * this.Index;
        this.IsFliped = false;
        this.CurrentHeight = this.Height;
        this.CurrentHorizontalPosition = this.Position.X + this.Width;
        this.IsFlipping = false;
    }

    Update() {
        this.Delay--;
        if (this.Delay >= 0 || this.IsFliped)
            return;

        this.IsFlipping = true;
        this.CurrentHorizontalPosition -= 2;
        if (this.CurrentHorizontalPosition > this.Position.X + this.Width * 0.5)
            this.CurrentHeight += 1.5;
        if (this.CurrentHorizontalPosition < this.Position.X + this.Width * 0.5)
            this.CurrentHeight -= 1.5;
        if (this.CurrentHorizontalPosition < this.Position.X) {
            this.IsFliped = true;
        }
    }

    Draw(context) {
        context.strokeStyle = 'black';
        context.fillStyle = 'white';
        context.lineWidth = 1;
        context.beginPath();
        context.moveTo(this.Position.X + this.Width * 0.5, this.Position.Y);
        context.lineTo(this.CurrentHorizontalPosition, this.Position.Y + (this.Height - this.CurrentHeight) * 0.5);
        context.lineTo(this.CurrentHorizontalPosition, this.Position.Y + (this.CurrentHeight - this.Height) * 0.5 + this.Height);
        context.lineTo(this.Position.X + this.Width * 0.5, this.Position.Y + this.Height);
        context.stroke();
        context.fill();
    }
}

