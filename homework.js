let counter = 0;

const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

incrementButton.addEventListener("click", function () {
    counter++;
    counterElement.textContent = String(counter);
    counterElement.style.color = "green";
});

decrementButton.addEventListener("click", function () {
    if (counter > 0) {
        counter--;
        counterElement.textContent = String(counter);
        counterElement.style.color = "red";
    }
});

const coordinateBox = document.getElementById("coordinateBox");

coordinateBox.addEventListener("mousemove", function (event) {
    const x = event.offsetX;
    const y = event.offsetY;

    coordinateBox.textContent = "x: " + String(x) + " y: " + String(y);
});

const colorInput = document.getElementById("colorInput");

colorInput.addEventListener("input", function () {
    document.body.style.backgroundColor = colorInput.value;
});