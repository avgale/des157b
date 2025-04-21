(function() {
    'use strict';

    const slider = document.querySelector('#slider');
    const liftPopup = document.querySelector('#lift');
    const climbPopup = document.querySelector('#climb');
    const maxPullups = document.querySelector('#max-pullups');
    const currMonth = document.querySelector('#current-month');
    let data;

    async function getData(){
        const raw = await fetch ('data/pullups.json');
        const jsonData = await raw.json();
        data = jsonData;

        slider.addEventListener('input', sliderInteraction);
    }

    getData();

    function sliderInteraction() {
        let currVal = this.value;
        let id;
        let currBar;
        let monthData;

        if (currVal == 4) { // June 2023 id + 1. currVal starts at 1 indexing, month ids start at 0.
            liftPopup.style.visibility = "visible";
        }

        if (currVal == 10) { // January 2024 id + 1.
            climbPopup.style.visibility = "visible";
        }

        for (const year in data["year"]) {
            for (const month in data["year"][`${year}`]) {
                monthData = data["year"][`${year}`][`${month}`];
                id = `${month}${year}`;
                currBar = document.querySelector(`#${id}`);

                if (monthData["id"] < currVal) {
                    currBar.style.height = `${monthData["value"] * 28}px`;
                }
                if (monthData["id"] >= currVal) {
                    currBar.style.height = '0px';
                }

                if (monthData["id"] == (currVal - 1)) {
                    const capitalMonth = month[0].toUpperCase()+ month.slice(1);
                    currMonth.innerHTML = `${capitalMonth} ${year}`;
                    maxPullups.innerHTML = `Max pull-ups: ${monthData["value"]}`;
                }
            }
        }
    }
})();