const burger = document.querySelector(".burger");
const navBar = document.querySelector(".navbar");

burger.addEventListener("click", function () {
  navBar.classList.toggle("show");

  if (navBar.classList.contains("show")) {
    burger.innerHTML = '<img src="ironpulse-exam-assets/icons/x.svg" alt="" />';
  } else {
    burger.innerHTML = '<img src="harmburger.jpg" alt="" />';
  }
});
