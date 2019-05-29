<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/User/lists' }">用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <div>用户列表</div>
    <div class="conBox">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="用户昵称">
          <el-input v-model="formInline.user" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="注册时间">
          <el-select v-model="formInline.regionTime" placeholder="请选择起止注册时间">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="认证状态">
          <el-select v-model="formInline.status" placeholder="全部">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button type="default" @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>

      <el-table
        ref="multipleTable"
        :data="tableData6"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="uid" label="ID" width="80"></el-table-column>
        <el-table-column prop="user_nickname" label="昵称" width="80"></el-table-column>
        <el-table-column prop="user_avatarar" label="头像" show-overflow-tooltip></el-table-column>
        <el-table-column prop="addtime" label="注册时间" show-overflow-tooltip></el-table-column>
        <el-table-column prop="user_verified_status" label="南极圈认证" show-overflow-tooltip></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="text" @click="handleEdit(scope.$index, scope.row)">删除</el-button>
            <el-button size="mini" type="text" @click="handleDelete(scope.$index, scope.row)">查看实名</el-button>
            <el-button size="mini" type="text" @click="handleDelete(scope.$index, scope.row)">南极圈认证</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        regionTime: "",
        status: ""
      },
      tableData6: [
                    {
                "uid": 9,
                "user_nickname": "呆",
                "user_avatar": "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eq6v0QcznXtmpcrDicJGZTLdKy07c3aJ6IDsX2uPT4ECQAbpKktLp4libGZTYMsDDzhIqQjqF0nbY6Q/132",
                "user_verified_status": 0,                                  //认证状态 0未认证;1已认证;2进行中;-1认证失败
                "addtime": "2019-04-28 19:59"
            },
            {
                "uid": 8,
                "user_nickname": "Somnus",
                "user_avatar": "https://wx.qlogo.cn/mmopen/vi_32/JNagocb2MC6FPrhfjWRjfTRficTxAzibEK8DmvtufucINJkuvs3Cyuok7Auhiccq2Ypmjp9JduO6TVEia6mNpgZe0A/132",
                "user_verified_status": 0,
                "addtime": "2019-04-28 17:30"
            },
            {
                "uid": 7,
                "user_nickname": "xiaoyou",
                "user_avatar": "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83epdiarKZ0M1SSTMuhNtiapchiaeVLRMe20xXX1S4ty0gMpmtDYlTyP4D1CiaxOhPS6wTxRy8fuu5ZPQTw/132",
                "user_verified_status": 0,
                "addtime": "2019-04-28 17:29"
            },
            {
                "uid": 6,
                "user_nickname": "陌生人.",
                "user_avatar": "https://wx.qlogo.cn/mmopen/vi_32/wXTPzFPvQzOZNmibKqY6HiaPUXsIib95eP3aMTHibMP8BCfpOWlvicH1mqnVfmN0Fnr2nK1FzPhjokpdib2vhADyfdJA/132",
                "user_verified_status": 0,
                "addtime": "2019-04-17 17:20"
            },
            {
                "uid": 5,
                "user_nickname": "嚯嚯嚯。",
                "user_avatar": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIDSlxOMPWMfTPAUtuWbfoy7kO1uxU4zbjOM1xz2Q5eTnkpsbRd9fj4kI3lgDxLS8qYejkUTTpJ1Q/132",
                "user_verified_status": 2,
                "addtime": "2019-04-09 14:13"
            },
            {
                "uid": 4,
                "user_nickname": "biu~biu~biu",
                "user_avatar": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ7qA65Q1p3EVg78qCYmyefAew5Zera8pKN67CXvw40Yphd6L4eUGpoBLRdFYp9hDwzhibq4MiaLk3w/132",
                "user_verified_status": 0,
                "addtime": "2019-04-08 16:34"
            },
            {
                "uid": 3,
                "user_nickname": "周杰",
                "user_avatar": "https://wx.qlogo.cn/mmopen/vi_32/OdwsxEH8sPdTVED1R06jAxiciacrwCt83kPK4SbD8AhAajR0ULuRn2ryVjiaQRo1Jl0M5SL0R3iaEBfKAH99nbhOzQ/132",
                "user_verified_status": 0,
                "addtime": "2019-04-08 15:29"
            },
            {
                "uid": 2,
                "user_nickname": "柒染",
                "user_avatar": "https://wx.qlogo.cn/mmopen/vi_32/5z7TPM51MYk6o3dWyqgk1unSNI9Hx6jRYu3j5npiaAVdeFbNXnacPUj9TibjwHkzDABlBgdLJcqKk5vArfSHicDEg/132",
                "user_verified_status": 0,
                "addtime": "2019-04-08 15:13"
            },
            {
                "uid": 1,
                "user_nickname": "xiaoyou",
                "user_avatar": "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoJroUyib201UTZaQtFyYiafgdYpbV1qZIQmcuoLgxrhTDOHh5zNFZ1E1TPib1QQ2zbL7IlTRcVKfXPw/132",
                "user_verified_status": 2,
                "addtime": "1970-01-01 08:00"
            },
      ],
      
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    onReset() {
      console.log("Reset");
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>


<style lang="less" scoped>
.conBox {
  width: 100%;
  height: 100vh;
  border: 10px rgba(240, 242, 245, 1) solid;
}
</style>

