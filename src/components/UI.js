import { ColumnHeaders } from './ColumnHeaders.js';
import { RowHeaders } from './RowHeaders.js';
import { Tools } from './Tools.js';
import { Readout } from './Readout.js';
import { BLOCK_HEIGHT, BLOCK_WIDTH, GAP_SIZE } from '../lib/constants.js';

export function UI(maxCols, maxRows) {
    const ui = document.querySelector('#ui');

    if (!ui) return;

    ui.innerHTML = '';

    // blocks + gap + border
    ui.style.width = `${maxCols * BLOCK_WIDTH + (GAP_SIZE ? maxCols - GAP_SIZE : 0) + GAP_SIZE * 2}px`;
    ui.style.height = `${maxRows * BLOCK_HEIGHT + (GAP_SIZE ? maxRows - GAP_SIZE : 0) + GAP_SIZE * 2}px`;

    ColumnHeaders(maxCols);
    RowHeaders(maxRows);
    Tools();
    Readout();
}
