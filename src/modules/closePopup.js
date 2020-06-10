import formData from "./formData";

const closePopup = (elem, body = {}) => {

    const delEvent = () => {
        elem.removeEventListener("click", blockIf);
        elem.style.display = "none";
    };
    const blockIf = (evt) => {
        let target = evt.target;

        // if (target.closest(".button")) {
        //     // console.log(target.closest("form"));
        //     formData(body, target.closest("form"));
        //
        // }

        if (target.classList.contains("popup-close")) delEvent();
        if (!target.closest(".popup-content")) delEvent();
    };

    elem.addEventListener("click", blockIf);
};

export default closePopup;