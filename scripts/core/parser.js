"use strict"
class Parser {
    constructor(storyData) {
        this.StoryLines = storyData.split("\n");
        this.Parse();
    }

    Parse() {
        this.Commands = [];

        let index = 0;
        let length = this.StoryLines.length;

        while (index < length) {
            let storyLine = this.StoryLines[index].replace(/(\r\n|\n|\r)/gm, "");
            let commandLine = storyLine.split(" ");
            let commandName = commandLine[0];

            switch (commandName) {
                case "font":
                    let fontName = storyLine.replace(commandLine[0], '');
                    fontName = fontName.replace(commandLine[commandLine.length - 1], '');
                    fontName = fontName.substring(1, fontName.length - 1);
                    this.Commands.push(new FontCommand(fontName, commandLine[commandLine.length - 1]));
                    break;
                case "title":
                    this.Commands.push(new TitleCommand(this.GetTextInbetweenQuotes(storyLine)));
                    break;
                case "background":
                    this.Commands.push(new BackgroundCommand(commandLine[1]));
                    break;
                case "play-music":
                    this.Commands.push(new PlayAudioCommand(commandLine[1], true));
                    break;
                case "play-sound":
                    this.Commands.push(new PlayAudioCommand(commandLine[1]));
                    break;
                case "stop-music":
                    this.Commands.push(new StopMusicCommand(commandLine[1]));
                    break;
                case "says":
                    this.Commands.push(new SaysCommand(commandLine[1], this.GetTextInbetweenQuotes(storyLine)));
                    break;
                case "show":
                    this.Commands.push(new ShowCommand(commandLine[1], commandLine[3]));
                    break;
                case "remove-background":
                    this.Commands.push(new RemoveBackground());
                    break;
                case "move":
                    this.Commands.push(new MoveCommand(commandLine[1], commandLine[2]));
                    break;
                case "wait":
                    this.Commands.push(new WaitCommand(commandLine[1]));
                    break;
                case "remove-character":
                    this.Commands.push(new RemoveCharacter(commandLine[1]));
                    break;
                case "label":
                    this.Commands.push(new LabelCommand(commandLine[1]));
                    break;
                case "end-label":
                    this.Commands.push(new EndLabelCommand(commandLine[1]));
                    break;
                case "question":
                    let answers = this.GetAnswerLines(this.StoryLines, index + 1);
                    this.Commands.push(new QuestionCommand(this.GetTextInbetweenQuotes(storyLine), answers));
                    index += answers.length;
                    break;
                case "showsnow":
                    this.Commands.push(new ShowSnowCommand());
                    break;
                case "hidesnow":
                    this.Commands.push(new HideSnowCommand());
                    break;
                case "gameover":
                    this.Commands.push(new GameOverCommand());
                    break;
                default:
                    break;
            }
            index++;
        }
        // console.log(this.Commands);
    }

    GetAnswerLines(storyLines, startIndex) {
        let answers = [];
        let answerFound = true;
        while (answerFound) {
            let posibleAnswerLine = storyLines[startIndex];
            let posibleAnswerCommand = posibleAnswerLine.replace(/(\r\n|\n|\r)/gm, "").split(" ");
            if (posibleAnswerCommand[4] === "answer") {
                answers.push([this.GetTextInbetweenQuotes(posibleAnswerLine), posibleAnswerCommand[posibleAnswerCommand.length - 1]]);
                startIndex++;
            }
            else {
                answerFound = false;
            }
        }
        return answers;
    }

    GetTextInbetweenQuotes(text) {
        let startIndex = text.indexOf("\"");
        let endIndex = text.indexOf("\"", startIndex + 1);
        return text.substring(startIndex + 1, endIndex);
    }

}

const Commands = {
    "Background": 1,
    "EndLabel": 2,
    "Font": 3,
    "Label": 4,
    "Move": 5,
    "PlayAudio": 6,
    "Question": 7,
    "RemoveBackground": 8,
    "RemoveCharacter": 9,
    "Says": 10,
    "Show": 11,
    "StopMusic": 12,
    "Title": 13,
    "Wait": 14,
    "ShowSnow": 15,
    "HideSnow": 16
};