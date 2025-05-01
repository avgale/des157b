(function () {
  'use strict';

  AOS.init();
  
  // Flip arrow
  window.addEventListener('scroll', function () {
    if (window.innerHeight + window.pageYOffset + 10 >= document.body.offsetHeight) {
      document.querySelector("#arrow").style.transform = 'translate(-50%, -50%) scaleY(-1)';
    }
    if (window.innerHeight + window.pageYOffset <= 760) {
      document.querySelector("#arrow").style.transform = 'translate(-50%, -50%) scaleY(1)';
    }
  });

  // pH graph
  createGraph("pHlevel", "pH");
  // Sea surface temperature graph
  createGraph("sst", "sst");

  function createGraph(dependentVariable, elementId) {
    const margin = { top: 10, right: 30, bottom: 30, left: 60 };
    const width = 600 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const svg = d3.select(`#${elementId}`)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    d3.csv("data/ocean_climate_data.csv", function (d) {
      return {
        date: d3.timeParse("%Y-%m-%d")(d.date),
        value: +d[dependentVariable],
        location: d.location
      };
    }).then(function (data) {
      const filteredData = data.filter(d => d.location === "Hawaiian Islands");

      const x = d3.scaleTime()
        .domain(d3.extent(filteredData, d => d.date))
        .range([0, width]);
      svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x));

      const y = d3.scaleLinear()
        .domain([
          d3.min(filteredData, d => d.value) - 0.1,
          d3.max(filteredData, d => d.value) + 0.1
        ])
        .range([height, 0]);
      svg.append("g")
        .call(d3.axisLeft(y));

      svg.append("path")
        .datum(filteredData)
        .attr("fill", "none")
        .attr("stroke", "white")
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
          .x(d => x(d.date))
          .y(d => y(d.value))
        );
    });
  }

})();