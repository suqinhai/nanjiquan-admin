<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">一级菜单</el-breadcrumb-item>
      <el-breadcrumb-item>二级菜单</el-breadcrumb-item>
      <el-breadcrumb-item>三级菜单</el-breadcrumb-item>
    </el-breadcrumb>

    <h4>认证详情</h4>
    <div class="box">
      <P class="title">工单号:{{recruiter_no}}</P>
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <p class="nanjiquanapply">
              <span></span>
              招聘企业认证
            </p>
          </div>
        </el-col>
        <el-col :span="20">
          <div class="grid-content bg-purple">
            <el-steps :active="1">
              <el-step title="创建" icon="el-icon-right" description="申请账号"></el-step>
              <el-step title="平台审核" description="admin"></el-step>
              <el-step title="审批通过 审批不通过" description></el-step>
            </el-steps>
          </div>
        </el-col>
      </el-row>

      <!-- 申请人信息 -->
      <div class="userInfo">
        <h5>申请人信息</h5>

        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content bg-purple">
              头像：
              <span>
                <img :src="recruiter_avater" alt>
              </span>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">真实姓名：{{recruiter_realname}}</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">手机号：{{recruiter_mobile}}</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">微信号：{{recruiter_wechat}}</div>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content bg-purple">企业邮箱：{{recruiter_business_mailbox}}</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">身份证号：{{uid}}</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">提交时间：{{addtime}}</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              身份证正反面：
              <span>
                <img :src="user_front_idcard" alt>
              </span>
              <span>
                <img :src="user_reverse_idcard" alt>
              </span>
            </div>
          </el-col>
        </el-row>
      </div>

      <!-- 申请账号详细信息 -->
      <div class="idInfo">
        <h5>申请账号详细信息</h5>

        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="8">
            <div class="grid-content bg-purple">公司全称:{{recruiter_name}}</div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-light">
             所属行业:{{industry_name}}
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">公司规模:
             0-20人</div>
          </el-col>
        </el-row>

        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="8">
            <div class="grid-content bg-purple">公司地址:{{recruiter_company_address}}</div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-light">公司logo:
              <span><img :src=recruiter_company_logo alt=""></span></div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">企业法人:{{recruiter_corporate}}</div>
          </el-col>
        </el-row>

        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="8">
            <div
              class="grid-content bg-purple"
            >单笔投资:{{recruiter_single_min_recruiterment}}万-{{recruiter_single_max_recruiterment}}万</div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-light">常住城市:{{recruiter_permanent_city_name}}</div>
          </el-col>
          <el-col :span="8"></el-col>
        </el-row>


        <el-row>
          组织机构代码证照:
          <span>
            <img :src=recruiter_business_license alt>
          </span>
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

        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <div style="margin: 20px 0">
          <el-button type="primary" plain>审批通过</el-button>
          <el-button plain>审批驳回</el-button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
        "uid": 1,
        "recruiter_no": "",                                                 //流水号
        "recruiter_avater": "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoJroUyib201UTZaQtFyYiafgdYpbV1qZIQmcuoLgxrhTDOHh5zNFZ1E1TPib1QQ2zbL7IlTRcVKfXPw/132",                                                               //头像
        "recruiter_realname": "黄某某",                                                //姓名
        "recruiter_mobile": "18476116867",                                              //手机号
        "recruiter_wechat": "xiaoyou",                                                  //微信
        "recruiter_business_mailbox": "vip@qq.com",                                     //邮箱
        "industry_id": 1,
        "post_id": 1,
        "recruiter_address": "软件产业基地1",                                         //地址
        "recruiter_address_detail": "0",
        "education_id": 1,
        "salary_id": 1,
        "recruiter_position_detail": "我要人人人人人",                                 //职位详情
        "recruiter_skill": "1,2,3",
        "recruiter_company_name": "那个公司有限公司",                                   //公司全称
        "recruiter_company_industry_id": 2,
        "recruiter_company_scale": 2,
        "stage_id": 1,
        "situation_id": 1,
        "recruiter_company_address": "南山区某个大厦",
        "recruiter_company_logo": "http://niukou.api.chengmikeji.com/upload/logo/84/3df60a42f7270b8fc2944d6f8fb2be.jpg",                                            //logo
        "recruiter_corporate": "黄某某",                                           //公司法人
        "recruiter_business_license": "http://niukou.api.chengmikeji.com/upload/licence/84/3df60a42f7270b8fc2944d6f8fb2be.jpg",                                         //营业执照
        "recruiter_status": 1,
        "verify_time": 0,                                                       //处理时间
        "addtime": "2019-04-02",                                                //添加日期
        "user_front_idcard": "http://niukou.api.chengmikeji.com/upload/icard/84/3df60a42f7270b8fc2944d6f8fb2be.jpg",
        "user_reverse_idcard": "http://niukou.api.chengmikeji.com/upload/icard/84/3df60a42f7270b8fc2944d6f8fb2be.jpg",
        "industry_name": "运营",                                                  //公司所属行业
        "log_list": [
            {
                "log_status": 1,
                "log_no": "",
                "log_remark": "",
                "log_addtime": "2019-05-06 09:25",
                "admin_nickname": "admin"
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

.userInfo span {
  display: inline-block;
  width: 44px;
  height: 24px;
  img {
    display: block;
    width: 100%;
  }
}
</style>
