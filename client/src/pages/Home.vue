<template>
    <div class="row">
        <SideBar />
        <MainContent />
    </div>
</template>
<script>
import SideBar from '@/components/sideBar.vue'
import MainContent from '@/components/MainContent.vue'
import { mapGetters } from 'vuex'

export default {
    components: {
        SideBar,
        MainContent
    },
    computed: {
        ...mapGetters([
            'gettersToken'
        ])
    },
    mounted() {
        if (!this.gettersToken) {
            this.$router.push('/login')
        }
    }
}
</script>
<style scoped>
    
</style>
