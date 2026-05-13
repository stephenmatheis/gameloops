import { store } from '../stores/store.js';
import { fill, erase } from '../lib/utils.js';

export function Pixels(cols, rows) {
    const display = document.querySelector('#canvas');

    if (!display) return;

    let pixels = '';

    for (let i = 0; i < cols * rows; i++) {
        const row = Math.floor(i / cols);
        const col = i % cols;

        pixels += /*html*/ `<div class="pixel" data-index="${i}" data-row="${row}" data-col="${col}" oncontextmenu="return false;"></div>`;
    }

    display.insertAdjacentHTML('beforeend', pixels);

    const nodes = display.querySelectorAll('.pixel');

    nodes.forEach((node) => {
        node.addEventListener('pointerdown', (event) => {
            event.preventDefault();

            store.down();

            if (event.button === 2) {
                event.preventDefault();

                store.erase();

                // FIXME: same name
                erase(node);

                return;
            }

            fill(node);
        });

        node.addEventListener('pointerup', (event) => {
            event.preventDefault();

            store.up();
            store.fill();
        });

        node.addEventListener('pointerenter', () => {
            const readout = document.querySelector('.position');

            if (!readout) return;

            const text = /*html*/ `${node.dataset.index} (${node.dataset.row}, ${node.dataset.col})`;

            readout.innerHTML = text;

            if (!store.isPointerDown) return;

            if (store.isErase) {
                console.log('erase', text);
                erase(node);
            } else {
                console.log('paint', text);
                fill(node);
            }
        });
    });
}
