import axios from 'axios';

export default {
  state: {
    loading: false,
    message: {
      type: null,
      text: null,
      timeout: 5000,
      errors: null
    },
    modals: {
      login: false,
      pricing: false,
      register: false,
      paymentDetails: false,
      resetPassword: false,
      passwordReset: false,
      passageSettings: false,
      redactionSettings: false,
      discardWork: false,
      createCourse: false,
      editCourse: false,
      removeCourse: false,
      addNote: false,
      endSession: false,
      notesResults: false,
      addCard: false
    },
    callbacks: {},
    displayedSidebarMenu: 'main',
    selectedCatorogyIdForNotes: null,
    selectedCatorogyIdForCourses: null,
    allowLeavePageWithoutConfirmation: false,
    searchPhrase: null,
    searchFilter: null,
    menuItems: [
      {
        id: 1,
        title: 'Browse',
        route: '',
        name: 'browse-notes',
        icon: 'icon-browse',
        show: true,
        active: false
      },
      {
        id: 2,
        title: 'Study',
        route: '',
        name: 'courses',
        icon: 'icon-notes',
        show: true,
        active: false
      },
      {
        id: 3,
        title: 'Recent',
        route: '',
        name: 'recent',
        icon: 'icon-recent',
        show: true,
        active: false
      },
      {
        id: 4,
        title: 'Statistics',
        route: '',
        name: '',
        icon: 'icon-statistics',
        show: true,
        active: false
      },
      {
        id: 5,
        title: 'Schedule',
        route: '',
        name: '',
        icon: 'icon-schedule',
        show: true,
        active: false
      },
      {
        id: 6,
        title: 'Forum',
        route: '',
        name: '',
        icon: 'icon-forum',
        show: true,
        active: false
      },
      {
        id: 7,
        title: 'Settings',
        route: '/settings',
        name: 'profile',
        icon: 'icon-setting',
        show: true,
        active: false
      }
    ],
    availableFonts: [
      {
        name: "Roboto",
        value: "'Roboto', sans-serif"
      },
      {
        name: "Libre Barcode 39 Text",
        value: "'Libre Barcode 39 Text', cursive"
      },
      {
        name: "Open Sans",
        value: "'Open Sans', sans-serif"
      },
      {
        name: "Lato",
        value: "'Lato', sans-serif"
      },
      {
        name: "Montserrat",
        value: "'Montserrat', sans-serif"
      },
      {
        name: "Felipa",
        value: "'Felipa', cursive"
      },
      {
        name: "Roboto Condensed",
        value: "'Roboto Condensed', sans-serif"
      },
      {
        name: "Source Sans Pro",
        value: "'Source Sans Pro', sans-serif"
      },
      {
        name: "Oswald",
        value: "'Oswald', sans-serif"
      },
      {
        name: "Raleway",
        value: "'Raleway', sans-serif"
      },
      {
        name: "Raleway",
        value: "'Raleway', sans-serif"
      },
      {
        name: "PT Sans",
        value: "'PT Sans', sans-serif"
      },
      {
        name: "Roboto Slab",
        value: "'Roboto Slab', serif"
      },
      {
        name: "Slabo 27px",
        value: "'Slabo 27px', serif"
      },
      {
        name: "Poppins",
        value: "'Poppins', sans-serif"
      },
      {
        name: "Ubuntu",
        value: "'Ubuntu', sans-serif"
      },
      {
        name: "Noto Sans",
        value: "'Noto Sans', sans-serif"
      },
      {
        name: "Staatliches",
        value: "'Staatliches', cursive"
      },
      {
        name: "Open Sans Condensed",
        value: "'Open Sans Condensed', sans-serif"
      },
      {
        name: "Playfair Display",
        value: "'Playfair Display', serif"
      }
    ],
    loadings: {
      isImgLoading: false
    }
  },
  mutations: {
    setSearchFilter(state, filter) {
      state.searchFilter = filter;
    },
    setSearchPhrase(state, phrase) {
      state.searchPhrase = phrase;
    },
    setSelectedCatorogyIdForNotes(state, id) {
      state.selectedCatorogyIdForNotes = id;
    },
    setSelectedCatorogyIdForCourses(state, id) {
      state.selectedCatorogyIdForCourses = id;
    },
    setLoading (state, payload) {
      state.loading = payload;
    },
    setMessage (state, payload) {
      state.message = payload;
    },
    clearMessage (state) {
      state.message = {
        type: null,
        message: null,
        timeout: 5000
      };
    },
    showModal(state, modal) {
      state.modals[modal] = true;
    },
    hideModal(state, modal) {
      state.modals[modal] = false;
    },
    addCallback(state, {name, cb}) {
      state.callbacks[name] = cb;
    },
    deleteCallback(state, name) {
      delete state.callbacks[name];
    },
    setDisplayedSidebarMenu(state, name) {
      if (name === 'main') state.menuItems.forEach(item => item.show = true);
      state.displayedSidebarMenu = name;
    },
    UPDATE_MENU_ITEMS(state, menuItems) {
      state.menuItems = menuItems;
    },
    ENABLE_MENU_ITEMS(state, enableItems) {
      state.menuItems.forEach(item => {
        let enableItem = enableItems.find(enableItem => {
          if (item.id) {
            return item.id === enableItem.id;
          }

          return item.name === enableItem.name;
        });
        if (enableItem) item.show = true;
      });
    },
    DISABLE_MENU_ITEMS(state, disableItems) {
      state.menuItems.forEach(item => {
        let disableItem = disableItems.find(disableItem => {
          if (item.id) {
            return item.id === disableItem.id;
          }

          return item.name === disableItem.name;
        });
        if (disableItem) item.show = false;
      });
    },
    SET_ALLOW_TO_LEAVE_PAGE(state, confirm) {
      state.allowLeavePageWithoutConfirmation = confirm;
    },
    START_IMG_LOADING(state) {
      state.loadings.isImgLoading = true;
    },
    FINISH_IMG_LOADING(state) {
      state.loadings.isImgLoading = false;
    }
  },
  actions: {
    setLoading ({commit}, payload) {
      commit('setLoading', payload);
    },
    setMessage ({commit}, payload) {
      commit('setMessage', payload);
    },
    clearMessage ({commit}) {
      commit('clearMessage');
    },
    showModal({commit}, {name, cb}) {
      commit('showModal', name);
      commit('addCallback', {name, cb});
    },
    hideModal({commit, state}, {name, payload}) {
      commit('hideModal', name);
      if (state.callbacks[name]) {
        state.callbacks[name](payload);
        commit('deleteCallback', name);
      }
    },
    uploadImg({commit}, img) {
      commit('START_IMG_LOADING');
      return axios.post('upload', img)
        .then(({data}) => {
          commit('FINISH_IMG_LOADING');
          return data.filename;
        }, ({response}) => {
          commit('FINISH_IMG_LOADING');
          console.log(response.data);
        });
    }
  },
  getters: {
    loading: (state) => state.loading,
    message: (state) => state.message,
    loginModalState: (state) => state.modals.login,
    addCardState: (state) => state.modals.addCard,
    pricingModalState: (state) => state.modals.pricing,
    registerModalState: (state) => state.modals.register,
    paymentDetailsState: (state) => state.modals.paymentDetails,
    resetPasswordState: (state) => state.modals.resetPassword,
    passwordResetState: (state) => state.modals.passwordReset,
    passageSettingsState: (state) => state.modals.passageSettings,
    redactionSettingsState: (state) => state.modals.redactionSettings,
    discardWorkState: (state) => state.modals.discardWork,
    createCourseState: (state) => state.modals.createCourse,
    editCourseState: (state) => state.modals.editCourse,
    removeCourseState: (state) => state.modals.removeCourse,
    addNoteState: (state) => state.modals.addNote,
    endSessionState: (state) => state.modals.endSession,
    notesResultsState: (state) => state.modals.notesResults,
    displayedSidebarMenu: (state) => state.displayedSidebarMenu,
    allowLeavePage: (state) => state.allowLeavePageWithoutConfirmation,
    isImgLoading: (state) => state.loadings.isImgLoading,
    selectedCatorogyIdForNotes: (state) => state.selectedCatorogyIdForNotes,
    selectedCatorogyIdForCourses: (state) => state.selectedCatorogyIdForCourses,
    searchPhrase: (state) => state.searchPhrase,
    searchFilter: (state) => state.searchFilter,
    availableFonts: (state) => state.availableFonts,
    menuItems: (state) => state.menuItems
  }
}
