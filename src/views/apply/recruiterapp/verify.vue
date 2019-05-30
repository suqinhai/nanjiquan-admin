<template>
  <div>
    <h4>商品审批列表</h4>

    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <el-button type="primary">全部申请</el-button>
          <el-button type="deafult">待审批</el-button>
          <el-button type="deafult">审批通过</el-button>
          <el-button type="deafult">已驳回</el-button>
        </div>
      </el-col>

      <el-col :span="12">
        <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
    </el-row>

    <el-table
      border
      ref="multipleTable"
      :data="tableData3"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="id" label="商品货号"></el-table-column>
      <el-table-column prop label="商品名称" width="120"></el-table-column>
      <el-table-column prop label="商品品牌" show-overflow-tooltip></el-table-column>
      <el-table-column prop label="商品图片" show-overflow-tooltip></el-table-column>
      <el-table-column prop label="商品类别" show-overflow-tooltip></el-table-column>
      <el-table-column prop label="商品价格" show-overflow-tooltip></el-table-column>
      <el-table-column prop label="提交时间" show-overflow-tooltip></el-table-column>
      <el-table-column prop="msg" label="审核状态" show-overflow-tooltip></el-table-column>
      <el-table-column label="操作" show-overflow-tooltip>
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">通过</el-button>
          <el-button type="text" size="small">驳回</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination background layout="prev, pager, next" :total="85"></el-pagination>
  </div>
</template>


<script>
export default {
  data() {
    return {
      tableData3: [
        {
          code: 1,
          msg: "审核操作成功!",
          data: []
        }
      ]
    };
  }
};
</script>


<style>
</style>
