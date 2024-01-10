"use strict";
const MouseStates = { 'Up': 0, 'Down': 1 };
class Mouse {

    static State = MouseStates.Up;

    static previousState = MouseStates.Up;
    static currentState = null;

    static Released = false;

    static Update() {
        Mouse.Released = false;

        Mouse.previousState = Mouse.currentState;
        Mouse.currentState = Mouse.State;

        if (Mouse.previousState === MouseStates.Down && Mouse.currentState === MouseStates.Up)
            Mouse.Released = true;

    }

    static HandleMouseMove(e) {
        if (e.touches) {
            if (e.touches[0]) {
                Mouse.X = e.touches[0].clientX;
                Mouse.Y = e.touches[0].clientY;
            }
        }
        else {
            Mouse.X = e.clientX;
            Mouse.Y = e.clientY;
        }
    }

    static HandleMouseDown(e) {
        if (e.touches) {
            if (e.touches[0]) {
                Mouse.X = e.touches[0].clientX;
                Mouse.Y = e.touches[0].clientY;
            }
        }
        Mouse.State = MouseStates.Down;
    }

    static HandleMouseUp(e) {
        if (e.touches) {
            if (e.touches[0]) {
                Mouse.X = e.touches[0].clientX;
                Mouse.Y = e.touches[0].clientY;
            }
        }
        Mouse.State = MouseStates.Up;
    }

    static HandleContextMenu(e) {
        e.preventDefault();
        return false;
    }
}

class Keyboard {

    static #keysUp = [];
    static #keysDown = [];

    static IsKeyUp(key) {
        return Keyboard.#keysUp.indexOf(key) > -1;
    }

    static IsKeyDown(key) {
        return Keyboard.#keysDown.indexOf(key) > -1;
    }

    static HandleKeyUp(e) {
        Keyboard.#keysDown.splice(Keyboard.#keysDown.indexOf(e.keyCode), 1);
        if (Keyboard.#keysUp.indexOf(e.keyCode) === -1) Keyboard.#keysUp.push(e.keyCode);
    }

    static HandleKeyDown(e) {
        if (Keyboard.#keysDown.indexOf(e.keyCode) === -1) Keyboard.#keysDown.push(e.keyCode);
    }

    static Update() {
        Keyboard.#keysUp = [];
    }
}

window.addEventListener("mousedown", Mouse.HandleMouseDown);
window.addEventListener("mouseup", Mouse.HandleMouseUp);
window.addEventListener("mousemove", Mouse.HandleMouseMove);
window.addEventListener("contextmenu", Mouse.HandleContextMenu);

document.addEventListener("touchstart", Mouse.HandleMouseDown, false);
document.addEventListener("touchend", Mouse.HandleMouseUp, false);
document.addEventListener("touchmove", Mouse.HandleMouseMove, false);

window.addEventListener("keydown", Keyboard.HandleKeyDown);
window.addEventListener("keyup", Keyboard.HandleKeyUp);


const Keys = {
    Space: 32,
    Escape: 27,
    Up: 38,
    Down: 40,
    Left: 37,
    Right: 39,
    Control: 17,
    Enter: 13,
    Z: 90
};


