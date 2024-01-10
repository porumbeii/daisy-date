class WaitCommand {
    constructor(miliseconds) {
        this.Type = Commands.Wait;
        this.WaitForPlayer = false;
        this.IsExecuted = false;

        this.Miliseconds = miliseconds;

        this.CurrentTime = null;

        this.TimerStarted = false;

    }

    Update() {
        if (!this.TimerStarted) {
            this.TimerStart = Date.now();
            this.TimerStarted = true;
        }
        this.CurrentTime = Date.now();
    }

    Execute() {
        if (this.CurrentTime - this.TimerStart > this.Miliseconds) {
            this.IsExecuted = true;
        }
    }
}