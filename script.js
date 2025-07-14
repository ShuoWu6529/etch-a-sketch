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


    container.addEventListener("mouseover", (e) => {
        const target = e.target;
        if (target.className === "container") return;

        if (e.buttons === 1) {
            target.classList.add("colored");
        }
    })
}


makeGrid(16);