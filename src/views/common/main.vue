<template>
  <el-row class="container">
    <el-col :span="24" class="header">
      <el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
        <!-- {{collapsed?'':'纽扣好物'}} -->
        <img
          src="@/assets/images/Common/logo.png"
          alt
          height="40"
          style="width:105px;margin:5px"
          v-if="!collapsed"
        >
      </el-col>
      <el-col :span="10">
        <div class="tools" @click.prevent="collapse">
          <i class="fa fa-align-justify"></i>
        </div>
      </el-col>
      <el-col :span="4" class="userinfo" style="min-width:400px;">
        <el-dropdown trigger="hover" style="vertical-align: middle;">
          <a style="vertical-align: middle;">{{language}}</a>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item divided @click.native="switchlanguage('cn')">中文</el-dropdown-item>
            <el-dropdown-item divided @click.native="switchlanguage('en')">英文</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown trigger="hover" style="vertical-align: middle;">
          <span class="el-dropdown-link userinfo-inner">
            <img :src="this.sysUserAvatar">
            {{sysUserName}}
          </span>
          <el-dropdown-menu slot="dropdown">
            <!-- <el-dropdown-item>我的消息</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>-->
            <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-col>
    <el-col :span="24" class="main">
      <aside :class="collapsed?'menu-collapsed':'menu-expanded'">
        <!--导航菜单-->

        <el-col :span="24">
          <el-menu
            router="true"
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-time"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item-group>
                <template slot="title" index=""></template>
                <el-menu-item index="/User/lists">用户列表</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-1">
                <template slot="title">南极圈认证</template>
                <el-menu-item index="/nanjiquanapply/lists">南极圈认证列表</el-menu-item>
              </el-submenu>
              <el-submenu index="1-2">
                <template slot="title">投资机构管理</template>
                <el-menu-item index="/investmentapply/lists">已认证机构列表</el-menu-item>
              </el-submenu>
              <el-submenu index="1-3">
                <template slot="title">产品服务商管理</template>
                <el-menu-item index="/shopapply/lists">已认证服务商列表</el-menu-item>
              </el-submenu>
              <el-submenu index="1-4">
                <template slot="title">招聘企业管理</template>
                <el-menu-item index="/recruiterapply/lists">已认证招聘企业列表</el-menu-item>
              </el-submenu>
            </el-submenu>


            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-edit"></i>
                <span>认证审批管理</span>
              </template>
              <el-submenu index="2-1">
                <template slot="title">南极圈认证</template>
                <el-menu-item index="/nanjiquanapply/verifylists">南极圈认证列表</el-menu-item>
              </el-submenu>
              <el-submenu index="2-2">
                <template slot="title">招聘企业认证</template>
                <el-menu-item index="/investmentapply/verifylists">招聘企业认证构列表</el-menu-item>
              </el-submenu>
              <el-submenu index="2-3">
                <template slot="title">投资机构认证</template>
                <el-menu-item index="/recruiterapp/verifylists">投资机构认证列表</el-menu-item>
              </el-submenu>
              <el-submenu index="2-4">
                <template slot="title">服务商认证</template>
                <el-menu-item index="/Shopapply/verifylists">服务商认证列表</el-menu-item>
              </el-submenu>
            </el-submenu>
           


          </el-menu>
        </el-col>                                                       

        <!-- <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" @select="handleselect" unique-opened router v-if="!collapsed">
          <template v-for="(item,index) in menuList" v-if="!item.hidden">
            <el-submenu :index="index.toString()" v-if="!item.leaf" :key="index">
              <template slot="title">
                <div class="icon-wrap">
                  <i :class="item.icon"></i>
                </div>
                {{item.name}}
              </template>
              <el-menu-item v-for="(child,index) in item.children" :index="child.url" :key="index" v-if="!child.hidden">{{child.name}}</el-menu-item>
            </el-submenu>
            <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].url" :key="index">
              <i :class="item.icon"></i>
              {{item.children[0].name}}
            </el-menu-item>
          </template>
        </el-menu>-->
        <!--导航菜单-折叠后-->
        <ul class="el-menu el-menu-vertical-demo collapsed" v-if="collapsed" ref="menuCollapsed">
          <!-- <li v-for="(item,index) in menuList" v-if="!item.hidden" class="el-submenu item">
            <template v-if="!item.leaf">
              <div class="el-submenu__title" style="padding-left: 20px;" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)"><i :class="item.icon"></i></div>
              <ul class="el-menu submenu" :class="'submenu-hook-'+index" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)">
                <li v-for="child in item.children" v-if="!child.hidden" class="el-menu-item" style="padding-left: 50px;" :class="$route.path==child.path?'is-active':''" @click="$router.push(child.path)">{{child.name}}</li>
              </ul>
            </template>
            <template v-else>
              <li class="el-submenu">
                <div class="el-submenu__title el-menu-item" style="padding-left: 20px;height: 56px;line-height: 56px;padding: 0 20px;" :class="$route.path==item.children[0].path?'is-active':''" @click="$router.push(item.children[0].path)"><i :class="item.icon"></i></div>
              </li>
            </template>
          </li>-->
        </ul>
      </aside>
      <section class="content-container">
        <div class="grid-content bg-purple-light">
          <el-col :span="24" class="breadcrumb-container">
            <!--<strong class="title">{{$t( $route.name )}}</strong>-->
            <!-- <el-breadcrumb separator="/" class="breadcrumb-inner">
              <el-breadcrumb-item v-for="item in $route.matched">
                {{ item.name }}
              </el-breadcrumb-item>
            </el-breadcrumb>-->
          </el-col>
          <el-col :span="24" class="content-wrapper">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </el-col>
        </div>
      </section>
    </el-col>
  </el-row>
