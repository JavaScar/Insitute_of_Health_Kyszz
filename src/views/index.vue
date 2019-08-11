<template>
  <div class="main">
    <MyHeader></MyHeader>
    <div class="main-nav">
      <!-- banner模块 -->
      <div class="main-nav-banner">
        <div class="main-nav-banner-left">
          <!-- <MySwiper></MySwiper> -->
          <template>
            <el-carousel :interval="5000"
                         arrow="hover">
              <el-carousel-item v-for="item in bannerList"
                                :key="item.Id">
                <div class="el-carousel-item-left">
                  <img :src="ip + item.CoverImage">
                </div>
                <div class="el-carousel-item-right">
                  <div class="el-carousel-item-right-text">
                    {{item.Title}}
                    <div class="el-carousel-item-right-textContent"
                         style="margin-top: 12px;background: #3d87d1;font-size:12px;max-height:270px;overflow:hidden;"
                         v-html="item.Content"></div>
                  </div>
                  <div class="el-carousel-item-right-button">
                    <el-button type="text"
                               @click="BannerDetail(item)">
                      <span>了解更多>></span>
                    </el-button>
                    <!--  @click="bannerAn(item.Id)"
                      <el-button type="info"
                               plain>了解更多>></el-button> -->
                  </div>

                </div>
              </el-carousel-item>
            </el-carousel>
          </template>
        </div>
      </div>
      <!-- 中心动态 -->
      <div class="main-nav-center">
        <div class="main-nav-center-nav">
          <div class="main-nav-center-nav-top">
            <div class="label">
              中心动态
            </div>
            <div class="more">
              <span @click="MoreHref(2)">MORE+</span>
            </div>
          </div>
          <div class="main-nav-center-nav-Content">
            <div class="main-nav-center-nav-Content-nav"
                 v-for="(item,index) in centerList"
                 :key="index"
                 v-if="index<4"
                 @click="Detail(item)">
              <div class="main-nav-center-nav-Content-nav-img">
                <img class="img"
                     :src="ip+item.CoverImage">
              </div>
              <div class="main-nav-center-nav-Content-nav-label">
                <span>
                  {{item.Title}}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 业务入口 -->
      <div class="main-nav-binessNtry">
        <div class="main-nav-binessNtry-nav">
          <div class="main-nav-binessNtry-nav-top">
            <div class="label">
              业务入口
            </div>
            <!-- <div class="more">
              MORE+
            </div> -->
          </div>
          <div class="main-nav-binessNtry-nav-Content">
            <div class="main-nav-binessNtry-nav-Content-nav"
                 v-for="item in binessNtryList"
                 :key="item.Id">
              <div class="main-nav-binessNtry-nav-Content-nav-img"
                   @click="binessNtryHref(item)">
                <img class="img"
                     :src="item.CenterImg">

              </div>
              <div class="main-nav-binessNtry-nav-Content-nav-label"
                   @click="binessNtryHref(item)">
                <span>
                  {{item.CenterContent}}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
      <!-- 国内新闻 -->
      <div class="main-nav-homeNews">
        <div class="main-nav-homeNews-nav">
          <div class="main-nav-homeNews-nav-top">
            <div class="label">
              国内新闻
            </div>
            <div class="more">
              <span @click="MoreHref(3)">MORE+</span>
            </div>
          </div>
          <div class="main-nav-homeNews-nav-Content">
            <div class="main-nav-homeNews-nav-Content-nav"
                 v-for="(item,index) in homeNewsList"
                 :key="index"
                 v-if="index<6"
                 @click="Detail(item)">
              <div class="main-nav-homeNews-nav-Content-nav-img">
                <img class="img"
                     :src="ip+item.CoverImage">

              </div>
              <div class="main-nav-homeNews-nav-Content-nav-label">
                <div class="main-nav-homeNews-nav-Content-nav-label-Title">
                  {{item.Title}}
                </div>
                <div class="main-nav-homeNews-nav-Content-nav-label-Content">
                  {{item.Description}}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
      <!-- 国际新闻 通知通告 -->
      <div class="main-nav-internationalNews">
        <div class="main-nav-internationalNews-nav">
          <div class="main-nav-internationalNews-nav-left">
            <div class="main-nav-internationalNews-nav-top">
              <div class="label">
                国际新闻
              </div>
              <div class="more">
                <span @click="MoreHref(4)">MORE+</span>
              </div>
            </div>
            <div class="main-nav-internationalNews-nav-Content">
              <div class="main-nav-internationalNews-nav-Content-nav"
                   v-for="(item,index) in internationalNewsList"
                   :key="index"
                   v-if="index<8"
                   @click="Detail(item)">
                <div class="main-nav-internationalNews-nav-Content-nav-Title">
                  {{item.Title}}
                </div>
                <div class="main-nav-internationalNews-nav-Content-nav-Content">
                  {{item.Description}}
                </div>
              </div>
            </div>
          </div>
          <div class="main-nav-internationalNews-nav-right">
            <div class="main-nav-internationalNews-nav-top">
              <div class="label">
                通知通告
              </div>
              <div class="more">
                <span @click="MoreHref(5)">MORE+</span>
              </div>
            </div>
            <div class="main-nav-internationalNews-nav-Content">
              <div class="main-nav-internationalNews-nav-Content-notice-nav"
                   v-for="(item,index) in internationalNewsNoticeList"
                   :key="index"
                   v-if="index<4"
                   @click="Detail(item)">
                <div class="main-nav-internationalNews-nav-Content-notice-nav-Title">
                  <span><img src="@/assets/icon/NoticeIcon.svg"
                         style="width:12px;margin-right:5px;" /></span>{{item.Title}}
                </div>
                <div class="main-nav-internationalNews-nav-Content-notice-nav-Content"
                     style="margin-left:5%;">
                  {{item.Description}}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <!-- 项目中心 -->
      <div class="main-nav-projectCenter">
        <div class="main-nav-projectCenter-nav">
          <div class="main-nav-projectCenter-nav-top">
            <div class="label">
              项目中心
            </div>
            <!-- <div class="more">
              MORE+
            </div> -->
          </div>
          <div class="main-nav-center-nav-Content">
            <div class="main-nav-projectCenter-nav-Content-nav"
                 v-for="item in projectCenterList"
                 :key="item.Id">
              <div class="main-nav-projectCenter-nav-Content-nav-img"
                   @click="projectCenterHref(item)">
                <img class="img"
                     :src="item.CenterImg">
              </div>
            </div>

          </div>

        </div>

      </div>
      <!-- 相关连接 -->
      <div class="main-nav-relatedLinks">
        <div class="main-nav-relatedLinks-nav">
          <div class="main-nav-relatedLinks-nav-top">
            <div class="label">
              相关链接
            </div>
            <!-- <div class="more">
              MORE+
            </div> -->
          </div>
          <div class="main-nav-relatedLinks-nav-Content">
            <div class="main-nav-relatedLinks-nav-Content-nav"
                 v-for="item in relatedLinksList"
                 :key="item.Id">
              <div class="main-nav-relatedLinks-nav-Content-nav-img">
                <img class="img"
                     :src="item.CenterImg">

              </div>
              <div class="main-nav-relatedLinks-nav-Content-nav-label">
                <!-- <el-table-column label="日期"
                                 width="180">
                  <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                  </template>
                </el-table-column> -->

                <el-select v-model="relatedLinksValue"
                           size="mini"
                           @change="relatedLinksValueChange"
                           placeholder="请选择">
                  <el-option v-for="item in item.Child"
                             :key="item.label"
                             :label="item.label"
                             :value="item.Href">
                  </el-option>
                </el-select>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
    <div style="border-bottom:1px solid #cccccc;display:inline-table;margin: 0 auto;width: 70%;"></div>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from '@/components/header.vue'
