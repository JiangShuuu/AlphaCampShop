const menu_btn = document.querySelector(".nav_logo_menu");
const next_btn = document.querySelector(".content_btn-next");
const prev_btn = document.querySelector(".content_btn-prev");
const form_part = document.querySelector(".form_area");

// form
const part1 = document.querySelector(".form_part_1");
const part2 = document.querySelector(".form_part_2");
const part3 = document.querySelector(".form_part_3");
// formStep
const step1 = document.querySelector(".step-1");
const step2 = document.querySelector(".step-2");
const step3 = document.querySelector(".step-3");

// deliver
const deliver_part = document.querySelector(".form_part-2");
const deliver_fee = document.querySelector(".content_right_list_fee");

// product_amount
const product_amount = document.querySelector(".content_right_list");
const total_count = document.querySelector(".content_right_list_total");

let step = 0;
let itemA = 3999;
let itemB = 1999;
let total = 0;
let deliverFee = 0;

// nav btn
menu_btn.addEventListener("click", (event) => {
  const menu_toggle =
    event.target.parentElement.parentElement.nextElementSibling;
  menu_toggle.classList.toggle("d-none");
});

// form

next_btn.addEventListener("click", (event) => {
  if (step < 2) {
    step += 1;
  }
  if (step > 0) {
    prev_btn.classList.remove("d-none");
  }
  switch (step) {
    case 0:
      break;
    case 1:
      part1.classList.add("d-none");
      part2.classList.remove("d-none");
      step1.classList.add("checked");
      step2.classList.add("active");
      break;
    case 2:
      part2.classList.add("d-none");
      part3.classList.remove("d-none");
      step2.classList.add("checked");
      step3.classList.add("active");
      next_btn.innerText = "確認結帳";
      break;
    default:
      console.log("can't catch step");
  }
});
prev_btn.addEventListener("click", (event) => {
  step -= 1;
  if (step > 0) {
    prev_btn.classList.remove("d-none");
  }
  switch (step) {
    case 0:
      part1.classList.remove("d-none");
      part2.classList.add("d-none");
      prev_btn.classList.add("d-none");
      step2.classList.remove("active");
      step1.classList.remove("checked");
      break;
    case 1:
      part2.classList.remove("d-none");
      part3.classList.add("d-none");
      next_btn.innerText = "下一步→";
      step2.classList.remove("checked");
      step3.classList.remove("active");
      break;
    default:
      console.log("can't catch step");
  }
});

// deliverFee
deliver_part.addEventListener("click", (e) => {
  if (e.target.type === "radio") {
    const deliverFee = deliver_fee.firstElementChild.nextElementSibling;

    deliverFee.innerText =
      e.target.nextElementSibling.firstElementChild.nextElementSibling.innerText;
  }

  const deliver = deliver_fee.firstElementChild.nextElementSibling.innerText;
  if (deliver === "免費") {
    deliverFee = 0;
  } else {
    deliverFee = +deliver.replace(/[^\w\s]|_/g, "");
  }

  total = itemA + itemB + deliverFee;
  total_count.lastElementChild.innerHTML = `$${total}`;
});

// productAmount

product_amount.addEventListener("click", (e) => {
  const target = e.target;
  const amount = target.parentElement.firstElementChild.nextElementSibling;
  const productName =
    target.parentElement.parentElement.firstElementChild.innerText;

  if (target.innerText === "+") {
    const amountNum = Number(amount.innerText);
    let newAmount = Number(amountNum + 1);
    amount.innerText = `${newAmount}`;
    if (productName === "破壞補丁修身牛仔褲") {
      itemA = 3999 * newAmount;
    } else if (productName === "刷色直筒牛仔褲") {
      itemB = 1999 * newAmount;
    }
  }

  if (target.innerText === "-" && +amount.innerText > 0) {
    const amountNum = Number(amount.innerText);
    let newAmount = amountNum - 1;
    amount.innerText = `${newAmount}`;
    if (productName === "破壞補丁修身牛仔褲") {
      itemA = 3999 * newAmount;
    } else if (productName === "刷色直筒牛仔褲") {
      itemB = 1999 * newAmount;
    }
  }
  total = itemA + itemB;
  total_count.lastElementChild.innerHTML = `$${total}`;
});
