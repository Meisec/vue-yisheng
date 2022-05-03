/**
 * 公共的请求接口
 */
const base ={
    host:'http://api.tianapi.com/',   // 天性数据 --疫情病毒
    baseUrl:'https://oyen.api.storeapi.net',   //  挖数据---国内疫情
    Covinfo:'/ncov/index?key=b0fe02221b43ecb51a7220cca0dbc839',   // 相对地址  疫情病毒信息
    chinaData:'/api/94/219?format=json&appid=14737&sign=baeefa8e1c3b56563bb49d12a6e1a49d', // 国内疫情接口
    worldData:'/api/94/220?format=json&appid=14737&sign=baeefa8e1c3b56563bb49d12a6e1a49d', // 世界疫情数据
    cityData:'/api/94/221',
    swiperBanner:'http://iwenwiki.com/wapicovid19/ncovimg.php',                      // 疫情轮播图
    travel:'/api/springTravel/citys?key=ea3295121216b176e1a6b8af7fcd3dcf',  
    // travel:'http://apis.juhe.cn/springTravel/citys?key=171e165a7d991c5f6ecd5194c54778ef' 
    travelQuery:'/api/springTravel/query?key=ea3295121216b176e1a6b8af7fcd3dcf',              // 城市疫情情况
    cityCode:'/foo/aj/getcitycode',
}

export default base;