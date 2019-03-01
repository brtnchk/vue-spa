import router from '../../router/index';

export const handlers = {
  401: ({dispatch}) => {
    dispatch('auth/logout', null, {root: true});
  },
  402: (payload) => {
    router.push({ name: `billing-methods`});
  },
  403: ({dispatch}) => {
    dispatch('auth/logout', null, {root: true});
  }
};
