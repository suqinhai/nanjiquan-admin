<!--  -->
<template>
  <div class="contentmanage">
    <menu-header>
    </menu-header>
    <tool-table :tools="tools" :posturl="posturl" :selectData="selectData" @rankData="rankData">
      <el-form-item label="用户名" slot="select1">
        <el-input auto-complete="off" v-model="selectData.projectName"></el-input>
      </el-form-item>
      <el-form-item label="所属行业" slot="select2">
        <el-select v-model="selectData.industry_id" placeholder="请选择所属行业">
          <el-option
            v-for="item in industry_list"
            :key="item.industry_id"
            :label="item.industry_name"
            :value="item.industry_id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="期望职位" slot="select3">
        <el-select v-model="selectData.post_id" placeholder="全部">
          <el-option
            v-for="item in post_list"
            :key="item.post_id"
            :label="item.post_name"
            :value="item.post_id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-table-column slot="edit" label="操作" width="200">
        <template slot-scope="scope">
          <el-button size="text" @click="handleDetails(scope.$index, scope.row);">查看简历</el-button>
          <el-button size="text" @click="handleDown(scope.$index, scope.row);dialogFormVisible=true;">下载简历</el-button>
        </template>
      </el-table-column>
    </tool-table>
    <!--下载简历弹窗-->
    <el-dialog title="简历下载" :visible.sync="dialogFormVisible" width="50%">
        <div class="resumelist">
            <div class="item" v-for="(item,value) in resume_list">
              <el-row>
                <el-col :span="18">
                  <div class="title" v-html="item.annex_name"></div>
                  <div class="time" v-html="item.addtime"></div>
                </el-col>
                <el-col :span="6">
                  <el-button type="primary" @click="downLoad(item.annex_file)">下载简历</el-button>
                </el-col>
              </el-row>
            </div>
        </div>
    </el-dialog>
  </div>
</template>

