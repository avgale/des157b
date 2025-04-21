(function() {
    'use strict';

    const slider = document.querySelector('#slider');
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
        for (const year in data["year"]) {
            for (const month in data["year"][`${year}`]) {
                monthData = data["year"][`${year}`][`${month}`];
                id = `${month}${year}`;
                currBar = document.querySelector(`#${id}`);
                if (monthData["id"] < currVal) {
                    currBar.style.height = `${monthData["value"] * 28}px`;
                }
                if (monthData["id"] > currVal) {
                    currBar.style.height = '0px';
                }
            }
        }
    }
})();