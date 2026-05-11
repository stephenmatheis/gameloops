import { BLOCK_HEIGHT } from '../lib/constants.js';
import { erase } from '../lib/utils.js';

export function Tools() {
    const ui = document.querySelector('#ui');

    if (!ui) return;

    ui.insertAdjacentHTML(
        'beforeend',
        /*html*/ `
            <div
                style="bottom: ${-BLOCK_HEIGHT}px; height: ${BLOCK_HEIGHT}px" 
                class="tools"
            >
                <button class="reset">Reset</button>

            </div>
        `,
    );

    const reset = ui.querySelector('.reset');

    if (!reset) return;

    reset.addEventListener('pointerdown', () => {
        const nodes = display.querySelectorAll('.pixel');

        nodes.forEach((node) => {
            erase(node);
        });
    });
}
