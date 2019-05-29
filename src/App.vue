<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
*{
  padding: 0;
  margin: 0;
  font-size: 12px;
  font-weight: normal;
}
.el-form{
  font-size: 12px;
  .el-form-item__label{
      font-size: 12px;
  }
  input{
    width: 100%;
    height: 32px;
    font-size: 12px;
  }
  .el-button{
    width: 62px;
    height: 32px;
    text-align: center;
    font-size: 12px;
  }
}

.box>div{
  border-bottom: 2px #f2f2f2f2 solid;
  padding: 20px 0;
  h5{
    font-size: 16px;
    color: #000;
  }
  .el-row{
    margin: 30px 0;
  }
}


</style>
