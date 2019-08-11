<template>
  <div class="main">
    <MyHeader></MyHeader>
    <div class="main-nav">
      <!-- 中心简介 -->
      <div class="main-nav-top">
        <div class="main-nav-top-search">
          <el-input placeholder="请输入内容"
                    size='small'
                    v-model="presentationSearchInput">
            <i slot="prefix"
               class="el-input__icon el-icon-search"></i>
          </el-input>

        </div>
        <div class="main-nav-top-edit">
          <el-button type="success"
                     icon="el-icon-search"
                     size="small"
                     circle></el-button>
        </div>
      </div>
      <div style="position: absolute;right: 17%;margin-top:-15px;z-index: 999;">
        <el-button size='small'
                   @click="SaveLoginOut"
                   type="danger">安全退出</el-button>
      </div>
      <div class="main-nav-bot">
        <el-tabs :tab-position="tabPosition"
                 type="border-card"
                 style="clear:both;">
          <el-tab-pane v-for="item in tabLists"
                       :key="item.Id"
                       :label="item.TabLabel">
            <div class="main-nav-bot-nav"
                 v-if="item.Id === 1001">
              <div class="main-nav-bot-nav-item">年度查询</div>
              <div class="main-nav-bot-nav-items"
                   v-for="(item,index) of arrYear"
                   :key="index"
                   @click="hanleChangeYear(item)">{{item}}</div>
              <div class="main-nav-bot-content">
                <div class="main-nav-bot-content-nav"
                     v-for="(item,index) in whitePaperLists"
                     :key="index"
                     @click="Detail(item)">
                  <div class="main-nav-bot-content-nav-title">{{item.Title}}</div>
                  <!-- <div class="main-nav-bot-content-nav-author">author</div> -->
                </div>

              </div>
            </div>
            <div class="main-nav-bot-nav"
                 v-if="item.Id === 1002">
              <div class="main-nav-bot-tabs"
                   v-for="(list,index) in StatisticsLists"
                   :key="index">
                <div class="main-nav-bot-tabs-nav"
                     style="height:100px;border-bottom:1px dashed #ccc;"
                     @click="Detail(list)">
                  <div class="main-nav-bot-tabs-nav-left">
                    <img :src="ip+list.CoverImage"
                         style="width:100%;height:100%;" />
                  </div>
                  <div class="main-nav-bot-tabs-nav-right">
                    <div class="main-nav-bot-tabs-nav-right-title">{{list.Title}}</div>
                    <div class="main-nav-bot-tabs-nav-right-content">{{list.Description}}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="main-nav-bot-nav"
                 v-if="item.Id === 1003">
              <div class="main-nav-bot-tabs"
                   v-for="(list,index) in EconomicsLists"
                   :key="index">
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
import { ip, resReport } from '@/api/date'
export default {
  data () {
    return {
      ip: ip,
      arrYear: [],
      tabLists: [{
        Id: 1001,
        TabLabel: '白皮书'
      }, {
        Id: 1002,
        TabLabel: '统计数据'

      }, {
        Id: 1003,
        TabLabel: '卫生经济学'
      }],
      whitePaperLists: [],
      StatisticsLists: [],
      EconomicsLists: [],
      relatedLinksValue: '',
      tabPosition: 'top',
      activeName: 1001,
      presentationSearchInput: ''
    }
  },
  methods: {
    hanleChangeYear: function (num) {
      resReport({ CategoryName: '白皮书', UserID: localStorage.getItem('UserID'), MemLoginID: 1000 }).then(res => {
        this.whitePaperLists = res.data.data
      })
    },
    resReport: function () {
      resReport({ CategoryName: '白皮书', UserID: localStorage.getItem('UserID'), MemLoginID: 1000 }).then(res => {
        this.whitePaperLists = res.data.data
      })
      resReport({ CategoryName: '统计数据', UserID: localStorage.getItem('UserID'), MemLoginID: 1000 }).then(res => {
        this.StatisticsLists = res.data.data
      })
      resReport({ CategoryName: '卫生经济学', UserID: localStorage.getItem('UserID'), MemLoginID: 1000 }).then(res => {
        this.EconomicsLists = res.data.data
      })
      // for (let index = 0; index < this.tabLists.length; index++) {
      //   resReport({ CategoryName: this.tabLists[index].TabLabel, UserID: localStorage.getItem('UserID'), MemLoginID: 1000 }).then(res => {
      //     this.tabLists[index].TabContent = res.data.data
      //   })
      // }
    },
    SaveLoginOut: function () {
      localStorage.removeItem('UserID')
      this.$router.go(-1)
    },
    Detail: function (item) {
      localStorage.setItem('obj', item.ID)
      this.$router.push({
        name: 'presentstionPublicDetail'
      })
    }

  },
  mounted () {
    if (localStorage.getItem('UserID')) {
      var myDate = new Date()
      var thisYear = myDate.getFullYear() // 获取当年年份
      var Section = thisYear - 2019 // 声明一个变量 获得当前年份至想获取年份差 eg.2008
      for (var i = 0; i <= Section; i++) {
        this.arrYear.push(thisYear--)
      } // 遍历并添加年份到数组
      // arrYear里便是2008年到当前的所有年份了
      this.resReport()
    } else {
      this.$router.go(-1)
    }
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
  background: url(" ../../assets/bg02.png");
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
  height: 100px;
  background: url("../../assets/bg.jpg");
}

.main-nav-top-search {
  clear: both;
  width: 60%;
  margin: 0 auto;
  display: inline-block;
  line-height: 100px;
}
.main-nav-top-edit {
  clear: both;
  margin: 0 auto;
  display: inline-block;
  line-height: 100px;
  margin-left: 30px;
}

.main-nav-bot {
  width: 100%;
  position: relative;
  top: -18px;
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

.main-nav-bot-nav {
  margin: 0 auto;
  width: 96%;
  min-height: 40px;
  font-size: 12px;
  text-align: left;
  /* border-bottom: 1px dashed #ccc; */
}
.main-nav-bot-nav-item {
  /* display: inline-table; */
  margin: 5px 20px;
  /* cursor: pointer; */
}
.main-nav-bot-nav-items {
  display: inline-table;
  margin: 5px 20px;
  cursor: pointer;
}
.main-nav-bot-nav-items:hover {
  color: rgb(110, 110, 110);
}

.main-nav-bot-content {
  width: 100%;
  margin-top: 10px;
  min-height: 400px;
  background-color: #c8c9ca;
}
.main-nav-bot-content-nav {
  width: 10%;
  height: 150px;

  background-color: #ffffff;
  display: inline-block;
  /* position: relative;
  top: 5px; */
  /* text-align: left; */
  margin: 3px 5px;
  text-align: center;
  cursor: pointer;
}
.main-nav-bot-content-nav:hover {
  transform: scale(1.01);
}
.main-nav-bot-content-nav-title {
  margin-top: 4%;
  margin-left: 3%;
  width: 92%;
  font-size: 13px;
  height: 92%;
  border: 1px solid rgb(250, 246, 0);
  overflow: hidden;
}
.main-nav-bot-content-nav-author {
  font-size: 12px;
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
.main-nav-bot-tabs-nav-left {
  width: 13%;
  height: 80px;
  padding-top: 10px;
  padding-left: 10px;
  float: left;
}
.main-nav-bot-tabs-nav-right {
  /* display: inline-block; */
  width: 83%;
  margin-left: 17%;
  height: 100px;
}
.main-nav-bot-tabs-nav-right-title {
  width: 100%;
  height: 30px;
  line-height: 30px;
  color: #3d87d1;
}
.main-nav-bot-tabs-nav-right-content {
  max-height: 68px;
  overflow: hidden;
}
</style>
