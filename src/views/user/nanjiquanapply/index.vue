<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/User/lists' }">用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>南极圈认证管理</el-breadcrumb-item>
    </el-breadcrumb>
    <h4>南极圈认证列表</h4>

    <div class="conBox">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="用户昵称">
          <el-input v-model="formInline.user" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="注册时间">
          <div class="block">
            <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
          </div>
        </el-form-item>
        <el-form-item label="认证状态">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('formInline')">查询</el-button>
          <el-button type="default" @click="onReset('formInline')">重置</el-button>
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
        <el-table-column prop="id" label="ID" width="55"></el-table-column>
        <el-table-column label="头像" show-overflow-tooltip width="55"></el-table-column>
        <el-table-column prop="nanjiquan_name" label="姓名" width="80"></el-table-column>
        <el-table-column prop="nanjiquan_rtxX" label="RTX" width="80"></el-table-column>
        <el-table-column prop="nanjiquan_mobile" label="手机"></el-table-column>
        <el-table-column prop="addtime" sortable label="提交时间" show-overflow-tooltip></el-table-column>
        <el-table-column prop="verify_time" label="处理时间" show-overflow-tooltip></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="text" @click="handleDelete(scope.$index,tableData6)">删除</el-button>
            <el-button size="mini" type="text" @click="handleDetails(scope.$index, scope.row)">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="page" v-if="pagetotal">
        <el-pagination
          background
          layout="prev, pager, next"
          @current-change="handleCurrentChange"
          :total="pagetotal"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pagetotal:0,
      options: [
        {
          value: 0,
          label: "待审核"
        },
        {
          value: 1,
          label: "审核成功"
        },
        {
          value: 2,
          label: "进行中"
        },
        {
          value: -1,
          label: "审核失败"
        }
      ],
      value: "",
      value1: "",
      formInline: {
        user: "",
        regionTime: "",
        status: ""
      },
      tableData6: [
        {
          nanjiquan_avatar:
            "http://niukou.api.chengmikeji.com/upload/logo/84/3df60a42f7270b8fc2944d6f8fb2be.jpg", //头像
          nanjiquan_name: "黄小又", //姓名
          nanjiquan_rtx: "2342342", //RTX
          nanjiquan_mobile: "110110110000", //手机号
          nanjiquan_status: 1, //0待审核;1审核通过;2进行中;-1审核未通过
          verify_time: "", //认证通过时间
          addtime: "2019-04-17 16:33" //添加时间
        },
        {
          nanjiquan_avatar:
            "http://niukou.api.chengmikeji.com/upload/logo/84/3df60a42f7270b8fc2944d6f8fb2be.jpg", //头像
          nanjiquan_name: "黄小又", //姓名
          nanjiquan_rtx: "2342342", //RTX
          nanjiquan_mobile: "110110110000", //手机号
          nanjiquan_status: 1, //0待审核;1审核通过;2进行中;-1审核未通过
          verify_time: "", //认证通过时间
          addtime: "2019-04-16 16:33" //添加时间
        }
      ],
      selectData: {
        page:"",
        nickname: "",
        reg_strart_time: "",
        reg_end_time: "",
        verify_status: ""
      }
    };
  },

    methods: {
    //表格数据
    getPageData(id) {
      var that = this;
      this.$axios
        .post("/Nanjiquanapply/lists", { page: id, ...that.selectData })
        .then(res => {
          if (res.data.code == 1) {
            that.pagetotal = res.data.data.total;
            console.log('接受到了数据！！')
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //查询
    onSubmit() {
      console.log(123);
      this.getPageData(1);
    },
    //重置
    
    onReset(formName) {
        this.formInline.user="";
        this.value1="";
        this.value="";
    },

    //查看详情  跳转
    handleDetails(index, row) {
      this.$router.push({
        path: "/nanjiquanapply/details",
        query: { apply_id: row.id }
      });
    },

    // 删除当前行
    handleDelete(index, row) {
      row.splice(index, 1);
    },

    //全选
    handleSelectionChange(val) {
      console.log(val);
      this.multipleSelection = val;
    },
  },
  mounted() {
    this.getPageDatae(1);
  },

};
</script>

<style>
</style>


