<!--  -->
<template>
  <div class="contentmanage">
    <!--头部组件和插槽-->
    <menu-header :headerMenu="headerMenu">
    </menu-header>
    <!--表格组件和插槽-->
    <tool-table :tools="tools" :selectRiqi="selectRiqi" :posturl="posturl" :selectData="selectData" @rankData="rankData">
      <el-form-item label="查看时间" slot="select4">
          <el-date-picker
            align="right"
            type="date"
            placeholder="开始日期"
            :picker-options="pickerOptions1"
            v-model="selectData.start_time"
          ></el-date-picker>
          <el-date-picker
            align="right"
            type="date"
            placeholder="结束日期"
            v-model="selectData.end_time"
            :picker-options="pickerOptions1"
          ></el-date-picker>
      </el-form-item>
      <el-form-item label="投资机构搜索" slot="select3">
        <el-input auto-complete="off" v-model="selectData.userName"></el-input>
      </el-form-item>
      <el-table-column slot="edit" label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            size="text"
            @click="handleDetails(scope.$index, scope.row);dialogFormVisible=true;"
          >查看机构信息</el-button>
        </template>
      </el-table-column>
    </tool-table>
    <!--详情-->
    <el-dialog title="机构详情" :visible.sync="dialogFormVisible" width="65%">
      <el-form label-width="170px">
        <el-form-item label="真实姓名：">
          <el-input v-model="detailsData.invest_realname" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号：">
          <el-input v-model="detailsData.invest_mobile" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="微信号：">
          <el-input v-model="detailsData.wechat" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="BP邮箱：">
          <el-input v-model="detailsData.bpemail" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="个人名片：">
           <img class="" :src="detailsData.personal_business_card">
        </el-form-item>
        <el-form-item label="机构名称：">
           <el-input v-model="detailsData.invest_name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="公司地址：">
           <el-input v-model="detailsData.company_address" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="logo">
          <img  :src="detailsData.logo">
        </el-form-item>
        <el-form-item label="公司法人:">
          <el-input v-model="detailsData.corporate"  auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="组织机构代码证照:">
          <img :src="detailsData.card_licence">
        </el-form-item>
        <el-form-item  label="基金介绍：">
          <el-input v-model="detailsData.invest_introduction" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="单笔最低投资金额(万)：">
          <el-input v-model="detailsData.single_min_investment" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="单笔最高投资金额(万)：">
          <el-input v-model="detailsData.single_max_investment" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="投资人身份：">
          <el-input v-model="detailsData.identity_name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="投资领域：">
          <el-input type="textarea" v-model="detailsData.field_name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="投资阶段：">
            <el-input v-model="detailsData.stage_name" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Menuheader from "../assembly/Menuheader.vue";
import Table from "../assembly/Table.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    "menu-header": Menuheader,
    "tool-table": Table
  },
  data() {
    //这里存放数据
    return {
    	headerMenu:{
            name:"查阅情况",
            menuList:[
            	{name:'项目列表',path:"project"},
            	{name:'查阅情况',path:"pbDetails"}
            ]
      },
      tools: [
        "用户昵称",
        "账号",
        "投资机构名称",
        "联系人",
        "联系人职位",
        "联系方式",
        "查看时间"
      ],
      posturl: "Project/showBpList",
      selectData: {
          start_time:"",
          end_time:"",
          invest_name:"",
          project_id:this.$route.query.project_id
      },
      selectRiqi:true,
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      dialogFormVisible:false,
      detailsData: {
          "invest_realname": "黄某某",                                   //真实姓名
          "invest_mobile": "xxxx",                                    //手机号
          "wechat": "xiaoyou",                                        //微信号
          "bpemail": "vip@qq.com",                                    //BP邮箱
          "identity_id": 1,
          "personal_business_card": "http://niukou.api.chengmikeji.com/1",                                    //个人名片
          "invest_name": "软件产业基地1",                               //机构名称
          "company_address": "1",                                     //公司地址
          "logo": "http://niukou.api.chengmikeji.com/upload/logo/84/3df60a42f7270b8fc2944d6f8fb2be.jpg",
          "corporate": "黄某某",                                     //公司法人
          "card_licence": "http://niukou.api.chengmikeji.com/upload/licence/84/3df60a42f7270b8fc2944d6f8fb2be.jpg",                                       //组织机构代码证照
          "invest_introduction": "我是介绍",                          //基金介绍
          "field_id": "1,2,3",
          "stage_id": "1",
          "single_min_investment": "100.00",                          //单笔最低投资金额(万)
          "single_max_investment": "200.00",                          //单笔最高投资金额(万)
          "identity_name": "个人",                                      //投资人身份
          "field_name": "先进制造行业,文化创新行业,AI行业",             //投资领域
          "stage_name": "种子轮"                                         //投资阶段
      }
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
  	//查看机构详情
    handleDetails(index, row) {
      console.log(index, row);
      var that=this;
      this.$axios.post("Project/showInvestmentDetail",{apply_id:row.invest_id}).then(res => {
        if (res.data.code==1) {
           that.detailsData=res.data.data;
        }
      }).catch(err=>{
          console.log(err)
      })
    },
    rankData(data){
        var obj=[];
        obj=data.map((val,index,data)=>{
         let obj1 = new Object();
           for (var item in val){
           	 obj1.invest_id=data[index].invest_id;
             obj1.user_nickname=data[index].user_nickname;
             obj1.invest_mobile=data[index].invest_mobile;
             obj1.invest_name=data[index].invest_name;
             obj1.invest_realname=data[index].invest_realname;
             obj1.invest_mobile=data[index].invest_mobile;
             obj1.sbp_addtime=data[index].sbp_addtime;
           }
           return obj1;
        })
        return obj;
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
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
.contentmanage {
  img{ width: 200px;}
}
</style>
