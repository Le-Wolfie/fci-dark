// document.body.style.backgroundColor = "#040429";
// document.body.style.color = "#8c95e8";
// document.body.querySelector(".card.jh-card").style.backgroundColor =
//   "rgb(13, 29, 53)";
// document.body.querySelector(".container-fluid").style.backgroundColor =
//   "rgb(13, 29, 53)";
// document.body.querySelector(".jh-navbar").style.backgroundColor =
//   "rgb(34, 50, 111)";
// document.body.querySelectorAll(".card").forEach((card) => {
//   card.style.backgroundColor = "rgb(13, 29, 53)";
// });

// document.body.querySelector(".alert.alert-danger").style.display = "none";
// document.body.querySelectorAll(".form-control").forEach((input) => {
//   input.style.backgroundColor = "#101420";
//   input.style.color = "darkgray";
// });

// document.body.querySelectorAll("a").style.backgroundColor = "#24769e";

setTimeout(() => {
  document.body.querySelector(
    "a.active > span:nth-child(1) > span:nth-child(2) > span:nth-child(1)"
  ).innerHTML = "Registered Courses";

  document.body.querySelector(".navbar-title > span:nth-child(1)").innerHTML =
    "FCAI";
}, 1000);
