import axios from 'axios';

const BASEURL = process.env.NODE_ENV === 'development' ? '/api' : 'http://music.hoohmm.com';

// 添加请求拦截器
axios.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    // console.log('请求中...');
    return config;
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(response => {
    // 对响应数据做点什么
    // console.log('请求完成');
    return response;
}, error => {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export const $axios = (options) => {
    return new Promise((resolve, reject) => {
        axios({
            url: BASEURL + options.url,
            method: options.method || 'get',
            params: options.params || {}
        }).then(res => {
            if(res.data.code === 200) {
                resolve(res.data)
            }
        }).catch(err => {
            console.log(err)
            reject(err)
        })
    })
}

const getPromise = opt => $axios(opt)
export const $axiosAll = (reqArr) => {
    const _req = []
    if(reqArr.length) {
        for (let i = 0; i < reqArr.length; i++) {
            _req[i] = getPromise(reqArr[i])
        }
        return new Promise((resolve, reject) => {
            axios.all(_req).then(axios.spread((...res) => {
                // 两个请求现在都执行完成
                const _res = []
                for (let i = 0; i < res.length; i++) {
                    _res.push(res[i].data)
                }
                resolve(res)
            })).catch(err => {
                console.log(err)
                reject(err)
            });
        })
    }
}


