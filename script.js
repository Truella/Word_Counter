const userInput = document.getElementById("userInput");
const btn = document.getElementById("countBtn");
const div = document.querySelector("div");
const countOutput = document.createElement("p");
btn.addEventListener("click", function () {
    const input = userInput.value;
    if (input.length == 0) {
        countOutput.textContent = `Text box cannot be empty. please input your article.`
        div.appendChild(countOutput);
        countOutput.style.color = "#ff0000"
    } else {
        const inputArray = input.split(' ');
        div.appendChild(countOutput)
        countOutput.style.color = "#ffffff"
        countOutput.textContent = `The number of words in your article is: ${inputArray.length}`;
    }
    const timer = setTimeout(() => {
        countOutput.textContent =""
        userInput.value = ""
    }, 5000);
})