
//sliders variable
let slide = document.querySelector(".clients .slider");
let boxs = document.querySelector(".clients .slider .box");
let slideNavigate = document.querySelectorAll(".clients .navigation span");

//questions variable
let questions = document.querySelectorAll(".question")
let answer = document.querySelectorAll(".answer")

//section about slider
let counter = 1;
let size = boxs.clientWidth;



slideNavigate.forEach((item, key) => {

    item.addEventListener("click", function () {
        slide.style.transform = "translateX(" + (-size * key + 1) + "px)";
        slideNavigate.forEach(item => {
            item.classList.remove("active")
        })
        item.classList.add("active")
    })
})


// section about questions

questions.forEach(item => {
    item.addEventListener("click", function () {
        item.classList.toggle("active")
        // answer[0].style.height = answer[0].clientHeight + "px"
        console.log(answer[0].clientHeight)

    })
})