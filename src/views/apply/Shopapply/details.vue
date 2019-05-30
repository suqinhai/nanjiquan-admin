<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">一级菜单</el-breadcrumb-item>
      <el-breadcrumb-item>二级菜单</el-breadcrumb-item>
      <el-breadcrumb-item>三级菜单</el-breadcrumb-item>
    </el-breadcrumb>

    <h4>认证详情</h4>
    <div class="box">
      <P class="title">工单号:{{log_list[0].log_no}}</P>
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <p class="nanjiquanapply">
              <span></span>
              服务商企业认证
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


      <!-- 产品信息 -->
      <div class="productInfo">
          <h5>产品信息</h5>

      <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="8">
            <div class="grid-content bg-purple">产品名称:{{shop_product_name}}</div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-light">
             服务所属领域:{{category_name}}
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">产品售价:
              {{shop_product_price}}
             </div>
          </el-col>
        </el-row>

        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="8">
            <div class="grid-content bg-purple">产品所属分类:</div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-light">
             产品类别:
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">产品预览图:
              <span><img :src=shop_product_photo alt=""></span>
             </div>
          </el-col>
        </el-row>

      </div>


      <!-- 申请账号详细信息 -->
      <div class="idInfo">
        <h5>申请账号详细信息</h5>

        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="8">
            <div class="grid-content bg-purple">公司全称:{{shop_name}}</div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-light">
             所属行业:{{industry_name}}
            </div>
          </el-col>
          <el-col :span="8">
             <div class="grid-content bg-purple">企业法人:{{shop_corporate}}</div>
          </el-col>
        </el-row>

        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="8">
            <div class="grid-content bg-purple">公司地址:{{shop_company_address}}</div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-light">公司logo:
              <span><img :src=shop_company_logo alt=""></span></div>
          </el-col>
          <el-col :span="8">
           
          </el-col>
        </el-row>


        <el-row>
          组织机构代码证照:
          <span>
            <img :src=shop_business_license alt>
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
        "category_name": "热门",                                              //所属领域
        "log_list": [
            {
                "log_status": 1,
                "log_no": " 190505043338gaTD",
                "log_remark": "",
                "log_addtime": "2019-05-06 10:41",
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
