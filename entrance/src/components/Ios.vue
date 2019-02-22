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
        id="ios"
        class="h-button"
      >
        <a :href="url.ios"><img
            src="../assets/img/ios.png"
            alt="IOS下载"
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

    <section
      id="doc"
      class="doc"
    >
      <div class="tiaodong">
        <img src="../assets/img/jt.png">
      </div>
      <div class="d-title">
        <i>|</i>当你打开我们的应用时会出现该提示,原因是由于苹果审核机制造成的!不要着急,请按照下列步骤进行操作.
      </div>
      <div class="d-img">
        <img src="../assets/img/doc1.png">
      </div>

      <div class="d-title">
        <i>|</i>首先打开"设置",点击"通用".
      </div>
      <div class="d-img">
        <img src="../assets/img/doc2.png">
      </div>

      <div class="d-title">
        <i>|</i>在"通用"菜单中找到"描述文件与设备管理"
      </div>
      <div class="d-img">
        <img src="../assets/img/doc3.png">
      </div>

      <div class="d-title">
        <i>|</i>然后找到我们的企业证书,并点击"信任".大功告成!
      </div>
      <div class="d-img">
        <img src="../assets/img/doc4.png">
      </div>
    </section>
  </section>
</template>
<script>
import "../assets/css/wap.main.css"

const url = require("../assets/img/bg.png");
export default {
  data () {
    return {
      bgimg: {
        backgroundImage: "url(" + require("../assets/img/bg.png") + ")",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
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
        font-size: 1rem;
  text-align: left;
}
.d-title>i{
        font-size: 1rem;
}
.head {
  width: 100%;
  height: 100vh;
  background-image: url("../assets/img/bg.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>



