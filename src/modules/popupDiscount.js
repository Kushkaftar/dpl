import closePopup from "./closePopup";
import formData from "./formData";

const popupDiscount = (body = {}) => {
    const popupDiscount = document.querySelector(".popup-discount"),
        formP = popupDiscount.querySelector("form"),
        btn = document.querySelectorAll(".sentence-btn");

    console.log(body);
    formP.addEventListener("submit", (evt) => formData(evt, body));

    btn.forEach(elm => {
        elm.addEventListener("click", () => {
            popupDiscount.style.display = "block";
            closePopup(popupDiscount);
        })
    });


};

export default popupDiscount;