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
    mounted() {
        if (!localStorage.getItem('jwt')) {
            this.$router.push('/login')
        } else {
            axios.get('/api/userinfo',{
                headers: {'x-access-token': localStorage.getItem('jwt')}
            })
            .then(response => {
                var userinfo = {
                    username: response.data.userinfo.username,
                    email: response.data.userinfo.email
                }
                localStorage.setItem('userinfo', JSON.stringify(userinfo));
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
}
</script>
<style scoped>
    
</style>
