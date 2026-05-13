import { erase } from '../lib/utils.js';
import { BLOCK_HEIGHT, TEXT_COLOR } from '../lib/constants.js';

export function Controls(cols, rows) {
    const ui = document.querySelector('#ui');

    if (!ui) return;

    ui.insertAdjacentHTML(
        'beforeend',
        /*html*/ `
            <div
                style="
                    bottom: ${-BLOCK_HEIGHT}px; 
                    left: 0; 
                    height: ${BLOCK_HEIGHT}px;
                    color: ${TEXT_COLOR};
                " 
                class="controls"
            >
                <span>[left] fill<span> 
                <span>[middle] mode<span> 
                <span>[right] erase pixel<span>
                <span>[wheel] brush size<span>
                <span>[esc] hide/show UI<span>
                <span>[r] reset<span>
            </div>
        `,
    );

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const ui = document.querySelector('#ui');

            if (!ui) return;

            if (ui.classList.contains('hidden')) {
                ui.classList.remove('hidden');

                return;
            }

            if (!ui.classList.contains('hidden')) {
                ui.classList.add('hidden');

                return;
            }
        }

        if (event.key.toUpperCase() === 'R' && !event.metaKey) {
            const confirmed = confirm('Reset?');

            if (confirmed) {
                const nodes = display.querySelectorAll('.pixel');

                nodes.forEach((node) => {
                    erase(node);
                });

                return;
            }
        }

        if (event.key.toUpperCase() === 'S' && !event.metaKey) {
            const confirmed = confirm('Save?');

            if (confirmed) {
                const nodes = display.querySelectorAll('.pixel');

                nodes.forEach((node) => {
                    erase(node);
                });

                return;
            }
        }

        // TODO: Use dialog element to choose from saved `files`. Files? Is that the right thing/noun/abstraction/object/concept?
        // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog#handling_the_return_value_from_the_dialog
        if (event.key.toUpperCase() === 'L' && !event.metaKey) {
            const confirmed = confirm('Save?');

            if (confirmed) {
                const nodes = display.querySelectorAll('.pixel');

                nodes.forEach((node) => {
                    erase(node);
                });

                return;
            }
        }
    });
}
