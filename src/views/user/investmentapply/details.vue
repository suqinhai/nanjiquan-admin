<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/User/lists' }">用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>投资机构认证</el-breadcrumb-item>
      <el-breadcrumb-item>认证详情</el-breadcrumb-item>
    </el-breadcrumb>
    <h4>投资机构信息详情</h4>

    <div class="box">
      <div class="detailBox">
        <h5>认证详情</h5>
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="6">
            <div class="grid-content bg-purple">流水号:{{invest_n}}</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light">提交时间:{{invest_addtime}}</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">处理时间:{{invest_verify_time}}</div>
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
                <img :src="invest_avater" alt>
              </span>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">真实姓名：{{invest_realname}}</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">手机号：{{invest_mobile}}</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">微信号：{{invest_wechat}}</div>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content bg-purple">BP邮箱：{{invest_bpemail}}</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">身份证号：{{identity_id}}</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">提交时间：{{invest_addtime}}</div>
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

      <div class="pictureInfo">
        <h5>申请账号详细信息</h5>
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="6">
            <div class="grid-content bg-purple">机构全称:{{invest_name}}</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light">
              公司logo:
              <span>
                <img :src="invest_logo" alt>
              </span>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
                企业法人:{{invest_corporate}}</div>
          </el-col>
        </el-row>

        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="6">
            <div class="grid-content bg-purple">公司地址:{{invest_company_address}}</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light">
             关注领域:{{ field_name}}
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
                投资阶段:{{ stage_name}}
            </div>
          </el-col>
        </el-row>

        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="6">
            <div class="grid-content bg-purple">单笔投资:
               {{invest_single_min_investment}}万-{{invest_single_max_investment}}万
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light">
             常住城市:{{invest_permanent_city_name}}
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
            </div>
          </el-col>
        </el-row>

        <el-row>基金介绍:{{invest_introduction}}</el-row>

        <el-row>
            组织机构代码证照:
            <span><img :src=invest_card_licence alt=""></span>
        </el-row>
      </div>



      <div class="accountSetting">
          <el-row>免费查看BP次数：<input type="text" :value=user_bp_count readonly></el-row>
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
      invest_no: "123456", //工单号
      uid: 1,
      invest_avater:
        "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoJroUyib201UTZaQtFyYiafgdYpbV1qZIQmcuoLgxrhTDOHh5zNFZ1E1TPib1QQ2zbL7IlTRcVKfXPw/132", //头像
      invest_realname: "黄某某", //真实姓名
      invest_mobile: "18476116867", //手机号
      invest_wechat: "xiaoyou", //微信号
      invest_bpemail: "vip@qq.com", //BP邮箱
      identity_id: 1,
      invest_personal_business_card: "http://niukou.api.chengmikeji.com/1", //个人名片
      invest_name: "软件产业基地1", //机构名称
      invest_company_address: "1", //公司地址
      invest_logo:
        "http://niukou.api.chengmikeji.com/upload/logo/84/3df60a42f7270b8fc2944d6f8fb2be.jpg", //机构logo
      invest_corporate: "黄某某", //公司法人
      invest_card_licence:
        "http://niukou.api.chengmikeji.com/upload/licence/84/3df60a42f7270b8fc2944d6f8fb2be.jpg", //组织机构代码证照
      invest_introduction: "我是介绍", //基金介绍
      field_id: "1,2,3",
      stage_id: "1",
      invest_single_min_investment: "100.00", //单笔最低投资金额
      invest_single_max_investment: "200.00", //单笔最高投资金额
      invest_permanent_city: 110100, //
      invest_permanent_city_name: "北京市", //常驻城市
      invest_status: 1, //0草稿;1审核通过;2待审核;-1审核不通过
      invest_verify_time: 0, //处理时间
      invest_addtime: "2019-04-04", //添加日期
      user_front_idcard:
        "http://niukou.api.chengmikeji.com/upload/icard/84/3df60a42f7270b8fc2944d6f8fb2be.jpg", //身份证正方面
      user_reverse_idcard:
        "http://niukou.api.chengmikeji.com/upload/icard/84/3df60a42f7270b8fc2944d6f8fb2be.jpg", //身份证反方面
      user_bp_count: 3, //查看BP次数
      user_showbp_money: 0.01, //超过免费次数后每次需要支付金额
      identity_name: "个人", //投资人身份
      field_name: "先进制造行业,先进制造行业", //关注领域
      stage_name: "种子轮" //投资阶段
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