<script>
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
            name:"简历列表",
            menuList:[
              {name:'简历列表',path:"resume"},
            	{name:'简历详情',path:"resumeDetails"}
            ]
      },
      tools: [
        "用户名",
        "名称",
        "行业",
        "期望职位",
        "工作城市",
        "薪资要求",
        "附件简历个数"
      ],
      posturl: "Resume/lists",
      selectData: {
        projectName: "",
        field_id: ""
      },
      dialogFormVisible: false,
      industry_list: [
        //所属行业
        {
          industry_id: 1,
          industry_name: "技术开发"
        },
        {
          industry_id: 2,
          industry_name: "运营"
        },
        {
          industry_id: 3,
          industry_name: "销售"
        },
        {
          industry_id: 4,
          industry_name: "人事"
        },
        {
          industry_id: 5,
          industry_name: "高级管理"
        },
        {
          industry_id: 6,
          industry_name: "设计"
        },
        {
          industry_id: 7,
          industry_name: "传媒"
        },
        {
          industry_id: 8,
          industry_name: "产品"
        },
        {
          industry_id: 9,
          industry_name: "房地产"
        }
      ],
      post_list: [
        //岗位筛选
        {
          post_id: 51,
          post_name: "其他"
        },
        {
          post_id: 37,
          post_name: "餐厅领班"
        },
        {
          post_id: 36,
          post_name: "大堂经理"
        },
        {
          post_id: 35,
          post_name: "店长/经理"
        },
        {
          post_id: 34,
          post_name: "餐饮服务"
        },
        {
          post_id: 33,
          post_name: "服务业"
        },
        {
          post_id: 32,
          post_name: "人事助理"
        },
        {
          post_id: 31,
          post_name: "人事专员"
        },
        {
          post_id: 30,
          post_name: "人事主管"
        },
        {
          post_id: 29,
          post_name: "人事经理"
        },
        {
          post_id: 28,
          post_name: "人事总监"
        },
        {
          post_id: 38,
          post_name: "餐饮服务员"
        },
        {
          post_id: 39,
          post_name: "行政主厨/厨师长"
        },
        {
          post_id: 40,
          post_name: "其他"
        },
        {
          post_id: 50,
          post_name: "兼职"
        },
        {
          post_id: 49,
          post_name: "中专/职校生"
        },
        {
          post_id: 48,
          post_name: "大学/大专应届毕业生"
        },
        {
          post_id: 47,
          post_name: "研究所"
        },
        {
          post_id: 46,
          post_name: "在校学生"
        },
        {
          post_id: 45,
          post_name: "公务员"
        },
        {
          post_id: 44,
          post_name: "其他"
        },
        {
          post_id: 43,
          post_name: "酒店/宾馆销售"
        },
        {
          post_id: 42,
          post_name: "酒店/宾馆经理"
        },
        {
          post_id: 41,
          post_name: "酒店旅游"
        },
        {
          post_id: 27,
          post_name: "人力资源"
        },
        {
          post_id: 26,
          post_name: "会计"
        },
        {
          post_id: 25,
          post_name: "财务经理"
        },
        {
          post_id: 11,
          post_name: "PHP"
        },
        {
          post_id: 10,
          post_name: "Java"
        },
        {
          post_id: 9,
          post_name: "C++"
        },
        {
          post_id: 8,
          post_name: "C语言"
        },
        {
          post_id: 7,
          post_name: "前端开发"
        },
        {
          post_id: 6,
          post_name: "后端开发"
        },
        {
          post_id: 5,
          post_name: "双片机"
        },
        {
          post_id: 4,
          post_name: "单片机"
        },
        {
          post_id: 3,
          post_name: "软件开发"
        },
        {
          post_id: 2,
          post_name: "硬件开发"
        },
        {
          post_id: 12,
          post_name: "Python"
        },
        {
          post_id: 13,
          post_name: "GO"
        },
        {
          post_id: 14,
          post_name: "Web开发"
        },
        {
          post_id: 24,
          post_name: "财务总监"
        },
        {
          post_id: 23,
          post_name: "首席财务官 CFO"
        },
        {
          post_id: 22,
          post_name: "财务/审计/税务"
        },
        {
          post_id: 21,
          post_name: "其他"
        },
        {
          post_id: 20,
          post_name: "销售主管"
        },
        {
          post_id: 19,
          post_name: "销售经历"
        },
        {
          post_id: 18,
          post_name: "销售总监"
        },
        {
          post_id: 17,
          post_name: "销售管理"
        },
        {
          post_id: 16,
          post_name: "Android"
        },
        {
          post_id: 15,
          post_name: "IOS"
        },
        {
          post_id: 1,
          post_name: "技术开发"
        }
      ],
      resume_list: [
          {
              annex_id: 1,
              annex_name:"第一个",
              annex_file: "http://niukou.api.chengmikeji.com/upload/logo/d4/a4d77cecee3c762cad1c9b08853a61.jpg",
              addtime: "1970-01-01 08:00"
          }
      ]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleDetails(index, row) {
      this.$router.push({ path:'/contentDetails',query:{resume_id: row.resume_id}});
    },
    handleDown(index, row) {
      console.log(index, row);
      var that=this;
      this.$axios.post("Userpost/listsbefore",{resume_id:row.resume_id}).then(res => {
	      if(res.data.code==1){
	           that.resume_list=res.data.data;
	      }
      }).catch(err=>{

       });
    },
    downLoad(url){
      window.open(url);
    },
    rankData(data) {
      var obj = [];
      obj = data.map((val, index, data) => {
        let obj1 = new Object();
        for (var item in val) {
        	obj1.resume_id = data[index].resume_id;
          obj1.resume_username = data[index].resume_username;
          obj1.resume_name = data[index].resume_name;
          obj1.industry_name = data[index].industry_name;
          obj1.post_name = data[index].post_name;
          obj1.city_name = data[index].city_name;
          obj1.salary_value = data[index].salary_value;
          obj1.annexcount = data[index].annexcount;
        }
        return obj1;
      });
      return obj;
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
   this.$axios.post("Userpost/listsbefore").then(res => {
         console.log(res)
        if (res.data.code==1) {
          //所属行业
          this.industry_list=res.data.data.industry_list;
          //岗位筛选
          this.post_list=res.data.data.post_list;
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
  h3 {
    margin: 30px 0 10px 0;
    padding-bottom: 5px;
    border-bottom: 1px solid #eee;
  }
  img {
    width: 200px;
  }
  .resumelist{ width: 100%; height: auto;
      .item{ 
        width: 100%; 
        height: auto; 
        border-bottom: 1px  solid #e1e1e1;
         padding-bottom: 10px;
        .title{ line-height: 50px; font-size: 16px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;}
        .time{ line-height: 25px; font-size:12px;}
      }

  }
}
</style>
