<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">一级菜单</el-breadcrumb-item>
      <el-breadcrumb-item>二级菜单</el-breadcrumb-item>
      <el-breadcrumb-item>三级菜单</el-breadcrumb-item>
    </el-breadcrumb>

    <h4>认证详情</h4>
    <div class="box">
      <P class="title">工单号:{{nanjiquan_no}}</P>
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <p class="nanjiquanapply">
              <span></span>
              南极圈认证
            </p>
          </div>
        </el-col>
        <el-col :span="20">
          <div class="grid-content bg-purple">
            <el-steps :active="1">
              <el-step title="创建" icon="el-icon-right" description="申请账号"></el-step>
              <el-step title="平台审核" description="admin"></el-step>
              <el-step title="审批通过 审批不通过" description="这段就没那么长了"></el-step>
            </el-steps>
          </div>
        </el-col>
      </el-row>

      <!-- 用户信息 -->
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
            <div class="grid-content bg-purple">入职时间：{{entry_time}}</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">离职时间：{{leave_time}}</div>
          </el-col>
        </el-row>
      </div>

      <!-- 证件照信息 -->
      <div class="idInfo">
        <el-row :gutter="20">
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <p>
                用户头像
                <span>
                  <img :src="avatar" alt>
                </span>
              </p>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="20">
            <div class="grid-content bg-purple">
              <p>
                证明照片
                <span>
                  <img :src="file_list[0].file_url" alt>
                </span>
              </p>
            </div>
          </el-col>
        </el-row>
      </div>

      <!-- 审核日志 -->
      <div class="applydate">
        <h5>审核日志</h5>
        <el-table :data=" log_list" border style="width: 100%">
          <el-table-column prop="apply_type" label="审核类型" width="180"></el-table-column>
          <el-table-column prop="log_status" label="审核结果" width="180">
            <templace slot-scope="scope">
              <p v-if="scope.row.log_status==1">审核通过</p>
            </templace>
          </el-table-column>
          <el-table-column prop="admin_nickname" label="审核人"></el-table-column>
          <el-table-column prop="log_no" label="流程号"></el-table-column>
          <el-table-column prop="log_addtime" label="审核时间"></el-table-column>
          <el-table-column prop="log_status" label="备注">
            <template slot-scope="scope">
              <p v-if="scope.row.log_status==1">审核通过</p>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
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
      apply_type: "南极圈认证",
      nanjiquan_status: 1, //0待审核;1审核通过;2进行中;-1审核未通过
      verify_time: 0, //处理时间
      addtime: 1555490018, //添加时间

      file_list: [
        {
          file_url:
            "http://niukou.api.chengmikeji.com/upload/logo/84/3df60a42f7270b8fc2944d6f8fb2be.jpg" //认证图片
        }
      ],
      log_list: [
        {
          log_status: 1, //审核结果:1成功;-1失败
          log_no: "190417043338gaZD", //流水号
          log_remark: "",
          log_addtime: "2019-05-05 19:40",
          admin_nickname: "admin"
        }
      ]
    };
  }
};
</script>


<style scoped lang="less">

.title {
  text-align: center;
  font-size: 12px;
  font-weight: normal;
  margin: 20px 0;
}

.idInfo span {
  display: inline-block;
  width: 44px;
  height: 24px;
  img {
    display: block;
    width: 100%;
  }
}
</style>
