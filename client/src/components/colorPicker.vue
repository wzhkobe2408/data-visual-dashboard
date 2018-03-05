<template>
  <div>
    <h1 :style="{color:colors.hex}">Vue Color pickers</h1>
    <div class="color-picker-container">
        <photoshop v-model="colors" class="photoshop" @change-color="onChange"></photoshop>
        <chrome v-model="colors" class="chrome" @change-color="onChange"></chrome>
         <sketch v-model="colors" @change-color="onChange"></sketch>
    </div>
    <slider style="margin:20px auto" v-model="colors"
    @change-color="onChange">
    </slider>
    <button class="btn btn-primary" @click="changeColor('#fff')">Change coolor</button>
  </div>
</template>

<script>
import { Photoshop, Chrome, Sketch, Slider } from 'vue-color'
import { MapActions, MapGetters, mapActions, mapGetters } from 'vuex'

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
      }
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
    onChange (val) {
      this.colors = val;
    }
  }
}
</script>
<style scoped>
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
</style>

  
