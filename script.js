const div1 = document.querySelector(".div-1");
const div2 = document.querySelector(".div-2");
const div3 = document.querySelector(".div-3");
const div4 = document.querySelector(".div-4");
const div5 = document.querySelector(".div-5");

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn-3");
const btn4 = document.querySelector(".btn-4");

btn1.addEventListener("click", () => {
    div1.classList.add('d-none');
    div2.classList.remove('d-none');

})

btn2.addEventListener("click", () => {
    div2.classList.add('d-none');
    div3.classList.remove('d-none');
})

btn3.addEventListener("click", () => {
    div3.classList.add('d-none');
    div4.classList.remove('d-none');
})

btn4.addEventListener("click", () => {
    div4.classList.add('d-none');
    div5.classList.remove('d-none');
})

