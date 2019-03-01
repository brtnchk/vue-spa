import axios from 'axios';

import router from '../router';
import {setHttpToken} from "../helpers";
import { errorsSource } from "../pipes/httpErrors/errorsPipe";

export default {
  namespaced: true,
  state: {
    token: null,
    loading: false,
    auth: false,
    user: null,
    refreshTimeout: null,
    refreshTime: 1000*60*60,
    userData: null,
  },
  mutations: {
    setToken(state, token) {
      localStorage.setItem('authtoken', token);
    },
    setAuthenticated(state, trueOrFalse) {
      state.auth = trueOrFalse;
    },
    setUserData(state, data) {
      state.user = data;
    },
    setSettings(state, data) {
      state.user.settings = data;
    },
    setLoading(state, trueOrFalse) {
      state.loading = trueOrFalse;
    },
    setTokenToState(state, token) {
      state.token = token;
    },
    setRefreshTimeout(state, id) {
      state.refreshTimeout = id;
    },
    saveUserData(state, data) {
      state.userData = data;
    },
    clearUserData(state){
      state.userData = null
    }
  },
  actions: {
    async login({ dispatch, commit, state }, { payload, context }) {
      commit('setAuthenticated', true);
      commit('setToken', payload.access_token);
      commit('setUserData', payload.user);
      setHttpToken(payload.access_token);

      let refreshId = setTimeout(() => (dispatch('refresh')), state.refreshTime);
      commit('setRefreshTimeout', refreshId);
    },
    async refresh({ dispatch, commit, state }) {
      axios
        .post('/refresh')
        .then(({ data }) => {
          commit('setAuthenticated', true);
          commit('setToken', data.access_token);
          commit('setUserData', data.user);
          setHttpToken(data.access_token);

          let refreshId = setTimeout(() => (dispatch('refresh')), state.refreshTime);
          commit('setRefreshTimeout', refreshId);
        })
        .catch(e => {
          dispatch('logout');
          errorsSource.next({status: e.response.status, payload: {dispatch, commit, state}});
        });
    },
    async setAuthentication({ commit }, data) {
      commit('setAuthenticated', true);
    },
    async getUser({ dispatch, commit, state }) {
      commit('setLoading', true);

      return axios
        .post('me')
        .then(({data}) => commit('setUserData', data))
        .then(_ => {
          let refreshId = setTimeout(() => (dispatch('refresh')), state.refreshTime);
          commit('setRefreshTimeout', refreshId);
        })
        .catch(e => {
          dispatch('logout');
          errorsSource.next({status: e.response.status, payload: {dispatch, commit, state}});
        });
    },
    logout({ dispatch }) {
      return axios
        .post('logout')
        .then((response) => dispatch('clearAuth'))
        .catch(_ => dispatch('clearAuth'));
    },
    clearAuth({ commit, state }) {
      commit('setAuthenticated', false);
      commit('setUserData', null);
      commit('setToken', null);
      setHttpToken(null);
      clearTimeout(state.refreshTimeout);
      commit('setRefreshTimeout', null);
      router.push({name: 'home'});
    },
    updateUser({ commit }, payload) {
      commit('setUserData', response.data);
    },
    saveUserData({ commit }, userData){
      commit('saveUserData', userData);
    },
    clearUserData({ commit }){
      commit('clearUserData');
    },
    async changePassword({ dispatch, commit, state }, {token, password}) {
      try {
        let response = await axios.post(`/password/change`, {token, password});

        await dispatch({payload: response.data});
      } catch(e) {
        return e;
      }
    }
  },
  getters: {
    user (state) {
      return state.user;
    },
    isAuth (state) {
      return state.auth;
    },
    loading (state) {
      return state.loading;
    },
    getToken(state) {
      return state.token;
    },
    userData (state) {
      return state.userData;
    },
  }
}
