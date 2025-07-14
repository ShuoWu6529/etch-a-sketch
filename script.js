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

    container.addEventListener("mousedown", (e) => {
        const target = e.target;
        if (target.className === "container") return;
        target.classList.add("colored");
    })
}

function resizeGrid() {
    const btn = document.querySelector(".resize");
    btn.addEventListener("click", () => {
        removeGrid();
        let val = prompt("Choose an integer between 1 and 100");
        let length = parseInt(val);
        if (Number.isNaN(length)) return;
        if (length < 1 || length > 100) {
            alert("Invalid number");
            return;
        }
        makeGrid(length);
    })
}

function removeGrid() {
    const container = document.querySelector(".container");
    container.textContent = "";
}

function resetGrid() {
    const btn = document.querySelector(".clear");
    btn.addEventListener("click", ()=>{
        removeGrid();
        makeGrid(16);
    })
}

makeGrid(16);
resizeGrid();
resetGrid()