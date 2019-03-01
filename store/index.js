import Vue from 'vue';
import Vuex from 'vuex';
import VuexUndoRedo from '../plugins/undo-redo';
import { cloneObject } from "../helpers/index";
import notes from './notes';
import courses from './courses';
import categories from './categories';
import shared from './shared';
import auth from './auth';
import recents from './recent';
import settings from './settings';

Vue.use(Vuex);
Vue.use(VuexUndoRedo, { mutations: ['notes/UPDATE_REDACTION_STATE', 'notes/UPDATE_REDACTION_CONTENTS'] });

const modules = {
  notes, courses, shared, auth, settings, categories, recents
};
const initialState = Object
  .keys(modules)
  .reduce((initialState, moduleName) => {
    initialState[moduleName] = cloneObject(modules[moduleName].state);

    return initialState;
  }, {});

export default new Vuex.Store({
  state: {},
  modules,
  mutations: {
    emptyState(state) {
      this.replaceState(cloneObject(initialState));
    }
  }
})
