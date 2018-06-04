<template>
    <div class="col-md-9">
        <div class="profile-content">
            <div class="grid-container">
                <div @click="handleClick('linechart',0)" class="chart">
                    <LineChart :chart-data="dataset[0]" class="item"/>
                </div>
                <div @click="handleClick('bubblechart',1)" class="chart">
                    <BubbleChart :chart-data="dataset[1]"  class="item"/>
                </div>
                <div @click="handleClick('doughnut',2)" class="chart">
                    <DoughNut :chart-data="dataset[2]"  class="item"/>
                </div>
                <div @click="handleClick('radarchart',3)" class="chart">
                    <RadarChart :chart-data="dataset[3]" class="item"/>
                </div>
                <div @click="handleClick('polarareachart',4)" class="chart">
                    <PolarAreaChart :chart-data="dataset[4]" class="item" />
                </div>
                <div @click="handleClick('horizontalbar',5)" class="chart">
                    <HorizontalBar :chart-data="dataset[5]" class="item"/>
                </div>
                <iframe src="http://localhost:3001/crossfilter"
                width="836" height="360" id="crossfilter"></iframe>
                <DyMap class="dymap"/>
            </div>
        </div>
        <div class="tab-box">
            <chose-tab></chose-tab>
        </div>
        <div class="add-button" data-toggle="modal" data-target="#addData">
            <i class="fas fa-plus"></i>
        </div>
        <Modal id="addData" title="Add new chart">
            <div slot="main">
                <form>
                    <div class="form-group">
                    <span>Title</span>
                    <input type="text" placeholder="Enter chart title" class="form-control">
                    </div>
                    <div class="form-group">
                    <br>
                    <div class="btn-group">
                        <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
import LineChart from './lineCharts.js'
import BubbleChart from './bubbleCharts.js'
import RadarChart from './radarCharts.js'
import DoughNut from './doughNut.js'
import PolarAreaChart from './polarAreaCharts.js'
import HorizontalBar from './horizontalBar.js'
import DyMap from './dymap.vue'
import Modal from './modal.vue'
import ChoseTab from './ChoseTab.vue'
import { mapActions,mapState } from 'vuex'
export default {
    components: {
        LineChart,
        BubbleChart,
        RadarChart,
        DoughNut,
        PolarAreaChart,
        HorizontalBar,
        ChoseTab,
        DyMap,
        Modal
    },
    computed: {
        ...mapState({
            dataset: state => state.dataset
        })
    },
    methods: {
        ...mapActions([
            'setUserInfo',
            'setChartData'
        ]),
        handleClick(type, index) {
            this.setChartData({
                type: type,
                index: index
            })
            this.$router.push('/chart_detail')
        }
    },
    created() {
        axios.get('/api/userinfo',{
                headers: {'x-access-token': localStorage.getItem('jwt')}
        }).then(response => {
            this.setUserInfo(response.data.userinfo)
        })
        .catch(err => {
            console.log(err)
        })
    }
}
</script>
<style scoped>
    .col-md-9 {
        padding-right: 0 !important;
    }
    .grid-container::after {
        content: '';
        display: block;
        clear: both;
    }
    .chart {
        float: left;
        background: #ffffff;
        border:1px solid #d6d6d6;
        border-radius:4px;
        box-shadow: 0 0 1px 0px rgba(0,0,0,0.1);
        padding: 20px;
        box-sizing: border-box;
        width: 32.5%;
        height: 320px;
        margin-right: 10px;
        margin-bottom: 10px;
        cursor:pointer;
    }
    .chart:nth-child(3n) {
        margin-right: 0;
    }
    .item {
        width: 100%;
        height: 280px;
    }
    .add-button {
        background: #272727;
        width: 60px;
        height: 60px;
        position: fixed;
        right: 40px;
        bottom: 40px;
        text-align: center;
        line-height: 60px;
        font-size: 24px;
        border-radius: 50%;
        color: white;
        box-shadow: 0 4px 10px rgba(0,0,0,0.5);
        z-index: 1000;
    }
    .dymap {
        margin-bottom: 10px;
    }
    .dropdown-menu{
        width: 100%;
    }
    #crossfilter {
        margin-bottom:10px;
        border:1px solid #d6d6d6;
        border-radius:4px;
        box-shadow: 0 0 1px 0px rgba(0,0,0,0.1);
    }
</style>


