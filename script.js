// Function to generate a random color in hexadecimal format
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Array of shapes and their classes
const shapes = [
  "quad-circle-1",
  "quad-circle-2",
  "quad-circle-3",
  "quad-circle-4",
  "triangle-1",
  "triangle-2",
  "triangle-3",
  "triangle-4",
  "circle",
  "diamond",
  "cross",
];

const boxes = document.querySelectorAll(".container div");

// Function to generate the pattern
let generatePattern = () => {
  boxes.forEach((box) => {
    box.className = "";
    let i = Math.floor(Math.random() * shapes.length);
    box.classList.add(shapes[i]);
    box.style.backgroundColor = getRandomColor(); // Generate a random color for each shape
  });
};

// Event listener for the button click - Patterns currently updated with new Date()
// const btn = document.getElementById("btn");
// btn.addEventListener("click", generatePattern);

// Generate pattern every second
setInterval(generatePattern, 1000); // 1000 milliseconds = 1 second

// Generate pattern on window load
window.addEventListener("load", generatePattern);




// Cambiar de color del fondo, no del container
function changeColor() {
  document.body.style.backgroundColor =
    "rgb(" +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    ")";
}



// Cambiar de color el container, no el fondo 
// function changeColor() {
//   const containers = document.querySelectorAll(".container");

//   containers.forEach((container) => {
//     const red = Math.round(Math.random() * 255);
//     const green = Math.round(Math.random() * 255);
//     const blue = Math.round(Math.random() * 255);

//     container.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
//   });
// }



 // Function to update the button text with the current time
 function updateButtonText() {
  const btn = document.getElementById("btn");
  const currentTime = new Date();
  const hours = currentTime.getHours().toString().padStart(2, "0");
  const minutes = currentTime.getMinutes().toString().padStart(2, "0");
  const seconds = currentTime.getSeconds().toString().padStart(2, "0");
  const timeString = `${hours}:${minutes}:${seconds}`;
  btn.innerText = timeString;
}

// Update the button text initially and every second
updateButtonText();
setInterval(updateButtonText, 1000);