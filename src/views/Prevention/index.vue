<template>
  <div>
      <div class="wuzi">
          <!-- 顶部logo -->
          <img width="100%" src="../../assets/images/wuzi.png" alt="">
          <van-tabs v-model="active" animated>
            <van-tab v-for="item in arr" :title='item.title' :key="item.title">
                <img :src="item.img" width="100%" alt="">
                </van-tab>
            </van-tabs>
      </div>
  </div>
</template>

<script>
// 先导入图片，下面才能使用
import img1 from '../../assets/images/jiujing.png'
import img2 from '../../assets/images/kouzhao.png'
export default {
    data() {
        return {
            active:0,
            arr:[
                {
                    img:img1,
                    title:'消毒剂'
                },
                 {
                    img:img2,
                    title:'口罩'
                },
            ]
        }
    },
}
</script>

<style>

</style>