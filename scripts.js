function test() {
  new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        enabled: true,
      },
    },
  });
}

this.test();

let button = document.querySelector(".show-button");
let background = document.querySelector(".show-button--img");
let text = document.getElementById("show-button--text");
let repairingList = document.querySelectorAll(".repairing-list")[0].children;
let button1 = document.querySelector(".show-button");
button.addEventListener("click", function () {
  button.classList.toggle("active");
  if (button.classList.contains("active")) {
    text.textContent = "Скрыть";
    background.classList.remove("show-button--img");
    background.classList.add("show-button--img--rotate");
  } else {
    text.textContent = "Показать все";
    background.classList.remove("show-button--img--rotate");
    background.classList.add("show-button--img");
  }
  for (let i = 0; i <= repairingList.length; i++) {
    if (i > 5 && window.innerWidth < 1120) {
      repairingList[i].classList.toggle("hidden");
    } else if (i > 7 && window.innerWidth > 1120) {
      repairingList[i].classList.toggle("hidden");
    }
  }
});

for (let i = 0; i <= repairingList.length; i++) {
  if (i > 5 && window.innerWidth < 1120) {
    repairingList[i].classList.contains("hidden");
  } else if (i > 7 && window.innerWidth > 1120) {
    repairingList[i].classList.toggle("hidden");
  }
}
