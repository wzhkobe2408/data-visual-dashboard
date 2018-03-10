<template>
  <div>
      <h2 class="text-center">This is the manage page</h2>
      <hr />
      <div class="card-container">
        <div class="card">
          <div class="card-body">
            <img src="../assets/bars.png" alt="" />
            <p>This is the data1</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <img src="../assets/bubbles.png" alt="" />
            <p>This is the data1</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <img src="../assets/polar.png" alt="" />
            <p>This is the data1</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <img src="../assets/radar.png" alt="" />
            <p>This is the data1</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <img src="../assets/line.png" alt="" />
            <p>This is the data1</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <img src="../assets/doughnut.png" alt="" />
            <p>This is the data1</p>
          </div>
        </div>
        <div class="card" data-toggle="modal" data-target="#exampleModalCenter">
          <div class="card-body">
            <img src="../assets/add.png" alt="" />
            <p>Add new data set</p>
          </div>
        </div>
      </div>
      <Modal />
  </div>
</template>
<script>
import Modal from '../components/modal.vue'
export default {
  components: {
    Modal
  }
}
</script>
<style scoped>
  .card-container {
    display:grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 10px;
    
  }
  .card {
    text-align: center;
  }
  h3 {
    line-height: 1.5;
    padding:5px;
  }
  p {
    font-size: 20px;
  }
  img {
    height: 120px;
  }
  .card:hover {
    background-color: rgb(240, 240, 240);
  }
</style>
