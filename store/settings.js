import axios from 'axios';
import { createToken } from 'vue-stripe-elements';

import { errorsSource } from "../pipes/httpErrors/errorsPipe";

export default {
  namespaced: true,
  state: {
    cardItems:[],
    accountTypes: [],
    accountAppears: [],
  },
  mutations: {
    setAccountTypes(state, payload) {
      state.accountTypes = payload;
    },
    setAccountAppears(state, payload) {
      state.accountAppears = payload;
    },
    SET_CARD_ITEMS(state, cards) {
      state.cardItems = cards;
    },
    ADD_NEW_CARD(state, card) {
      state.cardItems.push(card);
    },
  },
  actions: {
    getSettingsData({dispatch, commit, state}) {
      return axios.get('settings/data').then(({data}) => {
        commit('setAccountTypes', data.account_types);
        commit('setAccountAppears', data.account_appears);
      }).catch(e => errorsSource.next({status: e.response.status, payload: {dispatch, commit, state}}));
    },
    async update({dispatch, commit, state}, payload) {
      await axios.post('settings/update', payload)
        .then(function (response) {
          commit('auth/setSettings', response.data.settings, {root:true});
        })
        .catch(e => {
          console.log(e);
          errorsSource.next({status: e.response.status, payload: {dispatch, commit, state}});
        });
    },
    addNewCard({commit}, card) {
      commit('ADD_NEW_CARD', card)
    },
    async deleteCard({ commit, getters, dispatch, state }, id) {
      try {
        let card = (await axios.delete(`payment/method/${id}`)).data;

        let cards = getters.cardItems
          .reduce((prev, next) => {
            if (next.id !== card.id) prev.push({...next});
            return prev;
          }, []);

        commit('SET_CARD_ITEMS', cards);

      } catch(e) {
        errorsSource.next({status: e.response.status, payload: {dispatch, commit, state}});
      }
    },
    async getCardItems({ commit, state, dispatch }) {
      try {
        let cards = (await axios.get(`payment/method`)).data;
        commit('SET_CARD_ITEMS', cards);
      } catch(e) {
        errorsSource.next({status: e.response.status, payload: {dispatch, commit, state}});
      }
    },
  },
  getters: {
    accountTypes: (state) => state.accountTypes,
    accountAppears: (state) => state.accountAppears,
    cardItems: (state) => state.cardItems,
  }
}
