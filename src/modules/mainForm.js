import formData from "./formData";

const mainForm = () => {
    const mForm = document.querySelector(".main-form"),
        cForm = document.querySelector(".capture-form");

    mForm.addEventListener("submit", (evt) => formData(evt));
    cForm.addEventListener("submit", (evt) => formData(evt));
};

export default mainForm;