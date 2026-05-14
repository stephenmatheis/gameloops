export function debounce(func, delay = 100) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

export function erase(node) {
    node.style.removeProperty('background-color');
    node.style.removeProperty('border');
    node.style.removeProperty('z-index');
}

export function fill(node) {
    node.style.backgroundColor = '#000000';
    node.style.border = 'solid .5px var(--pixel-border-color)';
    node.style.zIndex = 1;
}
