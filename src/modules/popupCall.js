import closePopup from "./closePopup";

const  popupCall = () => {
    const callBtn = document.querySelectorAll("a.call-btn"),
        popupCall = document.querySelector(".popup-call");

    callBtn.forEach(elm => {
        elm.addEventListener("click", () => {
            popupCall.style.display = "block"
            closePopup(popupCall);
        });
    });

};

export default popupCall;