<template>
  <div class="info">
    <div class="cov">
      <div class="title">
        病毒信息
        <a href="##"
          >查看更多 <img src="../../../assets/images/more.png" alt=""
        /></a>
      </div>
      <p>{{ covDesc.note1 }}</p>
      <p>{{ covDesc.note2 }}</p>
      <p>{{ covDesc.note3 }}</p>
      <p>{{ covDesc.remark1 }}</p>
      <p>{{ covDesc.remark2 }}</p>
      <p>{{ covDesc.remark3 }}</p>
    </div>
    <div class="hot">
      <div class="title">
        <img class="icon" src="../../../assets/images/hot.png" alt="" />
        <a href="##"
          >查看更多<img src="../../../assets/images/more.png" alt=""
        /></a>
      </div>
      <ul class="list">
        <li v-for="item in news" :key="item.id">
          <span>最新</span>
          {{ item.title }}
          <img src="../../../assets/images/right.png" alt="" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    covDesc: {
      type: Object,
      default: function () {
        return {};
      },
    },
    news: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
};
</script>

<style lang='less' scoped>
.info {
  padding: 0.2rem;
  .title {
    padding-left: 0.1rem;
    margin-bottom: 0.2rem;
    font-size: 0.3rem;
    font-weight: bold;
    color: #666;
    a {
      float: right;
      font-weight: normal;
      color: #4169e2;
      font-size: 0.26rem;
      img {
        width: 0.26rem;
      }
    }
  }
  .title::before {
    content: "";
    border-left: 0.1rem solid rgb(9, 60, 202);
    font-size: 0.26rem;
    margin-right: 0.1rem;
  }
  p {
    line-height: 0.5rem;
    color: #666;
  }
  .hot {
    padding-top: 0.2rem;
    border-bottom: 1px solid #eee;
    .icon {
      width: 1.2rem;
      vertical-align: top;
    }
    .list {
      li {
        line-height: 0.44rem;
        margin-bottom: 0.2rem;
        letter-spacing: 0.03rem;
        font-size: 0.3rem;
        color: #666;
      }
      span {
        background: #ff5555;
        color: #fff;
        font-size: 0.26rem;
        padding: 0.02rem 0.06rem;
        border-radius: 0.06rem;
      }
      img {
        float: right;
        width: 0.24rem;
        padding-right: 0.2rem;
      }
    }
  }
}
</style>