<template>
  <div id="survey">
    <div class="inner">
      <div class="questionBox">
        <!-- porogressBox -->
        <div class="porogressBox">
          <ul>
            <li
              v-for="(porogress, porogressIdx) in questionList"
              :key="`porogress-${porogressIdx}`"
              :class="{on: porogressIdx == stepCount}"
            >
              <span>{{porogressIdx+1}}</span>
            </li>
          </ul>
        </div>
        <!-- //porogressBox -->
        <!-- listBox -->
        <ul class="listBox" ref="listBox">
          <li 
            v-for="(question, questionIdx) in questionList"
            :key="`questionList-${questionIdx}`"
            :class="{on: questionIdx == stepCount}"
          >
            <div class="titleBox">
              <h2 v-html="question.question"></h2>
              <!-- :src="require(`@/assets/img/survey/img_survey0${questionIdx+1}0${imgIndex+1}.png`)" -->
              <div>
                <div v-for="(img, imgIndex) in question.image"
                  :key="`img-${imgIndex}`"
                >
                  <img
                    :src="require(`@/assets/img/survey/${img}`)"
                    alt=""
                  >
                </div>
              </div>
            </div>
            <div class="answerBox">
              <div class="inner">
                <button type="button"
                  v-for="(answer, answerIdx) in question.answer"
                  :key="`answer-${questionIdx}-${answerIdx}`"
                  :class="{on : answer.isSelected}"
                  @click="onClickAnswer(questionIdx, answer, answerIdx)"
                >
                  {{answer.title}}
                </button>
              </div>
            </div>
          </li>
        </ul>
        <!-- //listBox -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      questionList:[
        {
          question      : '아침에 출근할 생각하면<br> 완전 스트레스 받아..',
          diseaseType   : 0,
          productGroup  : '암보험',
          ProductName   : '(무)라이나퍼펙트케어암보험(갱신형)',
          image         : [
            'img_survey0101.png',
            'img_survey0102.png'
          ],
          answer: [
            {title: 'O', isSelected: false},
            {title: 'X', isSelected: false}
          ]
        },
        {
          question      : '때로는 피곤함에 찌들어<br> 샤워, 양치를 내일로 미루지',
          diseaseType   : 1,
          productGroup  : '치아보험',
          ProductName   : '(무)THE건강한치아보험V(갱신형)',
          image         : [
            'img_survey0201.gif'
          ],
          answer: [
            {title: 'O', isSelected: false},
            {title: 'X', isSelected: false}
          ]
        },
        {
          question      : '술이나 담배는<br> 나의 사랑♥',
          diseaseType   : 0,
          productGroup  : '암보험',
          ProductName   : '(무)라이나퍼펙트케어암보험(갱신형)',
          image         : [
            'img_survey0301.gif'
          ],
          answer: [
            {title: 'O', isSelected: false},
            {title: 'X', isSelected: false}
          ]
        },
        {
          question      : '스트레스 해소에는<br> 맵고 자극적인 음식이 딱!',
          diseaseType   : 3,
          productGroup  : '심뇌혈관보험',
          ProductName   : '(무)라이나건강보험(갱신형)',
          image         : [
            'img_survey0401.gif'
          ],
          answer: [
            {title: 'O', isSelected: false},
            {title: 'X', isSelected: false}
          ]
        },
        {
          question      : '활동적인 운동은<br> 나를 즐겁게 만들지♬',
          diseaseType   : 2,
          productGroup  : '건강보험',
          ProductName   : '(무)골라담는간편건강보험(갱신형)',
          image         : [
            'img_survey0501.png',
            'img_survey0502.png',
            'img_survey0503.png'
          ],
          answer: [
            {title: 'O', isSelected: false},
            {title: 'X', isSelected: false}
          ]
        },
        {
          question      : '얼음은 씹어야 제맛!',
          diseaseType   : 1,
          productGroup  : '치아보험',
          ProductName   : '(무)THE건강한치아보험V(갱신형)',
          image         : [
            'img_survey0601.png',
            'img_survey0602.png',
            'img_survey0603.png',
            'img_survey0604.png'
          ],
          answer: [
            {title: 'O', isSelected: false},
            {title: 'X', isSelected: false}
          ]
        },
        {
          question      : '잘 시간도 없는데<br> 아침식사는 PASS~!',
          diseaseType   : 3,
          productGroup  : '심뇌혈관보험',
          ProductName   : '(무)라이나건강보험(갱신형)',
          image         : [
            'img_survey0701.gif'
          ],
          answer: [
            {title: 'O', isSelected: false},
            {title: 'X', isSelected: false}
          ]
        },
        {
          question      : '별다른 이유 없이<br> 몸이 자주 아픈 연약한 나',
          diseaseType   : 2,
          productGroup  : '건강보험',
          ProductName   : '(무)골라담는간편건강보험(갱신형)',
          image         : [
            'img_survey0801.png',
            'img_survey0802.png',
            'img_survey0803.png',
            'img_survey0804.png',
          ],
          answer: [
            {title: 'O', isSelected: false},
            {title: 'X', isSelected: false}
          ]
        },
      ],
      stepCount: 0,
      flag: false,
    }
  },
  computed: {
		
	},
  methods:{
    /* 답변 선택 */
    onClickAnswer(questionIdx, answer, answerIdx) {
      var _answer = Array.from(this.questionList[questionIdx].answer);

      // 진행중, 결과 페이지 일 때 클릭 방지
      //if(this.flag){return}
      //this.flag = true;

      _answer.forEach((element, index) => {
        index != answerIdx ? element.isSelected = false : element.isSelected = true;
			});

      this.selectArr();

      if( ++this.stepCount > this.questionList.length-1 ){
        this.surveyEnd();
      }
    },
    /**
     * 결과 페이지로 이동
     */
    surveyEnd(){
      this.$router.replace('result');
    },
    /**
     * o를 선택한 data만 추가
     */
    selectArr() {
      var pointArr = [];

      this.questionList.forEach((element) => {
        if( element.answer[0].isSelected == true ){
          pointArr.push(element);
        }
        this.$store.commit('pushArr', pointArr);
      });
		},
  },
}
</script>
