<template>
    <div>
        <ControlMap class="contorl_map" />
        <form style="margin-bottom:10px" class="form-inline" @submit="addItem">
                <input type="text" v-model="addLat" class="form-control mr-2 col" placeholder="经度">
                <input type="text" v-model="addLng" class="form-control mr-2 col" placeholder="纬度">
                <input type="submit" value="Add" class="btn btn-success" @click="addItem"> 
        </form>
         <table class="table table-striped table-dark">
            <thead>
                <tr>
                    <th>经度</th>
                    <th>纬度</th>
                    <th>地址</th>
                    <th>编辑</th>
                    <th>删除</th>                     
                </tr>
            </thead>
             <tbody>
                 <tr :key="index" v-for="(row, index) in tableData">
                     <td>
                         <span v-if="!row.edit">{{ row.lat }}</span>
                         <input type="text" class="form-control" v-if="row.edit" :value="row.lat" @change="setLat">
                     </td>
                     <td>
                         <span v-if="!row.edit">{{ row.lng }}</span>
                         <input type="text" class="form-control" v-if="row.edit" :value="row.lng" @change="setLng">
                     </td>
                     <td>{{ row.address }}</td>
                     <td>
                         <button @click="edit(row)" class="btn btn-outline-primary">{{ row.edit? '取消' : '编辑' }}</button>
                         <button @click="makeChange(row)" v-if="row.edit" class="btn btn-outline-success">确定</button>
                    </td>
                     <td><button class="btn btn-outline-danger" @click="handleDelete(row, index)">删除</button></td>
                 </tr>
             </tbody>
         </table>
    </div>
</template>
<script>
import ControlMap from '../components/controlMap.vue'
import { mapActions } from 'vuex'

export default {
    components: {
        ControlMap
    },
    data() {
        return {
                    addLat:'',
                    addLng:'',
                    newlat:'',
                    newlng:'',
                    tableData: [
                        {
                            lat: 123,
                            lng: 35,
                            address: '陕西省西安市咸宁西路',
                            edit: false
                        },
                        {
                            lat: 123,
                            lng: 35,
                            address: '陕西省西安市咸宁西路',
                            edit: false
                        },
                        {
                            lat: 123,
                            lng: 35,
                            address: '陕西省西安市咸宁西路',
                            edit: false
                        },
                        {
                            lat: 123,
                            lng: 35,
                            address: '陕西省西安市咸宁西路',
                            edit: false
                        },
                        {
                            lat: 123,
                            lng: 35,
                            address: '陕西省西安市咸宁西路',
                            edit: false
                        },
                        {
                            lat: 123,
                            lng: 35,
                            address: '陕西省西安市咸宁西路',
                            edit: false
                        },
                    ]
        }
    },
    methods: {
        ...mapActions([
            'startLoading',
            'stopLoading'
        ]),
        edit(row) {
            row.edit = !row.edit;
            this.newlat = row.lat
            this.newlng = row.lng
        },
        setLat(e) {
            this.newlat = e.target.value
        },
        setLng(e) {
            this.newlng = e.target.value
        },
        makeChange(row) {
            row.lat = this.newlat
            row.lng = this.newlng
            row.edit = false
            this.newlat = ''
            this.newlng = ''
        },
        handleDelete(row, deleteIndex) {
            this.tableData = this.tableData.filter((item, index) => index !== deleteIndex)
        },
        addItem(e) {
            e.preventDefault();
            this.tableData.push({
                lat: this.addLat,
                lng: this.addLng,
                address:'陕西省西安市咸宁西路',
                edit: false
            })
            this.addLat = ''
            this.addLng = ''
        }
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
</style>
