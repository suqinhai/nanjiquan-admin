<!--  -->
<template>
  <div class="resume">
    <menu-header></menu-header>
    <div class="userInfo">
      <div class="head">
        <img :src="detail.avatar">
      </div>
      <div class="con">
        <el-row>
          <el-col :span="24">
            <div class="name">姓名: <span v-html="detail.username"></span></div>
          </el-col>
          <el-col :span="6">
            <div class="txt">出生日期: <span v-html="detail.birthday"></span></div>
          </el-col>
          <el-col :span="18">
            <div class="txt">参加工作日期: <span v-html="detail.work_time">互联网</span></div>
          </el-col>
          <el-col :span="6">
            <div class="txt">优势: <span v-html="detail.advantage"></span></div>
          </el-col>
          <el-col :span="18">
            <div class="txt">微信号: <span v-html="detail.wechat">产品经理</span></div>
          </el-col>
          <el-col :span="6">
            <div class="txt">学历: <span v-html="detail.education_value"></span></div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="box-card">
        <el-card>
        <div slot="header" class="clearfix">
            <span>基本状况</span>
            <div style="float: right; padding: 3px 0" type="text">求职状态:<span v-html="detail.jobstatus_id"></span></div>
        </div>
        <div class="list">
                <div class="item" v-for="(item,index) in expection_list">
                    <el-row>
                        <el-col :span="6">行业期望: <span v-html="item.industry_name"></span></el-col>
                        <el-col :span="6">岗位期望：<span v-html="item.post_name"></span></el-col>
                        <el-col :span="6">期望薪资：<span v-html="item.salary_value"></span></el-col>
                        <el-col :span="6">地点要求：<span v-html="item.city_name"></span></el-col>
                    </el-row>
                </div>
        </div>
        </el-card>
    </div>
    <div class="box-card">
        <el-card>
        <div slot="header" class="clearfix">
            <span>工作经历</span>
        </div>
        <div class="list">
            <div class="item" v-for="(item,index) in work_list">
                    <el-row>
                        <el-col :span="8" v-html="item.company_name"></el-col>
                        <el-col :span="8" v-html="item.post_name"></el-col>
                        <el-col :span="8" v-html="item.entry_time+'---'+item.leave_time"></el-col>
                    </el-row>
                    <div class="content" v-html="item.work_content"></div>
                </div>
        </div>
        </el-card>
    </div>
    <div class="box-card">
        <el-card>
            <div slot="header" class="clearfix">
                <span>教育经历</span>
            </div>
            <div class="list">
                <div class="item" v-for="(item,index) in education_list">
                    <el-row>
                        <el-col :span="6" v-html="item.school_name"></el-col>
                        <el-col :span="6" v-html="item.education_value"></el-col>
                        <el-col :span="6" v-html="item.profession"></el-col>
                        <el-col :span="6" v-html="item.education_strart_time+'---'+item.education_end_time"></el-col>
                    </el-row>
                    <div class="content" v-html="item.experience"></div>
                </div>
            </div>
        </el-card>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Menuheader from "../assembly/Menuheader.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    "menu-header": Menuheader
  },
  data() {
    //这里存放数据
    return {
    	headerMenu:{
            name:"简历列表",
            menuList:[
            	{name:'简历列表',path:"resume"}
            ]
      },
        detail:{
            "username": "黄小又",                                          //姓名
            "jobstatus_id": 1,                                              //求职状态
            "avatar": "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoJroUyib201UTZaQtFyYiafgdYpbV1qZIQmcuoLgxrhTDOHh5zNFZ1E1TPib1QQ2zbL7IlTRcVKfXPw/132",                                                 //头像
            "work_time": "2013-04",                                         //参加工作日期
            "wechat": "xiaoyou",                                            //微信号
            "birthday": "1999-03-23",                                       //出生日期
            "advantage": "很大的优势",                                       //优势
            "education_value": "小学"                                         //学历
        },
       "expection_list": [                                                 //求职期望
            {
                "expectation_id": 1,                                        //主id
                "post_id": 1,                                               //期望职位id
                "post_name": "技术开发",                                    //期望职位
                "industry_id": 2,                                           //期望行业id
                "industry_name": "运营",                                  //期望行业
                "city_id": 4,                                               //城市id
                "city_name": "唐山市",                                      //城市名称
                "salary_id": 1,                                            //薪资要求id
                "salary_value": "0-1k"                                      //薪资要求
            },
            {
                "expectation_id": 2,
                "post_id": 1,
                "post_name": "技术开发",
                "industry_id": 2,
                "industry_name": "运营",
                "city_id": 3,
                "city_name": "石家庄市",
                "salary_id": 1,
                "salary_value": "0-1k"
            }
        ],
        "education_list": [                                                 //教育经历部分
            {
                "jeducation_id": 1,                                         //主id
                "school_name": "那个学校",                                  //学校名称
                "education_id": 2,                                          //学历id
                "education_value": "初中",                                    //学历名称
                "education_strart_time": "2019-04-17",                      //时间段-开始时间
                "education_end_time": "2019-04-17",                         //时间段-结束时间
                "profession": "那个专业",                                   //专业
                "experience": "啦啦啦啦"                                    //在校经历
            },
            {
                "jeducation_id": 2,
                "school_name": "那个学校",
                "education_id": 2,
                "education_value": "初中",
                "education_time": "2019-04-16",
                "profession": "那个专业",
                "experience": "啦啦啦啦"
            }
        ],
        "work_list": [                                                      //工作经历部分
            {
                "company_name": "那个公司",                                 //公司名称
                "entry_time": "2013-02",                                    //入职时间
                "leave_time": "2019-06",                                    //离职时间
                "post_name": "那个职位",                                    //岗位-职位
                "work_content": "啦啦啦啦"                                  //工作内容
            },
            {
                "company_name": "那个公司",
                "entry_time": "2013-02",
                "leave_time": "2019-06",
                "post_name": "那个职位",
                "work_content": "啦啦啦啦"
            }
        ]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
      var that=this;
      this.$axios.post("Resume/resumeDetails",{resume_id:this.$route.query.resume_id}).then(res => {
        if(res.data.code==1){
            that.detail=res.data.data.detail;
            that.expection_list=res.data.data.expection_list;
            that.education_list=res.data.data.education_list;
            that.work_list=res.data.data.work_list;
            that.annex_list=res.data.data.annex_list;
            
        }
      }).catch(err=>{
        console.log(err);
      });
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.resume{
    .userInfo{ 
        width: 100%; 
        height: auto; 
        display: flex; 
        box-sizing: border-box;
        padding: 20px;
        .head{
            width: 150px;
            height: 150px;
            border-radius: 100%;
            overflow: hidden;
            margin-right:20px;
            img{
                width:100%;
                height: auto;
            }
        }
        .con{ 
            flex: 1;
            .name{ 
                line-height: 50px;
                font-size: 20px;
                font-weight: bold;
            }
            .txt{
                line-height: 30px;
                font-size: 16px;
                color: #666;
            }
        }
        
    }
    .box-card{
        width: 100%; 
        height: auto; 
        box-sizing: border-box;
        padding: 20px;
        .list{
            width: 100%;
            .item{
                overflow: hidden;
                margin-top: 20px;
                .el-row{ 
                    height: 50px; 
                    line-height: 50px; 
                    background: #f0f2f5; 
                    font-size:14px; 
                    box-sizing: border-box;
                    padding: 0 30px;
                    span{ color:#666;}
                }
                .content{ 
                    height: 150px; 
                    overflow: auto;
                    border:1px solid #e1e1e1;
                    box-sizing: border-box;
                    padding:10px 20px;
                }
            }
            .item:first-child{
                margin-top: 0;
            }
            
        }
    }
}

</style>