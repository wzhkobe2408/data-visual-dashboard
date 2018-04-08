<template>
    <div class="card col-md-5 mx-auto">
        <div class="card-body">
            <h2>Log In</h2>
            <form autocomplete="false" @submit="handleLogin">
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" name="email" class="form-control" placeholder="Enter your email" v-model="email">
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" name="password" v-model="password" class="form-control" placeholder="Enter your password">
                </div>
                <div class="form-group">
                    <input type="submit" value="Login" class="btn btn-primary btn-block">
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
      ...mapActions([
          'setToken',
          'stopLoading',
          'startLoading'
      ]),
      handleLogin(e) {
          e.preventDefault();
          axios.post('/api/login', {
              email: this.email,
              password: this.password
          })
            .then(response => {
                localStorage.setItem('jwt',response.data.token)
                this.$router.push('/')
            })
            .catch(err => {
                console.log(err)
            })
      }
  },
  mounted() {
      this.stopLoading();
  },
  beforeDestroy() {
      this.startLoading();
  }
}
</script>
<style scoped>
    h2 {
        margin-top: 0;
        margin-bottom: 20px;
    }
    .card {
        margin-top: 100px;
    }
</style>
