const closePopup = (elem) => {

    const delEvent = () => {
        elem.removeEventListener("click", evt => blockIf(evt));
        elem.style.display = "none";
    };
    const blockIf = (evt) => {
        let target = evt.target;

        if (target.classList.contains("popup-close")) delEvent();
        if (!target.closest(".popup-content")) delEvent();
    };

    elem.addEventListener("click", evt => blockIf(evt));
};

export default closePopup;