function makeGrid(length) {
    const container = document.querySelector(".container")
    const docFrag = document.createDocumentFragment();
    for (let i = 0; i < length ** 2; i++) {
        const cell  = document.createElement("div");
        cell.classList.add("cell");
        docFrag.appendChild(cell);
    }

    container.appendChild(docFrag);
    cellSize = 100 / length
    document.documentElement.style.setProperty(`--cell-size`, `${cellSize}%`)
}

makeGrid(16);