<template>
  <div class="selectCity">
    <h2 class="title">选择城市</h2>
    <van-index-bar :index-list="indexList">
      <template v-for="(item,name) in citylist">
        <van-index-anchor :index="name" :key='name' />
        <van-cell :title="ele.name" v-for="ele in item" :key="ele.id" @click="goHome"/>
        <!-- <van-cell title="文本" />
        <van-cell title="文本" /> -->
      </template>
    </van-index-bar>
  </div>
</template>

<script>
import api from "../../api/index";
export default {
  data() {
    return {
      citylist: {},          //城市列表
      indexList: [],
    };
  },
  created() {
    api.getCityCode().then((res) => {
      console.log("城市列表---", res.data.result.citylist);
      this.citylist = res.data.result.citylist;
      //  获取所有的键名 ---[]      使用Object.keys() 方法 
      this.indexList = Object.keys(this.citylist)
      console.log(this.indexList);
    });
  },
  methods: {
      // 跳转页面
      goHome(event){
          console.log(event.target.innerText);
          // 1. 点击获取当前的城市名称   2. 跳转首页    3. 获取的城市的名称传递给首页
          // 本地存储  传递数据
        localStorage.setItem('city',event.target.innerText)
          this.$router.push('/')  // 跳转首页
        //   this.$router.go(-1)   返回上一层
      }
  },
};
</script>

<style lang='less' scoped>
.selectCity {
  background: #f5f5f5;
  .selectCity {
    padding: 0.2rem;
  }
}
</style>