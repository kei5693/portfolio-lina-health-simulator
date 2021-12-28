<template>
  <div id="result">
    <div class="inner">
      <swiper ref="mySwiper"
        :options="swiperOptions"
      >
        <!-- 결과 타이틀 -->
        <swiper-slide>
          <div class="resultType">
            <div class="inner"
              :class="`resultType${resultType+1}`"
            >
              <div class="titleBox">
                <span v-html="resultA[resultType].point"></span>
                <h2 v-html="resultA[resultType].title"></h2>
                <p v-html="resultA[resultType].text"></p>
              </div>
              <div class="visualBox">
                <img
                  v-for="(img, imgIndex) in resultA[resultType].image"
                  :key="`img-${imgIndex}`"
                  :src="require(`@/assets/img/result/${img}`)"
                  alt=""
                >
              </div>
            </div>
              <div class="info">
                <p>화면을 넘겨 당신을 위한<br> 맞춤 추천상품을 확인해보세요!</p>
                <div><span>{{resultList.length}}개</span></div>
              </div>
          </div>
        </swiper-slide>

        <!-- 추천 상품 -->
        <swiper-slide
          v-for="(filter,index) in resultList"
          :key="`filter + ${index}`"
        >
          <div
            class="resultProductGroup" :class="`${filter.class}`"
          >
            <div class="inner">
              <div class="titleBox">
                <div>
                  <p>맞춤 추천상품{{filter.comma}} <strong>{{filter.indexTitle}}</strong></p>
                </div>
                <h2 v-html="filter.title"></h2>
                <h3 v-html="filter.subTitle"></h3>
              </div>

              <div class="visualBox">
                <div class="inner">
                  <div class="visual">
                    <img :src="require(`@/assets/img/result/${filter.image}`)" alt="" />
                  </div>
                  <div class="contents">
                    <div class="content" v-html="filter.content"></div>
                  </div>
                  <button type="button" @click="onClickLink(`${filter.url}`)"><span>상품 알아보기</span></button>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>

        <!-- 공유 -->
        <swiper-slide>
          <div class="resultShare">
            <div class="inner">
              <h2>
                <strong>보험</strong>이 궁금할 때,<br>
                <strong>케어</strong>가 필요할 때!
              </h2>

              <div class="infoBox">
                <p>보험 상담 전화번호와<br>채팅 방법은 <strong>문자메시지에서<br>확인하세요!</strong></p>
                <ul>
                  <li>간편하게<strong>전화 상담 가능!</strong></li>
                  <li>쉽고 빠른<strong>채팅 상담 가능!</strong></li>
                </ul>
              </div>

              <div class="btnBox">
                <div>
                  <p @click="popupOpen('disease')">
                    <span>건강하려면 '이것'을 알자</span>
                  </p>
                  <p @click="onClickLink2()">
                    <span>영상으로 보는 재미있는 보험</span>
                  </p>
                  <!-- <button type="button" @click="popupOpen('share')"><span>친구에게<br>공유하기</span></button> -->
                </div>
                <button type="button" @click="replaySurvey()"><span>다시하기</span></button>
              </div>
            </div>
          </div>
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <Popup />
  </div>
</template>
<script>
import Popup from "@/components/Popup.vue";

