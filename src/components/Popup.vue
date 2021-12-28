<template>
  <transition name="layerPopupEnter" mode="out-in">
    <div id="popupBox" v-show="$store.state.layerPopup">
      <div class="inner">
        
        <div class="content">
          <div v-if="$store.state.diseasePopup">
            <h2>건강하려면 ‘이것’을 알자</h2>
            <div class="scrollBox">
              <img src="~@/assets/img/result/img_disease_popup.jpg" alt="">
            </div>
          </div>

          <div v-if="$store.state.sharePopup">
            <h2>공유하기</h2>
            <ul>
              <li @click="onClickKakao()">
                <img src="~@/assets/img/common/btn_kakao.png" alt="">
                <span>카카오톡</span>
              </li>
              <li
                class="url-copy"
                @click="onClickShare()"
              >
              <img src="~@/assets/img/common/btn_sms.png" alt="">
              <span>문자</span>
              </li>
            </ul>
          </div>

        </div>

        <button type="button" @click="popupClose()">닫기</button>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  methods:{
    popupClose(){
      this.$store.commit('togglePopup');
    },
    onClickKakao(){
      window.Kakao.Link.sendCustom({
        templateId: 62331,
        templateArgs: {
          'title': '괜찮음力 OX테스트',
          'description': `당신의 오늘을 '딱!' 선택하고 미래에 필요한 보장까지 '싹!' 알아보세요!`
        }
      });
    },
    onClickShare() {
      var _href = 'http://192.168.0.12:8080/#/',
          _text = `[괜찮음力 OX테스트] 당신의 오늘을 '딱!' 선택하고 미래에 필요한 보장까지 '싹!' 알아보세요!` + encodeURIComponent("\n" + _href);
      location.href = 'sms:' + (this.checkMobile() == 'ios' ? '&' : '?') + 'body='+ _text;
    },
    checkMobile(){
      var varUA = navigator.userAgent.toLowerCase();
      if ( varUA.indexOf('android') > -1) {
        //안드로이드
        return "android";
      } else if ( varUA.indexOf("iphone") > -1 || varUA.indexOf("ipad") > -1 || varUA.indexOf("ipod") > -1 ) {
        //IOS
        return "ios";
      } else {
        //아이폰, 안드로이드 외
        return "other";
      }
    }
  }
}
</script>
<style>
.layerPopupEnter-enter,
.layerPopupEnter-leave-to {
  opacity: 0;
}
.layerPopupEnter-enter-active,
.layerPopupEnter-leave-active {
  transition: opacity 0.2s;
}
</style>