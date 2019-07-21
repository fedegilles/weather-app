window.addEventListener("load", ()=> {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitud;
      lat = position.coords.latitude;

      const api = 'https://api.darksky.net/forecast/173c9f0771391a0a4426c698929008af/$(lat),$(long)';
    });

    fetch()
  }
});
