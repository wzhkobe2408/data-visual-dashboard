<template>
<div class="threed-wrapper">
    <h2>3D Scene</h2>
    <hr />
    <div class="threed-container">
        
        <vue-particles
        class="particle-bg"
        color="#20c997"
        :particleOpacity="0.7"
        :particlesNumber="150"
        shapeType="circle"
        :particleSize="particleSize"
        linesColor="#20c997"
        :linesWidth="linesWidth"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="moveSpeed"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
        <div class="control-panel">
            <h4>Control Panel</h4>
            <div class="block">
                <span class="demonstration">光强</span>
                <el-slider v-model="particlesNumber" ></el-slider>
            </div>
            <div class="block">
                <span class="demonstration">转速</span>
                <el-slider v-model="particleSize"></el-slider>
            </div>
            <div class="block">
                <span class="demonstration">X轴</span>
                <el-slider v-model="linesWidth" ></el-slider>
            </div>
            <div class="block">
                <span class="demonstration">Y轴</span>
                <el-slider v-model="moveSpeed"></el-slider>
            </div>
            <div class="block">
                <span class="demonstration">Z轴</span>
                <el-slider v-model="value5"></el-slider>
            </div>
        </div>
        <Earth :speed="speed" class="earth" />
        <el-switch
			@change="changeSpeed"
            class="switch"
			size="large"
            active-text="旋转"
            inactive-text="停止"
            v-model="value6"
            active-color="#13ce66"
            inactive-color="#636fbd">
        </el-switch>
    </div>
</div>
</template>
<script>
import Earth from '@/components/Earth.vue'
import { mapActions } from 'vuex'

export default {
      components: {
          Earth
      },
      data() {
      return {
		speed: 0.01,
        particlesNumber: 350,
        particleSize: 4,
        linesWidth: 1,
        moveSpeed: 3,
        value5: 42,
        value6: true
      }
    },
    methods: {
    ...mapActions([
        'stopLoading',
        'startLoading'
    ]),
      formatTooltip(val) {
        return val / 100;
      },
	  changeSpeed() {
		this.speed > 0? 0 : 0.01
	  }
    },
    mounted() {
        this.stopLoading()
    },
    beforeDestroy() {
        this.startLoading()
    }
  }
</script>
<style scoped>
    h3 {
        margin-top: 10px;
    }
    .earth {
        height: 680px;
    }
    .threed-wrapper {
        width: 90%;
        margin: 0 auto;
    }
    .threed-container {
        position: relative;
        width: 100%;
        margin: 0 auto;
        height: 680px;
    }
    .control-panel {
        position: absolute;
        padding: 10px 40px;
        color:#fff;
        top:10px;
        right:0;
        z-index:499;

    }
    .title {
        z-index:101;
        position: absolute;
        top: 0px;
        left:30px;
        color:#fff;
    }
    .switch {
        position: absolute;
        top: 40px;
        left: 40px;
    }
    .particle-bg {
        position: absolute;
        width: 100%;
        height: 100%
    }
    .control-panel {
        width: 350px;
    }
</style>
