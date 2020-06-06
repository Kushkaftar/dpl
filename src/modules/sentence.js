const sentence = () => {
    const btn = document.querySelector(".add-sentence-btn"),
        div = document.querySelectorAll(".shadow-block");

    const addElement = () => {
        div.forEach(elm => {
            let e = elm.parentElement
            if (e.classList.contains("visible-sm-block")) e.classList.remove("visible-sm-block");
            if (e.classList.contains("hidden")) e.classList.remove("hidden");
        });

        btn.removeEventListener("click", addElement);
        btn.classList.add("hidden");
    };

    btn.addEventListener("click", addElement);
};

export default sentence;