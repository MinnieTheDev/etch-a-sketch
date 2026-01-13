function createGrid(number = 16, colourScheme = "pink") {
    const container = document.querySelector(".container");

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for (i = 0; i< number; i++) {
        const row = document.createElement("div");
        for (j = 0; j < number; j++) {
            const column = document.createElement("div");
            column.classList.add("column");

            if (j == number - 1) {
                column.classList.add("last");
            }
            
            column.addEventListener("mouseover", () => {
                if (colourScheme == "variety") {
                    column.style.backgroundColor = randomRGB();
                }
                else if (colourScheme == "pastel") {
                    column.style.backgroundColor = randomPastelColour();
                }
                else {
                    column.style.backgroundColor = "pink";
                }
            })

            row.appendChild(column);
        }
        row.classList.add("row")
        container.appendChild(row);
    }

    gridSize = number;
    currScheme = colourScheme;
}

// Initialise 16x16 grid
var gridSize = 16;
var currScheme = "pink";
createGrid();

// Handles getting new grid
const questionButton = document.querySelector("#qBtn");

function askSquaresnumber() {
    return prompt("Number of squares wanted (input a number between 1 and 100): ");
}

questionButton.addEventListener("click", () => {
    const userInput = Number(askSquaresnumber())

    if (userInput > 100) {
        userInput = 100;
    }
    else if (userInput == '' || userInput < 1) {
        userInput = 16;
    }

    createGrid(userInput, currScheme);
});

// Handles colour scheme
function randomRGB() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}

var pastelRGBs = ['#FFFEE0', '#FFF8D5', '#D5F6FB', 
                '#F6F3A9', '#E5ECF8', '#D1FEB8', 
                '#EFDFD8', '#F7DFC2', '#FFDDB3', 
                '#D0E9C0', '#EBCCFF', '#F6C1B2',
                '#E9C9AA', '#E7D27C', '#CFCFC4',
                '#F1BEB5', '#A4D8D8', '#F8C57C'
                ]

function randomPastelColour() {
    const countPastels = pastelRGBs.length;
    const randomIndex = Math.floor(Math.random() * countPastels);
    return pastelRGBs[randomIndex];
}

const colourButtons = document.querySelectorAll(".settings .choices button");

colourButtons.forEach((button) => {
    button.addEventListener("click", () => {
        createGrid(gridSize, button.id);
    })
})