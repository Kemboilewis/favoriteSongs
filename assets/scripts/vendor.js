const backdrop = document.getElementById("backdrop");
const addBtn = document.querySelector(".nav__button");
const modalContainer = document.getElementById("modal__addsong");

const toggleBackdrop = () => {
  console.log("toggle backdrop");
  backdrop.classList.toggle("visible");
};
const addBtnHandler = () => {
  modalContainer.classList.toggle("modal__container--visible");
  toggleBackdrop();
};

addBtn.addEventListener("click", addBtnHandler);
