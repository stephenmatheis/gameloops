import { UI } from './components/UI.js';
import { Display } from './components/Display.js';
import { GridLines } from './components/GridLines.js';
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
    console.log(`[Viewport]\t\t${window.innerWidth}px x ${window.innerHeight}px`);
    console.log(`[Block size]\t${BLOCK_WIDTH}px x ${BLOCK_HEIGHT}px`);

    console.log(
        `[Max columns?]\t${window.innerWidth}px / ${BLOCK_WIDTH}px = ${window.innerWidth / BLOCK_WIDTH} cols. Round up to ${Math.ceil(window.innerWidth / BLOCK_WIDTH)}.`,
    );
    console.log(
        `[Max rows?]\t\t${window.innerHeight}px / ${BLOCK_HEIGHT}px = ${window.innerHeight / BLOCK_WIDTH} rows. Round up to ${Math.ceil(window.innerHeight / BLOCK_HEIGHT)}.`,
    );

    // const maxCols = Math.floor(window.innerWidth / (BLOCK_WIDTH + GAP_SIZE)) - 2;
    // const maxRows = Math.floor(window.innerHeight / (BLOCK_HEIGHT + GAP_SIZE)) - 2;
    const maxCols = Math.ceil(window.innerWidth / BLOCK_WIDTH);
    const maxRows = Math.ceil(window.innerHeight / BLOCK_HEIGHT);

    console.log(`[Dimensions]\t${maxCols} columns x ${maxRows} rows`);

    document.body.style.perspective = `${window.innerWidth}px`;

    document.documentElement.style.setProperty('--block-width', `${BLOCK_WIDTH}px`);
    document.documentElement.style.setProperty('--block-height', `${BLOCK_HEIGHT}px`);

    Display(maxCols, maxRows);
    GridLines(maxCols, maxRows);
    // UI(maxCols, maxRows);
}
