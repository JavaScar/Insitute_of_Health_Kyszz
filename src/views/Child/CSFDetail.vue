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
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from '@/components/header.vue'
import MyFooter from '@/components/footer.vue'
// import MySwiper from '@/components/swiper.vue'
import { ip, resNewsDetail } from '@/api/date'
export default {
  data () {
    return {
      ip: ip,
      TabTitle: '专家介绍-常淑芳',
      Source: '本站',
      Author: '管理员',
      CreateTime: '2018-09-03',
      TabContent: '<p>常淑芳</p><p>主任医师、教授、硕士生导师</p><p>重庆医科大学附属第二医院(临江门院区) -&nbsp;妇科</p><p><br/></p><p>擅长：</p><p>从事妇产科临床、教学、科研工作近20年，擅长外阴、阴道及宫颈疾病的诊治、阴道镜检查及Leep、海扶及电凝术、妇科良恶性肿瘤的诊治。担任中国中西医结合妇产科专委会常务委员、中国优生科学协会阴道镜和宫颈病理学协会委员、重庆市医学会妇产科学专委会委员及宫颈病变与阴道镜学组组长、重庆市骨矿物盐及骨质疏松专委会委员、国家自然科学基金委一审专家库成员。承担对重庆市宫颈病变诊治与阴道镜检查的质量控制工作。主持及参加课题15项，其中国家自然科学基金3项；发表科研论文100余篇，其中SCI9篇；参与编写专著3本；实用新型专利1项。荣获重庆市卫生局医学科技成果二等奖（2次）。冠有重庆医科大学重点学科优秀中青年人才、重庆医科大学附属第二医院优秀中青年人才、重庆医科大学优秀教师称号称号。</p><p>&nbsp;</p><p>简介：</p><p>常淑芳，女，主任医师，副教授，1994年毕业于兰州医学院临床医学系，并于同年就读该校妇产科专业硕士研究生，1997年在重庆医科大学就读妇产科专业博士研究生，于2000年毕业参加妇产科临床工作，先后发表学术论文15余篇，申请校级及市级课题各一项。现为妇产科主治医师，熟悉妇产科常见病的诊断与处理。目前重点在妇科肿瘤及围产期保健方面的工作。</p>'
    }
  },
  methods: {
    resNewsDetail: function () {
      var obj = localStorage.getItem('obj')
      resNewsDetail({ ID: obj }).then(res => {
        this.TabTitle = res.data.data[0].Title
        this.TabContent = res.data.data[0].Content
        this.CreateTime = res.data.data[0].CreateTime
      })
    }
  },
  mounted () {
    // this.resNewsDetail()
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
  border-bottom: 1px solid #cccccc;
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
