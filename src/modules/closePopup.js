const closePopup = (elem) => {

    const delEvent = () => {
        elem.removeEventListener("click", blockIf);
        elem.style.display = "none";
    };
    const blockIf = (evt) => {
        let target = evt.target;

        if (target.classList.contains("popup-close")) delEvent();
        if (!target.closest(".popup-content")) delEvent();
    };

    elem.addEventListener("click", blockIf);
};

export default closePopup;