import { Pixels } from './Pixels.js';
import { GridLines } from './GridLines.js';
import { store } from '../stores/store.js';
import { BLOCK_HEIGHT, BLOCK_WIDTH, GAP_SIZE } from '../lib/constants.js';

export function Display(cols, rows) {
    const display = document.querySelector('#display');

    if (!display) return;

    display.innerHTML = '';

    display.style.gridTemplateColumns = `repeat(${cols}, ${BLOCK_WIDTH}px)`;
    display.style.gridTemplateRows = `repeat(${rows}, ${BLOCK_HEIGHT}px)`;
    display.style.gap = `${GAP_SIZE}px`;

    display.addEventListener('mouseleave', () => {
        store.up();
        store.fill();

        const readout = document.querySelector('.position');

        if (!readout) return;

        readout.innerHTML = '0 (0, 0)';
    });

    Pixels(cols, rows);
    GridLines(cols, rows);
}
