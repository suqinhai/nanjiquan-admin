<template>
  <div>
    <h4>服务商认证</h4>

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
        <el-table-column prop label="公司全称" width="55"></el-table-column>
        <el-table-column prop label="所属行业"></el-table-column>
        <el-table-column prop label="产品所属分类"></el-table-column>
        <el-table-column prop="shop_realname" label="联系人姓名"></el-table-column>
        <el-table-column prop="shop_mobile" label="联系人手机号" show-overflow-tooltip></el-table-column>
        <el-table-column prop="shop_mobile" label="联系人微信号" show-overflow-tooltip></el-table-column>
        <el-table-column prop="shop_status" label="认证状态" show-overflow-tooltip>
          <template slot-scope="scope">
            <p v-if="scope.row.shop_status==-1">审核不通过</p>
            <p v-if="scope.row.shop_status==0">待审核</p>
            <p v-if="scope.row.shop_status==1">审核通过</p>
            <p v-if="scope.row.shop_status==2">进行中</p>
          </template>
        </el-table-column>
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
          shop_realname: "dylan", //联系人姓名
          shop_mobile: "17304400269", //账号/联系人手机号
          shop_compnay_name: "22", //公司全称
          shop_status: 1, //1审核通过;2待审核;3审核不通过
          shop_verify_time: "", //处理时间
          shop_addtime: "2019-04-29 18:43" //提交时间
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




