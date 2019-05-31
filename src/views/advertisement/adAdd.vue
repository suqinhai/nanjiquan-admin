<template>
	<div class="adAdd">
		<menu-header :headerMenu="headerMenu"></menu-header>
		<div class="editbox">
			<el-card class="box-card">
				<div slot="header" class="clearfix">
					<span>编辑</span>
				</div>
				<el-form label-width="120px" :model="ruleForm" :rules="rules" ref="ruleForm">
					<el-form-item prop="advertise_name" label="广告名称:">
						<el-input v-model="ruleForm.advertise_name"></el-input>
					</el-form-item>
					<el-form-item label="广告位置：" prop="advertise_type">
						<el-select placeholder="请选择广告位置" v-model="ruleForm.advertise_type">
							<el-option label="区域一" value="shanghai"></el-option>
							<el-option label="区域二" value="beijing"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="开始时间：" prop="advertise_end_time">
						<el-date-picker v-model="ruleForm.advertise_start_time" align="right" type="date" placeholder="开始日期"></el-date-picker>
					</el-form-item>
					<el-form-item label="到期时间：" prop="advertise_end_time">
						<el-date-picker v-model="ruleForm.advertise_end_time" align="right" type="date" placeholder="到期时间"></el-date-picker>
					</el-form-item>
					<el-form-item label="轮播图片：" required>
						<el-upload class="avatar-uploader" action="string" :show-file-list="false" :before-upload="beforeupload" :on-change="onChange">
							<img v-if="imageUrl" :src="imageUrl" class="avatar">
							<i v-else class="el-icon-plus avatar-uploader-icon"></i>
						</el-upload>
					</el-form-item>
					<el-form-item label="上线/下线：">
						<el-switch v-model="ruleForm.advertise_status">
						</el-switch>
					</el-form-item>
					<el-form-item label="排序：">
						<el-input v-model="ruleForm.advertise_sort"></el-input>
					</el-form-item>
					<el-form-item label="描述：">
						<el-input v-model="ruleForm.advertise_description"></el-input>
					</el-form-item>
					<el-form-item label="跳转类型：" required>
						<el-radio-group v-model="ruleForm.advertise_jump_type">
							<el-radio label="1">无跳转</el-radio>
							<el-radio label="2">跳转到公司主页</el-radio>
							<el-radio label="3">跳转到岗位介绍</el-radio>
							<el-radio label="4">跳转到海报图</el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="请输入公司ID ：" v-if="ruleForm.advertise_jump_type==2">
						<el-input></el-input>
					</el-form-item>
					<el-form-item label="请输入岗位ID：" v-if="ruleForm.advertise_jump_type==3">
						<el-input></el-input>
					</el-form-item>
					<el-form-item label="请输入链接URL：" v-if="ruleForm.advertise_jump_type==4">
						<el-input></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="onSubmit">提交</el-button>
						<el-button>返回</el-button>
						<el-button>重 置</el-button>
					</el-form-item>
				</el-form>
			</el-card>
		</div>
	</div>
</template>

<script>
	//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
	//例如：import 《组件名称》 from '《组件路径》';
	import Menuheader from "../assembly/Menuheader";
	export default {
		//import引入的组件需要注入到对象中才能使用
		components: {
			"menu-header": Menuheader
		},
		data() {
			//这里存放数据
			return {
				headerMenu: {
					name: "广告新增/编辑",
					menuList: [{
						name: '广告管理',
						path: ""
					}, {
						name: '广告列表',
						path: "advertisement"
					}, {
						name: "广告新增/编辑",
						path: "adAdd"
					}]
				},

				advertise_id: this.$route.query.advertise_id,
				imageUrl: '',
				ruleForm: {
					advertise_id: "", //广告id
					advertise_name: "", //广告名称
					advertise_type: "", //广告类型
					advertise_start_time: "", //开始时间
					advertise_end_time: "", //到期时间
					advertise_photo_url: "", //轮播图
					advertise_status: "", //状态:1上线;-1下线
					advertise_sort: "", //排序
					advertise_description: "", //描述
					advertise_jump_type: "", //跳转类型;1无跳转;2跳转到公司主页;3跳转到岗位介绍;4跳转到海报图;5跳转到链接
					company_id: "", //公司id
					upost_id: "", //岗位id
					advertise_poster: "", //海报图url
					advertise_jump_url: "" //跳转链接url
				},
				formData: new FormData(),
				rules: {
					advertise_name: [{
							required: true,
							message: '请输入活动名称',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 5,
							message: '长度在 3 到 5 个字符',
							trigger: 'blur'
						}
					],
					advertise_type: [{
						required: true,
						message: '请选择广告位置',
						trigger: 'change'
					}],
					advertise_start_time: [{
						type: 'date',
						required: true,
						message: '请选择日期',
						trigger: 'change'
					}],
					advertise_end_time: [{
						type: 'date',
						required: true,
						message: '请选择日期',
						trigger: 'change'
					}]

				}
			};

		},
		//监听属性 类似于data概念
		computed: {},
		//监控data中的数据变化
		watch: {},
		//方法集合
		methods: {
			onSubmit(formName) {
				for(var val in this.ruleForm){
					this.formData.append(val,this.ruleForm[val])
				}
				let config = {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                };
                this.$reqs.post("Advertise/saveAdvertise", this.param, config).then(res=>{
                               
                })
				
			},
			beforeupload(file) {
				this.formData = new FormData();
				this.formData.append('file', file)
				this.ruleForm.advertise_photo_url = file;
				this.imageUrl = URL.createObjectURL(file);
				return false
			},
			onChange(file) {
				

			}
		},
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
	.editbox {
		box-sizing: border-box;
		padding: 20px;
		.el-form {
			.el-input {
				width: 100%;
			}
			.avatar-uploader {
				.avatar-uploader-icon {
					font-size: 28px;
					color: #8c939d;
					width: 150px;
					height: 150px;
					line-height: 150px;
					text-align: center;
					border: 1px dashed #d9d9d9;
					box-sizing: border-box;
				}
				.avatar {
					width: 150px;
					height: 150px;
					display: block;
				}
			}
		}
	}
</style>