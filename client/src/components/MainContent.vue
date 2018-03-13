<template>
    <div class="col-md-9">
        <div class="profile-content">
            <div class="grid-container">
                <div class="graph-item">
                    <highcharts-component></highcharts-component>
                </div>
                <div class="graph-item">
                    <highcharts-component1></highcharts-component1>
                </div>
                <div class="graph-item">
                    <highcharts-component2></highcharts-component2>
                </div>
                <div class="graph-item">
                    <highcharts-component4></highcharts-component4>
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
import HighchartsComponent1 from './HighchartsComponent1.vue'
import HighchartsComponent2 from './HighchartsComponent2.vue'
import HighchartsComponent4 from './charts4.vue'
import ChoseTab from './ChoseTab.vue'
import Map from './map.vue'
import { mapActions } from 'vuex'

export default {
    components: {
        HighchartsComponent,
        HighchartsComponent1,
        HighchartsComponent2,
        HighchartsComponent4,
        Map,
        ChoseTab
    },
    methods: {
        ...mapActions([
            'setUserInfo'
        ])
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
    .grid-container {
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-gap: 10px;
    }
    .graph-item {
        text-align: center;
        margin-top: -30px;
        margin-bottom: -26px;
        position: relative;
    }
    .tab-box {
        margin-top:10px;
        margin-bottom: 20px;
    }
</style>

