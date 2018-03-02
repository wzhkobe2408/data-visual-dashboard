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
          <el-table
            :data="tableData3"
            height="250"
            border
            style="width: 100%">
            <el-table-column
                prop="date"
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                width="360"
                label="地址">
            </el-table-column>
            <el-table-column
                label="操作">
                <template slot-scope="scope">    
                    <el-button type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
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
                    tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
        }
    }
}
</script>
<style>

</style>
