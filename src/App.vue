<template>
  <div id="app" :class="{on: isKakaoSamsung}">
    <Header />
    <router-view/>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header
  },
  data() {
    return {
      isKakaoSamsung: false,
    }
  },
  created() {
    window.getApp = this;
  },
  mounted() {
    this.checkAgent();
  },
  methods: {
    checkAgent(){
      var userAgent = window.navigator.userAgent;
      var isSamsungBrowser = userAgent.indexOf('SamsungBrowser');
      var isKakaoBrowser = userAgent.indexOf('KAKAOTALK');

      if(isKakaoBrowser > 0 || isSamsungBrowser > 0){
        this.isKakaoSamsung = true;
      }
    },
  },
}
</script>