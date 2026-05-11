export function Pixels(cols, rows) {
    const display = document.querySelector('#display');

    if (!display) return;

    let pixels = '';

    for (let i = 0; i < cols * rows; i++) {
        const row = Math.floor(i / cols);
        const col = i % cols;

        pixels += /*html*/ `
            <div 
                class="pixel" 
                data-index="${i}"
                data-row="${row}"
                data-col="${col}"
                oncontextmenu="return false;"
            >
                <!-- &centerdot; -->
            </div>
        `;
    }

    display.insertAdjacentHTML('beforeend', pixels);

    const nodes = display.querySelectorAll('.pixel');

    nodes.forEach((node) => {
        node.addEventListener('pointerdown', (event) => {
            event.preventDefault();

            isPointerDown = true;

            if (event.button === 2) {
                event.preventDefault();

                isErase = true;

                erase(node);

                return;
            }

            fill(node);
        });

        node.addEventListener('pointerup', (event) => {
            event.preventDefault();

            isPointerDown = false;
            isErase = false;
        });

        node.addEventListener('pointerenter', () => {
            const readout = document.querySelector('.readout');

            if (!readout) return;

            const text = /*html*/ `${node.dataset.index} (${node.dataset.row}, ${node.dataset.col})`;

            readout.innerHTML = text;

            if (!isPointerDown) return;

            if (isErase) {
                console.log('erase', text);
                erase(node);
            } else {
                console.log('paint', text);
                fill(node);
            }
        });
    });
}
