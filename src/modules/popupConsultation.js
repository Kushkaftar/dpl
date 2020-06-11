import closePopup from "./closePopup";
import formData from "./formData";

const popupConsultation = () => {
    const popupConsultation = document.querySelector(".popup-consultation"),
        btn = document.querySelector(".consultation-btn"),
        form = document.querySelector(".director-form"),
        formP = popupConsultation.querySelector("form"),
        input = document.getElementById("director-form");

    let body ={};

    form.addEventListener("submit", evt => evt.preventDefault());

    const clp = () => {
        popupConsultation.style.display = "block";
        if (input.value !== "") body.user_quest = input.value;

        closePopup(popupConsultation);
        btn.removeEventListener("click", () => clp());
    };

    btn.addEventListener("click", () => clp());



    formP.addEventListener("submit", (evt) => formData(evt, body));


};

export default popupConsultation;