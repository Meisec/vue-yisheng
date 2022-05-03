/**
 * 请求的接口的方法
 */
// 请求 axios
import axios from 'axios'
// 引入接口地址
import config from './confjg'
import md5 from 'md5-js'

// 请求方法
const api = {
    /**
     * 病毒信息的获取
     */
    getCovInfo(){
        // return axios.get('http://api.tianapi.com/ncov/index?key=b0fe02221b43ecb51a7220cca0dbc839')
        return axios.get(config.host+config.Covinfo)
    },
    /**
     * 获取国内疫情数据
     */
    getChinaData(){
        return axios.get(config.baseUrl+config.chinaData);
    },
    /**
     * 获取国外疫情数据
     */
    getworldData(){
        return axios.get(config.baseUrl+config.worldData)
    },
    /**
     * 获取城市接口
     * 参数：format=json&time=794831&appid=14737&city_name=%E5%8C%97%E4%BA%AC&sign=8713d9ba86d0265c62fd92b569ed3434
     */
    getcityData(city_name){
        // md5 加密规则：sign = MD5( appid1formatjsontime1545829466密钥) 查看加密规则说明 密钥不需要键名，请直接跟上32位的密钥
        let rules = md5('appid14737city_name'+city_name+'formatjson0cbb97b690f598e0b93cf528f6641deb');
         let canshu= 'format=json&time=794831&appid=14737&city_name='+city_name+'&sign='+rules;
        return axios.get(config.baseUrl+config.cityData+'?'+canshu);
    },
    /**
     * 轮播数据接口
     */
    getswiperBanner(){
        return axios.get(config.swiperBanner)
    },
    /**
     * 出行城市
     */
    getTravel(){
        return axios.get(config.travel)
    },
    /**
     * 城市出行政策
     */
    getTravelQuery(params){
        return axios.get(config.travelQuery,{
            params
        })
     },
    /**
     * 城市选择
     */
    getCityCode(){
        return axios.get(config.cityCode)
    }
}

export default api