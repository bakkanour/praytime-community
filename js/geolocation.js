// Get some help from: https://wiki.openstreetmap.org/wiki/FR:Nominatim

function initGeolocation()
{
    if( navigator.geolocation )

    {
        // Call getCurrentPosition with success and failure callbacks
        navigator.geolocation.getCurrentPosition( success, fail );
    }
    else{
        alert("Sorry, your browser does not support geolocation services.");
    }
}

function success(position)
{
    if (position.coords.longitude) {
        //document.getElementById('longitude').innerHTML = position.coords.longitude;
        //document.getElementById('latitude').innerHTML = position.coords.latitude;

        localStorage.setItem("cLng",position.coords.longitude);
        localStorage.setItem("cLat",position.coords.latitude);

        var urlOsm = "https://nominatim.openstreetmap.org/reverse?format=json&lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&zoom=6&addressdetails=1";
        $.getJSON(urlOsm, function (osmResults) {
            localStorage.setItem("cTown",osmResults.address.postcode+" - "+osmResults.address.town+", "+osmResults.address.country);
            //document.getElementById('ville').innerHTML = osmResults.address.town;
            console.log(osmResults);
        });
    }
}

function fail()
{
        // Could not obtain location
}