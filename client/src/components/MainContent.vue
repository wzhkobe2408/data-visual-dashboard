<template>
    <div class="col-md-9">
        <div class="profile-content">
            <div class="grid-container">
                <div class="graph-item">
                    <highcharts-component :element="'brick-chart'"></highcharts-component>
                </div>
                <div class="graph-item">
                    <highcharts-component :element="'brick-chart'"></highcharts-component>
                </div>
                <div class="graph-item">
                    <highcharts-component :element="'brick-chart'"></highcharts-component>
                </div>
                <div class="graph-item">
                    <highcharts-component :element="'brick-chart'"></highcharts-component>
                </div>                
            </div>
        </div>
        <div class="tab-box">
            <chose-tab></chose-tab>
        </div>
    </div>
</template>
<script>
import HighchartsComponent from './HighchartsComponent.vue'
import ChoseTab from './ChoseTab.vue'

export default {
    components: {
        HighchartsComponent,
        ChoseTab
    }
}
</script>
<style scoped>
    .grid-container {
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-gap: 10px;
        height:400px;
    }
    .graph-item {
        background-color: rgb(255, 255, 255);
        text-align: center;
    }
    .tab-box {
        margin-top:10px;
    }
</style>

