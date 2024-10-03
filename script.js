let map = L.map('map',{
    center: [20.0, 5.0],
})
.setView([41.66, -4.72], 15); 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 17,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
L.control.scale().addTo(map);
L.marker([41.66, -4.71],{draggable: true}).addTo(map);
document.querySelector("#geolocalizar").addEventListene
function whereAmI() {
    var myresult = document.getElementById("demo");
    if (!navigator.geolocation) {
        myresult.innerHTML = "<p>La geolocalización no es soportada por tu navegador</p>";
        return;
    }
 
    function success(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        myresult.innerHTML = "Ubicación conseguida!";
        makeMyMap(latitude, longitude);
    }
 
    function error() {
        myresult.innerHTML = "Error al conseguir tu localización";
    }
    myresult.innerHTML = "<p>Localizando...</p>";
    navigator.geolocation.getCurrentPosition(success, error);
}

function makeMyMap(mylat, mylong) {
    map.setView([mylat,mylong], 12); 
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 17,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    L.marker([mylat, mylong]).addTo(map)
            .bindPopup("<b>You are here!</b>").openPopup();
}
function mostrarArgentina(){
    map.setView([-38.416097,-63.616672], 3);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 17,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}
document.querySelector("#argentina").addEventListener("click",mostrarArgentina);
document.querySelector("#geolocalizar").addEventListener("click",whereAmI);