/** --------- Geolocation **/

/* Geolocation */
/**
 * Get location from google API
 */
 

function Geo(position) {
  var lat = position.coords.latitude;
  localStorage.setItem("glat",lat);
  var FinalLat=localStorage.getItem("glat");
  document.getElementById('latitude').innerHTML = lat;

  var lng = position.coords.longitude;
  localStorage.setItem("glng",lng);
  var FinalLng=localStorage.getItem("glng");
  document.getElementById('longitude').innerHTML = lng;
}

function erreurGeo(erreur){
  var msg;
  switch(erreur.code){
    case erreur.TIMEOUT:
      msg = 'Le temps de la requete a expire';
    break;
    case erreur.UNKNOW_ERREUR:
      msg = 'Erreur inconnu';
    break;
    case erreur.POSITION_UNAVAILABLE:
      msg = 'position indisponible';
    break;
    case erreur.PERMISSION_DENIED:
      msg = 'Vous avez refuse la geolocalisation';
    break;
  }
  alert(msg);
}


function get_city_name() {
  var lat = localStorage.getItem("glat");
  var lng = localStorage.getItem("glng");
  var latlng = new google.maps.LatLng(lat, lng);

  new google.maps.Geocoder().geocode({'latLng' : latlng}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
          if (results[1]) {
              var country = null, countryCode = null, city = null, cityAlt = null;
              var c, lc, component;
              for (var r = 0, rl = results.length; r < rl; r += 1) {
                  var result = results[r];

                  if (!city && result.types[0] === 'locality') {
                      for (c = 0, lc = result.address_components.length; c < lc; c += 1) {
                          component = result.address_components[c];

                          if (component.types[0] === 'locality') {
                              city = component.long_name;
                              break;
                          }
                      }
                  }
                  else if (!city && !cityAlt && result.types[0] === 'administrative_area_level_1') {
                      for (c = 0, lc = result.address_components.length; c < lc; c += 1) {
                          component = result.address_components[c];

                          if (component.types[0] === 'administrative_area_level_1') {
                              cityAlt = component.long_name;
                              break;
                          }
                      }
                  } else if (!country && result.types[0] === 'country') {
                      country = result.address_components[0].long_name;
                      countryCode = result.address_components[0].short_name;
                  }

                  if (city && country) {
                      break;
                  }
              }

              console.log("City: " + city + ", City2: " + cityAlt + ", Country: " + country + ", Country Code: " + countryCode);
              document.getElementById('city').innerHTML = city +", "+ country;
              document.getElementById('villesm').innerHTML = city +", "+ country;
          }
      }
  });
}


function reloadpage(){
  //Check if the current URL contains '#'
  if(document.URL.indexOf("#")==-1){
  // Set the URL to whatever it was plus "#".
  url = document.URL+"#";
  location = "#";

  //Reload the page
  location.reload(true);
  }
};


// ** App Start **/

if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(Geo,erreurGeo,{maximumAge : 120000});
  navigator.geolocation.getCurrentPosition(get_city_name),erreurGeo,{maximumAge : 120000};
}
else {

}