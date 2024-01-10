class EndLabelCommand {
    constructor(labelName) {
        this.Type = Commands.EndLabel;
        this.WaitForPlayer = false;
        this.IsExecuted = true;

        this.LabelName = labelName;
    }

    Update() {

    }

    Execute() {
    }
}