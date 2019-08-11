<template>
  <div class="main">
    <MyHeader></MyHeader>
    <div class="main-nav">
      <div class="main-nav-top">
        <div class="main-nav-top-login">
          <div class="main-nav-top-login-nav"
               style="height:30px;">
            <span style="width:100px;font-size:16px;">报告查询</span>
          </div>
          <div class="main-nav-top-login-nav">
            <span>账号：</span>
            <el-input v-model="inputAccount"
                      size="small"
                      placeholder="请输入登陆账号"></el-input>
          </div>
          <div class="main-nav-top-login-nav">
            <span>密码：</span>
            <el-input v-model="inputPassword"
                      type="password"
                      size="small"
                      placeholder="请输入登陆密码"></el-input>
          </div>
          <div class="main-nav-top-login-nav">
            <span>验证：</span>
            <el-slider v-model="sliderNumValue"
                       :step="10"
                       size="small"
                       style="display: contents;"
                       @change="sliderNumChange"
                       show-stops>
            </el-slider>
          </div>
          <div class="main-nav-top-login-nav">
            <el-button type="primary"
                       @click="presentationHanleLogin"
                       style="width:100%;">登录</el-button>
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
import { resLogin } from '@/api/date'

export default {
  data () {
    return {
      inputAccount: '',
      inputPassword: '',
      sliderNumValue: 0,
      presentationHanleLoginStute: false
    }
  },
  methods: {
    sliderNumChange: function () {
      if (this.sliderNumValue === 100) {
        this.presentationHanleLoginStute = true
      } else {
        this.sliderNumValue = 0
      }
    },
    presentationHanleLogin: function () {
      if (
        this.presentationHanleLoginStute === true &&
        this.inputAccount !== '' &&
        this.inputAccount !== null &&
        this.inputPassword !== '' &&
        this.inputPassword !== null) {
        resLogin({ LoginName: this.inputAccount, Password: this.inputPassword }).then(res => {
          if (res.data.status !== '0') {
            localStorage.setItem('UserID', res.data.data.userid)
            this.$router.push({
              name: 'Presentation'
            })
          } else {
            alert(res.data.message)
          }
        })
      } else {
        alert('登录操作失败，请检查账号密码或联系管理人员！')
      }
    }
  },
  mounted () {
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
  min-height: 540px;
  text-align: center;
  block-size: 10px;
  border-bottom: 1px solid #cccccc;
}
.main-nav-top {
  width: 100%;
  height: 500px;
  background: url("../../assets/bg.jpg") no-repeat;
  display: inline-table;
}
.main-nav-top-login {
  width: 300px;
  height: 400px;
  display: inline-block;
  border: 1px solid rgb(189, 189, 189);
  position: relative;
  left: 25%;
  margin-top: 5%;
  background: #ffffff;
}
.main-nav-top-login-nav {
  display: inline-flex;
  margin: 5% auto;
  width: 90%;
  height: 40px;
  line-height: 50px;
  font-size: 14px;
}
.main-nav-top-login-nav span {
  display: block;
  width: 60px;
}
.el-slider__runway {
  width: 70%;
  height: 6px;
  margin: 16px 5px;
  background-color: #e4e7ed;
  border-radius: 3px;
  position: relative;
  cursor: pointer;
  vertical-align: middle;
}
</style>
