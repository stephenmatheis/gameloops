import { Pixels } from './Pixels.js';
import { store } from '../stores/store.js';
import { BLOCK_HEIGHT, BLOCK_WIDTH } from '../lib/constants.js';

export function Display(cols, rows) {
    const canvas = document.querySelector('#canvas');

    if (!canvas) return;

    canvas.innerHTML = '';
    canvas.style.width = `${cols * BLOCK_WIDTH}px`;
    canvas.style.height = `${rows * BLOCK_HEIGHT}px`;
    canvas.style.gridTemplateColumns = `repeat(${cols}, ${BLOCK_WIDTH}px)`;
    canvas.style.gridTemplateRows = `repeat(${rows}, ${BLOCK_HEIGHT}px)`;

    canvas.addEventListener('mouseleave', () => {
        store.up();
        store.fill();

        const readout = document.querySelector('.position');

        if (!readout) return;

        readout.innerHTML = '0 (0, 0)';
    });

    Pixels(cols, rows);
}
