<template>
  <div class="main">
    <div class="main-top">
      <div class="main-top-nav">
        <div class="setting">
          <a onclick="this.style.behavior=’url(#default#homepage)’;this.setHomePage(’#’);"
             href="www.nrifp.org.cn">设为首页</a>
        </div>
        <div class="adminEntry">
          <!-- 前往主站后台管理系统 type 0 -->
          <a :href="adminUrl+'/Login.aspx?type=0'"
             target="_blank">管理员登录入口</a>
        </div>

      </div>
    </div>
    <div class="main-mid">
      <div class="main-mid-nav">
        <div class="main-mid-nav-left">
          <img class="autoImg"
               :src="Hdlogo"
               style="vertical-align:middle;">
        </div>
        <!-- <div class="main-mid-nav-right">
          <div class="main-mid-nav-right-nav">
            <el-input placeholder="请输入内容,回车搜索"
                      size='small'
                      v-model="mainSearchInput"
                      @keyup.enter.native="searchEnterFun">
              <i slot="prefix"
                 class="el-input__icon el-icon-search"></i>
            </el-input>
          </div>
        </div> -->

      </div>
    </div>
    <div class="main-bot">
      <div class="main-bot-nav">
        <div class="main-bot-nav-item">
          <ul>
            <li v-for="item in navItemList"
                :key="item.id"
                @click="navItemHref(item)">
              <!-- <router-link :to='item.href'> -->
              <span :class="current === item.id ? 'active' : ''">
                {{item.content}}
              </span>
              <!-- </router-link> -->

            </li>
            <!-- <li>中心简介</li>
            <li>通知通告</li>
            <li>政策法规</li>
            <li>健康扶贫</li>
            <li>国际合作</li>
            <li>联系我们</li> -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { adminUrl } from '@/api/date'
export default {

  name: 'myheader',
  data () {
    return {
      navItemList: [{
        id: 1001,
        content: '网站首页',
        href: '/index'
      }, {
        id: 1002,
        content: '中心简介',
        href: '/introductionToTheCentre'
      }, {
        id: 1003,
        content: '通知通告',
        href: '/noticeAnnouncement'
      }, {
        id: 1004,
        content: '政策法规',
        href: '/policiesAndRegulations'
      }, {
        id: 1005,
        content: '健康扶贫',
        href: '/healthPovertyAlleviation'
      }, {
        id: 1006,
        content: '交流合作',
        href: '/exchangeAndCoOperation'
      }, {
        id: 1007,
        content: '联系我们',
        href: '/contactUs'
      }],
      Hdlogo: require('@/assets/hd-logo.png'),
      mainSearchInput: '',
      current: 1001,
      adminUrl: adminUrl
    }
  },
  methods: {
    navItemHref: function (item) {
      this.current = item.id
      this.$router.push({ // 核心语句
        path: item.href
      })
    },
    searchEnterFun: function () {
      if (this.mainSearchInput !== '' && this.mainSearchInput !== null) {
        localStorage.setItem('mainSearchLabel', this.mainSearchInput)
        this.$router.push({
          name: 'allSearch'
        })
      } else {
        alert('请输入搜索关键词进行全站检索')
      }
    }
  },
  mounted () {

  },
  created () {
    var path = this.$route.path
    if (path === '/') {
      this.current = 1001
    }
    if (path === '/introductionToTheCentre') {
      this.current = 1002
    }
    if (path === '/noticeAnnouncement') {
      this.current = 1003
    }
    if (path === '/policiesAndRegulations') {
      this.current = 1004
    }
    if (path === '/healthPovertyAlleviation') {
      this.current = 1005
    }
    if (path === '/exchangeAndCoOperation') {
      this.current = 1006
    }
    if (path === '/contactUs') {
      this.current = 1007
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: rgb(221, 221, 221);
  text-decoration: none;
}
.main {
  width: 100%;
  margin: 0 auto;
  height: 205px;
}
.main-top,
.main-mid,
.main-bot {
  width: 100%;
}
.main-top {
  width: 99%;
  height: 29px;
  background-color: #205589;
  margin: 0px 10px;
}
.main-top-nav,
.main-mid-nav,
.main-bot-nav {
  width: 70%;
  margin: 0 auto;
}
.main-mid,
.main-bot {
  background-color: white;
}
.main-top-nav {
  height: 29px;
}
.setting {
  float: left;
  color: aliceblue;
  font-size: 12px;
  text-align: left;
  line-height: 29px;
}
.setting a:hover {
  color: rgb(255, 255, 255);
  font-size: 12px;
  text-align: left;
  line-height: 29px;
}
.adminEntry {
  color: aliceblue;
  font-size: 12px;
  text-align: right;
  line-height: 29px;
}
.adminEntry a:hover {
  color: rgb(255, 255, 255);
  font-size: 12px;
  text-align: right;
  line-height: 29px;
}
.main-mid-nav-left {
  text-align: center;
  width: 85%;
  height: 140px;
  line-height: 140px;
}
.autoImg {
  width: 100%;
  height: auto;
}
.main-mid-nav-right {
  width: 15%;
  height: 140px;
  float: right;
  position: relative;
  top: -140px;
}
.main-mid-nav-right-nav {
  padding-top: 80px;
}
.main-bot-nav {
  height: 37px;
  background: #2868a8;
  background: -webkit-linear-gradient(#2e77be, #114478);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#2e77be', endColorstr='#114478', GradientType='1');
  background: -ms-linear-gradient(top, #2e77be 0%, #114478 100%); /*IE*/
  border-radius: 6px 6px 1px 1px;
}
.main-bot-nav-item ul li {
  display: block;
  width: 14.2%;
  line-height: 37px;
  font-size: 14px;
  color: aliceblue;
  cursor: pointer;
}
.main-bot-nav-item ul li:hover {
  background: #2e77be;
  background: -webkit-linear-gradient(#114478, #2e77be);
  border-radius: 6px 6px 1px 1px;
}
.active {
  border-bottom: 1px dashed rgb(228, 228, 228);
}
</style>
