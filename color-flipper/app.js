const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', () => {
    const random = randomNumber();
    document.body.style.backgroundColor = colors[random];
    color.textContent = colors[random];
}); 

const randomNumber = () => {
    return Math.floor(Math.random() * colors.length);
}