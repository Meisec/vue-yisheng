<template>
  <div>
      <div class="title">国外疫情地图</div>
      <!-- 地图容器  为Echarts 准备一个定义了宽和高的 DOM-->
      <div id="main" style="width: 7.5rem;height: 7rem"></div>
  </div>
</template>

<script>
import api from '../../../api/index'
export default {
    mounted(){
        api.getworldData()
        .then((res)=>{
            console.log('世界疫情---',res.data);
            let countrys = res.data.retdata;
            let arr = []
            for(let i = 0; i < countrys.length;i++){
                let obj = {}
                obj.name = countrys[i].xArea
                obj.value = countrys[i].confirm
                arr.push(obj)
            }
            this.$myChart.worldMap('main',arr)
        })
    }
}
</script>

<style lang="less" scoped>
.title {
    padding: 0.2rem;
}
#main{
    background: #f5f5f5;
}
</style>