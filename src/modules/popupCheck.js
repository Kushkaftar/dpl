import closePopup from "./closePopup";

const popupCheck = () => {
    const popupCheck = document.querySelector(".popup-check"),
        btn = document.querySelector(".gauging-button");

    btn.addEventListener("click", () => {
        popupCheck.style.display = "block";
        closePopup(popupCheck);
    });
};

export default popupCheck;