<template>
	<div class="adDetails">
		<menu-header :headerMenu="headerMenu">
	      <el-button class="addPost" slot="addPost" type="primary">新建岗位</el-button>
	    </menu-header>
	    <tool-table :tools="tools" :posturl="posturl" :selectData="selectData" @rankData="rankData">
			<el-form-item label="筛选" slot="select3">
				<el-input auto-complete="off" v-model="selectData.condition"></el-input>
			</el-form-item>
			<el-table-column slot="edit" label="操作" width="180">
				<template slot-scope="scope">
					<el-button size="text" @click="handleEdit(scope.$index, scope.row);">编辑</el-button>
				</template>
			</el-table-column>
		</tool-table>
    </div>
</template>

<script>
	//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
	//例如：import 《组件名称》 from '《组件路径》';
	import Menuheader from "../assembly/Menuheader";
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
		            name:"广告列表",
		            menuList:[{name:'广告管理',path:""},{name:'广告列表',path:"advertisement"}]
			      },
				tools: [
					"序号",
					"广告位置",
					"广告数量"
				],
				posturl: "Advertise/lists",
				selectData: {
					condition: ""
				}

			};

		},
		//监听属性 类似于data概念
		computed: {},
		//监控data中的数据变化
		watch: {},
		//方法集合
		methods: {
			handleEdit(index,row){
				this.$router.push({path:'/adDetails',query:{advertise_type:row.advertise_type}});
			},
			rankData(data) {
				var obj = [];
				obj = data.map((val, index, data) => {
					let obj1 = new Object();
					for(var item in val) {
						obj1.type_xuhao = data[index].advertise_id;
						obj1.advertise_name = data[index].advertise_name;
						obj1.advertise_photo_url = data[index].advertise_count;
						obj1.advertise_photo_url = data[index].advertise_count;
						obj1.advertise_photo_url = data[index].advertise_count;
						obj1.advertise_photo_url = data[index].advertise_count;
						obj1.advertise_photo_url = data[index].advertise_count;
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
			this.$axios.post(this.posturl, {
				upost_id: row.upost_id
			}).then(res => {

			}).catch(err => {

			});
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
</style>