import axios from 'axios';

import { errorsSource } from "../pipes/httpErrors/errorsPipe";

export default {
  namespaced: true,
  state: {
    recents: [],
    loadings: {
      isRecentLoading: false
    }
  },
  mutations: {
    SET_RESENT(state, recents) {
      state.recents = recents;
    },
    START_NOTE_RECENTS_LOADING(state) {
      state.loadings.isRecentLoading = true;
    },
    FINISH_NOTE_RECENTS_LOADING(state) {
      state.loadings.isRecentLoading = false;
    }
  },
  actions: {
    async getRecent({ commit, getters, dispatch, state }) {
      try {
        commit('START_NOTE_RECENTS_LOADING');
        let items = (await axios.get(`/recent`)).data;
        commit('SET_RESENT', items);
        commit('FINISH_NOTE_RECENTS_LOADING');
      } catch(e) {
        commit('FINISH_NOTE_RECENTS_LOADING');
        errorsSource.next({status: e.response.status, payload: {dispatch, commit, state}});
      }
    }
  },
  getters: {
    recents: (state) => state.recents,
    isRecentsloading: (state) => state.loadings.isRecentLoading
  }
}
