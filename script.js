const userInput = document.getElementById("userInput");
const countBtn = document.getElementById("countBtn");
const clearBtn = document.getElementById("clearBtn")
const div = document.querySelector("div");
const countOutput = document.createElement("p");
countBtn.addEventListener("click", function () {
    const input = userInput.value;
    if (input.length == 0) {
        countOutput.textContent = `Text box cannot be empty. please input your article.`
        div.appendChild(countOutput);
        countOutput.style.color = "#ff0000"
    } else {
        const inputArray = input.split(' ');
        const wordList = inputArray.filter((element)=>{
            return element != ""
        })
        div.appendChild(countOutput)
        countOutput.style.color = "#ffffff"
        countOutput.textContent = `The number of words in your article is: ${wordList.length}`;
    }
    const timer = setTimeout(() => {
        countOutput.textContent =""
    }, 5000);
})
clearBtn.addEventListener("click", ()=>{
    userInput.value = ""
})