"use strict";
const percent = document.querySelector(".test-percent");
let input = document.querySelector(".input");

const enterInput = function (number) {
  return (input = number);
};

percent.addEventListener("click", enterInput);
