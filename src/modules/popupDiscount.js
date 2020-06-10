import closePopup from "./closePopup";
import formData from "./formData";

const popupDiscount = () => {
    const popupDiscount = document.querySelector(".popup-discount"),
        formP = popupDiscount.querySelector("form"),
        btn = document.querySelectorAll(".sentence-btn");

    formP.addEventListener("submit", (evt) => formData(evt));

    btn.forEach(elm => {
        elm.addEventListener("click", () => {
            popupDiscount.style.display = "block";
            closePopup(popupDiscount);
        })
    });


};

export default popupDiscount;