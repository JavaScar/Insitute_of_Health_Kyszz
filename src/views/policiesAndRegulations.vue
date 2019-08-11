<template>
  <div class="main">
    <MyHeader></MyHeader>
    <div class="main-nav">
      <!-- 中心简介 -->
      <div class="main-nav-top">
        <div class="main-nav-top-left">
          <span style="font-size:26px;">政策法规</span>
          Policies And Regulations
        </div>
        <div class="main-nav-top-right">
          <router-link to='/index'
                       Id="Breadcrumb"
                       style="color:#2c3e50;text-decoration: none;">主页</router-link>
          <!-- > -->
          <i slot="suffix"
             class="el-icon-arrow-right"></i>
          <router-link to='/policiesAndRegulations'
                       Id="Breadcrumb"
                       style="color:#2c3e50;text-decoration: none;">政策法规</router-link>
        </div>

      </div>
      <div class="main-nav-bot">
        <el-tabs :tab-position="tabPosition"
                 type="border-card"
                 style="clear:both;">
          <el-tab-pane v-for="item in tabLists"
                       :key="item.Id"
                       :label="item.TabLabel">
            <div class="main-nav-bot-tabs"
                 v-for="list in item.TabContent"
                 :key="list.Id">
              <div class="main-nav-bot-tabs-nav"
                   @click="Detail(list)">
                <span>
                  <img src="@/assets/icon/NoticeIcon.svg"
                       style="width:12px;margin-right:5px;" />
                </span>
                <span style="display:inline-block;width:85%;font-size:14px;">{{list.Title}}</span>
                <span style="float:right;padding-right:10px;font-size:12px;">{{list.CreateTime}}</span>
              </div>
            </div>
          </el-tab-pane>
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
import { ip, resNews, MyUrl } from '@/api/date'
export default {
  data () {
    return {
      ip: ip,
      tabLists: [{
        Id: '1001',
        TabLabel: '管理条例',
        TabContent: []
      }, {
        Id: '1002',
        TabLabel: '发展报告',
        TabContent: []
      }, {
        Id: '1003',
        TabLabel: '调研报告',
        TabContent: []
      }],
      relatedLinksValue: '',
      tabPosition: 'left'

    }
  },
  methods: {
    Detail: function (item) {
      localStorage.setItem('obj', item.ID)
      window.open(MyUrl + 'publicDetail', '_blank')
      // this.$router.push({
      //   name: 'publicDetail'
      // })
    },
    resIndex: function () {
      for (let index = 0; index < this.tabLists.length; index++) {
        resNews({ CategoryName: this.tabLists[index].TabLabel, MemLoginID: 1000 }).then(res => {
          this.tabLists[index].TabContent = res.data.data
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
  line-height: 60px;
  font-size: 14px;
}
#Breadcrumb:hover {
  font-weight: bold;
}

.main-nav-bot {
  width: 100%;
}
.main-nav-bot-tabs {
  width: 100%;
  height: 100%;
}
.main-nav-bot-tabs-nav {
  width: 100%;
  min-height: 30px;
  text-align: left;
  line-height: 30px;
  color: #6b6b6b;
  border-bottom: 1px dashed #cccccc;
  margin-bottom: 10px;
}
.main-nav-bot-tabs-nav:hover {
  cursor: pointer;
  color: #3d3d3d;
}
</style>
