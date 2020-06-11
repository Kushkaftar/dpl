import popupDiscount from "./popupDiscount";
import closePopup from "./closePopup";

const constructor = () => {
    const constructor = document.querySelector(".constructor"),
        panelCollapse = document.querySelectorAll(".panel-collapse"),
        calcResult = document.getElementById("calc-result"),
        popupDiscounts = document.querySelector(".popup-discount"),
        input = constructor.querySelector("#distance");



    let obj = {
            cameraNumb: 1,
            firstDiameter: 1.4,
            firstRing: 1,
            startPrice: 10000,
        },
        counterConstructor = 0,
        counterConstructor2 = 0;

    constructor.addEventListener("click", evt => {

        // block4 input
        input.addEventListener("input", evt => {

            evt.target.value = evt.target.value.replace(/[^+0-9]/gi, "");
            obj.distance = evt.target.value !== "" ? evt.target.value : "default";
            calcPrice();
        });

        let target = evt.target;

        const ringPercent = (number) => {
            switch (number) {
                case 1:
                    return 0;
                case 2:
                    return 30;
                case 3:
                    return 50;
            }
        };

        // calk price ...
        const calcPrice = () => {
            if (obj.cameraNumb === 1) {
                let ringPercents = obj.firstRing ? ringPercent(obj.firstRing) : 0;
                let firstDiameter = obj.firstDiameter === 2 ? 30 : 0;
                let bottom = obj.bottom ? 1000 : 0;
                let percent = firstDiameter + ringPercents;
                obj.price = percent !== 0 ? obj.startPrice + obj.startPrice * percent / 100: obj.startPrice
                obj.price += bottom;
                calcResult.value = obj.price;
            } else {
                let drainageRingPercent = ringPercent(obj.drainageRing);
                let ringPercents = ringPercent(obj.firstRing);
                let drainageDiameter = obj.drainageDiameter === 2 ? 30 : 0;
                let firstDiameter = obj.firstDiameter === 2 ? 30 : 0;
                let bottom = obj.bottom ? 2000 : 0;
                let percent = drainageDiameter + firstDiameter + ringPercents + drainageRingPercent;
                obj.price = percent !== 0 ? obj.startPrice + obj.startPrice * percent / 100: obj.startPrice
                obj.price += bottom;
                calcResult.value = obj.price;
            }
        };


        //схлопывает аккордеон
        const blockCollapse = () => {
            evt.preventDefault();
            panelCollapse.forEach(elm => {
                if (elm.closest(".constructor") && elm.classList.contains("in")) {
                    elm.classList.remove("in");
                }
            });
        };

        //схлопыват блок ввода взависимости от количества тип септика
        const closeBlock2 = () => {
            if (obj.cameraNumb === 1) {
                document.getElementById("drainage").classList.add("hidden");
            } else {
                document.getElementById("drainage").classList.remove("hidden");
            }
        }

        // блок открытия/закрытия аккордеона
        if (target.closest(".panel-heading")) {

            blockCollapse();
            let elm = target.closest(".panel-heading").nextElementSibling;
            elm.classList.toggle("in");
            closeBlock2();
            calcPrice();
        }

        // calc block2 ...
        const calcBlock2 = (number, select) => {
            switch (select) {
                case "1.4 метра":
                    obj[`${number}Diameter`] = 1.4;
                    break;
                case "2 метра":
                    obj[`${number}Diameter`] = 2;
                    break;
                case "1 штука":
                    obj[`${number}Ring`] = 1;
                    break;
                case "2 штуки":
                    obj[`${number}Ring`] = 2;
                    break;
                case "3 штуки":
                    obj[`${number}Ring`] = 3;
                    break;

            }
            calcPrice();
        };

        // block1
        if (target.id === "myonoffswitch") {
            counterConstructor++;
            if (counterConstructor % 2 === 0){
                obj.cameraNumb = 1;
                obj.startPrice = 10000;
                obj.drainageDiameter ? delete obj.drainageDiameter : obj;
                obj.drainageRing ? delete obj.drainageRing : obj;
            } else {
                obj.cameraNumb = 2;
                obj.startPrice = 15000;
                obj.drainageDiameter = 1.4;
                obj.drainageRing = 1;
            }
            calcPrice();
        }

        if (target.id === "myonoffswitch-two") {
            counterConstructor2++;
            obj.bottom = counterConstructor2 % 2 === 0;
            calcPrice();
        }

        // opn block
        if (target.closest(".button") && target.closest("a")) {
            blockCollapse();
            let elm = target.closest(".panel").nextElementSibling.lastElementChild;

            elm.classList.toggle("in");

            if (obj.cameraNumb === 1 || typeof (obj.cameraNumb) === "undefined") {
                document.getElementById("drainage").classList.add("hidden");
                calcPrice();
            } else {
                document.getElementById("drainage").classList.remove("hidden");
                calcPrice();
            }
        }

        if (target.closest("#headingThree")) {
            obj.bottom = true;
            calcPrice();
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
            popupDiscounts.style.display = "block";
            closePopup(popupDiscounts);
            popupDiscount(obj);
        }


    });
};

export default constructor;