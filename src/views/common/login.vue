<template>
  <section class="container">
    <div class="con">
      <!--  <img src="@/assets/images/Common/loginback.1888877.jpg" width="1920" height="960"></canvas> -->
      <el-form
        :model="form"
        :rules="rules"
        ref="form"
        label-position="left"
        label-width="0px"
        class="demo-ruleForm login-container"
      >
        <h3 class="title">
          <img src="../../assets/images/Common/u64.png" alt>
        </h3>
        <el-autocomplete
          popper-class="my-autocomplete"
          v-model="state3"
          :fetch-suggestions="querySearch"
          placeholder="请选择账户类型"
          @select="handleSelect"
        >
          <i class="el-icon-edit el-input__icon" slot="suffix" @click="handleIconClick"></i>
          <template slot-scope="props">
            <div class="name">{{ props.item.value }}</div>
          </template>
        </el-autocomplete>
        <el-form-item prop="mobile">
          <el-input type="text" v-model="form.mobile" auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="form.password" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>

          <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
          <el-button type="text">忘记密码</el-button>

        <el-form-item style="width:100%;">
          <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2">登录</el-button>
        </el-form-item>

        <div class="footer">
        <span>帮助</span>
        <span>隐私</span>
        <span>条款</span>
        <div>copyright&copy;2019南极圈技术部出品</div>
      </div>
      
      </el-form>
      

    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      restaurants: [],
      state3: "",
      logining: false,
      form: {
        mobile: "",
        password: ""
      },
      rules: {
        mobile: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      checked: true
    };
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
  created() {
    let userinfo = JSON.parse(window.localStorage.getItem("userinfo"));
    if (userinfo && userinfo.checked) {
      this.form.mobile = userinfo.mobile;
      this.form.password = userinfo.password;
      this.checked = userinfo.checked;
    }
  },
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return [
        { value: "我是招聘者" },
        { value: "我是投资机构" },
        { value: "我是服务商" }
      ];
    },
    handleSelect(item) {
      console.log(item);
    },
    handleIconClick(ev) {
      console.log(ev);
    },
    handleReset2() {
      this.$refs.form.resetFields();
    },
    handleSubmit2(ev) {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.logining = true;
          let url = "Login/mLogin";
          let data = {
            username: this.form.mobile,
            password: this.form.password
          };
          this.$axios.post(url, data).then(res => {
            this.logining = false;

            if (res.data.code==1) {
              if (this.checked == true) {
                data.checked = true;
                window.localStorage.setItem("userinfo", JSON.stringify(data));
              }
              console.log(res)
              window.localStorage.setItem("token", res.data.data.detail.token);
              // window.localStorage.setItem(
              //   "adminInfo",
              //   JSON.stringify(res.data.data)
              // );
              this.$router.push("/index");
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  // overflow: hidden;
  .con {
    background: url(../../assets/images/Common/u49.jpg) no-repeat;
    width: 100vw;
    height: 100vh;
    .login-container {
      -webkit-border-radius: 5px;
      border-radius: 5px;
      -moz-border-radius: 5px;
      background-clip: padding-box;
      position: absolute;
      z-index: 100;
      top: 0;
      left: 50%;
      transform: translate(-50%, 0);
      /* 使用css3的transform来实现 */
      // margin:50px auto;

      width: 350px;
      // padding: 35px 35px 15px 35px;
      background: #f1f2f6;
      // border: 1px solid #eaeaea;
      // box-shadow: 0 0 25px #cac6c6;
      .title {
        margin: 0px auto 60px auto;
        text-align: center;
        color: #505458;
        font-size: 20px;
        width: 219px;
        height: 198px;
        img {
          width: 100%;
          display: block;
        }
      }
      .el-autocomplete{
        width: 100%;
        margin: 12px 0;
      }
      .el-form-item {
    margin-bottom: 12px;
      }
      .my-autocomplete {
        li {
          line-height: normal;
          padding: 7px;

          .name {
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .addr {
            font-size: 12px;
            color: #b4b4b4;
          }

          .highlighted .addr {
            color: #ddd;
          }
        }
      }
      .remember {
        margin: 0px 0px 35px 0px;
      }
    }
    .footer{
      text-align: center;
      font-size: 12px;
      color: #999;
      span{
        display: inline-block;
        margin: 10px;
      }
    }
  }
}
</style>
