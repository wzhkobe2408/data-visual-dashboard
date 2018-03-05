<template>
    <div class="about-page">
        <color-picker class="color-picker"></color-picker>
        <div class="background"></div>
    </div>
</template>
<script>
import ColorPicker from '@/components/colorPicker'

export default {
    components: {
        ColorPicker
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
</style>
