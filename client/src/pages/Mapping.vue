<template>
    <div>
        <Map style="margin-bottom:10px" />
          <form style="margin-bottom:10px">
            <div class="row">
                <div class="col-md-6">
                <input type="text" class="form-control" placeholder="经度">
                </div>
                <div class="col-md-6">
                <input type="text" class="form-control" placeholder="纬度">
                </div>
            </div>
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
                         <input type="text" class="form-control" v-if="row.edit" :value="row.lat">
                     </td>
                     <td>
                         <span v-if="!row.edit">{{ row.lng }}</span>
                         <input type="text" class="form-control" v-if="row.edit" :value="row.lng">
                     </td>
                     <td>{{ row.address }}</td>
                     <td>
                         <button @click="edit(row)" class="btn btn-outline-primary">{{ row.edit? '取消' : '编辑' }}</button>
                         <button v-if="row.edit" class="btn btn-outline-success">确定</button>
                    </td>
                     <td><button class="btn btn-outline-danger">删除</button></td>
                 </tr>
             </tbody>
         </table>
    </div>
</template>
<script>
import Map from '@/components/map.vue'

export default {
    components: {
        Map
    },
    data() {
        return {
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
        edit(row) {
            row.edit = !row.edit;
        }
    }
}
</script>
<style>

</style>
