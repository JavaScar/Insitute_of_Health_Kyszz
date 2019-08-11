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
      TabTitle: '专家介绍-袁静萍',
      Source: '本站',
      Author: '管理员',
      CreateTime: '2008-08-08',
      TabContent: '<p>袁静萍</p><p>主任医师</p><p>武汉大学人民医院 病理科门诊</p><p>&nbsp;</p><p>擅长：</p><p>乳腺，肺，宫颈，卵巢，胃，肠，肝，胰腺，肝，声带，喉，甲状腺等部位疾病的疑难病理诊断。</p><p>&nbsp;</p><p>简介：</p><p>医学博士，主任医师，病理科主任科室及职务：病理科主任诊断专长：女性生殖系统，消化系统，呼吸系统，甲状腺，乳腺等疾病的疑难病理诊断学术任职与荣誉：武汉市卫生局第二批百名优秀青年学科带头人；武汉中青年医学骨干人才；医疗卫生援黔专家团核心专家；中国研究型医院学会病理学专业委员会委员；“精准医学研究”重点研发计划2016年度立项评审专家；中国医疗保健国际交流促进会病理学分会委员；中国抗癌协会乳腺癌专业委员会委员；全国女子医师协会病理专家委员会专家委员；湖北省医学会病理学分会委员；湖北省医学会病理学分会细胞学组副组长；湖北省抗癌协会肿瘤病理专业常务委员；武汉市医学会病理学分会常委；湖北省医疗质量控制中心专家委员；武汉市医学会第三届医疗鉴定专家；武汉市高级职称评审委员会专家库委员；湖北中医药大学客座教授；武警医院病理科名誉主任。科研成果：主持省级自然科学基金项目1项，市级科研项目3项。参与国家级、省级自然科学基金十余项，鉴定课题5项。《肿瘤防治研究杂志》特约审稿专家，《中华内分泌外科杂志》通讯编委。以第一作者或通讯作者发表学术论文共70余篇，其中SCI收录论文3篇。副主编、参编专著4部。</p><p><br/></p>'
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
