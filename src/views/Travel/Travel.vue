<template>
  <div>
    <div class="title">疫情期间出行防疫政策</div>
    <van-field
      v-model="goCity"
      is-link
      readonly
      label="出发地"
      placeholder="请选择所在地区"
      @click="show = true"
    />
    <van-popup v-model="show" round position="bottom">
      <van-cascader
        v-model="cascaderValue"
        title="请选择出发地区"
        :options="options"             
        @close="show = false"
        @finish="onFinish"
      />
    </van-popup>
<!-- 选择到达地区 -->
    <van-field
      v-model="toCity"
      is-link
      readonly
      label="目的地"
      placeholder="请选择目的地区"
      @click="show2 = true"
    />
    <van-popup v-model="show2" round position="bottom">
      <van-cascader
        v-model="cascaderValue2"
        title="请选择目的地区"
        :options="options"             
        @close="show2 = false"
        @finish="toFinish"
      />
    </van-popup>
    <!-- 查询按钮 -->
    <div class="search">
        <van-button type="info" size="large" @click="search">查询防疫信息</van-button>
    </div>

    <!-- 政策查询结果 -->
    <div class="content" >
        <div>出发城市信息:{{from_info}}</div>
        <div>到达城市信息:{{to_info}}</div>
    </div>
  </div>
</template>

<script>
import api from '../../api/index'
export default {
  data() {
    return {
      show: false,           // 弹框状态  false隐藏  true 显示
      show2: false, 
      goCity: '',               // 出发的值
      toCity: '',               // 到达的值
      from:'',                  // 出发的id值
      to:'',
      cascaderValue: '',
      cascaderValue2:'',
      from_info:'',
      to_info:'',
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [
        {
          text: '浙江省',
          value: '330000',
          children: [{ text: '杭州市', value: '330100' }],
        },
        {
          text: '江苏省',
          value: '320000',
          children: [{ text: '南京市', value: '320100' }],
        },
      ],
    };
  },
  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish({ value,selectedOptions }) {
        this.from = value;
      this.show = false;
      this.goCity = selectedOptions.map((option) => option.text).join('/');
    },
    toFinish({ value,selectedOptions }) {
        this.to = value;
      this.show2 = false;
      this.toCity = selectedOptions.map((option) => option.text).join('/');
    },
    // ----------------------------------------------------------------------------
    search(){
        console.log('查询城市疫情',this.from,this.to);
        api.getTravelQuery({
            from:this.from,
            to:this.to
        })
        .then(res=>{
           console.log('--------',res.data);
           this.from_info = res.data.result.from_info
           this.to_info = res.data.result.to_info
        })
    }
  },
  // 放到生命周期中
  created(){
      api.getTravel()
      .then(res=>{
          console.log('---出行城市----',res.data.result);
          let result = res.data.result;
          // 处理 数据结构 [{text:''},{value:''},children[{}]] 数组对象形式
          let arr = []
          result.forEach(item => {
              let obj = {}
              obj.text = item.province;                 // 省份名称
              obj.value = item. province_id;            // 省份标识id
              obj.children = [];                        // 二级区域
              item.citys.forEach(ele => {
                  let child = {}
                  child.text = ele.city;
                  child.value = ele.city_id;
                  // 把child的数据追加给obj.childr[]
                  obj.children.push(child)
              })
            arr.push(obj)
          });
        // 打印处理后的数据 
        this.options = arr;   
      })
  }
};
</script>

<style lang='less' scoped>
.title{
    padding: 0.2rem;
}.search{
    margin: 0.2rem;
}
</style>