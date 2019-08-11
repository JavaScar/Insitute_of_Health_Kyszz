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
      TabTitle: '专家介绍-罗新',
      Source: '本站',
      Author: '管理员',
      CreateTime: '2018-03-08',
      TabContent: '<p>罗新</p><p>科室主任、主任医师、教授</p><p>暨南大学附属第一医院&nbsp;妇科</p><p><br/></p><p>擅长：</p><p>妇科肿瘤学、妇科泌尿学与女性盆底重建外科、女性生殖道感染性疾病、生殖内分泌与不孕不育计划生育学、月经失调与围绝经期综合征女性性功能障碍等专业。</p><p>&nbsp;</p><p>简介：</p><p>妇产科学硕士，外科学(妇科泌尿学与盆底重建外科学)博士。教授，主任医师。硕士和博士研究生导师。 1982年毕业于武汉大学医学院获医学学士学位，曾从事三年的外科医师工作。1985年师从全国妇科尿瘘专家田孝坤教授和妇科内分泌专家曹秀娟教授，攻读武汉大学医学院妇产科学硕士学位，1988年获该院医学硕士学位后留校，从事妇产科学住院医师、主治医师及副主任医师和主任医师工作。1994年至1996年曾赴比利时布鲁塞尔自由大学访问学习，师从Prof.J.J.Amy从事生殖内分泌的研究，同期学习妇科腹腔镜、宫腔镜等内窥镜技术。其间赴法国、意大利、荷兰、德国等国家和地区，参加学术活动和手术交流。1997年赴江西妇产医院肿瘤科向著名肿瘤学家李诚信教授学习妇科恶性肿瘤的手术及放化疗。1998年和1999年分别任武汉大学人民医院庆典办主任和医院改革办主任，从事医院管理工作。2000年起担任武汉大学人民医院暨湖北省人民医院妇产科主任、武汉大学第一临床学院妇产科教研室主任及武汉大学医学院妇科研究室主任。2003年广东省人才引进作为学科带头人调入暨南大学附属第一医院妇产科工作，时任妇产科主任、教研室主任、妇科主任。现任妇科主任。</p><p>谢静燕，罗 新：子宫切除前后Prolift网片悬吊术治疗女性盆腔器官脱垂 江苏省卫生厅医学新技术引进二等奖，排名第二名(江苏省卫生厅医学新技术引进奖证书，第97号，2009-11-01江苏省卫生厅) 谢静燕，罗 新：子宫切除前后Prolift网片悬吊术治疗女性盆腔器官脱垂南京市卫生局医学新技术引进二等奖，排名第二名(南京市卫生局医学新技术引进奖证书编号20092703，奖励日期2010-01南京市卫生局) 罗 新 等，广东省高校现代教育技术“151工程” 省级教学改项目，“女性压力性尿失禁专题网站”，2010年11月教育部教育管理信息中心，“第十届全国多媒体课件大赛”荣获高校医科组优秀奖。</p><p>主编、副主编、参编及参译专著教材等共31部(篇章节)。发表论文、综述、专题、论坛等共214篇，其中第一作者或通讯作者论著、短篇论著、新技术报道及病例报告等102篇，其中SCI收录英文论文4篇。</p><p>中华医学会妇产科学分会盆底学组全国委员 中华医学会妇产科学分会子宫内膜异位症协作组成员 中华预防医学会妇女保健分会更年期保健学组全国委员 中华预防医学会中国妇女盆底功能障碍防治项目国家级专家 中华预防医学会微生态分会妇产科学组全国委员 中国医师学会全国基层生殖道感染防治项目国家级培训讲师 中国老年学学会第五届骨质疏松委员会常务委员 中国性学会第四届性医学专业委员会常务委员 国家卫计委内镜与微创医师定期考核专家委员会妇科内镜微创技术推广专家委员会全国委员 国际妇科泌尿学会(IUGA)会员(中国地区培训师) 中国人口宣传教育中心蓝色关爱女性健康项目特邀专家 中华妇幼外科网继续教育委员会委员</p>'
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