import MyFooter from '@/components/footer.vue'
import { ip, resNews, MyUrl, resBanner } from '@/api/date'
// import MySwiper from '@/components/swiper.vue'
export default {
  data () {
    return {
      ip: ip,
      MyUrl: MyUrl,
      bannerList: [],
      centerList: [],
      binessNtryList: [{
        Id: '1001',
        CenterImg: require('../assets/binessNtry1.jpg'),
        CenterContent: '医研通入口',
        Href: 'http://www.51yyt.org'
      }, {
        Id: '1002',
        CenterImg: require('../assets/binessNtry2.jpg'),
        CenterContent: '人力资源中心',
        Href: 'http://www.resourcesOfTalents.org'
      }, {
        Id: '1003',
        CenterImg: require('../assets/binessNtry3.jpg'),
        CenterContent: '纠纷调解中心',
        Href: '#'
      }, {
        Id: '1004',
        CenterImg: require('../assets/binessNtry4.jpg'),
        CenterContent: '医生工作站',
        Href: 'http://wjw.yideb.com/'
      }, {
        Id: '1005',
        CenterImg: require('../assets/binessNtry5.jpg'),
        CenterContent: '学习中心',
        Href: 'http://ywk.wydztech.com/'
      }, {
        Id: '1006',
        CenterImg: require('../assets/binessNtry6.jpg'),
        CenterContent: '认证中心',
        Href: '#'
      }, {
        Id: '1007',
        CenterImg: require('../assets/binessNtry7.jpg'),
        CenterContent: '智慧配送中心',
        Href: '#'
      }],
      homeNewsList: [],
      internationalNewsList: [],
      internationalNewsNoticeList: [],
      projectCenterList: [{
        Id: '1001',
        CenterImg: require('../assets/projectCenterImg1.jpg'),
        Href: 'http://szzx.51yyt.org/#/'
      }, {
        Id: '1002',
        CenterImg: require('../assets/projectCenterImg2.jpg'),
        Href: 'http://scitech.people.com.cn/GB/other4204/index.html'
      }, {
        Id: '1003',
        CenterImg: require('../assets/projectCenterImg3.jpg'),
        Href: 'http://www.egene.org.cn/cms/g-index.jhtml'
      }, {
        Id: '1004',
        CenterImg: require('../assets/projectCenterImg4.jpg'),
        Href: 'https://www.nstrs.cn/'
      }, {
        Id: '1005',
        CenterImg: require('../assets/projectCenterImg5.jpg'),
        Href: 'http://service.most.gov.cn/'
      }, {
        Id: '1006',
        CenterImg: require('../assets/projectCenterImg6.jpg'),
        Href: 'http://www.ncis.cn/'
      }, {
        Id: '1007',
        CenterImg: require('../assets/projectCenterImg7.jpg'),
        Href: 'http://www.gcnet.org.cn/'
      }, {
        Id: '1008',
        CenterImg: require('../assets/projectCenterImg8.jpg'),
        Href: 'https://isisn.nsfc.gov.cn/egrantweb/'
      }],
      relatedLinksList: [{
        Id: '1001',
        CenterImg: require('../assets/link1.jpg'),
        Child: [{
          Href: 'http://www.gov.cn/',
          label: '中国政府网'
        }, {
          Href: 'http://www.most.gov.cn/',
          label: '中华人民共和国科技部'
        }, {
          Href: 'http://www.nhc.gov.cn/',
          label: '中华人民共和国卫生健康委'
        }]
      }, {
        Id: '1002',
        CenterImg: require('../assets/link2.jpg'),
        Child: [{
          Href: 'http://www.cams.ac.cn/',
          label: '中国医学科学院'
        }, {
          Href: 'http://www.cas.cn/',
          label: '中国科学院'
        }]
      }, {
        Id: '1003',
        CenterImg: require('../assets/link3.jpg'),
        Child: [{
          Href: 'https://www.who.int/zh/',
          label: '世界卫生组织'
        }, {
          Href: 'https://www.wipo.int/portal/en/index.html',
          label: '世界知识产权组织'
        }]
      }, {
        Id: '1004',
        CenterImg: require('../assets/link4.jpg'),
        Child: [{
          Href: 'http://manu27.magtech.com.cn/Jwk_jhsy_new/CN/volumn/home.shtml',
          label: '中国计划生育学杂志'
        }, {
          Href: 'http://szyx.cbpt.cnki.net/WKB3/WebPublication/index.aspx?mid=SZYX',
          label: '中国生殖医学杂志'
        }]
      }],

      relatedLinksValue: ''

    }
  },
  methods: {
    bannerAn: function (Id) {
      alert('点击了第' + Id + '张图的了解更多')
    },
    binessNtryHref: function (item) {
      if (item.Href === '#') {
        alert('此入口正在建设中，敬请期待……')
      } else if (item.Href === 'http://www.51yyt.org') {
        // 医研通
        window.open(MyUrl + 'yytbinessNtry', '_blank')
      } else if (item.Href === 'http://www.resourcesOfTalents.org') {
        // 人才资源网
        window.open(MyUrl + 'resourcesOfTalents', '_blank')
      } else if (item.Href === 'http://wjw.yideb.com/') {
        // 人才资源网
        window.open(MyUrl + 'DocotorBinessNtry', '_blank')
      } else {
        window.open(item.Href, '_blank')
      }
    },
    projectCenterHref: function (item) {
      if (item.Href === '#') {
        alert('此入口正在建设中，敬请期待……')
      } else {
        window.open(item.Href, '_blank')
      }
    },
    relatedLinksValueChange: function () {
      if (this.relatedLinksValue === '#') {
        alert('此入口正在建设中，敬请期待……')
      } else {
        window.open(this.relatedLinksValue, '_blank')
        this.relatedLinksValue = ''
      }
    },
    MoreHref: function (type) {
      // type:
      // 1banner模块  //取消
      // 2 中心动态
      // 3 国内新闻
      // 4 国际新闻
      // 5 通知通告
      if (type === 2 || type === 3 || type === 4) {
        this.$router.push({
          name: 'newsInformation',
          params: {
            Type: type
          }
        })
      } else if (type === 5) {
        this.$router.push({
          name: 'noticeAnnouncement',
          params: {
            type: type
          }
        })
      }
    },
    Detail: function (item) {
      localStorage.setItem('obj', item.ID)
      window.open(MyUrl + 'publicDetail', '_blank')
      // this.$router.push({
      //   name: 'publicDetail'
      // })
    },
    BannerDetail: function (item) {
      localStorage.setItem('obj', item.ID)
      window.open(MyUrl + 'publicBannerDetail', '_blank')
      // this.$router.push({
      //   name: 'publicBannerDetail'
      // })
    },
    resIndex: function () {
      resBanner({ MemLoginID: 1000 }).then(res => {
        this.bannerList = res.data.data
      })
      resNews({ CategoryName: '中心动态', MemLoginID: 1000 }).then(res => {
        this.centerList = res.data.data
      })
      resNews({ CategoryName: '国内新闻', MemLoginID: 1000 }).then(res => {
        this.homeNewsList = res.data.data
      })
      resNews({ CategoryName: '国际新闻', MemLoginID: 1000 }).then(res => {
        this.internationalNewsList = res.data.data
      })
      resNews({ CategoryName: '通知通告', MemLoginID: 1000 }).then(res => {
        this.internationalNewsNoticeList = res.data.data
      })
    }

  },
  mounted () {
    localStorage.removeItem('mainSearchLabel')
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
  /* background: url(" ../assets/bg02.png"); */
}
.main-nav {
  margin: 0 auto;
  width: 70%;
  min-height: 630px;
  text-align: center;
}
.label {
  font-size: 16px;
  text-align: left;
}
.more {
  font-size: 12px;
  text-align: right;
  margin-top: -16px;
  /* font-weight: bold; */
}
.more span {
  display: inline-block;
  /* font-weight: bold; */
}
.more span:hover {
  cursor: pointer;
  /* font-weight: bold; */
}
.main-nav-banner,
.main-nav-center,
.main-nav-binessNtry,
.main-nav-homeNews,
.main-nav-internationalNews,
.main-nav-projectCenter,
.main-nav-relatedLinks {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 5px 5px 5px 5px;
}

.main-nav-center-nav,
.main-nav-binessNtry-nav,
.main-nav-homeNews-nav,
.main-nav-internationalNews-nav,
.main-nav-projectCenter-nav,
.main-nav-relatedLinks-nav {
  width: 98%;
  height: auto;
  margin: 0 auto;
  clear: both;
}
.main-nav-internationalNews-nav {
  /* border: 1px solid red; */
  height: 20px;
}
.main-nav-internationalNews-nav-left {
  float: left;
  width: 68%;
}
.main-nav-internationalNews-nav-right {
  float: left;
  width: 30.5%;
  margin-left: 1%;
}

.main-nav-center-nav-top,
.main-nav-binessNtry-nav-top,
.main-nav-homeNews-nav-top,
.main-nav-internationalNews-nav-top,
.main-nav-Notice-nav-top,
.main-nav-projectCenter-nav-top,
.main-nav-relatedLinks-nav-top {
  padding-bottom: 2px;
  border-bottom: 1px solid #cccccc;
}

.main-nav-center-nav-Content {
  display: block;
  margin-top: 10px;
  width: 100%;
  /* border: 1px solid red; */
}
.main-nav-center-nav-Content-nav {
  /* display: block; */
  /* background-color: #155494; */
  float: left;
  width: 21%;
  height: 200px;
  margin: 15px 2%;
  cursor: pointer;

  /* border: 1px solid red; */
}
.main-nav-center-nav-Content-nav-img {
  width: 100%;
  height: 70%;
}
.main-nav-center-nav-Content-nav-img img {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat 0px 0px;
}
.main-nav-center-nav-Content-nav-label {
  display: block;
  width: 100%;
  height: 35px;
  font-size: 14px;
  color: #3d87d1;
}
.main-nav-center-nav-Content-nav-label span {
  display: block;
  width: 80%;
  height: 40px;
  margin: 1.5% 10%;
  overflow: hidden;
  text-align: left;
}
.main-nav-binessNtry-nav-Content {
  display: block;
  margin-top: 10px;
  width: 100%;
}
.main-nav-binessNtry-nav-Content-nav {
  float: left;
  width: 12.25%;
  height: 100px;
  margin: 20px 1%;
}
.main-nav-binessNtry-nav-Content-nav-img {
  width: 100%;
  height: 60%;
}
.main-nav-binessNtry-nav-Content-nav-img img {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat 0px 0px;
}
.main-nav-binessNtry-nav-Content-nav-label {
  /* margin-top: -28%; */
  position: relative;
  top: -45%;
  display: block;
  width: 100%;
  height: 30%;
  font-size: 14px;
  color: #e3e3e4;
}
.main-nav-binessNtry-nav-Content-nav-label span {
  display: block;
  width: 80%;
  height: 40px;
  margin: 2% 10%;
  overflow: hidden;
}
.main-nav-binessNtry-nav-Content-nav-label span:hover {
  color: white;
  cursor: pointer;
}
.main-nav-homeNews-nav-Content {
  display: block;
  margin-top: 10px;
  width: 100%;
}
.main-nav-homeNews-nav-Content-nav {
  float: left;
  width: 31%;
  height: 130px;
  margin: 10px 1%;
}
.main-nav-homeNews-nav-Content-nav-img {
  width: 45%;
  height: 90%;
  /* padding: 5%; */
}
.main-nav-homeNews-nav-Content-nav-img img {
  width: 100%;
  height: auto;
  background-repeat: no-repeat 0px 0px;
}
.main-nav-homeNews-nav-Content-nav-label {
  float: right;
  position: relative;
  top: -95%;
  width: 50%;
  height: 90%;
  color: #e3e3e4;
  overflow: hidden;
}
.main-nav-homeNews-nav-Content-nav-label-Title {
  display: block;
  width: 98%;
  height: auto;
  max-height: 60px;
  margin: 2% 1%;
  color: #3d87d1;
  font-size: 14px;
  text-align: left;
  overflow: hidden;
}
.main-nav-homeNews-nav-Content-nav-label-Content {
  display: block;
  width: 96%;
  /* height: 40px; */
  margin: 2% 2%;
  color: #a7a5a5;
  font-size: 12px;
  text-align: left;
  overflow: hidden;
  /* border: 1px solid red; */
}
.main-nav-homeNews-nav-Content-nav:hover {
  /* color: white; */
  /* font-weight: bold; */
  cursor: pointer;
}
.main-nav-internationalNews-nav-Content {
  height: auto;
  width: 100%;
}
.main-nav-internationalNews-nav-Content-nav {
  float: left;
  width: 47.5%;
  height: 82px;
  max-height: 100px;
  margin: 10px 1%;
  cursor: pointer;
  overflow: hidden;
}
.main-nav-internationalNews-nav-Content-nav-Title {
  display: block;
  width: 98%;
  height: auto;
  margin: 1% 1%;
  color: #3d87d1;
  font-size: 14px;
  text-align: left;
  overflow: hidden;
}
.main-nav-internationalNews-nav-Content-nav-Content {
  display: block;
  width: 96%;
  /* height: 40px; */
  margin: 2% 2%;
  color: #a7a5a5;
  font-size: 12px;
  text-align: left;
  overflow: hidden;
}
.main-nav-internationalNews-nav-Content-notice-nav {
  float: left;
  width: 100%;
  height: auto;
  max-height: 100px;
  margin: 3px 1%;
  cursor: pointer;
  overflow: hidden;
}
.main-nav-internationalNews-nav-Content-notice-nav-Title {
  display: block;
  width: 98%;
  height: auto;
  margin: 1% 1%;
  color: #3d87d1;
  font-size: 14px;
  text-align: left;
  overflow: hidden;
}
.main-nav-internationalNews-nav-Content-notice-nav-Content {
  display: block;
  width: 96%;
  /* height: 40px; */
  margin: 2% 2%;
  color: #a7a5a5;
  font-size: 12px;
  text-align: left;
  overflow: hidden;
}
.main-nav-projectCenter-nav-Content-nav {
  float: left;
  width: 11.4%;
  height: auto;
  margin: 15px 0.5%;
}
.main-nav-projectCenter-nav-Content-nav-img {
  width: 100%;
  height: 60%;
}
.main-nav-projectCenter-nav-Content-nav-img:hover {
  cursor: pointer;
}
.main-nav-projectCenter-nav-Content-nav-img img {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat 0px 0px;
}
.main-nav-relatedLinks-nav-Content-nav {
  /* display: block; */
  /* background-color: #155494; */
  float: left;
  width: 21%;
  height: auto;
  margin: 20px 2%;
  /* border: 1px solid red; */
}
.main-nav-relatedLinks-nav-Content-nav-img {
  width: 100%;
  height: 70%;
}
.main-nav-relatedLinks-nav-Content-nav-img img {
  /* width: 80%; */
  width: 173px;
  height: 60%;
  margin: auto;
  background-repeat: no-repeat 0px 0px;
}
.main-nav-relatedLinks-nav-Content-nav-label {
  clear: both;
  display: block;
  width: 100%;
  height: 30%;
  font-size: 14px;
  color: #3d87d1;
}
.el-select-dropdown__item {
  clear: both;
  width: 100%;
  font-size: 14px;
  padding: 0 20px;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #606266;
  height: 34px;
  line-height: 34px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer;
}

.main-nav-banner-left {
  width: 100%;
  height: 400px;
}
.el-carousel {
  position: absolute;
  width: 70%;
  min-width: 840px;
  height: 400px;
  /* border-radius: 5px 5px 5px 5px; */
}
.el-carousel-item-left {
  width: 70%;
  height: 400px;
}

.el-carousel__item {
  width: 100%;
  height: 400px;
}

.el-carousel__item img {
  width: 100%;
  height: 100%;
}

.el-carousel__item {
  background: #3d87d1;
  background: -webkit-linear-gradient(#3d87d1, #155494);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#3d87d1', endColorstr='#155494', GradientType='1');
  background: -ms-linear-gradient(top, #3d87d1 0%, #155494 100%); /*IE*/
}
.el-carousel-item-right {
  position: relative;
  left: 70%;
  top: -100%;
  width: 30%;
  height: 100%;
}
.el-carousel-item-right-text {
  width: 86%;
  height: 80%;
  margin: 0 auto;
  padding: 5px 0px;
  overflow: hidden;
  /* overflow-y: auto; */
  color: aliceblue;
  font-size: 16px;
}
.el-carousel-item-right-textContent >>> p {
  /* background-color: #3d87d1; */

  background: -webkit-linear-gradient(#2e79c4, #2d71b4);
  background: -webkit-gradient(
    linear,
    center top,
    center bottom,
    from(#2e79c4),
    to(#2d71b4)
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#2e79c4', endColorstr='#2d71b4', GradientType='1');
  background: -ms-linear-gradient(top, #2e79c4 0%, #2d71b4 100%); /*IE*/
  font-size: 10px;
}
::-webkit-scrollbar {
  display: none;
}

.el-carousel-item-right-button {
  display: block;
  position: absolute;
  right: 20px;
  bottom: 10px;
  width: 100px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  background: #e0e0e0;
  border-radius: 6px 6px 6px 6px;
}
.el-carousel-item-right-button span {
  color: -webkit-linear-gradient(#3d87d1, #155494);
}
</style>
