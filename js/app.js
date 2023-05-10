// selectors
const inputs = document.querySelectorAll(".gradient-inputs input");
const select = document.querySelector(".gradient-select select");
const preview = document.querySelector(".gradient-preview");
const textarea = document.querySelector(".gradient-text textarea");
const refresh = document.querySelector(".gradient-buttons .refresh");
const copy = document.querySelector(".gradient-buttons .copy");



const getRandomColor = () => {
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex}`;
}

const generateGradient = (isRandom) => {
    if(isRandom) {
        inputs[0].value = getRandomColor();
        inputs[1].value = getRandomColor();
    }
    let gradient = `linear-gradient(${select.value}, ${inputs[0].value}, ${inputs[1].value})`;
    preview.style.background = gradient;
    document.body.style.background = gradient;
    textarea.value = `background: ${gradient}`;
}

const copyCode = () => {
    navigator.clipboard.writeText(textarea.value);
    alert("Code Copied !");
}



// eventListeners
inputs.forEach(input => {
    input.addEventListener("input", () => generateGradient(false));
})

select.addEventListener("change", () => generateGradient(false))

refresh.addEventListener("click", () => generateGradient(true));

copy.addEventListener("click", copyCode);

window.addEventListener("load", () => generateGradient(true));