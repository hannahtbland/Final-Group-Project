const menu = document.querySelector(".side-menu");

$(".hamburger-menu-icon").click(function () {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
    } else {
        menu.classList.add("showMenu");
    }
});

$(".close-button").click(function () {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
    } else {
        menu.classList.add("showMenu");
    }
});

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  }

  window.onload = function () {
    var tenMinutes = 60 * 10,
    display = document.querySelector('#time');
    startTimer(tenMinutes, display);
  };