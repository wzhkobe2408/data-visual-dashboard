<template>
    <div class="about-page">
        <color-picker class="color-picker"></color-picker>
        <RadarCharts class="radar" />
        <BubbleCharts class="bubble" />
    </div>
</template>
<script>
import ColorPicker from '@/components/colorPicker'
import RadarCharts from '@/components/radarCharts.js'
import BubbleCharts from '@/components/bubbleCharts.js'

export default {
    components: {
        ColorPicker,
        RadarCharts,
        BubbleCharts
    }
}
</script>
<style scoped>
    .background {
        position: absolute;
        top: 50px;
        left: 0;
        background-color: rgb(222, 250, 120);
        width: 100%;
        height: 40%;
        z-index: 0;
    }
    .color-picker {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        z-index: 100;
    }
    .radar {
        position: relative;
        top:526px;
        background: #fff;
        padding: 10px 0;
        box-shadow: 0 0 10px 2px rgba(0,0,0,0.1);
        margin-bottom: 20px;
    }
    .bubble {
        position: relative;
        top:526px;
        background: #fff;
        padding: 10px 0;
        box-shadow: 0 0 10px 2px rgba(0,0,0,0.1);
        margin-bottom: 20px;
    }
</style>
