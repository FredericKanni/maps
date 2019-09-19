

/*var map = L.map('map');

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

 L.Routing.control({
    waypoints: [
        L.latLng(-21.10746, 55.29599),
        L.latLng(-21.10746, 55.29599)
    ],
    routeWhileDragging: true
}).addTo(map);



*/






 /* let corner1 = L.latLng(-21.096192, 55.310154);
    let corner2 = L.latLng(-21.112207, 55.284576);
    let bounds = L.latLngBounds(corner1, corner2);
     */

    let mymap = L.map('map', {
        maxZoom: 18,
        minZoom: 10,
        maxBounds: [
            //south west
            [-21.39938, 55.17609],
            //north east
            [-20.84598, 55.82977]
        ],
    }).setView([-21.1255, 55.51804], 9);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors',
        //bounds: bounds
    }).addTo(mymap);


   
    L.Routing.control({
        waypoints: [
           /* L.latLng(-21.10825, 55.29828),
            L.latLng(-21.10746, 55.29599)*/

            L.latLng(-21.10825, 55.29828),
            L.latLng(-21.10746, 55.29599),
            L.latLng(-21.10623, 55.29771),
            L.latLng(-21.10368, 55.30256),
            L.latLng(-21.1011, 55.30333),
            L.latLng(-21.10061, 55.30897),
            L.latLng(-21.1, 55.31219),
            L.latLng(-21.10437, 55.32009),
            L.latLng(-21.10433, 55.3635),
        ],
        routeWhileDragging: true
    }).addTo(mymap);
    

    var popup = L.popup()
        .setLatLng([-21.11075, 55.285944])
        .setContent("Je suis un popup fragile")
        .openOn(mymap);

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("tu a cliquer au " + e.latlng.toString())
            .openOn(mymap);
    }
    mymap.on('click', onMapClick);

