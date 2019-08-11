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
      TabTitle: '专家介绍-洪颖',
      Source: '本站',
      Author: '管理员',
      CreateTime: '20019-03-08',
      TabContent: '<p>洪颖</p><p>主任医师、教授、博士生导师</p><p>南京市鼓楼医院&nbsp; 妇产科</p><p>&nbsp;</p><p>擅长：</p><p>妇科内分泌疾病、围绝经期综合征（更年期）、子宫内膜异位症、宫颈疾病、宫腔疾病等的诊治及妇产科手术，包括各种疑难的宫颈阴道疾病手术、小阴唇皮瓣阴道成形术等</p><p>&nbsp;</p><p>简介：</p><p>洪颖，女，1983年毕业于南京医学院（现南京医科大学），南京市中青年行业技术学科带头人，主任医师，教授，博士生导师，鼓楼医院宫颈疾病诊治中心主任；卫生部宫颈癌防治临床科研项目（简称PCC项目）的江苏PCC项目示范基地主任；中国优生科学协会阴道镜和宫颈病理分会（CSCCP)第一届委员会常委；中华医学会妇产科学会感染性疾病协作组委员；中国优生科学协会生殖道疾病诊治分会委员；全国卫生产业企业管理协会妇幼健康产业分会委员；中央财政转移支付江苏省宫颈癌筛查技术负责人；全国子宫颈癌防治协作组成员。擅长宫颈、阴道、宫腔疾病，妇科内分泌疾病、围绝经期综合征、子宫内膜异位症等的诊治及相应的宫腔镜、阴道镜下的妇产科手术，尤其擅长各种疑难宫颈阴道疾病的手术。</p>'
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
