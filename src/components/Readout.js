import { BLOCK_HEIGHT, TEXT_COLOR } from '../lib/constants.js';

export function Readout() {
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
                0 (0, 0)
            </div>
        `,
    );

    // TODO: On pointerdown then pointermove, display how many squares have been painted
}
