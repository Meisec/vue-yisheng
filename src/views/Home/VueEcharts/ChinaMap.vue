<template>
  <div>
      <div class="title">国内疫情地图</div>
      <!-- 地图容器  为Echarts 准备一个定义了宽和高的 DOM-->
      <van-tabs v-model="active" animated @change="change">
          <van-tab title="现存确诊">
              <!-- 现存确诊 -->
              <div id="newMain" style="width: 7.5rem;height: 7rem"></div>
          </van-tab>
          <van-tab title="累计确诊">
              <!-- 累计确诊 -->
              <div id="main" style="width: 7.5rem;height: 7rem"></div>
          </van-tab>
      </van-tabs>
  </div>
</template>

<script>
// 1. 安装echarts    2. 导入echarts
// import echarts from 'echarts'
import api from '../../../api/index'
export default {
    data() {
        return {
            active:0,
            arr:[],
        }
    },
    // 3. echarts 实例 - 创建地图
    mounted(){
        // 获取疫情数据---------------
    api.getChinaData()
    .then((res)=>{
        console.log('-----',res.data);
        // 获取省份的数据
        let citys = res.data.retdata;    //  是一个数组对象 [{}，{}]
        let arr = []  // 累计确诊
        let newArr = []   // 现存确诊
        for(let i = 0; i < citys.length; i++){
            let obj = {}
            obj.name = citys[i].xArea;
            obj.value = citys[i].confirm; // 累计确诊人数  
            
            // curConfirm  现在确诊人数
            let newObj = {}
            newObj.name = citys[i].xArea;   
            newObj.value = citys[i].curConfirm;
            arr.push(obj)
            newArr.push(newObj)
        }
        console.log('城市的数据',newArr);
        this.arr = arr;
        // vue里面的  等待延迟加载
        this.$nextTick(()=>{
             // 访问 echarts 方法  显示累计确诊地图
            // this.$myChart.chinaMap('main',arr);
            // 显示现存确诊地图
            this.$myChart.chinaMap('newMain',newArr);
        })
        
    })
       
    },
    methods:{
        change(title){  // 接受两个字段， name  title
            // console.log('*****',title);
            if(title === 1){
                this.$nextTick(()=>{
                    this.$myChart.chinaMap("main",this.arr)
                })
            }
        }
    //     getBar(){
    //        // 基于准备好的dom，初始化echarts实例
    // //   var myChart = echarts.init(document.getElementById('main'));
    // //   var myChart = this.$echarts.init(document.getElementById('main'));

    //   // 指定图表的配置项和数据
    //   var option = {
    //     title: {
    //       text: 'ECharts 入门示例'
    //     },
    //     tooltip: {},
    //     legend: {
    //       data: ['销量']
    //     },
    //     xAxis: {
    //       data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    //     },
    //     yAxis: {},
    //     series: [
    //       {
    //         name: '销量',
    //         type: 'bar',
    //         data: [5, 20, 36, 10, 10, 20]
    //       }
    //     ]
    //   };

    //   // 使用刚指定的配置项和数据显示图表。
    //   myChart.setOption(option);
    //     }
    }   
}
</script>

<style  lang="less" scoped>
.title {
    padding: 0.2rem;
}
#main #newMain {
    background: #f5f5f5;
}
</style>