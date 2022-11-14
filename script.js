var settings = {
    "url": "https://api-adresse.data.gouv.fr/search/?q=09 Rue des Mimosas 93600&type=housenumber&autocomplete=1",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    LeafletSection(response.features[0].geometry.coordinates);
  });

  const LeafletSection = (coordinates) => {

    console.log(coordinates)

    var tableauValeur = (coordinates) => {

        console.log(settings);
    }



var tableauValeur = [
    [48.905, 2,48],
    [48.805, 2,58],
    [48.705, 2,68],
    [48.605, 2,78],
    [48.505, 2,88]
]



var map = L.map('map').setView([tableauValeur[0][0], tableauValeur[0][1]], 13);

var marker = (L.marker([tableauValeur[0][0], tableauValeur[0][1]]).addTo(map));
for (const element of tableauValeur) {
    var marker = L.marker([element[0], element[1]]).addTo(map);
}


var polygon = L.polygon([
    [48.900, 2.48],
    [48.850, 2.45],
    [48.800, 2.40]
]).addTo(map);

var circle = L.circle([48.950, 2.48], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


  }