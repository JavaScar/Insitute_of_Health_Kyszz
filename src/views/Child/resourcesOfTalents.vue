<template>
  <div class="main">
    <MyHeader></MyHeader>
    <div class="main-nav">
      <!-- 中心简介 -->
      <div class="main-nav-top">
        <div class="main-nav-top-left">
          <span style="font-size:26px;">人才资源服务</span>
          Resources Of Talents
        </div>
        <div class="main-nav-top-right">
          <router-link to='/index'
                       id="Breadcrumb"
                       style="color:#2c3e50;text-decoration: none;">主页</router-link>
          <!-- > -->
          <i slot="suffix"
             class="el-icon-arrow-right"></i>
          <router-link to='/resourcesOfTalents'
                       id="Breadcrumb"
                       style="color:#2c3e50;text-decoration: none;">人才资源</router-link>
        </div>
      </div>
      <div class="main-nav-bot">
        <div class="main-nav-bot-top">
          <div class="main-nav-bot-top-left">
            <div class="main-nav-bot-top-left-label">
              <ul>
                <li style="font-size:16px;width:5%;">搜索</li>
                <li>
                  <el-select v-model="City"
                             multiple
                             filterable
                             remote
                             reserve-keyword
                             placeholder="地区"
                             size="mini"
                             :remote-method="remoteMethod(1)"
                             :loading="loading">
                    <el-option v-for="item in CityOptions"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value">
                    </el-option>
                  </el-select>
                </li>
                <li>
                  <el-select v-model="Hospital"
                             multiple
                             filterable
                             remote
                             reserve-keyword
                             placeholder="医院"
                             size="mini"
                             :remote-method="remoteMethod(2)"
                             :loading="loading">
                    <el-option v-for="item in HospitalOptions"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value">
                    </el-option>
                  </el-select>
                </li>
                <li>
                  <el-select v-model="Department"
                             multiple
                             filterable
                             remote
                             reserve-keyword
                             placeholder="科室"
                             size="mini"
                             :remote-method="remoteMethod(3)"
                             :loading="loading">
                    <el-option v-for="item in DepartmentOptions"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value">
                    </el-option>
                  </el-select>
                </li>
                <li>
                  <el-select v-model="Doctor"
                             multiple
                             filterable
                             remote
                             reserve-keyword
                             placeholder="医生"
                             size="mini"
                             :remote-method="remoteMethod(4)"
                             :loading="loading">
                    <el-option v-for="item in DoctorOptions"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value">
                    </el-option>
                  </el-select>
                </li>
                <li>
                  <el-button style="background-color: rgb(92, 82, 181);color:white"
                             @click="remoteSreachMethod">查询</el-button>
                </li>
                <li>
                  <el-button style="background-color: rgb(82, 141, 181);color:white"
                             @click="Resources">绩效评价</el-button>
                </li>
                <li>
                  <el-button style="background-color: rgb(80, 160, 165);color:white"
                             @click="Resources">保险查询</el-button>
                </li>
                <li>
                  <el-button style="background-color: rgb(222, 194, 131);color:white"
                             @click="Resources">招聘需求</el-button>
                </li>
              </ul>
            </div>

          </div>
        </div>
        <div class="main-nav-bot-bot">
          <div class="main-nav-bot-bot-navDoctor"
               v-for="(item ,index) in DoctorLists"
               :key="index"
               v-if="index<8">
            <div class="main-nav-bot-bot-navDoctor-nav"
                 @click="ResourcesDoctor(item)">
              <div class="main-nav-bot-bot-navDoctor-nav-coverimg">
                <img :src="item.coverImgSrc" />
              </div>
              <div class="main-nav-bot-bot-navDoctor-nav-content">
                <span style="font-size:18px;color: #3d87d1;">{{item.Name}}</span><br>
                <span style="font-size:14px;font-weight: bold;">{{item.Post}}</span>
                <span style="font-size:14px;font-weight: bold;">{{item.DepartmentPost}}</span><br>
                <span style="font-size:14px;font-weight: bold;">{{item.Hospital}}</span>
                <span style="font-size:14px;font-weight: bold;">{{item.Department}}</span><br>
                <span style="font-size:12px;">擅长：{{item.BeGood}}</span>
              </div>
            </div>
          </div>

        </div>
        <div style="clear:both;margin:10px 0px;">
          <el-pagination @size-change="handleSizeChange"
                         @current-change="handleCurrentChange"
                         :current-page="currentPage"
                         :page-size="pageSize"
                         layout="total, prev, pager, next, jumper"
                         :total="totalNum">
          </el-pagination>
        </div>
        <div class="appDowload">
          <div class="appDowload-title">医患云-医患关系管理平台</div>
          <div class="appDowload-nav">
            <p>医生版APP下载(安卓版)</p>
            <img src="../../assets/yhy-index.png"
                 style="width:100px;height:100px;">
          </div>
          <div class="appDowload-nav">
            <p>患者版APP下载(安卓版)</p>
            <img src="../../assets/yhy-pindex.png"
                 style="width:100px;height:100px;">
          </div>
        </div>

      </div>
    </div>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from '@/components/header.vue'
