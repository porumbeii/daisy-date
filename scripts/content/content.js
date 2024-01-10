"use strict";
class Content {
    static Story = null;
    static StoryIsLoaded = false;

    static Items = [];
    static IsLoaded = false;

    static LoadStory() {
        Content.Story = new Story("story.vnsl");
    }

    static Update() {
        if (!Content.StoryIsLoaded)
            return;

     

        let index = 0, content = Content.Items, length = Content.Items.length;
        while (index < length) {
            if (content[index].IsLoaded === false) {
                Content.IsLoaded = false;
                return;
            }
            index++;
        }
        Content.IsLoaded = true;
    }


    static GetItem(source) {
        let index;
        let length = Content.Items.length;
        for (index = 0; index < length; index++) {
            if (Content.Items[index].Source === source) {
                return Content.Items[index];
            }
        }
        return null;
    }
}