document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const popupImage = popup.querySelector(".popup__image");
  const closeBtn = popup.querySelector(".popup__close");
  const body = document.querySelector("body");

  document.querySelectorAll(".works__item").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const imgSrc = link.querySelector(
        ".works__item-img,.works__item-img-big"
      ).src;
      popupImage.src = imgSrc;
      popup.classList.add("visible");
      body.classList.add("lock");
    });
  });

  closeBtn.addEventListener("click", () => {
    popup.classList.remove("visible");
    body.classList.remove("lock");
  });

  // Закрытие по клику вне контента
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.remove("visible");
      body.classList.remove("lock");
    }
  });
});
