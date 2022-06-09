window.addEventListener("load", () => {
  let countUser = document.querySelector(".count-user");
  let countComp = document.querySelector(".count-comp");
  let user = document.querySelector(".user");
  let comp = document.querySelector(".comp");
  let playAgain = document.querySelector(".play");
  let fields = document.querySelectorAll(".field");
  let userStep;
  let compStep;
  let userC = 0;
  let compC = 0;
  let blocked = false;
  let res = document.querySelector(".result");
  let userName = document.querySelector(".name");
  userName.innerText = prompt("adinizi daxil edin");

  const choiseUser = (e) => {
    if (blocked) return;
    let target = e.target;
    if (target.classList.contains("field")) {
      userStep = target.dataset.field;
      fields.forEach((item) => item.classList.remove("active", "error"));
      target.classList.add("active");
      choiseComp();
    }
  };
  const choiseComp = () => {
    blocked = true;
    let rand = Math.floor(Math.random() * 3);
    let compField = comp.querySelectorAll(".field");

    // setTimeout(() => {
    compStep = compField[rand].dataset.field;
    compField[rand].classList.add("active");
    winner();
    // }, 3000);
  };

  const winner = () => {
    blocked = false;
    let comb = userStep + compStep;
    switch (comb) {
      case "rr":
      case "pp":
      case "ss":
        res.innerText = "hec hece";
        break;
      case "rs":
      case "sp":
      case "pr":
        res.innerText = "Won";
        userC++;
        countUser.innerText = userC;
        comp
          .querySelector("[data-field =" + compStep + "]")
          .classList.add("error");
        break;
      case "sr":
      case "ps":
      case "rp":
        res.innerText = "Lose";
        compC++;
        countComp.innerText = compC;
        user
          .querySelector("[data-field =" + userStep + "]")
          .classList.add("error");
        break;
    }
  };

  const play = () => {
    userC = compC = 0;
    res.innerText = "Secim edin";
    countComp.innerText = "0";
    countUser.innerText = "0";
    fields.forEach((item) => item.classList.remove("active", "error"));
  };
  playAgain.addEventListener("click", play);
  user.addEventListener("click", choiseUser);
});
