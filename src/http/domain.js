

/**
** 设置API接口域名
**/
let apiUrl = '';
let HOST = process.env.HOST;

const api_test = 'https://niukou.api.chengmikeji.com/Web/'
// const api_test = '//admin.api.buttonupup.com/my-shop-manager'
const api_prod = '//admin.api.buttonupup.com/apis/my-shop-manager'

if ( HOST == 'test' ){
	apiUrl = api_test
}else if ( HOST == 'prod' ){
	apiUrl = api_prod
}else{
	apiUrl = api_test
}

export default apiUrl