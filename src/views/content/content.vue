<!--  -->
<template>
  <div class="contentmanage">
    <menu-header>
      <el-button class="addPost" slot="addPost" type="primary">新建岗位</el-button>
    </menu-header>
    <tool-table :tools="tools" :posturl="posturl" :selectData="selectData">
      <el-form-item label="所属行业" slot="select1">
        <el-select v-model="selectData.industry_id" placeholder="全部">
          <el-option
            v-for="item in industry_list"
            :key="item.industry_id"
            :label="item.industry_name"
            :value="item.industry_id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="岗位筛选" slot="select2">
        <el-select v-model="selectData.post_id" placeholder="全部">
          <el-option
            v-for="item in post_list"
            :key="item.post_id"
            :label="item.post_name"
            :value="item.post_id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="岗位状态" slot="select3">
        <el-select v-model="selectData.status" placeholder="全部">
          <el-option
            v-for="item in status_list"
            :key="item.status_id"
            :label="item.status_name"
            :value="item.status_id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-table-column slot="edit" label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            size="text"
            @click="handleEdit(scope.$index, scope.row);dialogFormVisible= true"
          >编辑</el-button>
          <el-button size="mini" type="text" @click="handleDetails(scope.$index, scope.row)">投递详情</el-button>
        </template>
      </el-table-column>
    </tool-table>
    <el-dialog title="岗位编辑" :visible.sync="dialogFormVisible" width="65%">
      <el-form label-width="120px">
        <el-form-item label="岗位有效期调整">
          <el-date-picker
            align="right"
            type="date"
            placeholder="开始日期"
            :picker-options="pickerOptions1"
          ></el-date-picker>
          <el-date-picker
            align="right"
            type="date"
            placeholder="结束日期"
            :picker-options="pickerOptions1"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="岗位上下架操作">
          <el-switch v-model="Tswitch"></el-switch>
        </el-form-item>
        <el-form-item label="行业">
          <el-col :span="12">
            <el-input auto-complete="off" v-model="editData.industry_name" :disabled="true"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="岗位名称">
          <el-col :span="12">
            <el-input auto-complete="off" v-model="editData.post_name" :disabled="true"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="工作地点">
          <el-select placeholder="省级地区" v-model="editData.province_id" @change="choseProvince">
            <template v-for="(item,index) in province_list ">
              <el-option :label="item.province_name" :value="item.province_id"></el-option>
            </template>
          </el-select>
          <el-select placeholder="市级地区" v-model="editData.city_id" @change="choseCtiy">
            <template v-for="(item,index) in city_list ">
              <el-option :label="item.city_name" :value="item.city_id"></el-option>
            </template>
          </el-select>

          <el-select placeholder="区级地区" v-model="editData.district_id">
            <template v-for="(item,index) in district_list ">
              <el-option :label="item.district_name" :value="item.district_id"></el-option>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="薪资期望">
          <el-select placeholder="薪资期望" v-model="editData.salary_id">
            <template v-for="(item,index) in salary_list ">
              <el-option :label="item.salary_value" :value="item.salary_id"></el-option>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="工作经验">
          <el-select placeholder="工作经验" v-model="editData.experience_id">
            <template v-for="(item,index) in experience_list">
              <el-option :label="item.experience_value" :value="item.experience_id"></el-option>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="学历">
          <el-select placeholder="学历" v-model="editData.education_id">
            <template v-for="(item,index) in education_list">
              <el-option :label="item.education_value" :value="item.education_id"></el-option>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="技能要求">
          <el-col :span="12">
            <el-input auto-complete="off" v-model="editData.upost_skill_detail"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="岗位描述">
          <el-col :span="12">
            <el-input type="textarea" auto-complete="off" v-model="editData.upost_position_detail"></el-input>
          </el-col>
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
        "所属行业",
        "岗位名称",
        "所属公司",
        "发布日期",
        "浏览次数",
        "投递次数",
        "分享次数",
        "岗位状态"
      ],
      posturl: "Userpost/lists",
      industry_list: [
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
      status_list: [
        {
          status_id: 1,
          status_name: "招聘中"
        },
        {
          status_id: 2,
          status_name: "已关闭"
        },
        {
          status_id: -1,
          status_name: "已过期"
        }
      ],
      selectData: {
          industry_id:"",
          post_id:"",
          status:""
      },
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
      dialogFormVisible: false,
      formLabelWidth: "120px",
      Tswitch: true,
      editData: {
        industry_name: "人事", //行业
        post_id: 4, //岗位
        province_id: 19, //省id
        city_id: 199, //市id
        district_id: 1769, //区县id
        education_id: 4, //学历id
        experience_id: 4, //工作经验id
        salary_id: 1, //薪资id
        upost_position_detail: "这是一个测试岗位", //职位详情
        upost_skill: "1,2,8", //技能要求(技能id)
        upost_skill_detail: "无经验,1-3年,3-4.5千", //技能要求
        upost_status: 1 //1:招聘中;2:已关闭;-1:已过期
      },
      education_list: [
        //教育下拉列表
        {
          education_id: 1,
          education_value: "小学"
        },
        {
          education_id: 2,
          education_value: "初中"
        },
        {
          education_id: 3,
          education_value: "高中"
        },
        {
          education_id: 4,
          education_value: "大专"
        },
        {
          education_id: 5,
          education_value: "本科"
        },
        {
          education_id: 6,
          education_value: "研究生"
        },
        {
          education_id: 7,
          education_value: "硕士"
        },
        {
          education_id: 8,
          education_value: "博士"
        },
        {
          education_id: 9,
          education_value: "博士后"
        }
      ],
      experience_list: [
        //工作经验下拉列表
        {
          experience_id: 1,
          experience_value: "实习"
        },
        {
          experience_id: 2,
          experience_value: "1年"
        },
        {
          experience_id: 3,
          experience_value: "2-3年"
        },
        {
          experience_id: 4,
          experience_value: "4-5年"
        },
        {
          experience_id: 5,
          experience_value: "5-10年"
        },
        {
          experience_id: 6,
          experience_value: "10年以上"
        }
      ],
      salary_list: [
        {
          salary_id: 1,
          salary_value: "0-1k"
        },
        {
          salary_id: 2,
          salary_value: "1k-5k"
        },
        {
          salary_id: 3,
          salary_value: "5k-10k"
        },
        {
          salary_id: 4,
          salary_value: "10k-15k"
        },
        {
          salary_id: 5,
          salary_value: "15k-20k"
        },
        {
          salary_id: 6,
          salary_value: "20k-30k"
        },
        {
          salary_id: 7,
          salary_value: "30k-50k"
        },
        {
          salary_id: 8,
          salary_value: "50k-100k"
        },
        {
          salary_id: 9,
          salary_value: "100k以上"
        }
      ],
      province_list: [
        //省下拉列表
        {
          province_id: 1,
          province_name: "北京市"
        },
        {
          province_id: 19,
          province_name: "广东省"
        },
        {
          province_id: 20,
          province_name: "广西壮族自治区"
        },
        {
          province_id: 21,
          province_name: "海南省"
        },
        {
          province_id: 22,
          province_name: "重庆市"
        },
        {
          province_id: 23,
          province_name: "四川省"
        },
        {
          province_id: 24,
          province_name: "贵州省"
        },
        {
          province_id: 25,
          province_name: "云南省"
        },
        {
          province_id: 26,
          province_name: "西藏自治区"
        },
        {
          province_id: 27,
          province_name: "陕西省"
        },
        {
          province_id: 28,
          province_name: "甘肃省"
        },
        {
          province_id: 29,
          province_name: "青海省"
        },
        {
          province_id: 30,
          province_name: "宁夏回族自治区"
        },
        {
          province_id: 31,
          province_name: "新疆维吾尔自治区"
        },
        {
          province_id: 32,
          province_name: "香港特别行政区"
        },
        {
          province_id: 33,
          province_name: "澳门特别行政区"
        },
        {
          province_id: 18,
          province_name: "湖南省"
        },
        {
          province_id: 17,
          province_name: "湖北省"
        },
        {
          province_id: 2,
          province_name: "天津市"
        },
        {
          province_id: 3,
          province_name: "河北省"
        },
        {
          province_id: 4,
          province_name: "山西省"
        },
        {
          province_id: 5,
          province_name: "内蒙古自治区"
        },
        {
          province_id: 6,
          province_name: "辽宁省"
        },
        {
          province_id: 7,
          province_name: "吉林省"
        },
        {
          province_id: 8,
          province_name: "黑龙江省"
        },
        {
          province_id: 9,
          province_name: "上海市"
        },
        {
          province_id: 10,
          province_name: "江苏省"
        },
        {
          province_id: 11,
          province_name: "浙江省"
        },
        {
          province_id: 12,
          province_name: "安徽省"
        },
        {
          province_id: 13,
          province_name: "福建省"
        },
        {
          province_id: 14,
          province_name: "江西省"
        },
        {
          province_id: 15,
          province_name: "山东省"
        },
        {
          province_id: 16,
          province_name: "河南省"
        },
        {
          province_id: 34,
          province_name: "台湾省"
        }
      ],
      city_list: [
        //市下拉列表
        {
          city_id: 209,
          city_name: "汕尾市"
        },
        {
          city_id: 197,
          city_name: "广州市"
        },
        {
          city_id: 210,
          city_name: "河源市"
        },
        {
          city_id: 211,
          city_name: "阳江市"
        },
        {
          city_id: 212,
          city_name: "清远市"
        },
        {
          city_id: 213,
          city_name: "东莞市"
        },
        {
          city_id: 214,
          city_name: "中山市"
        },
        {
          city_id: 215,
          city_name: "潮州市"
        },
        {
          city_id: 216,
          city_name: "揭阳市"
        },
        {
          city_id: 208,
          city_name: "梅州市"
        },
        {
          city_id: 207,
          city_name: "惠州市"
        },
        {
          city_id: 206,
          city_name: "肇庆市"
        },
        {
          city_id: 198,
          city_name: "韶关市"
        },
        {
          city_id: 199,
          city_name: "深圳市"
        },
        {
          city_id: 200,
          city_name: "珠海市"
        },
        {
          city_id: 201,
          city_name: "汕头市"
        },
        {
          city_id: 202,
          city_name: "佛山市"
        },
        {
          city_id: 203,
          city_name: "江门市"
        },
        {
          city_id: 204,
          city_name: "湛江市"
        },
        {
          city_id: 205,
          city_name: "茂名市"
        },
        {
          city_id: 217,
          city_name: "云浮市"
        }
      ],
      district_list: [
        //区下拉列表
        {
          district_id: 1769,
          district_name: "罗湖区"
        },
        {
          district_id: 1770,
          district_name: "福田区"
        },
        {
          district_id: 1771,
          district_name: "南山区"
        },
        {
          district_id: 1772,
          district_name: "宝安区"
        },
        {
          district_id: 1773,
          district_name: "龙岗区"
        },
        {
          district_id: 1774,
          district_name: "盐田区"
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
    handleDetails(index, row) {
      console.log(index, row);
      //this.$router.push({ path:'/contentDetails',query:{upost_id: upost_id}});
    },
    choseProvince(e) {
        var that=this;
      this.$axios.post("Userpost/getCity",{province_id:e}).then(res => {
          if (res.data.code) {
            that.city_list=res.data.data;
          }
      });
    },
    choseCtiy(e) {
        var that=this;
      this.$axios.post("Userpost/getDistrict",{city_id:e}).then(res => {
          if (res.data.code) {
            that.district_list=res.data.data;
          }
      });
    },
    rankData(data){
        var obj=[];
        obj=data.map((val,index,data)=>{
         let obj1 = new Object();
           for (var item in val){
             obj1.industry_name=data[index].industry_name;
             obj1.post_name=data[index].post_name;
             obj1.company_name=data[index].company_name;
             obj1.upost_addtime=data[index].upost_addtime;
             obj1.upost_view=data[index].upost_view;
             obj1.upost_delivery=data[index].upost_delivery;
             obj1.upost_share=data[index].upost_share;
             obj1.upost_status=data[index].upost_status;
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
