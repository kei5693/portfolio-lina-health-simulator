import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectArr: [],
    layerPopup: false,
    diseasePopup: false,
    sharePopup: false,
  },
  mutations: {
    pushArr: (state, payload) => {
      state.selectArr = payload;
    },
    resetArr: (state) => {
      state.selectArr = [];
    },
    togglePopup: (state, payload) => {
      console.log(payload);
      if(payload == 'disease'){
        state.diseasePopup = true;
        state.sharePopup = false;
      } else if(payload == 'share'){
        state.diseasePopup = false;
        state.sharePopup = true;
      } else {
        state.diseasePopup = false;
        state.sharePopup = false;
      }
      state.layerPopup = !state.layerPopup;
    }
  },
  actions: {
  },
  modules: {
  }
})
