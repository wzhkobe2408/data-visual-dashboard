<template>
    <div>
        <v-side-nav id="custom-sidenav" style="transform: translateX(0px);width: 100px;">
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/color">Color</router-link></li>
                <li><router-link to="/map">Map</router-link></li>
                <li><router-link to="/weathermap">Weather</router-link></li>
                <li><router-link to="/3d">3D</router-link></li>
                <li><router-link to="/manage">Manage</router-link></li>
                <li><router-link to="/interativemap">Interative</router-link></li>
                <li v-if="gettersUserInfo.username"><router-link to="/user">{{ gettersUserInfo.username }}</router-link><li>
                <li v-if="gettersUserInfo.username" @click="clearToken"><router-link to="/login">Logout</router-link><li>
                <li v-if="!gettersUserInfo.username"><router-link to="/login">Login</router-link></li>
                <li v-if="!gettersUserInfo.username"><router-link to="/signup">Signup</router-link></li>
            </ul>
        </v-side-nav>
    </div>
</template>
<script>
import {mapActions, mapGetters, mapState} from 'vuex'

    export default {
        data () {
            return {
                nav: {
                    edge: 'left'
                }
            }
        },
        computed: {
            ...mapGetters([
                'gettersToken',
                'gettersUserInfo'
            ])
        },
        methods: {
            ...mapActions([
                'deleteToken',
                'clearUserInfo'
            ]),
            clearToken() {
                this.clearUserInfo()
                this.$router.push('/login')
            },
        }
    }
</script>
<style scoped>
    .side-nav {
        background-color: rgba(255,255,255,0.75);
    }
    .side-nav a {
        padding-left: 20px !important;
    }
    .side-nav a:hover {
        text-decoration: none;
    }
    .router-link-exact-active.router-link-active {
    background-color: rgba(26, 26, 26, 0.75);
    font-weight: bold;
    color: #fff;
  }
</style>

