<template>
  <div class="main">
    <MyHeader></MyHeader>
    <div class="main-nav">

      <div class="main-nav-bot"
           style="background-color:white">
        <div class="main-nav-bot-content">
          <span class="Title">{{TabTitle}}</span><br />
          <span class="Subtitle">日期：{{CreateTime}}</span>
          <span class="Subtitle">作者：{{Author}}</span>
          <span class="Subtitle">来源：{{Source}}</span><br /><br />
          <div style="padding:50px;"
               v-html="this.TabContent"></div>
        </div>
        <!-- <div v-html="this.TabContent"></div> -->
      </div>

    </div>
    <div style="border-bottom:1px solid #cccccc;display:inline-table;margin: 0 auto;width: 70%;"></div>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from '@/components/header.vue'
import MyFooter from '@/components/footer.vue'
// import MySwiper from '@/components/swiper.vue'
import { ip, resBannerDetail } from '@/api/date'
export default {
  data () {
    return {
      ip: ip,
      TabTitle: '',
      Source: '本站',
      Author: '管理员',
      CreateTime: '2008-08-08',
      TabContent: ''
    }
  },
  methods: {
    resNewsDetail: function () {
      var obj = localStorage.getItem('obj')
      resBannerDetail({ ID: obj }).then(res => {
        this.TabTitle = res.data.data[0].Title
        this.TabContent = res.data.data[0].Content
        this.CreateTime = res.data.data[0].CreateTime
      })
    }
  },
  mounted () {
    this.resNewsDetail()
  },
  components: {
    MyHeader,
    MyFooter
    // MySwiper
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  width: 100%;
  background: url("../../assets/bg02.png");
}
.main-nav {
  clear: both;
  margin: 0 auto;
  width: 70%;
  min-height: 540px;
  text-align: center;
  block-size: 10px;
  /* border-bottom: 1px solid #cccccc; */
  display: table;
  margin-bottom: 10px;
}
.main-nav-top {
  width: 100%;
}
.main-nav-bot {
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
  padding-top: 100px;
}
.main-nav-bot-content {
  width: 100%;
  margin: 0 auto;
  height: auto;
}
/* .main-nav-bot-content >>> p {
  display: block;
} */

.Title {
  font-size: 18px;
}
.Subtitle {
  font-size: 12px;
  color: #505050;
  margin-right: 10px;
}
</style>
