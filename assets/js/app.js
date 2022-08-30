const paragraphEl = document.getElementById("adviceEl");
const adviceId = document.getElementById("adviceId");

window.onload = () => {
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(result => {
        paragraphEl.innerText = `"${result.slip.advice}"`
        adviceId.innerText = `Quote: ${result.slip.id}`
    })
}

const shufleBtn = document.getElementById("shufleBtn");
shufleBtn.addEventListener("click", ()=> {
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(result => {
        paragraphEl.innerText = `"${result.slip.advice}"`
        adviceId.innerText = `Advice: ${result.slip.id}`
    })
})