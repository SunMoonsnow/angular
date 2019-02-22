<template>
  <div id="app">
    <section id="all">
      <header class="head" :class="{bg1:chose1,bg2:chose2}">
        <div class="top both">
          <div class="logo">
            <img
              src="../assets/img/logo.png"
              alt="共赢娱乐"
            >
          </div>
          <div class="top-nav">
            <span
              class="bold topnav"
              @click="bannerOne"
            >客户端下载</span>
            <i class="hg">|</i>
            <span
              class="topnav"
              @click="bannerTow"
            >手机站访问</span>
          </div>
        </div>
        <div class="banner-box left-box">
          <div
            class="jtc"
            @click="toggle"
          >
            <img src="../assets/img/lefts.png">
          </div>
        </div>
        <div class="banner-box right-box">
          <div
            class="jtc"
            @click="toggle"
          >
            <img src="../assets/img/rights.png">
          </div>
        </div>
        <section class="head-body banner">

          <div class="head-bodys both">
            <div class="left">
              <img
                id="phone"
                src="../assets/img/app.png"
                alt="共赢娱乐APP"
              >
            </div>
            <div
              class="right"
              style="width:700px"
            >
              <div
                id="titlea"
                class="head-titles"
                style="margin-top:80px"
              >
                <img
                  src="../assets/img/bannertxt.png"
                  alt="共赢娱乐"
                >
              </div>

              <div
                class="down"
                style="margin-top: 100px;"
              >
                <div
                  class="left"
                  style="margin-right:116px;"
                >

                  <div
                    id="buttona"
                    class="downnbox"
                  >
                  </div>
                  <div
                    id="buttonb"
                    class="downnbox"
                  >
                  </div>

                </div>
                <div
                  id="codea"
                  class="left code"
                >
                  <div
                    class="qrcode"
                    id="qrcode"
                    :data-qrcode="url.codde1"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div class="head-bodys both hide">
            <div class="left">
              <img
                id="phone"
                src="../assets/img/app.png"
                alt="共赢娱乐APP"
              >
            </div>
            <div
              class="right"
              style="width:700px"
            >

              <div
                id="titleb"
                class="head-titles"
                style="margin-top:80px"
              >
                <img
                  src="../assets/img/bannertxt2.png"
                  alt="共赢娱乐"
                >
              </div>

              <div
                class="down"
                style="margin-top: 50px;"
              >
                <div
                  id="codeb"
                  class="left"
                  style="margin-right:20px;"
                >
                  <div class="xianlu">
                    <div
                      class="qrcode codees"
                      id="qrcodea"
                      :data-qrcode="url.code2"
                    ></div><br>
                    线路1
                  </div>
                  <div class="xianlu">
                    <div
                      class="qrcode codees"
                      id="qrcodeb"
                      :data-qrcode="url.code3"
                    ></div><br>
                    线路2
                  </div>
                  <div class="xianlu">
                    <div
                      class="qrcode codees"
                      id="qrcodec"
                      :data-qrcode="url.code4"
                    ></div><br>
                    线路3
                  </div>
                </div>
                <div class="left">
                  <img
                    id="blt"
                    src="../assets/img/blt.png"
                  >
                </div>
              </div>

            </div>
          </div>
        </section>

        <nav class="bottom">
          <div class="bot-nav">
            <div
              id="khd"
              class="checked-nav left checked"
              @click="bannerOne"
            >
              客户端下载
            </div>
            <div
              id="sjd"
              class="checked-nav right"
              @click="bannerTow"
            >
              手机站访问
            </div>
          </div>
        </nav>

        <div class="checkeds">
          <div class="centerbox">
            <img
              class="boxser"
              src="../assets/img/bot.png"
              alt="搓我"
            >
          </div>
        </div>
      </header>

      <section class="body">

        <div class="row">
          <div class="rowbox">
            <div class="left img-box">
              <img
                src="../assets/img/qiu.png"
                alt="彩票球"
              >
            </div>
            <div class="right txt-box">
              <div class="center-box">
                <div class="title-v">
                  <img src="../assets/img/rowtxta.png">
                </div>
                <div>
                  <img
                    src="../assets/img/buttons.png"
                    alt="下载"
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="rowbox">
            <div class="left img-box">
              <img
                style="width:289px"
                src="../assets/img/money.png"
                alt="彩票球"
              >
            </div>
            <div class="right txt-box">
              <div class="center-box">
                <div class="title-v">
                  <img src="../assets/img/rowtxtb.png">
                </div>
                <div>
                  <img
                    src="../assets/img/buttons.png"
                    alt="下载"
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </section>
  </div>
