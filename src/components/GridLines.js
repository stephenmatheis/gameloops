export function GridLines(cols, rows) {
    const display = document.querySelector('#display');

    if (!display) return;

    let grid = /*html*/ `<div class="col-lines">`;

    for (let i = 0; i < cols; i++) {
        const row = Math.floor(i / cols);
        const col = i % cols;

        grid += /*html*/ `<div class="line"></div>`;
    }

    grid += /*html*/ `
        </div>
        <div class="row-lines">
    `;

    for (let i = 0; i < rows; i++) {
        const row = Math.floor(i / cols);
        const col = i % cols;

        grid += /*html*/ `<div class="line"></div>`;
    }

    grid += /*html*/ `</div>`;

    display.insertAdjacentHTML('beforeend', grid);
}
