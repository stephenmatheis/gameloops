import { BLOCK_WIDTH, BLOCK_HEIGHT } from '../lib/constants.js';

export function GridLines(cols, rows) {
    const grid = document.querySelector('#grid');

    if (!grid) return;

    grid.innerHTML = '';
    grid.style.width = `${cols * BLOCK_WIDTH}px`;
    grid.style.height = `${rows * BLOCK_HEIGHT}px`;

    let lines = /*html*/ `<div class="col-lines">`;

    for (let i = 0; i < cols; i++) {
        const row = Math.floor(i / cols);
        const col = i % cols;

        lines += /*html*/ `<div class="line"></div>`;
    }

    lines += /*html*/ `
        </div>
        <div class="row-lines">
    `;

    for (let i = 0; i < rows; i++) {
        const row = Math.floor(i / cols);
        const col = i % cols;

        lines += /*html*/ `<div class="line"></div>`;
    }

    lines += /*html*/ `</div>`;

    grid.insertAdjacentHTML('beforeend', lines);
}