import MyFooter from '@/components/footer.vue'
// import MySwiper from '@/components/swiper.vue'
export default {
  data () {
    return {
      City: '',
      Hospital: '',
      Department: '',
      Doctor: '',
      CityOptions: [],
      HospitalOptions: [],
      DepartmentOptions: [],
      DoctorOptions: [],
      loading: false,

      currentPage: 1, // 默认显示第一页
      pageSize: 8, // 默认每页显示8条
      totalNum: 1000, // 总页数

      DoctorLists: []
    }
  },
  methods: {

    remoteMethod: function (Type) {
      this.loading = true
      // 远程搜索 1 City 2 Hospital 3 Department 4 Doctor
      if (Type === 1) {
        // 远程搜索 1 City

      } else if (Type === 2) {
        // 远程搜索 2 Hospital

      } else if (Type === 3) {
        // 远程搜索 3 Department

      } else if (Type === 4) {
        // 远程搜索 4 Doctor

      }
    },
    remoteSreachMethod: function () {
      // 远程查询结果
      this.DoctorLists = [{
        Id: 1001,
        coverImgSrc: require('@/assets/LX.jpg'),
        Name: '罗新',
        Post: '教授',
        DepartmentPost: '主治医师',
        Hospital: '暨南大学华侨医院',
        Department: '妇科',
        BeGood: '妇科肿瘤学专业、妇科泌尿学专业、生殖内分泌与计划生育学专业、围生期医学与围绝经期医学专业。'
      }, {
        Id: 1002,
        coverImgSrc: require('@/assets/CSF.jpg'),
        Name: '常淑芳',
        Post: '教授',
        DepartmentPost: '主治医师',
        Hospital: '重庆医科大学附属第二医院',
        Department: '妇科',
        BeGood: '妇科炎症、肿瘤的诊断治疗及超声治疗学在妇产科的应用。'
      }, {
        Id: 1003,
        coverImgSrc: require('@/assets/HY.jpg'),
        Name: '洪颖',
        Post: '副教授',
        DepartmentPost: '妇产科主治医师',
        Hospital: '南京大学鼓楼医院',
        Department: '妇科',
        BeGood: '妇科内分泌疾病、围绝经期综合症、子宫内膜异位症、宫颈疾病的诊治及妇科手术。'
      }, {
        Id: 1004,
        coverImgSrc: require('@/assets/YJP.jpg'),
        Name: '袁静萍',
        Post: '教授',
        DepartmentPost: '主治医师',
        Hospital: '武汉大学人民医院',
        Department: '病理科',
        BeGood: '乳腺、肺、宫颈、卵巢、胃、肠、肝、胰、声带、喉、甲状腺等部位疾病的疑难病理诊断。'
      }]
      this.totalNum = 8
    },
    handleSizeChange (val) {
      this.pageSize = val // 动态改变
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val // 动态改变
    },
    Resources: function () {
      alert('此入口正在建设中，敬请期待……')
    },
    ResourcesDoctor: function (obj) {
      if (obj.Id === 1001) {
        this.$router.push({
          name: 'LXDetail'
        })
      } else if (obj.Id === 1002) {
        this.$router.push({
          name: 'CSFDetail'
        })
      } else if (obj.Id === 1003) {
        this.$router.push({
          name: 'HYDetail'
        })
      } else if (obj.Id === 1004) {
        this.$router.push({
          name: 'YJPDetail'
        })
      }
    }

  },
  mounted () {

  },
  created () {
    this.remoteSreachMethod()
    this.totalNum = this.DoctorLists.length
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
  height: auto;
  min-height: 630px;
  text-align: center;
  block-size: 10px;
  /* border-bottom: 1px solid #cccccc; */
  /* border: 1px solid red; */
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
  float: left;
  width: 100%;
  height: auto;
  overflow: hidden;
  zoom: 1;
  min-height: 630px;
  margin-bottom: 10px;
  border-bottom: 1px solid #cccccc;
  padding-bottom: 10px;
}
.main-nav-bot-top {
  clear: both;
  width: 100%;
  height: 40px;
}
.main-nav-bot-top-left {
  width: 100%;
  height: 100%;
}
.main-nav-bot-top-left-label {
  width: 100%;
  height: 100%;
}
.main-nav-bot-top-left-label li {
  width: 10%;
  margin-right: 5px;
  line-height: 40px;
}

.main-nav-bot-bot {
  /* clear: both; */
  /* overflow: hidden;
  zoom: 1; */
  width: 100%;
  height: auto;
  margin-top: 10px;
}

.main-nav-bot-bot-navDoctor {
  float: left;
  width: 23%;
  min-width: 250px;
  min-height: 200px;
  /* height: 300px; */
  margin: 10px 10px;
}

.main-nav-bot-bot-navDoctor-nav {
  width: auto;
  height: 500px;
  cursor: pointer;
  background-color: rgb(252, 252, 252);
  border: 1px solid #cccccc;
}
.main-nav-bot-bot-navDoctor-nav:hover {
  transform: scale(1.01);
}

.main-nav-bot-bot-navDoctor-nav-coverimg {
  width: 100%;
  height: 60%;
}

.main-nav-bot-bot-navDoctor-nav-coverimg img {
  width: 100%;
  height: 100%;
}
.main-nav-bot-bot-navDoctor-nav-content {
  width: 95%;
  height: 38%;
  margin-top: 2%;
  margin-left: 5%;
  text-align: left;
  font-size: 14px;
  color: #8b8585;
  overflow: hidden;
  overflow-y: auto;
}
.main-nav-bot-bot-navDoctor-nav-content::-webkit-scrollbar {
  display: none;
}
.main-nav-bot-bot-navDoctor-nav-content span {
  margin-right: 10px;
}
.appDowload {
  padding-top: 20px;
  width: 98%;
  height: 150px;
  background-color: white;
  padding: 10px 0px 10px 0px;
}
.appDowload-title {
  margin: 0 auto;
  width: 30%;
  height: 20px;
  font-size: 16px;
  line-height: 20px;
  color: white;
  background-color: rgb(22, 160, 240);
  border-radius: 3px 3px 3px 3px;
  margin-bottom: 10px;
}
.appDowload-nav {
  float: left;
  width: 20%;
  height: 130px;
  margin-left: 30.5%;
  margin-right: -31.5%;
}
</style>
