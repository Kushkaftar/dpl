import closePopup from "./closePopup";
import formData from "./formData";

const  popupCall = () => {
    const callBtn = document.querySelectorAll("a.call-btn"),
        popupCall = document.querySelector(".popup-call"),
        formP = popupCall.querySelector("form");


    formP.addEventListener("submit", (evt) => formData(evt));

    callBtn.forEach(elm => {
        elm.addEventListener("click", () => {
            popupCall.style.display = "block"
            closePopup(popupCall);
        });
    });

};

export default popupCall;