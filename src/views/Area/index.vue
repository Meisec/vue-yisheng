<template>
  <div class="area">
      <div class="bg">
          <div class="content">
              <div class="th">全国风险地区汇总</div>
          <!-- 高风险地区 -->
          <template v-if="high.length>0">
                <div class="title">高风险地区{{high.length}}个</div>
                <ul class="list">
                    <li v-for="(item,index) in high" :key="index">
                        {{item}}
                    </li>
                </ul>
          </template>
           <!-- 低风险地区 -->
          <template v-if="mid.length>0">
                <div class="title">中风险地区{{mid.length}}个</div>
                <ul class="list">
                    <li v-for="(item,index) in mid" :key="index">
                        {{item}}
                    </li>
                </ul>
          </template>
      </div>
      </div>
  </div>
</template>

<script>
import api from '../../api/index'
export default {
    data(){
        return {
            high:[],           // 高风险地区
            mid:[]              // 低风险区
        }
    },
     created(){
      api.getCovInfo()
      .then(res=>{
        console.log(res.data.newslist[0]);
        let riskarea = res.data.newslist[0].riskarea;
        this.high = riskarea.high;
        this.mid = riskarea.mid;
      })
    }
}
</script>

<style lang="less" scoped>
.area {
    background: #f5f5f5;
}
.bg {
    height: 3.6rem;
    background: url("../../assets/images/area.png") no-repeat;
    background-size: cover;
    padding-top: 2.6rem;
}
.content {
    background: #fff;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
    padding: 0.2rem;
    border-radius: 0.2rem;
    min-height: 4rem;
    margin-bottom: 0.2rem;
    .th{
        margin-bottom: 0.3rem;
        font-size: 0.34rem;
    }
    .th::before{
        display: inline-block;
        width: 0.1rem;
        height: 0.3rem;
        margin-right: 0.1rem;
        background-color: #414141;
        content: "";
         vertical-align: middle;
    }
    .list{
        li{
          margin-bottom: 0.2rem;
          color: #333;
          background:#f7f7f7;
          padding:0.1rem;
          border-radius: 0.1rem;
          letter-spacing: 0.01rem;
          line-height: 0.5rem;
      }
  }
}
.title{
    color: orange;
}
</style>