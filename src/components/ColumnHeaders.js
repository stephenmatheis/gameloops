import { BLOCK_HEIGHT, BLOCK_WIDTH, GAP_SIZE, TEXT_COLOR } from '../lib/constants.js';

export function ColumnHeaders(cols = 80) {
    let headers = /*html*/ `<div class="column-headers">`;

    for (let i = 0; i < cols; i++) {
        const value = i + 1;

        headers += /*html*/ `
            <div class="header">
                <div class="number">${i}</div>
            </div>
        `;
    }

    headers += /*html*/ `</div>`;

    const ui = document.querySelector('#ui');

    if (!ui) return;

    ui.insertAdjacentHTML('beforeend', headers);
}
