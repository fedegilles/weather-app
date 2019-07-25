$(document).ready(function () {
  var lat;
  var long;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {

      lat = position.coords.latitude;
      long = position.coords.longitude;

      var api = 'https://fcc-weather-api.glitch.me/api/current?lat=' + lat + '&lon=' + long + '';

      $.getJSON(api, function (res) {

        var celsius = res.main.temp;
        var farenheit = (celsius * 1.8) + 32;

        var location = res.name;

        $('.weather-location').html(location);
        $('.temp').html(Math.floor(celsius));
        $('.weather-description').html(res.weather[0].description);
        $('.weatherType').attr('id', res.weather[0].main);
        $('.row2').on('click', function () {
          if ($('.temp').html() == (Math.floor(celsius))) {
            $('.temp').html(Math.floor(farenheit));
            $('.temp-type').html('°F');
          }
           
          else {
            $('.temp').html(Math.floor(celsius));
            $('.temp-type').html('°C');
          }
        });
      });
    });
  }
});
