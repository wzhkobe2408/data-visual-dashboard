<template>
    <div class="card panel-default col-md-6 mx-auto">
        <div class="card-body">
            <h1>Sign up</h1>
            <form @submit="handleSignup"> 
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" name="email" v-model="email" class="form-control" placeholder="Enter your email">
                </div>
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" name="username" v-model="username" class="form-control" placeholder="Enter your username">
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" name="password" v-model="password" class="form-control" placeholder="Enter your password">
                </div>
                <div class="form-group">
                    <label>Password Confirm</label>
                    <input type="password" name="passwordConfirm" v-model="passwordConfirm" class="form-control" placeholder="Enter your password">
                </div>
                <div class="form-group">
                    <input type="submit" value="Login" class="btn btn-block btn-primary">
                </div>
            </form>
        </div>
    </div>
</template>
<script>
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
  }
}
</script>
<style scoped>

</style>