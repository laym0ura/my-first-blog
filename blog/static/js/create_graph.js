$(document).ready(function() {
  var serie_x = JSON.parse($('#serie_x').val());
  var serie_y = JSON.parse($('#serie_y').val());

  var margin = { top: 20, right: 20, bottom: 30, left: 40 },
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

  var x = d3.scaleLinear()
      .domain([0, d3.max(serie_x)])
      .range([0, width]);

  var y = d3.scaleLinear()
      .domain([0, d3.max(serie_y)])
      .range([height, 0]);

  var svg = d3.select("#scatterplot").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  svg.selectAll("circle")
      .data(serie_x)
    .enter().append("circle")
      .attr("r", 5)
      .attr("cx", function(d, i) { return x(d); })
      .attr("cy", function(d, i) { return y(serie_y[i]); });

   // Adiciona os eixos x e y ao gráfico
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  svg.append("g")
      .call(d3.axisLeft(y));
});