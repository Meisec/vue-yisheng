<template>
  <div class="home">
      <!-- 疫情图片 -->
      <div class="logo">
      <img src="../../assets/images/1.jpg" width="100%" alt="">
        <!-- 点击进入城市选择 -->
        <router-link class="select" to="/selectCity">{{city}}</router-link>
      </div>
      <!-- 2. 病毒信息 -->
      <CovInfo :covDesc="covDesc" :news="news"/>
      <!-- 3. 疫情-小导航 -->
      <div class="list">
          <div>
              <router-link to="/area">
               <img src="../../assets/images/1.png" alt="">
               <div>风险地区</div>
              </router-link>
          </div>
          <div>
              <router-link to="/hesuan">
                <img src="../../assets/images/2.png" alt="">
                <div>核酸检测</div>
              </router-link>
          </div>
          <div>
              <router-link to="prevention">
                  <img src="../../assets/images/3.png" alt="">
                  <div>防疫物资</div>
              </router-link>
          </div>
          <div>
              <router-link to="/travel">
              <img src="../../assets/images/3.png" alt="">
              <div>出新政策</div>
              </router-link>
          </div>

      </div>

        <!-- 4.数据统计 -->
        <CovNumber :covDate="covDate"/>

        <!-- 5. 中国地图 -->
        <ChinaMap/>

        <!--6. 世界地图 -->
        <WorldMap/>

        <!-- 7.轮播图效果 -->
        <VueSwiper/>
  </div>
</template>

<script>
import CovInfo from './CovInfo/CovInfo.vue'
import api from '../../api/index'
import CovNumber from './CovInfo/CovNumber.vue'
import ChinaMap from './VueEcharts/ChinaMap.vue'
import WorldMap from './VueEcharts/WorldMap.vue'
import VueSwiper from './VueSwiper/VueSwiper.vue'
export default {
    data(){
        return {
            covDesc: {},
            news:[],
            covDate:{}, //  全国的数据统计     对象或者数组都可以
            city:'国内疫情',    // 国内疫情
        }
    },
    components:{
        CovInfo,
        CovNumber,
        ChinaMap,
        WorldMap,
        VueSwiper
    },
    created(){
        // 进入首页获取本地存储
        let city = localStorage.getItem('city')
        if(city){
            this.city = city + '疫情';
        }
        // 请求病毒接口
        api.getCovInfo()
        .then(res=>{
            console.log(res.data);

            // 1. 病毒信息的介绍信息---- 处理过的数据
            const data = res.data.newslist[0].desc;
            this.covDesc ={
                note1:data.note1,
                note2:data.note2,
                note3:data.note3,
                remark1:data.remark1,
                remark2:data.remark2,
                remark3:data.remark3,
            },
            // 2. 疫情热点
            this.news = res.data.newslist[0].news
            // console.log('处理好的数据',this.covDesc);
            // 3. 全国的疫情的数据统计信息---
            this.covDate = {
                currentConfirmedCount:data.currentConfirmedCount,   // 现存确诊
                confirmedCount:data.confirmedCount,                  // 累计确诊
                suspectedCount:data.suspectedCount,
                curedCount:data.curedCount,
                deadCount:data.deadCount,
                suspectedIncr:data.suspectedIncr,
                seriousCount:data.seriousCount,
                currentConfirmedIncr:data.currentConfirmedIncr,
                confirmedIncr:data.confirmedIncr,
                curedIncr:data.curedIncr,
                deadIncr:data.deadIncr,
                seriousIncr:data.seriousIncr,
                modifyTime:data.modifyTime
            }
        });

    }
}
</script>

<style scoped lang='less'>
.logo{
    position: relative;
    .select{
        position: absolute;
        right:0.2rem;
        top: 0.3rem;
        color: #fff;
        background: rgba(0, 0, 0, 0.1);
        padding: 0.1rem 0.2rem;
        border-radius: 0.2rem;
    }
}
.list {
  display: flex;
  padding-bottom: 0.2rem;
  > div {
    flex: 1;
    text-align: center;
    color: #666;
    img {
      width: 0.8rem;
      height: 0.8rem;
    }
  }
}
</style>