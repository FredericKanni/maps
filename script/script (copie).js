var map = L.map('map');


L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);



/*
L.tileLayer('http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
		// Il est toujours bien de laisser le lien vers la source des données
		attribution: 'données © OpenStreetMap/ODbL - rendu OSM France',
		minZoom: 1,
		maxZoom: 20
	}).addTo(map);


*/



L.Routing.control({
    waypoints: [
        L.latLng(-21.10825, 55.29828),
        L.latLng(-21.10433, 55.3635),
       // L.latLng(-21.10623, 55.29771)
       // L.latLng(-21.10623, 55.29771),
       // L.latLng(-21.10368, 55.30256),
       // L.latLng(-21.1011, 55.30333),
       // L.latLng(-21.10061, 55.30897),
       // L.latLng(-21.1, 55.31219),
       // L.latLng(-21.10437, 55.32009),
       // L.latLng(-21.10433, 55.3635),
    ],
    routeWhileDragging: true
}).addTo(map);





/*
var plan = new ReversablePlan([
    L.latLng(-21.10825, 55.29828),
    L.latLng(-21.10433, 55.3635)
], {
    geocoder: L.Control.Geocoder.nominatim(),
    routeWhileDragging: true
}),
control = L.Routing.control({
    routeWhileDragging: true,
    plan: plan
}).addTo(map1);
*/










/*
function createButton(label, container) {
    var btn = L.DomUtil.create('button', '', container);
    btn.setAttribute('type', 'button');
    btn.innerHTML = label;
    return btn;
}

map.on('click', function(e) {
    var container = L.DomUtil.create('div'),
        startBtn = createButton('Start from this location', container),
        destBtn = createButton('Go to this location', container);

    L.popup()
        .setContent(container)
        .setLatLng(e.latlng)
        .openOn(map);
});


L.DomEvent.on(startBtn, 'click', function() {
    control.spliceWaypoints(0, 1, e.latlng);
    map1.closePopup();
});


L.DomEvent.on(destBtn, 'click', function() {
    control.spliceWaypoints(control.getWaypoints().length - 1, 1, e.latlng);
    map1.closePopup();
});*/