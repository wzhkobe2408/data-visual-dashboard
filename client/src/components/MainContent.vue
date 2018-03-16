<template>
    <div class="col-md-9">
        <div class="profile-content">
            <div class="grid-container">
                <div @click="handleClick" class="chart">
                    <LineChart class="item"/>
                </div>
                <div @click="handleClick" class="chart">
                    <BubbleChart  class="item"/>
                </div>
                <div @click="handleClick" class="chart">
                    <DoughNut  class="item"/>
                </div>
                <div @click="handleClick" class="chart">
                    <RadarChart  class="item"/>
                </div>
                <div @click="handleClick" class="chart">
                    <PolarAreaChart class="item" />
                </div>
                <div @click="handleClick" class="chart">
                    <HorizontalBar  class="item"/>
                </div>
                <DyMap class="dymap"/>
            </div>
        </div>
        <div class="tab-box">
            <chose-tab></chose-tab>
        </div>
        <div class="add-button" data-toggle="modal" data-target="#addData">
            <i class="fas fa-plus"></i>
        </div>
        <Modal id="addData" title="Add data" />
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
import { mapActions } from 'vuex'
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
    methods: {
        ...mapActions([
            'setUserInfo'
        ]),
        handleClick() {
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
        box-shadow: 0 5px 10px rgba(0,0,0,0.8);
        z-index: 1000;
    }
    .dymap {
        margin-bottom: 10px;
    }
</style>

