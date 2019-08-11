<template>
  <el-carousel :interval="5000"
               arrow="always">
    <el-carousel-item v-for="item in bannerList"
                      :key="item.id">
      <div class="el-carousel-item-left">
        <img :src="item.url">
      </div>
      <div class="el-carousel-item-right">
        {{item.content}}
      </div>

    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data () {
    return {
      bannerList: [{
        id: '1001',
        url: require('../assets/rightManImg2.jpg'),
        content: '测试文字一'
      }, {
        id: '1002',
        url: require('../assets/rightManImg2.jpg'),
        content: '测试文字二'
      }]
    }
  },
  methods: {

  },
  mounted () {

  },
  components: {
  }

}
</script>

<style>
.el-carousel-item {
  width: 100%;
  height: auto;
}
.el-carousel-item-left {
  border: 1px solid red;
  width: 100%;
  height: 100%;
}

.el-carousel__item img {
  width: 100%;
  height: 100%;
}

/* .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
} */
.el-carousel__item {
  background-color: #99a9bf;
}
.el-carousel-item-right {
  position: relative;
  left: 65%;
  top: -100%;
  width: 35%;
  height: 100%;
  border: 1px solid blue;
}
</style>
