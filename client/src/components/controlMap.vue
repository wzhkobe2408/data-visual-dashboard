<template>
  <div id='map'></div>
</template>
<script>
export default {
  mounted() {
    	var cities = L.layerGroup();
      L.marker([34.29353, 108.94197]).bindPopup('This is Wei Yang.').addTo(cities),
      L.marker([34.270269, 108.86919]).bindPopup('This is Zao Yuan.').addTo(cities),
      L.marker([34.283319, 109.054913]).bindPopup('This is Xi Wang Street.').addTo(cities),
      L.marker([34.252109, 108.977327]).bindPopup('This is Xian Nin East Street.').addTo(cities);
      var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
          '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
      var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr}),
        streets  = L.tileLayer(mbUrl, {id: 'mapbox.streets',   attribution: mbAttr});
      var map = L.map('map', {
        center: [34.274808, 108.962997],
        zoom: 13,
        layers: [grayscale, cities]
      });
      var baseLayers = {
        "Grayscale": grayscale,
        "Streets": streets
      };
      var overlays = {
        "Cities": cities
      };
      L.control.layers(baseLayers, overlays).addTo(map);
  }
}
</script>
<style scoped>
		#map {
			width: 100%;
			height: 500px;
      margin-bottom: 10px;
      border-radius: 4px;
      border: 1px solid #d6d6d6;
      box-shadow: 0 0 1px 0px rgba(0,0,0,0.1);
		}
</style>



