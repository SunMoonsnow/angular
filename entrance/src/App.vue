<template>
  <div id="app">
          <div v-if="pc">
                  <router-view/>
                        <Pc></Pc>
          </div>
           <div v-if="ios">
                  <router-view/>
                        <Ios></Ios>
          </div>
           <div v-if="android">
                  <router-view/>
                        <Android></Android>
          </div>
    
  </div>
</template>

<script>
import Pc from '@/components/Pc'; 
import Android from '@/components/Android'; 
import Ios from '@/components/Ios'; 
export default {
  name: 'App',
  data () {
          return{
                  sendData:1,
                ios:false,
                android:false,
                pc:false


          }
  },
  components: {
                  Pc,
                  Ios,
                  Android
                  
          },
  created() {
      let userAgentInfo = navigator.userAgent;
      let flag = userAgentInfo.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      if (flag) {
        let isAndroid =
          userAgentInfo.indexOf("Android") > -1 ||
          userAgentInfo.indexOf("Linux") > -1; //g
        let isIOS = !!userAgentInfo.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        if (isAndroid) {
          if (/^.+(Mobile\/\w+)\s?$/.test(navigator.userAgent)) {
            // Android端APP
            this.sendData = 3;
          } else {
            // Android端浏览器
            this.sendData = 3;
          }
        } else if (isIOS) {
          // console.log("isIOS");
          if (/^.+(Mobile\/\w+)\s?$/.test(navigator.userAgent)) {
            // IOS端APP
            this.sendData = 2;
          } else {
            // IOS端浏览器
            this.sendData = 2;
          }
        }
      } else {
        this.sendData = 1;
      }    
    
        console.log(this.sendData);
    if(this.sendData == 1){
            this.pc = true; 
            this.ios = false;
            this.android = false;
    }else if(this.sendData == 2){
            this.pc = false;
            this.ios = true;
            this.android = false;
    }else if(this.sendData == 3){
            this.pc = false;
            this.ios = false;
            this.android = true;
    }



  }
  

}


</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
