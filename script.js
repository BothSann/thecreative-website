"use strict";
const storyBtn = document.querySelectorAll(".story");
console.log(storyBtn);

storyBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    btn.classList.toggle("show");
    btn.nextElementSibling.classList.toggle("show");
  });
});
