<template>
    <div class="card col-md-6 mx-auto">
        <div class="card-body">
            <h1>Log In</h1>
            <form autocomplete="false" action="/login" method="POST">
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" placeholder="Enter your email">
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" placeholder="Enter your password">
                </div>
                <div class="form-group">
                    <input type="submit" value="Login" class="btn btn-primary btn-block">
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>

</style>
