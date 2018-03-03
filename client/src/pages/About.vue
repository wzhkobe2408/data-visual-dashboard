<template>
    <div class="about-page">
        <color-picker></color-picker>
    </div>
</template>
<script>
import ColorPicker from '@/components/colorPicker'
import EventBus from '../components/eventBus.js'

export default {
    components: {
        ColorPicker
    },
    created() {
        EventBus.$on('color-change', hex => {
            EventBus.$emit('color-change', hex);
        })
    }
}
</script>
<style scoped>

</style>
