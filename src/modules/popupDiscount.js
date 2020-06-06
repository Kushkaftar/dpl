import closePopup from "./closePopup";

const popupDiscount = () => {
    const popupDiscount = document.querySelector(".popup-discount"),
        btn = document.querySelectorAll(".sentence-btn");

    btn.forEach(elm => {
        elm.addEventListener("click", () => {
            popupDiscount.style.display = "block";
            closePopup(popupDiscount);
        })
    });


};

export default popupDiscount;