import { BLOCK_HEIGHT, BLOCK_WIDTH, GAP_SIZE, TEXT_COLOR } from '../lib/constants.js';

export function RowHeaders(rows) {
    let headers = /*html*/ `<div class="row-headers">`;

    for (let i = 0; i < rows; i++) {
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
