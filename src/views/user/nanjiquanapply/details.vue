<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/User/lists' }">用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>南极圈认证</el-breadcrumb-item>
      <el-breadcrumb-item>认证详情</el-breadcrumb-item>
    </el-breadcrumb>
    <h4>南极圈认证详情</h4>

    <div class="box">
      <div class="detailBox">
        <h5>认证详情</h5>
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="6">
            <div class="grid-content bg-purple">流水号：{{nanjiquan_no}}</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light">提交时间:2019年3月7日16:48:37</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">处理时间：2019年3月7日16:48:37</div>
          </el-col>
        </el-row>
      </div>

      <div class="userInfo">
        <h5>用户信息</h5>
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content bg-purple">用户姓名：{{nanjiquan_name}}</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">RTX：{{rtx}}</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">联系电话：{{mobile}}</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">微信号：{{wechat}}</div>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content bg-purple">邮箱：{{email}}</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">在腾讯就职部门岗位：{{position}}-{{level}}</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">入职时间{{entry_time}}</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">离职时间：{{leave_time}}</div>
          </el-col>
        </el-row>
      </div>

      <div class="pictureInfo">
        <h5>证件照片信息</h5>
        <el-row>
          用户头像：
          <span>
            <img :src="avatar" alt>
          </span>
        </el-row>
        <el-row>
          证照照片
          <span>
            <img :src="file_list[0].file_url" alt>
          </span>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
        uid: 1,
        nanjiquan_no: "190417043338gaZD", //流水号
        avatar:
          "http://niukou.api.chengmikeji.com/upload/logo/84/3df60a42f7270b8fc2944d6f8fb2be.jpg", //头像
        nanjiquan_name: "黄小又", //姓名
        rtx: "2342342", //RTX
        mobile: "110110110000", //手机号
        wechat: "xiaoyou", //微信
        email: "test@qq.com", //邮箱
        entry_time: "1970-01-01", //入职时间
        leave_time: "1970-01-01", //离职时间
        position: "互娱部", //部门岗位
        level: "经理", //部门职级
        nanjiquan_status: 1, //0待审核;1审核通过;2进行中;-1审核未通过
        verify_time: 0, //处理时间
        addtime: 1555490018, //添加时间
        posturl: "Nanjiquanapply/details",
        selectData: {
          apply_id: this.$route.query.project_id
        },
        file_list: [
          {
            file_url:
              "http://niukou.api.chengmikeji.com/upload/logo/84/3df60a42f7270b8fc2944d6f8fb2be.jpg" //认证图片
          }
        ]
      }
  }
  //方法集合
  // methods:{

  // }
};
</script>


<style lang="less" scoped>
.box {
  span {
    display: inline-block;
    width: 44px;
    height: 24px;
    img {
      display: block;
      width: 100%;
    }
  }
}
</style>
