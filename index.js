// Import stylesheets
import './style.css';

// Write Javascript code!
//const appDiv = document.getElementById('app');
//appDiv.innerHTML = `<h1>JS Starter</h1>`;

//Gráfico de columnas. Mi 1o gráfico

var visualization = d3plus.viz()
.container("#viz1")
.data([{"year": 1991, "name":"alpha", "value": 15},
{"year": 1992, "name":"alpha", "value": 20},])
.type("bar")
.id("name")
.x("year")
.y("value")
.draw()


d3.json
("https://raw.githubusercontent.com/raul27868/07MBIG-Visualizacion-Actividades-Guiadas/master/columnas.json", function(data) {
var visualization = d3plus.viz()
.container("#viz2")
.data(data)
.type('bar')
.id('name')
.x('year')
.y('value')
.axes({ ticks: 'false' })
.draw();
});


d3.json
("https://raw.githubusercontent.com/Joel1995/Datos_Caja_Bigotes/main/Datos_para_caja_y_bigotes_de_la_AG3.json",
function(data) {
  var visualization = d3plus.viz()
  .container("#viz3")
  .data(data)
  .type('box')
  .id('name')
  .x('year')
  .y('value')
  .axes({ ticks: 'false' })
  .draw();
  });