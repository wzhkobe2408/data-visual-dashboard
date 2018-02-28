<template>
    <div class="map-container">
        <h1>This is the map container</h1>
    </div>
</template>
<script>
export default {
  data() {
      return {
          noData: false,
          data: null
      }
  },
  methods: {
      getData() {
          this.$http.get('')
            .then(response => {
                this.data = response.data
            })
            .catch(error => {
                this.noData = false
            })
      },
    created() {
        alert('Test')
    }
  }
}
</script>
<style scoped>

</style>
