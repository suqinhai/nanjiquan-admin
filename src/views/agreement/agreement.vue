<!--  -->
<template>
  <div class="agreement">
    <menu-header></menu-header>
    <div class="editorbox">
      <el-tabs v-model="activeName" >
        <el-tab-pane label="用户协议" name="first">
          <div class="editoritem">
            <div id="editor" style="width:100%;"></div>
            <el-button  @click="hanldAgreement" type="primary">提  交</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="关于我们" name="second">
          <div class="editoritem">
            <div id="editor2" style="width:100%;"></div>
            <el-button @click="hanldeAbout" type="primary">提  交</el-button>
          </div>
        </el-tab-pane>
      </el-tabs>
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
            name:"协议管理",
            menuList:[]
      },
      activeName: "first",
      editor: null,
      editor2: null,
      toolbars: [
        [
          "fullscreen",
          "source",
          "|",
          "undo",
          "redo",
          "|",
          "bold",
          "italic",
          "underline",
          "fontborder",
          "strikethrough",
          "superscript",
          "subscript",
          "removeformat",
          "formatmatch",
          "autotypeset",
          "blockquote",
          "pasteplain",
          "|",
          "forecolor",
          "backcolor",
          "insertorderedlist",
          "insertunorderedlist",
          "selectall",
          "cleardoc",
          "|",
          "rowspacingtop",
          "rowspacingbottom",
          "lineheight",
          "|",
          "customstyle",
          "paragraph",
          "fontfamily",
          "fontsize",
          "|",
          "justifyleft",
          "justifycenter",
          "justifyright",
          "justifyjustify",
          "|",
          "touppercase",
          "tolowercase",
          "|",
          "link",
          "unlink",
          "anchor",
          "|",
          "inserttable",
          "deletetable",
          "insertparagraphbeforetable",
          "insertrow",
          "deleterow",
          "insertcol",
          "deletecol",
          "mergecells",
          "mergeright",
          "mergedown",
          "splittocells",
          "splittorows",
          "splittocols",
          "charts",
          "|",
          "print",
          "preview",
          "searchreplace",
          "drafts",
          "help"
        ]
      ]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    hanldAgreement() {
      var con=this.editor.getContent();
      console.log(con)
      //submitCon("Protocol/edits",con)
    },
    hanldeAbout(){
      var con=this.editor2.getContent();
       console.log(con)
      //submitCon("About/edits",con)
    },
    submitCon(url,con){
      
      this.$axios.post(url,{option_value:con}).then(res => {
        if (res.data.code==1) {
             this.$alert('提交成功！', { confirmButtonText: '确定' });
        }
      }).catch(err=>{
          console.log(err)
      })
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    var that = this;
    this.editor = UE.getEditor("editor", { toolbars: that.toolbars,initialFrameHeight:300,autoHeightEnabled: false});
    this.editor2 = UE.getEditor("editor2", { toolbars: that.toolbars,initialFrameHeight:300,autoHeightEnabled: false });
    this.$axios.post("Protocol/details").then(res => {
        if (res.data.code==1) {
             this.editor.addListener("ready", () => {
              this.editor.setContent(res.data.data.option_value);
            });
        }
      }).catch(err=>{
          console.log(err)
      })
    this.$axios.post("About/details").then(res => {
        if (res.data.code==1) {
             this.editor2.addListener("ready", () => {
              this.editor2.setContent("<p>2222222</p>");
            });
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
  destroyed() {
    this.editor.destroy();
    this.editor2.destroy();
  }, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less' scoped>
.agreement {
  .editorbox {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 20px;
    .editoritem {
      width: 100%;
      box-sizing: border-box;
      padding: 0 2px;
      .el-button{ 
        margin-top: 10px;
      }
    }
  }
}
</style>