<template>
  <div class="manage-container">
      <h2>Manage page</h2>
      <hr />
      <div class="card-container">
        <div class="card" :key="index" v-for="(chart, index) in dataset">
          <div class="card-body">
            <img v-if="chart.type == 'bars'" src="../assets/bars.png" alt="img" />
            <img v-if="chart.type == 'bubbles'" src="../assets/bubbles.png" alt="img" />
            <img v-if="chart.type == 'polar'" src="../assets/polar.png" alt="img" />
            <img v-if="chart.type == 'radar'" src="../assets/radar.png" alt="img" />
            <img v-if="chart.type == 'line'" src="../assets/line.png" alt="img" />
            <img v-if="chart.type == 'doughnut'" src="../assets/doughnut.png" alt="img" />
            <p>{{ chart.title }}</p>
            <span @click="deleteChart" class="trash">&times;</span>
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
              <div>
                <button ref="dropdown" type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Chose Type
                </button>
                <div class="dropdown-menu" style="width: 165px">
                  <a @click="setNewType" class="dropdown-item">Bar</a>
                  <a @click="setNewType" class="dropdown-item">Line</a>
                  <a @click="setNewType" class="dropdown-item">Bubble</a>
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
  data() {
    return {
      newTitle: ''
    }
  },
  methods: {
    ...mapActions([
      'startLoading',
      'stopLoading'
    ]),
    iconUrl(type) {
      return '../assets/' + type + '.png'
    },
    deleteChart(e) {
      e.target.parentElement.parentElement.style.display = 'none'
    },
    setNewType(e) {
      e.preventDefault()
      // console.log(this.$refs.dropdown.textContent)
      this.$refs.dropdown.textContent = e.target.textContent
    }
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
    background-color: rgb(240, 240, 240);
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
    transform: scale(1.02);
  }
  .trash {
    position: absolute;
    top: 0px;
    right: 15px;
    font-size: 24px;
    color: #303030;
    cursor: pointer;
  }
  .card {
    box-shadow: 0 0 1px rgba(0,0,0,0.2);
    margin: 0;
  }
</style>
