import { BLOCK_HEIGHT, BLOCK_WIDTH, GAP_SIZE, TEXT_COLOR } from '../lib/constants.js';

export function RowHeaders(cols) {
    let headers = /*html*/ `
        <div 
            style="
                top: 0;
                left: ${-BLOCK_WIDTH}px;
                gap: ${GAP_SIZE}px;
                color: ${TEXT_COLOR};
            "
            class="row-headers"
        >
    `;

    for (let i = 0; i < cols; i++) {
        const value = i + 1;

        headers += /*html*/ `
            <div 
                style="width: ${BLOCK_WIDTH}px; height: ${BLOCK_HEIGHT}px;"
                class="header"
            >
                ${i}
            </div>
        `;
    }

    headers += /*html*/ `</div>`;

    const ui = document.querySelector('#ui');

    if (!ui) return;

    ui.insertAdjacentHTML('beforeend', headers);
}
