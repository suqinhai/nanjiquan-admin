<!--  -->
<template>
  <div class="contentmanage">
      <menu-header>
          <el-button class="addPost" slot="addPost" type="primary">新建岗位</el-button>
      </menu-header>
     <tool-table :tools="tools">
        <el-select slot="select1" v-model="select1" placeholder="所属行业"  style="width:100%">
            <el-option
            v-for="item in industry_list"
            :key="item.industry_id"
            :label="item.industry_name"
            :value="item.industry_id">
            </el-option>
        </el-select>
        <el-select slot="select2" v-model="select2" placeholder="岗位筛选" style="width:100%">
            <el-option
            v-for="item in post_list"
            :key="item.post_id"
            :label="item.post_name"
            :value="item.post_id">
            </el-option>
        </el-select>
        <el-select slot="select3" v-model="select3" placeholder="岗位筛选" style="width:100%">
            <el-option
            v-for="item in status_list"
            :key="item.status_id"
            :label="item.status_name"
            :value="item.status_id">
            </el-option>
        </el-select>
        <el-table-column slot="edit" label="操作" width="180">
            <template slot-scope="scope">
                <el-button
                size="text"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                size="mini"
                type="text"
                @click="handleDelete(scope.$index, scope.row)">投递详情</el-button>
            </template>
        </el-table-column>
     </tool-table>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Menuheader from  '../assembly/Menuheader.vue';
import Table from  '../assembly/Table.vue';
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { 
      "menu-header":Menuheader,
      "tool-table":Table
  },    
  data() {
    //这里存放数据
    return {
        tools:["所属行业","岗位名称","所属公司","发布日期","有效时间","浏览次数","投递次数","分享次数","岗位状态"],
        industry_list:[{
                "industry_id": 1,
                "industry_name": "技术开发"
            },
            {
                "industry_id": 2,
                "industry_name": "运营"
            },
            {
                "industry_id": 3,
                "industry_name": "销售"
            },
            {
                "industry_id": 4,
                "industry_name": "人事"
            },
            {
                "industry_id": 5,
                "industry_name": "高级管理"
            },
            {
                "industry_id": 6,
                "industry_name": "设计"
            },
            {
                "industry_id": 7,
                "industry_name": "传媒"
            },
            {
                "industry_id": 8,
                "industry_name": "产品"
            },
            {
                "industry_id": 9,
                "industry_name": "房地产"
            }],
        post_list:[
            {
                "post_id": 51,
                "post_name": "其他"
            },
            {
                "post_id": 37,
                "post_name": "餐厅领班"
            },
            {
                "post_id": 36,
                "post_name": "大堂经理"
            },
            {
                "post_id": 35,
                "post_name": "店长/经理"
            },
            {
                "post_id": 34,
                "post_name": "餐饮服务"
            },
            {
                "post_id": 33,
                "post_name": "服务业"
            },
            {
                "post_id": 32,
                "post_name": "人事助理"
            },
            {
                "post_id": 31,
                "post_name": "人事专员"
            },
            {
                "post_id": 30,
                "post_name": "人事主管"
            },
            {
                "post_id": 29,
                "post_name": "人事经理"
            },
            {
                "post_id": 28,
                "post_name": "人事总监"
            },
            {
                "post_id": 38,
                "post_name": "餐饮服务员"
            },
            {
                "post_id": 39,
                "post_name": "行政主厨/厨师长"
            },
            {
                "post_id": 40,
                "post_name": "其他"
            },
            {
                "post_id": 50,
                "post_name": "兼职"
            },
            {
                "post_id": 49,
                "post_name": "中专/职校生"
            },
            {
                "post_id": 48,
                "post_name": "大学/大专应届毕业生"
            },
            {
                "post_id": 47,
                "post_name": "研究所"
            },
            {
                "post_id": 46,
                "post_name": "在校学生"
            },
            {
                "post_id": 45,
                "post_name": "公务员"
            },
            {
                "post_id": 44,
                "post_name": "其他"
            },
            {
                "post_id": 43,
                "post_name": "酒店/宾馆销售"
            },
            {
                "post_id": 42,
                "post_name": "酒店/宾馆经理"
            },
            {
                "post_id": 41,
                "post_name": "酒店旅游"
            },
            {
                "post_id": 27,
                "post_name": "人力资源"
            },
            {
                "post_id": 26,
                "post_name": "会计"
            },
            {
                "post_id": 25,
                "post_name": "财务经理"
            },
            {
                "post_id": 11,
                "post_name": "PHP"
            },
            {
                "post_id": 10,
                "post_name": "Java"
            },
            {
                "post_id": 9,
                "post_name": "C++"
            },
            {
                "post_id": 8,
                "post_name": "C语言"
            },
            {
                "post_id": 7,
                "post_name": "前端开发"
            },
            {
                "post_id": 6,
                "post_name": "后端开发"
            },
            {
                "post_id": 5,
                "post_name": "双片机"
            },
            {
                "post_id": 4,
                "post_name": "单片机"
            },
            {
                "post_id": 3,
                "post_name": "软件开发"
            },
            {
                "post_id": 2,
                "post_name": "硬件开发"
            },
            {
                "post_id": 12,
                "post_name": "Python"
            },
            {
                "post_id": 13,
                "post_name": "GO"
            },
            {
                "post_id": 14,
                "post_name": "Web开发"
            },
            {
                "post_id": 24,
                "post_name": "财务总监"
            },
            {
                "post_id": 23,
                "post_name": "首席财务官 CFO"
            },
            {
                "post_id": 22,
                "post_name": "财务/审计/税务"
            },
            {
                "post_id": 21,
                "post_name": "其他"
            },
            {
                "post_id": 20,
                "post_name": "销售主管"
            },
            {
                "post_id": 19,
                "post_name": "销售经历"
            },
            {
                "post_id": 18,
                "post_name": "销售总监"
            },
            {
                "post_id": 17,
                "post_name": "销售管理"
            },
            {
                "post_id": 16,
                "post_name": "Android"
            },
            {
                "post_id": 15,
                "post_name": "IOS"
            },
            {
                "post_id": 1,
                "post_name": "技术开发"
            }],
        status_list:[
            {
                "status_id": 1,
                "status_name": "招聘中"
            },
            {
                "status_id": 2,
                "status_name": "已关闭"
            },
            {
                "status_id": -1,
                "status_name": "已过期"
            }
        ],
        select1:"",
        select2:"",
        select3:"",
    
    
    
    
    
    
    
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
       handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
      this.$axios.post("Userpost/listsbefore").then(res => {
          console.log(res)
        //  if (!res.data.code) {
        //     this.industry_list=res.data.data.industry_list;
        //     this.post_list=res.data.data.post_list;
        //  }
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
.contentmanage{
}
</style>
