<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/User/lists' }">用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>招聘企业认证</el-breadcrumb-item>
      <el-breadcrumb-item>认证详情</el-breadcrumb-item>
    </el-breadcrumb>
    <h4>招聘企业信息详情</h4>

    <div class="box">
      <div class="detailBox">
        <h5>认证详情</h5>
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="6">
            <div class="grid-content bg-purple">流水号:{{recruiter_n}}</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light">提交时间:{{recruiter_addtime}}</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">处理时间:{{recruiter_verify_time}}</div>
          </el-col>
        </el-row>
      </div>

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
            <div class="grid-content bg-purple">身份证号：{{identity_id}}</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">提交时间：{{recruiter_addtime}}</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              身份证正反面：
              <span>
                <img :src="user_front_idcardrd" alt>
              </span>
              <span>
                <img :src="user_reverse_idcard" alt>
              </span>
            </div>
          </el-col>
        </el-row>
      </div>

      <div class="pictureInfo">
        <h5>申请账号详细信息</h5>
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="6">
            <div class="grid-content bg-purple">公司全称:{{recruiter_company_name}}</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light">所属行业:{{industry_name}}</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
                公司规模:{{recruiter_corporate}}</div>
          </el-col>
        </el-row>

        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="6">
            <div class="grid-content bg-purple">公司地址:{{recruiter_company_address}}</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light">
            公司logo:
            <span>
                <img :src=recruiter_company_logo alt="">
            </span>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
                企业法人:{{recruiter_corporate}}
            </div>
          </el-col>
        </el-row>

       

        <el-row>
            组织机构代码证照:
            <span><img :src=recruiter_business_license alt=""></span>
        </el-row>
      </div>




      <div class="idSetting">
          <h5>账号设置</h5>
          <el-row>免费发布岗位次数：<input type="text" :value=user_bp_count readonly></el-row>
          <el-row>超过免费次数后每次需要支付：<input type="text" :value=user_showbp_money readonly>元</el-row>
      </div>


      <el-row>
          <el-button type="primary">确认</el-button>
           <el-button>返回</el-button>
      </el-row>
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
        "industry_name": "运营"                                                   //公司所属行业
      
    };
  }
};
</script>


<style lang="less" scoped>
.box {
  span {
    display: inline-block;
    width: 42px;
    height: 24px;
    img {
      display: block;
      width: 100%;
    }
  }
}
</style>
