<!--  -->
<template>
  <div class="contentmanage">
    <menu-header>
      <el-button class="addPost" slot="addPost" type="primary">投递详情</el-button>
    </menu-header>
    <tool-table :tools="tools" :posturl="posturl" :selectData="selectData" @rankData="rankData">
      <el-form-item label="用户名搜索" slot="select3">
        <el-input auto-complete="off" v-model="userName" :disabled="true"></el-input>
      </el-form-item>
      <el-table-column slot="edit" label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            size="text"
            @click="handleDown(scope.$index, scope.row);"
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
      posturl: "Userpost/deliveryRecording",
      selectData: {
          username:"",
          upost_id:this.$route.query.id
      }

    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleEdit(index, row) {
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
    //   this.$axios.post("Userpost/listsbefore").then(res => {
    //       console.log(res)
    //     //  if (!res.data.code) {
    //     //     this.industry_list=res.data.data.industry_list;
    //     //     this.post_list=res.data.data.post_list;
    //     //  }
    //   }).catch(err=>{
    //       console.log(err)
    //   })
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
