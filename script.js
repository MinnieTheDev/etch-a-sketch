const container = document.querySelector(".container");

for (i = 0; i< 16; i++) {
    const row = document.createElement("div");
    for (j = 0; j < 16; j++) {
        const column = document.createElement("div");
        column.classList.add("column");

        if (j == 15) {
            column.classList.add("last");
        }
        
        row.appendChild(column);
    }
    row.classList.add("row")
    container.appendChild(row);
}