<template>
  <div class="main">
    <MyHeader></MyHeader>
    <div class="main-nav">
      <div class="main-nav-itme">
        <div class="main-nav-itme-nav">
          <img src="../assets/CDocotorEntry.png"
               @click="yytBinessNtryHref(1)" />
        </div>
        <div class="main-nav-itme-nav">
          <img src="../assets/WDocotorEntry.png"
               @click="yytBinessNtryHref(2)" />
        </div>
        <!-- <div class="main-nav-itme-nav">
          <img src="../assets/yyt3BN.png"
               @click="yytBinessNtryHref(3)" />
        </div> -->

      </div>

    </div>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from '@/components/header.vue'
import MyFooter from '@/components/footer.vue'
// import MySwiper from '@/components/swiper.vue'
import { MyUrl } from '@/api/date'
export default {
  data () {
    return {
      MyUrl: MyUrl
    }
  },
  methods: {
    yytBinessNtryHref: function (type) {
      if (type === 1) {
        window.open('http://www.241210.com:8081', '_blank')
      } else if (type === 2) {
        window.open('http://wjw.yideb.com/', '_blank')
      } else {
        this.$router.push({
          name: '*'
        })
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
  background: url("../assets/bg02.png");
}
.main-nav {
  clear: both;
  margin: 0 auto;
  width: 70%;
  height: auto;
  min-height: 540px;
  text-align: center;
  block-size: 10px;
  border-bottom: 1px solid #cccccc;
  padding-bottom: 20px;
}
.main-nav-itme {
  width: 100%;
  height: 100%;
  background: url("../assets/ydbbg.jpg") no-repeat;
  background-size: cover;
}
.main-nav-itme-nav {
  width: 200px;
  float: left;
  margin-left: 10%;
  margin-top: 10%;
  display: contents;
}
.main-nav-itme-nav img {
  width: 200px;
  margin: 10%;
}
.main-nav-itme-nav:hover {
  cursor: pointer;
  transform: scale(1.01); /*放大两倍*/
}
</style>
