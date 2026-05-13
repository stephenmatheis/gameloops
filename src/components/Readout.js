import { BLOCK_HEIGHT, TEXT_COLOR } from '../lib/constants.js';

export function Readout(cols, rows) {
    const ui = document.querySelector('#ui');

    if (!ui) return;

    ui.insertAdjacentHTML(
        'beforeend',
        /*html*/ `
            <div
                style="
                    bottom: ${-BLOCK_HEIGHT}px; 
                    right: 0; 
                    height: ${BLOCK_HEIGHT}px;
                    color: ${TEXT_COLOR};
                " 
                class="readout"
            >
            <div class="position">0 (0, 0)</div>
            <div class="size">${cols} cols x ${rows} rows</div>
            </div>
        `,
    );

    // TODO: On pointerdown then pointermove, display how many squares have been painted
}
