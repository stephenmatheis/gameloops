import { UI } from './components/UI.js';
import { Display } from './components/Display.js';
import { debounce, erase, fill } from './lib/utils.js';
import { BLOCK_HEIGHT, BLOCK_WIDTH, GAP_SIZE, GRID_COLOR, TEXT_COLOR } from './lib/constants.js';

window.addEventListener(
    'resize',
    debounce(() => {
        // FIXME: This erases the grid.
        main();
    }),
);

main();

function main() {
    const maxCols = Math.floor(window.innerWidth / (BLOCK_WIDTH + GAP_SIZE)) - 2;
    const maxRows = Math.floor(window.innerHeight / (BLOCK_HEIGHT + GAP_SIZE)) - 2;

    console.log(`Grid size: ${maxCols} columns x ${maxRows} rows`);

    document.body.style.perspective = `${window.innerWidth}px`;

    document.documentElement.style.setProperty('--block-width', `${BLOCK_WIDTH}px`);
    document.documentElement.style.setProperty('--block-height', `${BLOCK_HEIGHT}px`);

    UI(maxCols, maxRows);
    Display(maxCols, maxRows);
}
