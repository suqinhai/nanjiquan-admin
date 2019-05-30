<template>
  <div>
   
    <h4>招聘者认证</h4>

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
        <el-table-column prop="" label="公司全称" width="55"></el-table-column>
       <el-table-column prop="industry_name" label="所属行业"></el-table-column>
        <el-table-column prop="scale_name" label="公司规模"></el-table-column>
        <el-table-column prop="recruiter_name" label="联系人姓名"></el-table-column>
        <el-table-column prop="recruiter_mobile" label="联系人手机号" show-overflow-tooltip></el-table-column>
        <el-table-column prop="recruiter_mobilee" label="联系人微信号" show-overflow-tooltip></el-table-column>
        <el-table-column prop="recruiter_status" label="认证状态" show-overflow-tooltip></el-table-column>
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
                "recruiter_id": 1,                                                  //id
                "recruiter_realname": "黄某某",                                        //姓名
                "recruiter_mobile": "18476116867",                                      //帐号/手机号
                "recruiter_status": 1,                                                  //1审核通过;2待审核;3审核不通过
                "verify_time": "",                                                      //审核时间
                "addtime": "2019-04-02 19:23",                                          //添加时间
                "industry_name": "运营",                                                  //行业
                "scale_name": "50-150人"                                                 //公司规模
            },
            {
                "recruiter_id": 2,
                "recruiter_realname": "dylan",
                "recruiter_mobile": "17304400269",
                "recruiter_status": 2,
                "verify_time": "",
                "addtime": "2019-04-12 17:48"
            }
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