</template>
<script>
import route from "../../router/index";
export default {
  data() {
    return {
      language: "中文",
      sysName: "",
      collapsed: false,
      sysUserName: "",
      sysUserAvatar: require("../../assets/images/Common/avatar.png"),
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      menuList: [
        {
          name: 登录,
          children: {
            name: 登录 - 管理员
          }
        }
      ]
    };
  },
  created() {
    let language = sessionStorage.getItem("language") || "cn";
    this.$i18n.locale = language;
    language == "cn" ? (this.language = "中文") : (this.language = "英文");
    this.getMent();
  },
  methods: {
    switchlanguage(language) {
      this.$i18n.locale = language;
      language == "cn" ? (this.language = "中文") : (this.language = "英文");
      sessionStorage.setItem("language", language);
    },
    getMent() {
      let url = "/sysMenu/userMenuList";
      this.$axios.post(url, {}).then(res => {
        res.data.data.forEach((val, key) => {
          if (!val.url) {
            val.url = "";
          }
          if (val.children) {
            val.children.forEach((val, key) => {
              if (!val.url) {
                val.url = "";
              }
            });
          }
        });
        this.menuList = res.data.data;
        // window.localStorage.setItem('menuList',JSON.stringify(res.data.data))
      });
    },
    onSubmit() {
      console.log("submit!");
    },
    handleopen() {
      //console.log('handleopen');
    },
    handleclose() {
      //console.log('handleclose');
    },
    handleselect: function(a, b) {},
    //退出登录
    logout: function() {
      var _this = this;
      this.$confirm("确认退出吗?", "提示", {})
        .then(() => {
          window.localStorage.removeItem("token");
          _this.$router.push("/login");
        })
        .catch(() => {});
    },
    //折叠导航栏
    collapse: function() {
      this.collapsed = !this.collapsed;
    },
    showMenu(i, status) {
      this.$refs.menuCollapsed.getElementsByClassName(
        "submenu-hook-" + i
      )[0].style.display = status ? "block" : "none";
    }
  },
  mounted() {
    // console.log(this.$route)
    // var user = sessionStorage.getItem('user');
    // if (user) {
    //   user = JSON.parse(user);
    //   this.sysUserName = user.name || '';
    //   this.sysUserAvatar = user.avatar || '';
    // }
  }
};
</script>
<style scoped lang="less">
.container {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  .header {
    height: 50px;
    line-height: 50px;
    background: #2d3237;
    color: #fff;
    .userinfo {
      text-align: right;
      padding-right: 35px;
      float: right;
      .userinfo-inner {
        cursor: pointer;
        color: #fff;
        img {
          width: 30px;
          height: 30px;
          border-radius: 20px;
          margin: 10px 0px 10px 10px;
          float: right;
        }
      }
    }
    .logo {
      height: 50px;
      font-size: 24px;
      padding-left: 20px;
      padding-right: 20px;
      border-color: rgba(238, 241, 146, 0.3);
      border-right-width: 1px;
      border-right-style: solid;
      text-align: center;
      img {
        width: 50px;
        float: left;
        margin: 10px 10px 10px 18px;
      }
      .txt {
        color: #fff;
      }
    }
    .logo-width {
      width: 200px;
    }
    .logo-collapse-width {
      width: 60px;
    }
    .tools {
      padding: 0px 23px;
      width: 14px;
      height: 50px;
      line-height: 50px;
      cursor: pointer;
    }
  }
  .main {
    display: flex; // background: #324057;
    position: absolute;
    top: 50px;
    bottom: 0px;
    overflow: hidden;
    aside {
      flex: 0 0 200px;
      width: 200px; // position: absolute;
      // top: 0px;
      // bottom: 0px;
      .el-menu::-webkit-scrollbar {
        display: none;
      }
      .el-menu {
        height: 100%;
        background: #222d32;
        overflow-y: scroll;
        .el-menu-item {
          color: #747475;
          height: 50px;
          line-height: 50px;
          // border-left: 3px solid #222d32;
          min-width: 60px;

          i {
            margin-right: 10px;
            vertical-align: middle;
            margin-top: -3px;
          }
        }
        .el-menu-item:hover,
        .el-menu-item:focus,
        .el-menu-item.is-active {
          color: #fff;
          background: #222d32;
          //border-left: 3px solid #18bc9c;
          height: 50px !important;
          line-height: 50px !important;
        }
      }
      .collapsed {
        width: 60px;
        .item {
          position: relative;
        }
        .submenu {
          position: absolute;
          top: 0px;
          left: 50px;
          z-index: 99999;
          height: auto;
          display: none;
        }
      }
    }
    .menu-collapsed {
      flex: 0 0 60px;
      width: 50px;
    }
    .menu-expanded {
      flex: 0 0 200px;
      width: 200px;
    }
    .content-container {
      // background: #f1f2f7;
      flex: 1; // position: absolute;
      // right: 0px;
      // top: 0px;
      // bottom: 0px;
      // left: 200px;
      overflow-y: scroll;
      // padding: 20px;
      .breadcrumb-container {
        //margin-bottom: 15px;
        .title {
          width: 200px;
          float: left;
          color: #475669;
        }
        .breadcrumb-inner {
          float: right;
        }
      }
      .content-wrapper {
        background-color: #fff;
        box-sizing: border-box;
      }
    }
  }
}
</style>
<style lang="less">
.el-submenu__title {
  color: #fff;
  background: #1e282c;
  height: 50px !important;
  line-height: 50px !important;
  border-left: 3px solid #1e282c;

  .icon-wrap {
    float: left;
    width: 18px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    margin-right: 8px;
  }
  i {
    // vertical-align: top;
    // margin-top:-3px;
  }
}
.el-submenu__title:hover,
.el-submenu__title:focus,
.el-submenu__title.is-active {
  color: #fff !important;
  background: #1e282c !important;
  height: 50px !important;
  line-height: 50px !important;
  border-left: 3px solid #18bc9c;
}
.el-submenu {
  .el-submenu__title {
    color: #b8c7ce;
  }
}
.el-menu-item {
  color: #b8c7ce;
  background: #222d32;
}
.is-opened {
  .el-submenu__title {
    color: #fff !important;
  }
  .el-submenu__title {
    border-left: 3px solid #18bc9c;
  }
  .el-menu-item.is-active {
    color: #fff;
  }
  i {
    color: #fff !important;
  }
}
.el-menu {
  background: none;
}
</style>