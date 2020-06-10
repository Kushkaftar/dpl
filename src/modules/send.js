const send = (body, target) => {
    const errorMassage = "что-то пошло не так...",
        loadMassage = "load...",
        successMassage = "Thanks!";

    const statusMassage = document.createElement("div");
    statusMassage.style.cssText = `font-size: 2.2rem;`;

    target.appendChild(statusMassage);

    const thenReq = () => {
        statusMassage.textContent = successMassage;
        setTimeout(() => statusMassage.remove(), 5000);
    };

    const errReq = (error) => {
        statusMassage.textContent = errorMassage;
        console.error(error);
        setTimeout(() => statusMassage.remove(), 5000);
    };

    const postData = (body) => {

        return fetch("server.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
        });
    };

    postData(body)
        .then((response) => {
            if (response.status !== 200) throw new Error("status not 200");
            thenReq()
        })
        .catch((error) => errReq(error));
};

export default send;