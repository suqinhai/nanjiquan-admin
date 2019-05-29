<!--  -->
<template>
	<div class="feedback">
		<!--头部-->
		<menu-header></menu-header>
		<!--表格-->
		<tool-table :tools="tools" :selectRiqi="selectRiqi" :posturl="posturl" :selectData="selectData" @rankData="rankData">
			<el-form-item label="查看时间" slot="select4">
				<el-date-picker align="right" type="date" placeholder="开始日期" :picker-options="pickerOptions1" v-model="selectData.start_time"></el-date-picker>
				<el-date-picker align="right" type="date" placeholder="结束日期" v-model="selectData.end_time" :picker-options="pickerOptions1"></el-date-picker>
			</el-form-item>
			<el-alert title="警告提示的文案" type="warning" show-icon slot="selectTotals">
				<el-button type="text">删除</el-button>
			</el-alert>
			<el-table-column slot="edit" label="操作" width="180">
				<template slot-scope="scope">
					<el-button size="text" @click="handleEdit(scope.$index, scope.row);dialogFormVisible= true">回复</el-button>
					<el-button size="mini" type="text" @click="handleDetails(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</tool-table>
		<el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
			<el-input type="textarea" :rows="2" placeholder="请填写回复内容" v-model="textarea">
			</el-input>
			<span slot="footer" class="dialog-footer">
			    <el-button @click="dialogVisible = false">取 消</el-button>
			    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
			</span>
		</el-dialog>
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
				tools: [
					"用户昵称",
					"反馈内容",
					"反馈时间"
				],
				posturl: "Project/showBpList",
				selectData: {
					start_time: "",
					end_time: "",
					invest_name: "",
					project_id: this.$route.query.id
				},
				selectRiqi: true,
				pickerOptions1: {
					disabledDate(time) {
						return time.getTime() > Date.now();
					},
					shortcuts: [{
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

			};

		},
		//监听属性 类似于data概念
		computed: {},
		//监控data中的数据变化
		watch: {},
		//方法集合
		methods: {},
		//生命周期 - 创建完成（可以访问当前this实例）
		created() {},
		//生命周期 - 挂载完成（可以访问DOM元素）
		mounted() {},
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