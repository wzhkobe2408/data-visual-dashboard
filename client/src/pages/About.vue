<template>
    <div class="about-page">
        <h1>This is the about page</h1>
        <color-picker color="color"></color-picker>
    </div>
</template>
<script>
import ColorPicker from '@/components/colorPicker'

export default {
    data() {
        return {
            color: {
                hex: '#194d33',
                hsl: { h: 150, s: 0.5, l: 0.2, a: 1 },
                hsv: { h: 150, s: 0.66, v: 0.30, a: 1 },
                rgba: { r: 25, g: 77, b: 51, a: 1 },
                a: 1
            }
        }
    },
    components: {
        ColorPicker
    }
}
</script>
<style scoped>

</style>
