<!--  -->
<template>
  <div class="contentmanage">
    <menu-header>
      <el-button class="addPost" slot="addPost" type="primary">投递详情</el-button>
    </menu-header>
    <tool-table :tools="tools" :posturl="posturl" :selectData="selectData" @rankData="rankData">
      <el-form-item label="项目名称" slot="select1">
          <el-input auto-complete="off" v-model="selectData.projectName" ></el-input>
      </el-form-item>
      <el-form-item label="所属行业" slot="select2">
        <el-select v-model="selectData.field_id" placeholder="请选择所属行业">
          <el-option
            v-for="item in field_list"
            :key="item.field_id"
            :label="item.field_name"
            :value="item.field_id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-table-column slot="edit" label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            size="text"
            @click="handleDetails(scope.$index, scope.row);"
          >详情</el-button>
          <el-button
            size="text"
            @click="handleDown(scope.$index, scope.row);"
          >查阅情况</el-button>
          <el-button
            size="text"
            @click="handleDown(scope.$index, scope.row);"
          >下载BP</el-button>
        </template>
      </el-table-column>
    </tool-table>
   <!--详情-->
    <el-dialog title="查看详情" :visible.sync="dialogFormVisible" width="65%">
      <el-form label-width="120px">
        <h3>基本信息</h3>
        <el-form-item label="联系人姓名：">
          <el-input auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系人职位：">
          <el-input auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系人手机：">
          <el-input auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系人邮箱：">
          <el-input auto-complete="off"></el-input>
        </el-form-item>
        <h3>公司信息</h3>
        <el-form-item label="公司简称/产品名称：">
          <el-input auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="公司LOGO">
            <img src="">
        </el-form-item>
        <el-form-item label="公司网址：">
          <el-input auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="公司规模：">
          <el-input auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="行业领域：">
          <el-input auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="成立时间：">
          <el-input auto-complete="off"></el-input>
        </el-form-item>
        <h3>项目情况</h3>
        <el-form-item label="融资次数：">
          <el-input auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="公司营业执照：">
          <img src="">
        </el-form-item>
        <el-form-item label="商业计划书：">
          <el-button type="primary">主要按钮</el-button>
        </el-form-item>
        <el-form-item label="项目简介：">
          <el-input type="textarea" auto-complete="off"></el-input>
        </el-form-item>
        <h3>融资需求</h3>
        <el-form-item label="融资金额：">
            <el-input auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="融资需求描述：">
          <el-input type="textarea" auto-complete="off"></el-input>
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
      tools: [
        "公司简称/项目名称",
        "行业领域",
        "项目简介",
        //"联系人",
        "联系人职位",
        "联系方式",
        "浏览次数",
        "查阅次数"
      ],
      posturl: "Project/listbefore",
      selectData: {
          projectName:"",
          field_id:""
      },
      field_list: [                                         //行业领域
            {
                "field_id": 1,
                "field_name": "先进制造行业"
            },
            {
                "field_id": 9,
                "field_name": "基础技术（芯片、新能源、新材料）行业"
            },
            {
                "field_id": 8,
                "field_name": "消费升级行业"
            },
            {
                "field_id": 7,
                "field_name": "互联网行业"
            },
            {
                "field_id": 6,
                "field_name": "医疗健康行业"
            },
            {
                "field_id": 5,
                "field_name": "通信物联网行业"
            },
            {
                "field_id": 4,
                "field_name": "智能硬件行业"
            },
            {
                "field_id": 3,
                "field_name": "AI行业"
            },
            {
                "field_id": 2,
                "field_name": "文化创新行业"
            },
            {
                "field_id": 10,
                "field_name": "未来汽车行业"
            }
        ],
        detailsData: {
          "project_username": "黄某某",                                  //联系人姓名
          "project_position": "我是职位",                                 //联系人职位
          "project_mobile": "13434343666",                                //联系人手机
          "project_email": "test@qq.com",                                 //联系人邮箱
          "project_name": "宝宝项目",                                     //公司简称/产品名称
          "project_detail": "我是详情",                                   //详情
          "project_logo": "http://niukou.api.chengmikeji.com/upload/logo/84/3df60a42f7270b8fc2944d6f8fb2be.jpg",                                      //公司LOGO
          "project_website": "http://www.baidu.com",                      //公司网址
          "scale_id": 1,
          "field_id": 1,
          "project_start_time": "2019",                                   //成立时间
          "project_financing_time": 0,                                    //融资次数
          "project_licence": "http://niukou.api.chengmikeji.com/upload/logo/84/3df60a42f7270b8fc2944d6f8fb2be.jpg",                                       //公司营业执照
          "pfile_id": 1,
          "project_introduction": "我是简介",                             //项目简介
          "project_need_financing": 1,                                    //融资金额
          "project_require_description": "我是需求",                      //融资需求描述
          "scale_name": "少于50人",                                              //公司规模
          "field_name": "先进制造行业",                                     //行业领域
          "pfile_url": "http://niukou.api.chengmikeji.com/upload/logo/84/3df60a42f7270b8fc2944d6f8fb2be.jpg"                                      //商业计划书
      }

    
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleDetails(index, row) {
      var that = this;
      // this.$axios.post("Userpost/details",{upost_id:row.upost_id}).then(res => {
      //    if (res.data.code) {
      //        this.editData=res.data.data.detail;
      //        this.salary_list=res.data.data.salary_list;
      //        this.experience_list=res.data.data.experience_list;
      //        this.education_list=res.data.data.education_list;
      //        var obj=this.post_list.find(function (x) {
      //             return x.post_id === this.editData.post_id
      //         })
      //         this.editData.post_name=obj.post_name
      //     }
      // }).catch(err=>{
      //     console.log(err)

      // })
      var obj = this.post_list.find(function(val) {
        return val.post_id == that.editData.post_id;
      });
      this.editData.post_name = obj.post_name;
    },
    handleDown(index, row) {
      console.log(index, row);
    },
    rankData(data){
        var obj=[];
        obj=data.map((val,index,data)=>{
         let obj1 = new Object();
           for (var item in val){
             obj1.project_name=data[index].project_name;
             obj1.field_name=data[index].field_name;
             obj1.project_introduction=data[index].project_introduction;
             obj1.project_position=data[index].project_position;
             obj1.project_mobile=data[index].project_mobile;
             obj1.project_view=data[index].project_view;
             obj1.project_bp_view=data[index].project_bp_view;
             obj1.pfile_url=data[index].pfile_url;
           }
           return obj1;
        })
        return obj;
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
  
    this.$axios.post("Project/listbefore").then(res => {
          console.log(res)
         if (!res.data.code) {
            this.field_list=res.data.data.field_list;
         }
      }).catch(err=>{
          console.log(err)
      })
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
.contentmanage {
}
</style>
