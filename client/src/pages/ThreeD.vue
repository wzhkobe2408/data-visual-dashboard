<template>
    <div class="threed-container">
        <h1>This is the 3d scene</h1>
        <div class="control-panel">
            <h3>This is the control-panel</h3>
            <div class="block">
                <span class="demonstration">默认</span>
                <el-slider v-model="value1"></el-slider>
            </div>
            <div class="block">
                <span class="demonstration">自定义初始值</span>
                <el-slider v-model="value2"></el-slider>
            </div>
            <div class="block">
                <span class="demonstration">隐藏 Tooltip</span>
                <el-slider v-model="value3" :show-tooltip="false"></el-slider>
            </div>
            <div class="block">
                <span class="demonstration">格式化 Tooltip</span>
                <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
            </div>
            <div class="block">
                <span class="demonstration">禁用</span>
                <el-slider v-model="value5" disabled></el-slider>
            </div>
        </div>
        <Earth class="earth" />
    </div>
</template>
<script>
import Earth from '@/components/Earth.vue'

export default {
      components: {
          Earth
      },
      data() {
      return {
        value1: 0,
        value2: 50,
        value3: 36,
        value4: 48,
        value5: 42
      }
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      }
    }
  }
</script>
<style scoped>
    h3 {
        margin-top: 10px;
    }
    .threed-container {
        position: relative;
        width: 100%;
        height: 100vh;
    }
    .control-panel {
        position: absolute;
        padding: 10px 40px;
        border-radius: 2px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        top:0;
        right:0;
    }
    .earth {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
</style>
