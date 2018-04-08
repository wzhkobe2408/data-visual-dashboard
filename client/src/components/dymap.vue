<template>
	<div id="mapid" style="width: 100%; height: 400px;border: 1px solid #d6d6d6;box-shadow: 0 0 1px rgba(0,0,0,0.2);">
	</div>
</template>
<script>
	export default {
		data() {
			return {
				drawLineControl: false,
				polygons: []
			}
		},
		methods: {
			drawLine() {
				L.polygon([
					[51.509, -0.08],
					[51.503, -0.06],
					[51.51, -0.047]
				]).addTo(mymap).bindPopup("I am a polygon.");
			}
		},
		mounted() {
				var mymap = L.map('mapid').setView([34.263, 108.941], 13);
				L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
					maxZoom: 18,
					attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
						'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
						'Imagery © <a href="http://mapbox.com">Mapbox</a>',
					id: 'mapbox.streets'
				}).addTo(mymap);
				L.marker([34.263, 108.941]).addTo(mymap)
					.bindPopup("<b>Hello!</b><br />You are now located to Xi'An.").openPopup();
				L.circle([34.263, 108.941], 500, {
					color: 'black',
					fillColor: '#000',
					fillOpacity: 0.5
				}).addTo(mymap).bindPopup("I am a circle.");
				var lineArr = []
				var maker = []
				var index = 0
				var isNewLine = true
				// L.polygon([
				// 	[51.509, -0.08],
				// 	[51.503, -0.06],
				// 	[51.51, -0.047]
				// ]).addTo(mymap).bindPopup("I am a polygon.");
				// var popup = L.popup();
				function onMapClick(e) {
				// popup
				// 	.setLatLng(e.latlng)
				// 	.setContent("You clicked the map at " + e.latlng.toString())
				// 	.openOn(mymap);
				var maker = L.marker(e.latlng, { draggable: true })
				maker.addTo(mymap)
				.bindPopup("<b>Hello!</b><br />You are now located at " + e.latlng.toString()).on('click', (e) => {
					if (!isNewLine) { // draw old line
						lineArr[index].push([e.latlng.lat, e.latlng.lng])
					} else { // draw new line
						lineArr[index] = [];
						lineArr[index].push([e.latlng.lat, e.latlng.lng])
						isNewLine = false
					}
					L.polyline(lineArr[index]).addTo(mymap)
				}).openPopup();
			}
			mymap.on('click', onMapClick)
			mymap.on('contextmenu',function(e){
					isNewLine = true
					index++
			});
			}
		}
</script>
<style scoped>
	.mapid {	
		position: relative;
	}
	.btn {
		position: absolute;
		top: 20px;
		right: 20px;
		z-index: 1000;
	}
</style>