</template>

<script>
import "../assets/css/pc-main.css"
import {web} from '../assets/js/web.js'
import QRCode from 'qrcodejs2'  // 引入qrcode
export default {
data () {
    return {
       chose1:true,
        chose2:false,
      url:require("../assets/api/config.json")
    }
},
created(){
        
},
mounted () {
        var phone = document.getElementById('phone');
        var titlea = document.querySelector('#titlea');
        var buttona = document.querySelector('#buttona');
        var buttonb = document.querySelector('#buttonb');
        var codea = document.querySelector('#codea');
        var head = document.querySelector('.head');
        //
        var titleb = document.querySelector('#titleb');
        var codeb = document.querySelector('#codeb');
        var blt = document.querySelector('#blt');
        //titleb
        var banner = document.querySelectorAll('.head-bodys');
        var tnav = document.querySelectorAll('.topnav');
        var bnav = document.querySelectorAll('.checked-nav');

        var khd = document.querySelector('#khd');
        var sjd = document.querySelector('#sjd');
        web.playTopJoin(phone);
        web.bannerJoin();
        web.bannerLeave();
        this.qrcode();
  },
  methods: {
    qrcode() {
      let qrcode = new QRCode('qrcode', {
        width: 170,  
        height: 170,
        text: this.url.code1, // 二维码地址
        colorDark : "#000",
        colorLight : "#fff",
      })
      let qrcodea = new QRCode('qrcodea', {
        width: 80,  
        height: 80,
        text: this.url.code2, // 二维码地址
        colorDark : "#000",
        colorLight : "#fff",
      })
      let qrcodeb = new QRCode('qrcodeb', {
        width: 80,  
        height: 80,
        text: this.url.code3, // 二维码地址
        colorDark : "#000",
        colorLight : "#fff",
      })
      let qrcodec = new QRCode('qrcodec', {
        width: 80,  
        height: 80,
        text: this.url.code4, // 二维码地址
        colorDark : "#000",
        colorLight : "#fff",
      })
    },
    toggle(){
        var banner = document.querySelectorAll('.head-bodys');
        var head = document.querySelector('.head');
        var khd = document.querySelector('#khd');
        var sjd = document.querySelector('#sjd');
        var tnav = document.querySelectorAll('.topnav');
        var bnav = document.querySelectorAll('.checked-nav');
         this.chose1=!this.chose1;
        this.chose2=!this.chose2
        web.toggle(banner,head, khd,sjd,tnav,bnav);

    },
    bannerOne(){
        var head = document.querySelector('.head');
        var khd = document.querySelector('#khd');
        var sjd = document.querySelector('#sjd');
         var tnav = document.querySelectorAll('.topnav');
          var bnav = document.querySelectorAll('.checked-nav');
           this.chose1=!this.chose1;
        this.chose2=!this.chose2
        web.bannerOne(head,khd,sjd,banner,tnav,bnav);
    },
    bannerTow(){
         var head = document.querySelector('.head');
        var khd = document.querySelector('#khd');
        var sjd = document.querySelector('#sjd');
         var tnav = document.querySelectorAll('.topnav');
          var bnav = document.querySelectorAll('.checked-nav');
           this.chose1=!this.chose1;
        this.chose2=!this.chose;
        web.bannerTow(head,khd,sjd,banner,tnav,bnav);

    }

  }
}
</script>
<style>
.head{
            height: 48.65rem !important;
}
.checked-nav{
        font-size: 2rem;
}
.bg1{
  background: url("../assets/img/banner1.png")!important;
}
.bg2{
  background: url("../assets/img/banner2.png")!important;

}
.topnav{
  font-size: 1rem
}
</style>


