<template>
  <div>
    
    <h4>南极圈认证</h4>

    <div class="conBox">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">

        <el-form-item label="提交时间">
          <el-select v-model="formInline.regionTime" placeholder="请选择起止注册时间">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="认证状态">
          <el-select v-model="formInline.status" placeholder="全部">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button type="default" @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>

      <el-table
        ref="multipleTable"
        :data="tableData6"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="nanjiquan_id" label="ID" width="55"></el-table-column>
       <el-table-column prop="nanjiquan_avatar" label="头像">
          <template slot-scope="scope">
              <p v-if="scope.row.nanjiquan_avatar"><img width="44px;" :src=scope.row.nanjiquan_avatar alt=""></p>
          </template>
       </el-table-column>
        <el-table-column prop="nanjiquan_name" label="姓名"></el-table-column>
        <el-table-column prop="nanjiquan_rtx" label="RTX"></el-table-column>
        <el-table-column prop="nanjiquan_mobile" label="手机" show-overflow-tooltip></el-table-column>
        <el-table-column prop="addtime" label="提交时间" show-overflow-tooltip></el-table-column>
        <el-table-column prop="verify_time" label="处理时间" show-overflow-tooltip></el-table-column>
        <el-table-column prop="nanjiquan_status" label="认证状态" show-overflow-tooltip></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="text" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            <el-button size="mini" type="text" @click="handleEdit(scope.$index, scope.row)">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination background layout="prev, pager, next" :total="85"></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        regionTime: "",
        status: ""
      },
      tableData6: [
        {
                "nanjiquan_avatar": "http://niukou.api.chengmikeji.com/upload/logo/84/3df60a42f7270b8fc2944d6f8fb2be.jpg",          //头像
                "nanjiquan_name": "黄小又",                                                    //姓名
                "nanjiquan_rtx": "2342342",                                                     //RTX
                "nanjiquan_mobile": "110110110000",                                             //手机号
                "nanjiquan_status": 1,                                                          //0待审核;1审核通过;2进行中;-1审核未通过
                "verify_time": "",                                                              //认证通过时间
                "addtime": "2019-04-17 16:33"                                                   //添加时间
            },
        
      ]
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    onReset() {
      console.log("Reset");
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>

<style>
</style>




