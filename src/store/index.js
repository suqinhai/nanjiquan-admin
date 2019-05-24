import Vue from "vue"
import Vuex from "vuex"

//全局 组件状态 : 登录的token , nick , isLogin (物理存储在浏览器的本地存储)

//在store.js 文件加载时 ,应该先获取本地的登录存储的信息 (loginInfo)
//loginInfo 字段 存储 在localStorage  

let loginInfo = window.localStorage.getItem("loginInfo"); 
    if(loginInfo === null){
      console.log("尚未登录");
      loginInfo = {
        extTime:'',
        genTime:'',
        token:"",
        nickName:""
      }
      //将登录信息模板,存一份至本地
      window.localStorage.setItem("loginInfo",JSON.stringify(loginInfo));
    }else{
      loginInfo = JSON.parse(loginInfo);
    }

Vue.use(Vuex)

//创建一个仓库
export default new Vuex.Store({
    state:{//状态 , 变量存储的地方
      loginInfo:loginInfo
    },
    mutations:{//配置提交更改状态(唯一操作状态的)
        Login(state,loginInfo){//登录状态提交方法 ,loginInfo 调用时的参数
          state.loginInfo = loginInfo;
          //更新本地存储
           //将登录信息模板,存一份至本地
           window.localStorage.setItem("loginInfo",JSON.stringify(loginInfo));
        },
        logout(state){
          state.loginInfo = {};
          window.localStorage.removeItem("loginInfo");
        },
        emptyData(){
          //模拟清除当前数据
          console.log("正在清除数据");
        }
    },
    actions:{//与mutations 相似 (目的是改变状态),但是不是直接修改状态 ,而是需要同mutations 来改变状态)
        logout(context,payload){//调用多个mutations 状态操作 ,并且可以异步执行
          setTimeout(()=>{
            console.log(payload);
            context.commit("logout");
            context.commit("emptyData");
          },2000);
        }
    },modules:{
      a:{//这是a 模块 => 购物车
        state:{},
        mutations:{},
        actions:{}
      },
      b:{//这是b模块 ,=>登录
        state:{},
        mutations:{},
        actions:{}
      }
    }
})