<template>
<div>
  <div class="bg" :style="{ 'backgroundColor' : gettersColor }"></div>
  <div class="color-box">
    <h1 :style="{ 'color' : textColor}">Vue Color pickers</h1>
    <div class="color-picker-container">
        <photoshop v-model="colors" class="photoshop" @input="onChange"></photoshop>
        <chrome v-model="colors" class="chrome" @input="onChange"></chrome>
         <sketch v-model="colors" @input="onChange"></sketch>
    </div>
    <slider style="margin:20px auto" v-model="colors"
    @input="onChange">
    </slider>
  </div>
  <div style="padding:0 60px;position: relative">
    <h3>Color palette generator</h3>
    <hr />
    <button style="position:absolute;top: 20px; right: 60px;outline:none" @click="getRandomColor" class="waves-effect waves-light btn">Generate</button>
    <div class="palette-wrapper" style="margin-bottom:60px">
      <div 
        v-for="(item, index) in colorPalette" 
        :key="index"
        :style="{ 'position':'relative','backgroundColor': item, 'height': '180px', 'width': '100%' }"
        >
        <span style="position:absolute;bottom:-25px;left:50%;letter-spacing:1px;transform:translate(-50%, 0)">{{ item }}</span>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import { Photoshop, Chrome, Sketch, Slider } from 'vue-color'
import { MapActions, MapGetters, mapActions, mapGetters } from 'vuex'
import network from '../utils/colorChange.js'

export default {
  components: {
    Photoshop,
    Chrome,
    Sketch,
    Slider
  },
  data () {
    return {
      colors: {
        hex: this.gettersColor,
        hsl: {
          h: 150,
          s: 0.5,
          l: 0.2,
          a: 1
        },
        hsv: {
          h: 150,
          s: 0.66,
          v: 0.30,
          a: 1
        },
        rgba: {
          r: 25,
          g: 77,
          b: 51,
          a: 1
        },
        a: 1
      },
      textColor: '#fff',
      colorPalette: [
          'rgb(214,78,69)',
          'rgb(247,242,163)',
          'rgb(201,216,147)',
          'rgb(57,141,112)',
          'rgb(62,80,64)'
        ]
    }
  },
  computed: {
    ...mapGetters([
      'gettersColor'
    ])
  },
  methods: {
    ...mapActions([
      'changeColor'
    ]),
    hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: Math.round(parseInt(result[1], 16) / 2.55) / 100,
            g: Math.round(parseInt(result[2], 16) / 2.55) / 100,
            b: Math.round(parseInt(result[3], 16) / 2.55) / 100
        } : null;
    },
    getRandomColor() {
      fetch('http://colormind.io/api/', {
        method: 'POST',
        body: JSON.stringify({model : "default"})
      }).then(
        res => res.json()
      )
      .then(data => {
        console.log(data)
        this.colorPalette = data.result.map(color => {
          return 'rgb(' + color.join(',') + ')'
        })
      })
      .catch(err => {
        console.log(err)
      })
    },
    onChange () {
      var result = network.run(this.hexToRgb(this.colors.hex));
      this.changeColor(this.colors.hex)
      if (result.light > result.dark) {
        this.textColor = '#1b1b1b'
      } else {
        this.textColor = '#fff'
      }
    }
  }
}
</script>
<style scoped>
  .color-box {
    margin-top: -300px;
  }
    h1 {
        margin-top: 50px;
        margin-bottom: 30px;
        text-align: center;
    }
    .color-picker-container {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .photoshop, .chrome {
        margin-right: 20px;
    }
    .bg {
      width: 100%;
      height: 60vh;
      margin-top: -50px;
    }
    .palette-wrapper {
      display: flex;
      justify-content: space-between;
    }
</style>

  
