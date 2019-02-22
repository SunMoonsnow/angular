<template>
  <section
    id="all"
    :style="bgimg"
  >
    <header class="head">
      <div class="title">
        共赢娱乐
      </div>
      <div class="titles">
        最专业的购彩平台
      </div>
      <div class="phone">
        <img
          src="../assets/img/phone.png"
          alt="共赢娱乐APP"
        >
      </div>

      <div
        id="android"
        class="h-button"
      >
        <a :href="url.site"><img
            src="../assets/img/android2.png"
            alt="Android下载"
          ></a>
      </div>

      <div>
        <a :href="url.code2"><img
            class="sjzimg"
            src="../assets/img/sjz1.png"
            alt="直接访问"
          ></a>
        <a :href="url.code3"><img
            class="sjzimg"
            src="../assets/img/sjz2.png"
            alt="直接访问"
          ></a>
        <a :href="url.code4"><img
            class="sjzimg"
            src="../assets/img/sjz3.png"
            alt="直接访问"
          ></a>
      </div>

    </header>

  </section>
</template>
<script>
import "../assets/css/wap.main.css"

const url = require("../assets/img/bg.png");
export default {
  data () {
    return {
      bgimg: {
        backgroundImage: "url(" + url + ")"
      },
      url:require("../assets/api/config.json")
    }
  }

}
</script>
<style>
.all {
  width: 100%;
}

.d-title {
  text-align: left;
}
.head {
  width: 100%;
  height: 100vh;
  background-image: url("../assets/img/bg.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: 0
}
</style>



