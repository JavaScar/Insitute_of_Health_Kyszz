<template>
  <div class="main">
    <MyHeader></MyHeader>
    <div class="main-nav">
      <!-- 中心简介 -->
      <div class="main-nav-top">
        <div class="main-nav-top-left">
          <span style="font-size:26px;">中心简介</span>
          Introduction to the Centre
        </div>
        <div class="main-nav-top-right">
          <router-link to='/index'
                       Id="Breadcrumb"
                       style="color:#2c3e50;text-decoration: none;">主页</router-link>
          <!-- > -->
          <i slot="suffix"
             class="el-icon-arrow-right"></i>
          <router-link to='/introductionToTheCentre'
                       Id="Breadcrumb"
                       style="color:#2c3e50;text-decoration: none;">中心简介</router-link>
        </div>

      </div>
      <div class="main-nav-bot">
        <el-tabs :tab-position="tabPosition"
                 type="border-card"
                 style="clear:both;">
          <el-tab-pane v-for="item in tabLists"
                       :key="item.Id"
                       :label="item.TabLabel"><span v-html="item.TabContent"></span></el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from '@/components/header.vue'
import MyFooter from '@/components/footer.vue'
// import MySwiper from '@/components/swiper.vue'
import { ip, resNews } from '@/api/date'
export default {
  data () {
    return {
      ip: ip,
      tabLists: [{
        Id: '1001',
        TabLabel: '中心简介',
        TabContent: ''
      }, {
        Id: '1002',
        TabLabel: '组织架构',
        TabContent: ''

      }, {
        Id: '1003',
        TabLabel: '工作介绍',
        TabContent: ''
      }],
      relatedLinksValue: '',
      tabPosition: 'left'
    }
  },
  methods: {
    resIndex: function () {
      for (let index = 0; index < this.tabLists.length; index++) {
        resNews({ CategoryName: this.tabLists[index].TabLabel, MemLoginID: 1000 }).then(res => {
          this.tabLists[index].TabContent = res.data.data[0].Content
        })
      }
    }

  },
  mounted () {
    this.resIndex()
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
  min-height: 630px;
  height: auto;
  text-align: center;
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
  /* margin: 0 -14%; */
  line-height: 60px;
  font-size: 14px;
}
.main-nav-bot {
  width: 100%;
}
#Breadcrumb:hover {
  font-weight: bold;
}

.el-tabs--border-card {
  background: #fff;
  border: 0px solid #dcdfe6;
  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12),
    0 0 6px 0 rgba(0, 0, 0, 0.04);
  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
}

.el-tabs__item.is-active {
  color: #409eff;
  background-color: rgba(78, 211, 252, 0.541);
  border-right-color: #dcdfe6;
  border-left-color: #dcdfe6;
}
</style>
