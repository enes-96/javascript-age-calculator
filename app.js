"use strict";
const userDay = document.getElementById("birthDay");
const userMonth = document.getElementById("birthMonth");
const userYear = document.getElementById("birthYear");

const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth() + 1;
const currentDay = today.getDate();

const calcBtn = document.getElementById("calc");

calcBtn.addEventListener("click", () => {
  const output = document.getElementById("msg");
  if (userDay.value < 1 || userDay.value > 32) {
    output.innerText = false;
    return;
  }
  if (userMonth.value < 1 || userMonth.value > 12) {
    output.innerText = false;
    return;
  }
  if (userYear.value < 1 || userYear.value > currentYear) {
    output.innerText = false;
    return;
  }
  const dayDiff = currentDay - userDay.value;
  const monthDiff = currentMonth - userMonth.value;
  const yearDiff = currentYear - userYear.value;

  output.innerText = `You are ${dayDiff} days, ${monthDiff} months, and ${yearDiff} years old`;
});
