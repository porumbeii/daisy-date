class Dialog {
    constructor(question, answers) {
        this.Question = question;
        this.Answers = answers;
        this.CreateInterface();
        this.SelectedLabelIndex = null;
    }

    Update() {
        this.QuestionLabel.Update();
        this.Buttons.forEach(button => {
            button.Update();
        });
    }

    Execute() {
        this.QuestionLabel.Draw();
        this.Buttons.forEach(button => {
            button.Draw();
        });
    }

    CreateInterface() {
        let buttonHeight = 50;
        let verticalPosition = (game.Canvas.height - this.Answers.length * buttonHeight) * 0.5;
        let horizontalPosition = game.Canvas.width * 0.5;
        this.QuestionLabel = new TypewriterSpeachBubble(this.Question, (game.Canvas.width - game.Context.measureText(this.Question).width) * 0.5, verticalPosition, 500);

        this.Buttons = [];
        for (let index = 0; index < this.Answers.length; index++) {
            this.Buttons.push(new Button(this.Answers[index][0], horizontalPosition + 50, verticalPosition + this.QuestionLabel.Height + (index + 1) * (buttonHeight + 20), this.SelectAnswer, this.Answers[index][1]));
        }
    }

    SelectAnswer(answerIndex) {
        game.SceneManager.CurrentScene.Interpreter.CurrentCommand.Dialog.SelectedLabelIndex = answerIndex;
    }
} 