const questions = () => {
    const question = document.querySelector(".questions"),
        panelCollapse = document.querySelectorAll(".panel-collapse");

    question.addEventListener("click", evt => {
        evt.preventDefault();


        let target = evt.target;

        if (target.matches("a")) {

            panelCollapse.forEach(elm => {
                if (elm.closest(".questions") && elm.classList.contains("in")) {
                    elm.classList.remove("in");
                }
            });
            let elm = target.closest(".panel-heading").nextElementSibling;
            elm.classList.toggle("in");
        }

    });

};

export default questions;