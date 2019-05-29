<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/User/lists' }">用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>投资机构管理</el-breadcrumb-item>
    </el-breadcrumb>
    <h4>已认证机构列表</h4>

    <div class="conBox">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="用户昵称">
          <el-input v-model="formInline.user" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="注册时间">
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
        <el-table-column prop="invest_id" label="ID" width="55"></el-table-column>
        <el-table-column prop="invest_mobile" label="账号"></el-table-column>
        <el-table-column prop="invest_name" label="公司名称"></el-table-column>
        <el-table-column prop="invest_realname" label="联系人姓名"></el-table-column>
        <el-table-column prop="invest_mobile" label="联系人手机号" show-overflow-tooltip></el-table-column>
        <el-table-column prop="user_bp_time" label="免费查看次数" show-overflow-tooltip></el-table-column>
        <el-table-column prop="user_showbp_money" label="超次数费用(元)" show-overflow-tooltip></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="text" @click="handleEdit(scope.$index, scope.row)">查看详情</el-button>
            <el-button size="mini" type="text" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
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
          invest_id: "2388",
          invest_realname: "王小虎",
          invest_mobile:"13744557788",
          invest_name:"xx科技有限公司",
          invest_realname:"联系人姓名",
          user_bp_time: "3",
          user_showbp_money: "100"
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




