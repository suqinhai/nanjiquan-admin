<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/User/lists' }">用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>产品服务商管理</el-breadcrumb-item>
      <el-breadcrumb-item>产品服务详情</el-breadcrumb-item>
    </el-breadcrumb>
    <h4>查看详情</h4>

    <div class="box">
      <div class="detailBox">
        <h5>认证详情</h5>
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="6">
            <div class="grid-content bg-purple">流水号:</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light">提交时间:</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">处理时间:</div>
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
                <img :src="shop_avater" alt>
              </span>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">真实姓名：{{shop_realname}}</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">手机号：{{shop_mobile}}</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">微信号：{{shop_wechat}}</div>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content bg-purple">企业邮箱：{{shop_business_mailbox}}</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">身份证号：{{identity_id}}</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">提交时间：{{shop_addtime}}</div>
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
            <div class="grid-content bg-purple">公司全称:{{shop_compnay_name}}</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light">所属行业:{{category_name}}</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
                公司规模:{{shop_corporate}}</div>
          </el-col>
        </el-row>

        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="6">
            <div class="grid-content bg-purple">公司地址:{{shop_company_address}}</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light">
             公司logo:  <span><img :src=shop_company_logo alt=""></span>   
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
                企业法人:{{ shop_corporate}}
            </div>
          </el-col>
        </el-row>

        
        <el-row>
            组织机构代码证照:
            <span><img :src=shop_business_license alt=""></span>
        </el-row>
      </div>



      

      <el-row>
          
           <el-button>返回</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
     "uid": 5,
        "shop_avater": "http://niukou.api.chengmikeji.com/upload/logo/52/441bb2554bbb18c3931f83a9924c04.png",       //头像
        "shop_realname": "dylan",                                               //真实姓名
        "shop_mobile": "17304400269",                                           //手机号
        "shop_wechat": "wechar",                                                //微信号
        "shop_business_mailbox": "467456744@qq.com",                            //企业邮箱
        "category_id": 3,
        "shop_product_name": "ssahi",                                           //产品名称
        "shop_product_price": 0,                                                //产品售价
        "category_child_id": 4,
        "category_lastchild_id": 3,
        "shop_product_photo": "http://niukou.api.chengmikeji.com/upload/licence/52/441bb2554bbb18c3931f83a9924c04.png",                                             //产品预览图
        "shop_compnay_name": "22",                                              //公司全称
        "shop_company_address": "广东省深圳市南山区科技园",                                             //公司地址
        "shop_company_logo": "http://niukou.api.chengmikeji.com/upload/logo/52/441bb2554bbb18c3931f83a9924c04.png",                                             //公司Logo
        "shop_business_license": "http://niukou.api.chengmikeji.com/upload/licence/ff/c79e53f9e5563ac6790c3397f1d6a4.png",                                              //营业执照
        "shop_corporate": "22",                                             //公司法人
        "shop_status": 1,                                                   //0草稿;1审核通过;2待审核;3审核不通过
        "shop_verify_time": 0,                                              //审核时间
        "shop_addtime": "2019-04-29",                                       //添加日期
        "user_front_idcard": "http://niukou.api.chengmikeji.com/upload/icard/d4/a4d77cecee3c762cad1c9b08853a61.jpg",                                                //身份证正面
        "user_reverse_idcard": "http://niukou.api.chengmikeji.com/upload/icard/d4/a4d77cecee3c762cad1c9b08853a61.jpg",                                              //身份证反面
        "category_name": "热门"                             
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


