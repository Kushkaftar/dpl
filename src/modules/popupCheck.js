import closePopup from "./closePopup";
import formData from "./formData";

const popupCheck = () => {
    const popupCheck = document.querySelector(".popup-check"),
        formP = popupCheck.querySelector("form"),
        btn = document.querySelector(".gauging-button");

    formP.addEventListener("submit", (evt) => formData(evt));

    btn.addEventListener("click", () => {
        popupCheck.style.display = "block";
        closePopup(popupCheck);
    });
};

export default popupCheck;