import { BLOCK_HEIGHT, BLOCK_WIDTH, GAP_SIZE, TEXT_COLOR } from '../lib/constants.js';

export function ColumnHeaders(cols = 80) {
    let columnHeaders = /*html*/ `
        <div
            style="
                top: ${-BLOCK_HEIGHT}px; 
                left: 0; 
                gap: ${GAP_SIZE}px;
                color: ${TEXT_COLOR};
            " 
            class="column-headers"
        >
    `;

    for (let i = 0; i < cols; i++) {
        const value = i + 1;

        columnHeaders += /*html*/ `
            <div 
                style="width: ${BLOCK_WIDTH}px; height: ${BLOCK_HEIGHT}px"
                class="header"
            >
                ${i}
            </div>
        `;
    }

    columnHeaders += /*html*/ `</div>`;

    const ui = document.querySelector('#ui');
    ui.insertAdjacentHTML('beforeend', columnHeaders);
}
