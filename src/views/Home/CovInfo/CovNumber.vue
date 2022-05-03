<template>
  <div class="num">
      <div class="content">
          <div class="title">截至{{covDate.modifyTime}}全国数据统计</div>
          <ul class="wrap">
              <li>
                  <span>较昨日{{covDate.currentConfirmedIncr}}</span>
                  <div class="bold">{{covDate.currentConfirmedCount}}</div>
                  <strong>现存确诊</strong>
              </li>
              <li>
                  <span>较昨日{{covDate.suspectedIncr}}</span>
                  <div class="bold">{{covDate.suspectedCount}}</div>
                  <strong>境外输入</strong>
              </li>
              <li>
                  <span>较昨日{{covDate.seriousIncr}}</span>
                  <div class="bold">{{covDate.seriousCount}}</div>
                  <strong>现存无症状</strong>
              </li>
              <li>
                  <span>较昨日{{covDate.confirmedIncr}}</span>
                  <div class="bold">{{covDate.confirmedCount}}</div>
                  <strong>累计确诊</strong>
              </li>
              <li>
                  <span>较昨日{{covDate.deadIncr}}</span>
                  <div class="bold">{{covDate.deadCount}}</div>
                  <strong>累计死亡</strong>
              </li>
              <li>
                  <span>较昨日{{covDate.curedIncr}}</span>
                  <div class="bold">{{covDate.curedCount}}</div>
                  <strong>累计治愈</strong>
              </li>
          </ul>
      </div>    
  </div>
</template>

<script>
export default {
    props:['covDate'],

    filters:{
        number: function(val){
            val = val > 0 ? '+' + val : val;
            return val
        },
        time:function(num){ 
            var dt = new Date(num);
            const y = dt.getFullYear()
            const m = dt.getMonth() + 1
            const d = dt.getDate()

            const hh = dt.getHours()
            const mm =dt.getMinutes()
            const ss =dt.getSeconds()

            return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
        }
    }
}
</script>

<style lang='less' scoped>
.num {
    background: #f5f5f5;
    padding-top: 00.2rem;
    .content{
        padding: 0.2rem;
        background :#fff;
        min-height: 2rem;
        border-radius: 0.2rem 0.2rem 0 0;
        .title{
            color: #666;
            margin-bottom: 0.2rem;
        }
    }
    .wrap {
        display: flex;
        flex-wrap: wrap;
        padding-top: 0.2rem;
        border-radius: 0.1rem;
        box-shadow: 0 0 1px 1px rgb(175 172 172 / 20%);
        li{
            width: 33.3333333%;
            text-align: center;
            margin-bottom: 0.2rem;
            strong {
                color:#333
            }
        }
        .bold{
            font-weight: bold;
        }
        li:nth-child(1) .bold{
            color:red
        }
        li:nth-child(2) .bold{
            color:green
        }
        li:nth-child(3) .bold{
            color:orange
        }
        
        li:nth-child(4) .bold{
            color:pink
        }
        li:nth-child(5) .bold{
            color:goldenrod
        }
        li:nth-child(6) .bold{
            color:saddlebrown
        }
        
        
    }
}
</style>