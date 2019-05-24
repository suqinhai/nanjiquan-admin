<template>
  <div class="tooltable">
    <div class="select-tools">
      <el-row :gutter="30">
        <el-col :span="6">
          <slot name="select1"></slot>
        </el-col>
        <el-col :span="6">
          <slot name="select2"></slot>
        </el-col>
        <el-col :span="6">
          <slot name="select3"></slot>
        </el-col>
        <el-col :span="4" class="btnbox">
          <el-button type="primary" size="mini">查询</el-button>
          <el-button type="primary" size="mini">重置</el-button>
        </el-col>
      </el-row>
      <div></div>
    </div>
    <el-table
      ref="multipleTable"
      :data="tableData3"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <template v-for="(item,index) in tools">
        <el-table-column :prop='colConfigs[index]' :label="item" show-overflow-tooltip></el-table-column>
      </template>
      <slot name="edit"></slot>
    </el-table>
    <div class="page">
      <el-pagination layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tools"],
  data() {
    return {
      tableData3: [
        {
          "upost_id": 4,
          "industry_name": "销售",
          "post_name": "软件开发",
          "company_name": "那个公司有限公司",
          "upost_status": 1,
          "upost_view": 0,
          "upost_delivery": 0,
          "upost_share": 0,
          "upost_addtime": "2019-04-09 15:58"
        }
      ],
      multipleSelection: [],
      colConfigs:[]
    };
  },
 mounted() {
      for (let val in this.tableData3[0]){
       this.colConfigs.push(val);
       console.log(val)
      }

    this.$axios.post("Userpost/lists",{page:1}).then(res => {
          console.log(res)
        //  if (!res.data.code) {
        //     this.industry_list=res.data.data.industry_list;
        //     this.post_list=res.data.data.post_list;
        //  }
      }).catch(err=>{
          console.log(err)
      })
     
      
 },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
};
</script>
<style lang="less">
.tooltable {
   padding: 20px;
  .el-col {
    height: 40px;
  }
  .btnbox {
    text-align: right;
    line-height: 35px;
  }
  .page {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
