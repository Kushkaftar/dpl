import closePopup from "./closePopup";

const popupConsultation = () => {
    const popupConsultation = document.querySelector(".popup-consultation"),
        btn = document.querySelector(".consultation-btn");

    btn.addEventListener("click", () => {
        popupConsultation.style.display = "block";
        closePopup(popupConsultation);
    });


};

export default popupConsultation;