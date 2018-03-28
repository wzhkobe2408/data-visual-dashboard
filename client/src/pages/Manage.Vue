<template>
  <div class="manage-container">
      <h2>Manage page</h2>
      <hr />
      <div class="card-container">
        <div class="card">
          <div class="card-body">
            <img src="../assets/bars.png" alt="" />
            <p>{{ dataset[0].title }}</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <img src="../assets/bubbles.png" alt="" />
            <p>{{ dataset[1].title }}</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <img src="../assets/polar.png" alt="" />
            <p>{{ dataset[2].title }}</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <img src="../assets/radar.png" alt="" />
            <p>{{ dataset[3].title }}</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <img src="../assets/line.png" alt="" />
            <p>{{ dataset[4].title }}</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <img src="../assets/doughnut.png" alt="" />
            <p>{{ dataset[5].title }}</p>
          </div>
        </div>
        <div class="card" data-toggle="modal" data-target="#addData">
          <div class="card-body">
            <img src="../assets/add.png" alt="" />
            <p>Add new data set</p>
          </div>
        </div>
      </div>
      <Modal id="addData" title="Add data">
        <div slot="main">
          <form>
            <div class="form-group">
              <span>Title</span>
              <input type="text" placeholder="Enter chart title" class="form-control">
            </div>
            <div class="form-group">
              <br>
              <div class="btn-group">
                <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Chose Type
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Bar</a>
                  <a class="dropdown-item" href="#">Line</a>
                  <a class="dropdown-item" href="#">Bubble</a>
                </div>
              </div>
            </div>
          </form>
        </div>
        <button slot="cancel" type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" data-dismiss="modal" slot="confirm" class="btn btn-primary">Confirm</button>
      </Modal>
  </div>
</template>
<script>
import Modal from '../components/modal.vue'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    Modal
  },
  methods: {
    ...mapActions([
      'startLoading',
      'stopLoading'
    ])
  },
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState({
      dataset: state => state.dataset
    })
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
.manage-container {
  width: 90%;
  margin: 0 auto;
}
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
