<template>
  <div class="main">
    <MyHeader></MyHeader>
    <div class="main-nav">
      <!-- 中心简介 -->
      <div class="main-nav-top">
        <div class="main-nav-top-left">
          <span style="font-size:26px;">联系我们</span>
          Contact us
        </div>
        <div class="main-nav-top-right">
          <router-link to='/index'
                       id="Breadcrumb"
                       style="color:#2c3e50;text-decoration: none;">主页</router-link>
          <!-- > -->
          <i slot="suffix"
             class="el-icon-arrow-right"></i>
          <router-link to='/contactUs'
                       id="Breadcrumb"
                       style="color:#2c3e50;text-decoration: none;">联系我们</router-link>
        </div>

      </div>
      <div class="main-nav-bot">
        <div class="main-nav-bot-nav">
          <div class="main-nav-bot-nav-left">
            <img src="@/assets/ContactUs.png" />
          </div>
          <div class="main-nav-bot-nav-right">
            <div>地址：北京市海淀区大慧寺路12号</div>
            <div>邮编：100081</div>
            <div>电话：0110-62178835</div>
            <div>传真：</div>
            <div>网址：www.nrifp.org.cn</div>
            <div>邮箱：</div>
          </div>
        </div>
      </div>
    </div>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from '@/components/header.vue'
import MyFooter from '@/components/footer.vue'
// import MySwiper from '@/components/swiper.vue'
export default {
  data () {
    return {

    }
  },
  methods: {

    projectCenterHref: function (item) {
      // alert(item.href)
      if (item.href === '#') {
        alert('此入口正在建设中，请稍侯……')
      } else {
        window.open(item.href, '_blank')
      }
    }

  },
  mounted () {

  },
  components: {
    MyHeader,
    MyFooter
    // MySwiper
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
.main {
  width: 100%;
  height: 100%;
  background: url(" ../assets/bg02.png");
}
.main-nav {
  margin: 0 auto;
  width: 70%;
  height: auto;
  min-height: 630px;
  text-align: center;
  block-size: 10px;
  border-bottom: 1px solid #cccccc;
}
.main-nav-top {
  width: 100%;
  height: 60px;
}
.main-nav-top-left {
  float: left;
  text-align: left;
  line-height: 60px;
  font-size: 14px;
  cursor: default;
}
.main-nav-top-right {
  float: right;
  /* text-align: right; */
  line-height: 60px;
  font-size: 14px;
}
#Breadcrumb:hover {
  font-weight: bold;
}
.main-nav-bot {
  width: 100%;
  /* position: relative;
  top: -40px; */
}
.main-nav-bot-nav {
  width: 100%;
  min-height: 200px;
}
.main-nav-bot-nav-left {
  width: 49%;
  /* margin: 0px auto; */
}
.main-nav-bot-nav-left img {
  width: 80%;
  height: 80%;
}
.main-nav-bot-nav-right {
  width: 49%;
  text-align: left;
  font-size: 14px;
  position: relative;
  left: 50%;
  margin-top: -20%;
}
</style>
