const d = document;

// nav logic
const nav = d.getElementById("nav");
const searchCont = d.getElementById("search");

d.addEventListener("click", (e) => {
  if (
    e.target.matches(".header__menu-icons") ||
    e.target.matches(`.header__menu-icons *`)
  ) {
    nav.classList.toggle("nav--active");
  }

  if (e.target.matches(".header__search-icon--black")) {
    searchCont.classList.toggle("header__search--active");
  }
});

// function count Down

function countDown(date, container) {
  const $countDown = d.querySelector(container);

  const countDownDate = new Date(date).getTime();

  let countdowTempo = setInterval(() => {
    let now = new Date().getTime();
    let limitTime = countDownDate - now;
    let days = Math.floor(limitTime / (1000 * 60 * 60 * 24));
    let hours = (
      "0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ).slice(-2);
    let minutes = (
      "0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
    ).slice(-2);
    let seconds = ("0" + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(
      -2
    );

    const [$days, $hours, $minutes, $seconds] = container;

    if (limitTime > 0) {
      d.querySelector($days).textContent = days;
      d.querySelector($hours).textContent = hours;
      d.querySelector($minutes).textContent = minutes;
      d.querySelector($seconds).textContent = seconds;
    } else {
      clearInterval(countdowTempo);
    }
  }, 1000);
}

d.addEventListener("DOMContentLoaded", (e) => {
  countDown("11-21-2025 15:29", [
    ".countDown__days",
    ".countDown__hours",
    ".countDown__minutes",
    ".countDown__seconds",
  ]);
});
