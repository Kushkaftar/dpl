import closePopup from "./closePopup";

const constructor = () => {
    const constructor = document.querySelector(".constructor"),
        panelCollapse = document.querySelectorAll(".panel-collapse"),
        calcResult = document.getElementById("calc-result"),
        input = constructor.querySelector("#distance"),
        a = document.querySelectorAll("a.button");



    let obj = {
            cameraNumb: 1,
            firstDiameter: 1.4,
            firstRing: 1,
            startPrice: 10000,
        },
        counterConstructor = 0,
        counterConstructor2 = 0;

    constructor.addEventListener("click", evt => {


        let target = evt.target;

        // calk price ...
        const calcPrice = () => {
            if (obj.cameraNumb === 1) {
                
                calcResult.value = obj.startPrice;
            } else {
                calcResult.value = obj.startPrice;
            }
        };

        input.addEventListener("input", evt => {

            evt.target.value = evt.target.value.replace(/[^+0-9]/gi, "");
            obj.distance = evt.target.value !== "" ? evt.target.value : "default";
            calcPrice();
        });
        //схлопывает аккордеон
        const blockCollapse = () => {
            evt.preventDefault();
            panelCollapse.forEach(elm => {
                if (elm.closest(".constructor") && elm.classList.contains("in")) {
                    elm.classList.remove("in");
                }
            });
        };

        // блок открытия/закрытия аккордеона
        if (target.closest(".panel-heading")) {

            blockCollapse();
            let elm = target.closest(".panel-heading").nextElementSibling;
            elm.classList.toggle("in");
        }

        // calc block2 ...
        const calcBlock2 = (number, select) => {
            switch (select) {
                case "1.4 метра":
                    obj[`${number}Diameter`] = 1.4;
                    console.log(obj);
                    break;
                case "2 метра":
                    obj[`${number}Diameter`] = 2;
                    console.log(obj);
                    break;
                case "1 штука":
                    obj[`${number}Ring`] = 1;
                    console.log(obj);
                    break;
                case "2 штуки":
                    obj[`${number}Ring`] = 2;
                    console.log(obj);
                    break;
                case "3 штуки":
                    obj[`${number}Ring`] = 3;
                    console.log(obj);
                    break;

            }
            calcPrice();
        };

        // block1
        if (target.id === "myonoffswitch") {
            counterConstructor++;
            obj.cameraNumb = counterConstructor % 2 === 0 ? 1 : 2;
            obj.startPrice = counterConstructor % 2 === 0 ? 10000 : 15000;
            console.log(obj);
            calcPrice();
        }

        if (target.id === "myonoffswitch-two") {
            counterConstructor2++;
            obj.bottom = counterConstructor2 % 2 === 0;
            console.log(obj, counterConstructor2);
            calcPrice();
        }

        // открываем второй блок
        if (target.closest(".button") && target.closest("a")) {
            blockCollapse();
            let elm = target.closest(".panel").nextElementSibling.lastElementChild;

            elm.classList.toggle("in");

            if (obj.cameraNumb === 1 || typeof (obj.cameraNumb) === "undefined") {
                obj.cameraNumb = 1;
                obj.startPrice = 10000;
                calcBlock2("first", "1.4 метра");
                calcBlock2("first", "1 штука");

                console.log(obj);
                calcPrice();
                document.getElementById("drainage").classList.add("hidden");
            } else {
                document.getElementById("drainage").classList.remove("hidden");
            }
        }



        // block2 ...
        if (target.closest("select")) {
            if (target.closest("#drainage")) {
                calcBlock2("drainage", target.value);
            }
            if (!target.closest("#drainage")) {
                calcBlock2("first", target.value);
            }
        }

        if (target.closest("button")) {
            document.querySelector(".popup-discount").style.display = "block";
            closePopup(document.querySelector(".popup-discount"));
        }

    });
};

export default constructor;