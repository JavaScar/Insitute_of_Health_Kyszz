<template>
  <div class="main">
    <MyHeader></MyHeader>
    <div class="main-nav">
      <!-- 中心简介 -->
      <div class="main-nav-top">
        <div class="main-nav-top-left">
          <span style="font-size:26px;">健康扶贫</span>
          Health Poverty Alleviation
        </div>
        <div class="main-nav-top-right">
          <router-link to='/index'
                       Id="Breadcrumb"
                       style="color:#2c3e50;text-decoration: none;">主页</router-link>
          <!-- > -->
          <i slot="suffix"
             class="el-icon-arrow-right"></i>
          <router-link to='/healthPovertyAlleviation'
                       Id="Breadcrumb"
                       style="color:#2c3e50;text-decoration: none;">健康扶贫</router-link>
        </div>

      </div>
      <div class="main-nav-bot">
        <el-tabs :tab-position="tabPosition"
                 type="border-card"
                 :before-leave='tabClickEvent'
                 style="clear:both;">
          <el-tab-pane v-for="item in tabLists"
                       :key="item.Id"
                       :label="item.TabLabel">
            <div class="main-nav-bot-tabs"
                 v-for="list in item.TabContent"
                 :key="list.Id">
              <div class="main-nav-bot-tabs-navNews"
                   v-if="item.IsType === 1"
                   @click="Detail(list)">
                <span>
                  <img src="@/assets/icon/NoticeIcon.svg"
                       style="width:12px;margin-right:5px;" />
                </span>
                <span style="display:inline-block;width:85%;font-size:14px;">{{list.Title}}</span>
                <span style="float:right;padding-right:10px;font-size:12px;">{{list.CreateTime}}</span>
              </div>
              <div class="main-nav-bot-tabs-navPhoto"
                   v-if="item.IsType === 2">
                <div class="main-nav-bot-tabs-navPhoto-nav"
                     @click="Detail(list)">
                  <!-- <img :src="list.tabNoticeImgSrc"
                       @click="$imageViewer" /> -->
                  <img :src="ip+list.CoverImage" />
                </div>
              </div>
              <div class="main-nav-bot-tabs-navVideo"
                   v-if="item.IsType === 3">
                <div class="main-nav-bot-tabs-navVideo-nav">
                  <div class="main-nav-bot-tabs-navVideo-nav-coverimg">
                    <img :src="ip + list.CoverImage" />
                  </div>
                  <div class="main-nav-bot-tabs-navVideo-nav-IconPlay">
                    <img src="../assets/icon/iconPlay.svg"
                         style="width:50px;"
                         @click="VideoViewerPlay(list)" />
                  </div>
                  <div class="main-nav-bot-tabs-navVideo-nav-content">
                    {{list.Title}}
                  </div>

                </div>
              </div>
            </div>
          </el-tab-pane>

        </el-tabs>
      </div>

      <el-dialog width="50%"
                 title=""
                 :visible.sync="innerVisible"
                 @close="RemoveVideoViewerPlay"
                 append-to-body>
        <div class="player-container">
          <video-player class="vjs-custom-skin"
                        :options="playerOptions"></video-player>
        </div>
        <span>简介：{{this.playerOptions.sources[0].content}}</span>
      </el-dialog>

    </div>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from '@/components/header.vue'
import MyFooter from '@/components/footer.vue'
// import MySwiper from '@/components/swiper.vue'
import { ip, resNews, resVideo, MyUrl } from '@/api/date'
// 引入video样式
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
export default {
  data () {
    return {
      ip: ip,
      tabLists: [{
        Id: '1001',
        TabLabel: '扶贫新闻',
        IsType: 1,
        TabContent: []
      }, {
        Id: '1002',
        TabLabel: '扶贫故事',
        IsType: 2,
        TabContent: []
      }, {
        Id: '1003',
        TabLabel: '扶贫风采',
        IsType: 3,
        TabContent: []
      }],
      relatedLinksValue: '',
      tabPosition: 'left',
      innerVisible: false,
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
        autoplay: false, // 如果true,浏览器准备好时开始回放。
        controls: true, // 控制条
        preload: 'auto', // 视频预加载
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: '',
          src: '',
          content: ''
        }],
        poster: '', // 你的封面地址
        width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试' // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
      }
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
    },
    // alert('点击了tabs标签')
    tabClickEvent: function () {
      // debugger

    },
    VideoViewerPlay: function (list) {
      this.playerOptions.poster = ip + list.CoverImage
      this.playerOptions.sources[0].src = ip + list.Url
      this.playerOptions.sources[0].content = list.Description
      this.innerVisible = true
    },
    RemoveVideoViewerPlay: function () {
      this.playerOptions.poster = ''
      this.playerOptions.sources[0].src = ''
    },
    Detail: function (item) {
      localStorage.setItem('obj', item.ID)
      window.open(MyUrl + 'publicDetail', '_blank')
      // this.$router.push({
      //   name: 'publicDetail'
      // })
    },
    resIndex: function () {
      for (let index = 0; index < this.tabLists.length; index++) {
        if (this.tabLists[index].TabLabel === '扶贫风采') {
          resVideo({ CategoryName: this.tabLists[index].TabLabel, MemLoginID: 1000 }).then(res => {
            this.tabLists[index].TabContent = res.data.data
          })
        } else {
          resNews({ CategoryName: this.tabLists[index].TabLabel, MemLoginID: 1000 }).then(res => {
            this.tabLists[index].TabContent = res.data.data
          })
        }
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
  /* text-align: right; */
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
.main-nav-bot-tabs-navNews {
  width: 100%;
  min-height: 30px;
  text-align: left;
  line-height: 30px;
  color: #6b6b6b;
  border-bottom: 1px dashed #cccccc;
  margin-bottom: 10px;
}
.main-nav-bot-tabs-navNews:hover {
  cursor: pointer;
  color: #3d3d3d;
}
.main-nav-bot-tabs-navPhoto {
  float: left;
  width: 19%;
  min-height: 130px;
  margin: 1px 1px;
}
.main-nav-bot-tabs-navPhoto-nav {
  width: auto;
  height: 130px;
  cursor: pointer;
}
.main-nav-bot-tabs-navPhoto-nav img {
  width: 100%;
  height: 100%;
}
.main-nav-bot-tabs-navPhoto-nav img:hover {
  transform: scale(1.2); /*放大两倍*/
}
.main-nav-bot-tabs-navVideo {
  float: left;
  width: 200px;
  min-height: 200px;
  margin: 5px 5px;
}
.main-nav-bot-tabs-navVideo-nav {
  width: auto;
  height: 200px;
  cursor: pointer;
  background: #d4d4d4;
}

.main-nav-bot-tabs-navVideo-nav-coverimg {
  width: 100%;
  height: 70%;
}
.main-nav-bot-tabs-navVideo-nav-IconPlay {
  width: 50px;
  height: 50px;
  position: relative;
  top: -45%;
  left: 35%;
}
.main-nav-bot-tabs-navVideo-nav-IconPlay:hover {
  transform: scale(1.2); /*放大两倍*/
}
.main-nav-bot-tabs-navVideo-nav-coverimg img {
  width: 100%;
  height: 100%;
}
.main-nav-bot-tabs-navVideo-nav-content {
  width: 98%;
  height: 37px;
  padding: 1% 1%;
  text-align: left;
  font-size: 14px;
  color: #7c7a7a;
  overflow: hidden;
  position: relative;
  top: -25%;
}
</style>
