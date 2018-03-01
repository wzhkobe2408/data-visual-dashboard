<template>
    <div>
        <SideBar />
        <MainContent />
    </div>
</template>
<script>
import SideBar from '@/components/sideBar.vue'
import MainContent from '@/components/MainContent.vue'

export default {
    components: {
        SideBar,
        MainContent
    }
}
</script>
<style scoped>
    
</style>
