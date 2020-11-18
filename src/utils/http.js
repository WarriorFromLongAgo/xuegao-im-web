import axios from 'axios'
// import router from '../router/index'

// let token;

// http://localhost:8080/xuegao/sys/v1/signIn
const instance = axios.create({
    // baseURL: '/xuegao',
    timeout: 10000
});

// 请求的拦截器
// instance.interceptors.request.use(function (config) {
//   if (token) {
//     config.headers.authorization = "berarer " + token;
//   } else {
//     token = sessionStorage.getItem("token");
//     if (token) {
//       config.headers.authorization = "berarer " + token;
//     }
//   }
//   return config;
// }, function (error) {
//   return Promise.reject(error);
// });

// 添加请求拦截器
axios.interceptors.request.use(config => {
    if (config.url.indexOf('?') > -1) {
        config.url = config.url + `&timestemp=${new Date().getTime()}`
    } else {
        config.url = config.url + `?timestemp=${new Date().getTime()}`
    }
    return config
})

// 响应的拦截器
instance.interceptors.response.use(function (response) {
    if (response.data.code == 401) {
        this.$router.replace({ path: "login" });
    }
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    console.log(error)
    return Promise.reject(error);
});

export default instance;

