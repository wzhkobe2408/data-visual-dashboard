<template>
    <div class="card panel-default col-md-5 mx-auto">
        <div class="card-body">
            <h2>Sign up</h2>
            <form @submit="handleSignup"> 
                <div class="form-group">
                    <label>Email</label>
                    <input autocomplete="off" type="text" name="email" v-model="email" class="form-control" placeholder="Enter your email">
                </div>
                <div class="form-group">
                    <label>Username</label>
                    <input autocomplete="off" type="text" name="username" v-model="username" class="form-control" placeholder="Enter your username">
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input autocomplete="off" type="password" name="password" v-model="password" class="form-control" placeholder="Enter your password">
                </div>
                <div class="form-group">
                    <label>Password Confirm</label>
                    <input autocomplete="off" type="password" name="passwordConfirm" v-model="passwordConfirm" class="form-control" placeholder="Enter your password">
                </div>
                <div class="form-group">
                    <input type="submit" value="Sign up" class="btn btn-block btn-primary">
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
          username: '',
          password: '',
          passwordConfirm: ''
      }
  },
  methods: {
      ...mapActions([
          'startLoading',
          'stopLoading'
      ]),
      handleSignup(e) {
          e.preventDefault();
          if (this.password !== this.passwordConfirm) {
              console.log('Password does not match')
          }
          axios.post('/api/signup', {
              email: this.email,
              username: this.username,
              password: this.password
          })
            .then(response => {
                console.log(response)
                this.$router.replace('/login')
            })
            .catch(err => {
                console.log(err)
            })
      }
  },
  mounted() {
      this.stopLoading()
  },
  beforeDestroy() {
      this.startLoading()
  }
}
</script>
<style scoped>
    .card {
        margin-top: 60px;
    }
    h2 {
        margin-top: 0;
        margin-bottom: 20px;
    }
</style>