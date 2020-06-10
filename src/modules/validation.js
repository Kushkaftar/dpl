const validation = () => {
    const body = document.querySelector("body");

    body.addEventListener("input", evt => {

        let target = evt.target;

        if (target.hasAttribute("name")) inputValid(evt);
    });

    const inputValid = (evt) => {

        let target = evt.target;

        switch (target.getAttribute("name")) {
            case "user_name":
                target.value = evt.target.value.replace(/[^А-ЯЁа-яё\s]/g, "");
                break;
            case "user_phone":
                evt.target.value = evt.target.value.replace(/[^+0-9]/gi, "");
                break;
        }
    }
};

export default validation;