export default {
  components: {
    Popup
  },
  data(){
    return{
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      resultA: [
        {
          point : '<em>괜찮음力</em> <span class="on"></span><span class="on"></span><span class="on"></span>',
          title : '혹시..<br> 당신은 모범생?',
          text : '일상 생활에 어느정도 만족하며<br>모범적인 삶을 살고 계시네요.<br><strong>앞으로도 당신의 건강한 라이프를<br>라이나생명이 응원합니다!</strong>',
          image         : [
            'img_result0101.png',
          ],
        },
        {
          point : '<em>괜찮음力</em> <span class="on"></span><span class="on"></span><span></span>',
          title : '남들도 다<br> 이렇게 살아요~',
          text  : '적당한 스트레스, 적당한 타협!<br>지극히 평범한 사회인이시네요.<br><strong>하지만 좋지 않은 생활습관은 개선하고<br>필요한 보장은 조금씩 준비하셔야 해요!</strong>',
          image : [
            'img_result0201.png',
            'img_result0202.png',
            'img_result0203.png',
            'img_result0204.png',
          ],
        },
        {
          point : '<em>괜찮음力</em> <span class="on"></span><span></span><span></span>',
          title : '이러다<br> 정말 큰일나요!',
          text : '건강에 좋지 않은 아슬아슬한<br>생활습관들을 가지고 계시네요.<br><strong>누구보다 건강을 챙겨야 하는 당신,<br>꼭 필요한 보장은 준비하셔서<br>건강한 내일을 시작해보세요.</strong>',
          image         : [
            'img_result0301.png',
          ],
        },
      ],
      productGroup: [
        {
          class     : 'product1',
          title     : '“누구나 조심해야 하는 암”',
          subTitle  : '<strong><span>암보험</span></strong>으로<br>암 걱정 덜어보세요!',
          image     : 'img_product1.png',
          content   : '<div><p>Check List</p><ul><li>암 진단금</li><li>암 치료비</li><li>비급여항암치료비</li></ul></div>',
          url       : 'https://www.youtube.com/watch?v=4vIqRQUbMbA'
        },
        {
          class     : 'product2',
          title     : '“치아건강이 의심되는 당신!”',
          subTitle  : '<strong><span>치아보험</span></strong>으로<br>치아건강 대비하세요!',
          image     : 'img_product2.png',
          content   : '<div><p>치아보험 필수 코스 추천</p><ul><li>충전치료</li><li>잇몸질환</li><li>임플란트</li><li>스케일링</li></ul></div>',
          url       : 'https://www.youtube.com/watch?v=NSN4c10YJGM​'
        },
        {
          class     : 'product3',
          title     : '“남들보다 건강 관리가 더 필요한 당신!“',
          subTitle  : '입원, 수술비 걱정없는<br><strong><span>건강보험</span></strong>도 챙기세요!',
          image     : 'img_product3.png',
          content   : '<div><p>건강보험 쇼핑몰</p><ul><li>입원비</li><li>수술비</li><li>후유장해</li></ul><span>장바구니 담기</span></div>',
          url       : 'https://www.lina.co.kr/product/productView/productView_P00230.htm'
        },
        {
          class     : 'product4',
          title     : '“평소 생활습관이 느슨한 당신!”',
          subTitle  : '어느 날 갑자기?<br><strong><span>심뇌혈관 보험</span></strong>으로 대비하세요!',
          image     : 'img_product4.png',
          content   : '<div><p><span>심뇌혈관 필수템</span></p><ul><li><span>뇌출혈</span></li><li><span>급성심근경색</span></li><li><span>뇌졸중</span></li></ul></div>',
          url       : 'https://www.lina.co.kr/product/productView/productView_P00172.htm'
        },
      ],
    }
  },
  computed: {
    /**
     * 설문에서 o를 누른 숫자를 0~2, 3~5, 6~8 3가지로 분류
     */
		resultType(){
      var result = 0,
          selectArrLength = this.$store.state.selectArr.length;

      if( 0 < selectArrLength && selectArrLength <= 2){
        result = 0
      } else if( 2 < selectArrLength && selectArrLength <= 5){
        result = 1
      } else if( 5 < selectArrLength && selectArrLength <= 8){
        result = 2
      }

			return result
		},
    resultList(){
      var result = [];
      var tmpDataList = [];
      var tmpTitleList = ['첫번째', '두번째', '세번째', '네번째'];

      // Store에 있는 선택된 문제 들의 정보를 기반으로 tmpDataList에 diseaseType을 중복된 값 없이 저장
      this.$store.state.selectArr.reduce((r, d) => {
        if(!r.includes(d.diseaseType)) {
          r.push(d.diseaseType)
        }
        return r;
      }, tmpDataList);

      // tmpDataList에 diseaseType값을 정렬
      tmpDataList.sort();

      // 선택한 문항이 있을때 표현하기 위한 정보 가공하여 저장
      result = tmpDataList.reduce((r,d,i,t) => {
        r.push(
          // Object를 새로 가공하기 위한 assign함수 사용하여 indexTitle, comma를 추가
          Object.assign(
            this.productGroup[d], 
            {
              // t(tmpDataList) 값의 크기에 따라 indexTitle, comma값을 변경
              indexTitle: t.length > 1 ? tmpTitleList[i]:"", 
              comma:t.length > 1 ? "," : ""
            }
          )
        );
        return r;
      }, []);

      // 선택한 문항이 없을때 표현하기 위한 정보 가공하여 저장
      if(result.length == 0){
        result.push(
          // Object를 새로 가공하기 위한 assign함수 사용하여 indexTitle, comma를 추가
          Object.assign(
            this.productGroup[0], 
            {
              indexTitle: "", 
              comma: ""
            }
          )
        )
      }

      return result
    }
	},
  methods:{
    replaySurvey(){
      this.$router.replace('/');
      this.$store.commit('resetArr');
    },
    popupOpen(value){
      this.$store.commit('togglePopup', value);
    },
    onClickLink(value){
      console.log(value);
      window.open(value, "_blank");
    },
    onClickLink2(){
      window.open('https://url.kr/q5fhot', "_blank");
    }
  },
}
</script>
