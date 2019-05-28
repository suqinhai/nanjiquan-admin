<template>
  <div class="tooltable">
    <div class="select-tools">
      <el-form label-width="100px">
        <el-row :gutter="30">
          <el-col v-if="selectRiqi" :span="12" :md="12" :sm="24">
            <slot name="select4"></slot>
          </el-col>
          <el-col v-if="!selectRiqi" :span="6" :md="6" :sm="12">
            <slot name="select1"></slot>
          </el-col>
          <el-col v-if="!selectRiqi" :span="6" :md="6" :sm="12">
            <slot name="select2"></slot>
          </el-col>
          <el-col :span="6" :md="6" :sm="12">
            <slot name="select3"></slot>
          </el-col>
          <el-col :span="4" :md="4" :sm="8" class="btnbox">
            <el-button type="primary" @click="selectPost" size="mini">查询</el-button>
            <el-button type="primary" @click="resetPost" size="mini">重置</el-button>
          </el-col>
        </el-row>
      </el-form>
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
        <el-table-column :prop="colConfigs[index]" :label="item" :width="colConfigs[index]=='project_name' ? 150 :''"  show-overflow-tooltip v-if="item!='岗位状态'">
        </el-table-column>
        
        <el-table-column :prop="colConfigs[index]" :label="item" show-overflow-tooltip v-else>
          <template slot-scope="scope">
            <span class="status status1" v-if="scope.row.upost_status==1">招聘中</span>
            <span class="status status2" v-if="scope.row.upost_status==-1">已过期</span>
            <span class="status status3" v-if="scope.row.upost_status==2">已关闭</span>
          </template>
        </el-table-column>
      </template>
      <slot name="edit"></slot>
    </el-table>
    <div class="page">
      <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :total="1000"></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tools", "posturl", "selectData","selectRiqi"],
  data() {
    return {
      tableData2: [
        {
          upost_id: 4,
          industry_name: "销售",
          post_name: "软件开发",
          company_name: "那个公司有限公司",
          upost_status: 1,
          upost_view: 0,
          upost_delivery: 0,
          upost_share: 0,
          upost_addtime: "2019-04-09 15:58"
        }
      ],
      tableData3:[],
      multipleSelection: [],
      colConfigs: []
    };
  },
  mounted() {
   console.log(this.selectRiqi)
    this.tableData3=this.$parent.rankData(this.tableData2);
    for (let val in this.tableData3[0]) {
      if (val.indexOf("id") < 0) {
        this.colConfigs.push(val);
      }
    }
    // this.$axios.post(this.posturl,{page:1}).then(res => {
    //       console.log(res)
    //      if (!res.data.code) {
    //         
    //      }
    //   }).catch(err=>{
    //       console.log(err)
    //   })
  },
  methods: {
    getPageData(id) {
      var that = this;
      this.$axios
        .post(that.posturl, { page: 1, ...that.selectData })
        .then(res => {
          if (!res.data.code) {
            that.tableData3=that.$parent.rankData(res.data.data.data);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
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
    },
    handleCurrentChange(val) {
      this.getPageData(id);
    },
    selectPost() {
      this.getPageData(1);
    },
    resetPost() {
      for (let val in this.selectData) {
        this.selectData[val] = "";
      }
      this.getPageData(1);
    }
  }
};
</script>
<style lang="less">
.tooltable {
  padding: 20px;
  .el-col {
    line-height: 40px;
    min-height: 40px;
  }
  .btnbox {
    text-align: right;
    line-height: 35px;
  }
  .page {
    display: flex;
    justify-content: flex-end;
  }
  .status {
    padding-left: 10px;
    position: relative;
  }
  .status::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 100%;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -3px;
  }
  .status1::before {
    background: #00a854;
  }
  .status2::before {
    background: #0e77d1;
  }
  .status3::before {
    background: #f04134;
  }
}
</style>
