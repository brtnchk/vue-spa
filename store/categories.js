import axios from 'axios';

import { errorsSource } from "../pipes/httpErrors/errorsPipe";

export default {
  namespaced: true,
  state: {
  	myCategories: [],
    categories: []
  },
  mutations: {
    setAccountAppears(state, categories) {
      state.myCategories = categories;
    },
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    }
  },
  actions: {
    async getCategories({dispatch, commit, state}) {
      try {
        let categories = (await axios.get('categories')).data.data;
        commit('SET_CATEGORIES', categories);
      } catch(e) {
        errorsSource.next({status: e.response.status, payload: {dispatch, commit, state}});
      }
    },
    getMyCategories({dispatch, commit, state}) {
      return axios.get('categories').then(({data}) => {
        commit('setAccountAppears', data.data);
        return data.data;
      }).catch(e => errorsSource.next({status: e.response.status, payload: {dispatch, commit, state}}));
    },
    getCategory({dispatch, commit, state}, id) {
      return axios.get(`categories/${id}`).then(({data}) => {
        return data.category;
      }).catch(e => errorsSource.next({status: e.response.status, payload: {dispatch, commit, state}}));
    }
  },
  getters: {
    myCategories: (state) => state.myCategories,
    categories: (state) => state.categories
  }
}
