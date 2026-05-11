let isPointerDown = false;
let isErase = false;

export const store = {
    get isPointerDown() {
        return isPointerDown;
    },
    get isErase() {
        return isErase;
    },
    down() {
        isPointerDown = true;
    },
    up() {
        isPointerDown = false;
    },
    erase() {
        isErase = true;
    },
    fill() {
        isErase = false;
    },
};
