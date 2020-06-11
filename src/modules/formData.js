import send from "./send";

const formData = (e, body = {}) => {

    e.preventDefault();
    console.log(body);
    let target = e.target;

    let formClear = target.querySelectorAll("input");


    const formData = new FormData(target);
    formData.forEach((val, key) => body[key] = val);

    send(body, target);

    formClear.forEach(elm => elm.value = "");
};

export default formData;