<template>
    <div class="row home-container">
        <SideBar style="margin-top: 20px"/>
        <MainContent style="margin-top: 20px" />
    </div>
</template>
<script>
import SideBar from '@/components/sideBar.vue'
import MainContent from '@/components/MainContent.vue'
import { mapGetters,mapState, mapActions } from 'vuex'

export default {
    data() {
        return {
            username: '',
            email: ''
        }
    },
    components: {
        SideBar,
        MainContent
    },
    computed: {
        ...mapGetters([
            'gettersToken'
        ])
    },
    methods: {
        ...mapActions([
            'startLoading',
            'stopLoading'
        ])
    },
    // mounted() {
    //     if (!localStorage.getItem('jwt')) {
    //         this.$router.push('/login')
    //     } else {
    //         axios.get('/api/userinfo',{
    //             headers: {'x-access-token': localStorage.getItem('jwt')}
    //         })
    //         .then(response => {
    //             var userinfo = {
    //                 username: response.data.userinfo.username,
    //                 email: response.data.userinfo.email
    //             }
    //             localStorage.setItem('userinfo', JSON.stringify(userinfo));
    //             this.stopLoading()
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    //     }
    // },
    beforeDestroy() {
        this.startLoading()
    }
}
</script>
<style scoped>
    .home-container {
        width: 90%;
        margin: 0 auto;
    }
</style>
