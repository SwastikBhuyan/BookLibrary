const openModalButton = document.querySelector(".new-book");
const modal = document.querySelector(".modal");
const closeModalButton = document.querySelector(".close-btn");


function showModal() {
    modal.classList.remove("close-modal");
}

function closeModal() {
    modal.classList.add("close-modal");
}

openModalButton.addEventListener("click", () => {
    showModal();
});

closeModalButton.addEventListener("click", () => {
    closeModal();
});