let decBtn = document.getElementsByClassName("dec-button")[0];
let incBtn = document.getElementsByClassName("inc-button")[0];
let changeNum = document.querySelector(".changing-num");

window.addEventListener("load", () => {
  changeNum.innerText = "0";
});

let changeColor = () => {
  let currentValue = +changeNum.innerText;

  if (currentValue === 0) {
    changeNum.style.color = "#000";
  } else if (currentValue > 0) {
    changeNum.style.color = "#dc143c";
  } else {
    changeNum.style.color = "#006400";
  }
};

decBtn.addEventListener("click", () => {
  let inniNum = changeNum.innerText;
  let finalNum = inniNum - 1;
  changeNum.innerText = finalNum;
  changeColor();
});

incBtn.addEventListener("click", () => {
  // changeNum.innerText = '0';
  console.log(changeNum.innerText);

  let inniNum = parseInt(changeNum.innerText);
  let finalNum = inniNum + 1;
  changeNum.innerText = finalNum;
  changeColor();
});
