<template>
    <div class="col-md-9">
        <div class="profile-content">
            <div class="grid-container">
                <div @click="handleClick('linechart',0)" class="chart">
                    <LineChart :data="dataset[0]" class="item"/>
                </div>
                <div @click="handleClick('bubblechart',1)" class="chart">
                    <BubbleChart :data="dataset[1]"  class="item"/>
                </div>
                <div @click="handleClick('doughnut',2)" class="chart">
                    <DoughNut :data="dataset[2]"  class="item"/>
                </div>
                <div @click="handleClick('radarchart',3)" class="chart">
                    <RadarChart :data="dataset[3]" class="item"/>
                </div>
                <div @click="handleClick('polarareachart',4)" class="chart">
                    <PolarAreaChart :data="dataset[4]" class="item" />
                </div>
                <div @click="handleClick('horizontalbar',5)" class="chart">
                    <HorizontalBar :data="dataset[5]" class="item"/>
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
    data() {
        return {
                dataset: [
                    {
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        datasets: [
                            {
                            label: 'Data One',
                            backgroundColor: '#f87979',
                            data: [40, 39, 10, 40, 39, 80, 40]
                            }
                        ]
                    },
                    {
                      datasets:[
                        {
                        label: 'Data One',
                        backgroundColor: '#f87979',
                        data: [
                            {
                            x: 20,
                            y: 25,
                            r: 5
                            },
                            {
                            x: 40,
                            y: 10,
                            r: 10
                            },
                            {
                            x: 30,
                            y: 22,
                            r: 30
                            }
                        ]
                        },
                        {
                        label: 'Data Two',
                        backgroundColor: '#7C8CF8',
                        data: [
                            {
                            x: 10,
                            y: 30,
                            r: 15
                            },
                            {
                            x: 20,
                            y: 20,
                            r: 10
                            },
                            {
                            x: 15,
                            y: 8,
                            r: 30
                            }
                        ]
                        }
                        ]
                    },
                    {
                        labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
                        datasets: [
                            {
                            backgroundColor: [
                                '#41B883',
                                '#E46651',
                                '#00D8FF',
                                '#DD1B16'
                            ],
                            data: [40, 20, 80, 10]
                            }
                        ]
                    },
                    {
                        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
                        datasets: [
                            {
                            label: 'My First dataset',
                            backgroundColor: 'rgba(179,181,198,0.2)',
                            borderColor: 'rgba(179,181,198,1)',
                            pointBackgroundColor: 'rgba(179,181,198,1)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgba(179,181,198,1)',
                            data: [65, 59, 90, 81, 56, 55, 40]
                            },
                            {
                            label: 'My Second dataset',
                            backgroundColor: 'rgba(255,99,132,0.2)',
                            borderColor: 'rgba(255,99,132,1)',
                            pointBackgroundColor: 'rgba(255,99,132,1)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgba(255,99,132,1)',
                            data: [28, 48, 40, 19, 96, 27, 100]
                            }
                        ]
                    },
                    {
                        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
                        datasets: [
                            {
                            label: 'My First dataset',
                            backgroundColor: 'rgba(179,181,198,0.2)',
                            pointBackgroundColor: 'rgba(179,181,198,1)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgba(179,181,198,1)',
                            data: [65, 59, 90, 81, 56, 55, 40]
                            },
                            {
                            label: 'My Second dataset',
                            backgroundColor: 'rgba(255,99,132,0.2)',
                            pointBackgroundColor: 'rgba(255,99,132,1)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgba(255,99,132,1)',
                            data: [28, 48, 40, 19, 96, 27, 100]
                            }
                        ]
                    },
                    {
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                        datasets: [
                            {
                            label: 'Data One',
                            backgroundColor: '#f87979',
                            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
                            }
                        ]
                    }
                ]
        }
    },
    methods: {
        ...mapActions([
            'setUserInfo',
            'setChartData'
        ]),
        handleClick(type, index) {
            this.setChartData({
                type: type,
                data: this.dataset[index]
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


