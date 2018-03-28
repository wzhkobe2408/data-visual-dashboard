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
      textColor: '#000'
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
</style>

  
