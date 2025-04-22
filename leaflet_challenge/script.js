(function(){
    'use strict';

    var map = L.map('map').setView([37.463638, -122.429237], 13);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([37.463638, -122.429237]).addTo(map);
    marker.bindPopup("This is my hometown!").openPopup();

    var circle = L.circle([37.476680, -122.431755], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);
    circle.bindPopup("This is my street.");

    var polygon = L.polygon([
        [37.481161, -122.449811],
        [37.472023, -122.445120],
        [37.470838, -122.447892],
        [37.479807, -122.451730]
    ]).addTo(map);
    polygon.bindPopup("This is a popular area for tourists.");
}());