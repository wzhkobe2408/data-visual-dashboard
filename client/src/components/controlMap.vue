<template>
  <div class="map-wrapper">
  <div id='map'></div>
  <div class="info-window">
    <img class="maker-photo" :src="imgUrl" alt="img">
    <div class="text-part">
      <h4 style="margin-bottom: 10px;margin-top: 0px">This is the name</h4>
      <p>This is the introduction: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet totam, distinctio recusandae fugit adipisci vitae porro non! Eligendi amet omnis </p>
      <p>This is the mode <span>😄</span></p>
      <p>2018-04-01</p>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgUrl: 'https://images.unsplash.com/photo-1510776632413-f3e527a8dc42?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a5703227ec13ae76e69fda1ad27da26f&auto=format&fit=crop&w=750&q=80'
    }
  },
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
        zoom: 12,
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
    .map-wrapper {
      position: relative;
      width: 100%;
    }
		#map {
			display: block;
      margin-right: 296px;
			height: 500px;
      margin-bottom: 10px;
      border-radius: 4px 0 0 4px;
      border: 1px solid #d6d6d6;
      width: 840px !important;
      box-shadow: 0 0 1px 0px rgba(0,0,0,0.1);
		}
    .info-window {
      height: 500px;
      width: 300px;
      position: absolute;
      top: 0;
      right:0;
      background: rgb(243, 243, 243);
      z-index: 1000;
      border:1px solid #d8d8d8;
      box-shadow: 0px 0 2px rgba(0,0,0,0.1);
    }
    .maker-photo {
      width: 100%;
      margin-bottom: 20px;
    }
    .text-part {
      padding: 0 10px 10px 10px;
    }
</style>



