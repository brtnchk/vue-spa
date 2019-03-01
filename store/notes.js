import axios from 'axios';

import router from '../router';
import { deleteSpecialCharacters } from "../helpers/index";
import { Statistics } from "../components/Tools/Redaction/Statistics";
import { errorsSource } from "../pipes/httpErrors/errorsPipe";

const fields = ['passage_text', 'term_definition', 'term_text'];

export default {
  namespaced: true,
  state: {
    notes: [],
    currentNote: {
      title: "",
      description: "",
      position: 0,
      course_id: null,
      type: "",
      cover_image: null,
      public: false
    },
    currentNoteItems: [],
    notesSortBy: {
      key: 'created_at',
      title: 'Date',
      type: 'date'
    },
    bindingNoteMsg: null,
    redactionContents: getNotesForMainPage(),
    redactionPassageSettings: Object.assign({}, {
      font: {
        name: "Poppins",
        value: "'Poppins', sans-serif"
      },
      fontSize: 100,
      width: 100,
      brightness: 100,
      alignment: 'left',
      lineScpasing: 'unset',
      coefficient: 22
    }, window.localStorage.getItem('passageSettings') ? JSON.parse(window.localStorage.getItem('passageSettings')) : {}),
    redactionSettings: Object.assign({}, {
      algorithm: 'words',
    }, window.localStorage.getItem('redactionSettings') ? JSON.parse(window.localStorage.getItem('redactionSettings')) : {}),
    collectStatistics: false,
    hasStatistics: false,
    statistics: {
      sessionStart: null,
      sessionEnd: null,
      items: [],
      percentValues: [],
      hiddenWords: []
    },
    displayedStatistics: {
      session_length: null, // длительность сессии в секундах.
      words_total: null, // общее число слов в заметках.
      words_memorized: null, // максимальное число слов, которые были скрыты при чтении.
      words_memorized_avg: null, // среднее число скрытых слов в минуту.
      words_memorized_max: null, // максимальное число скрытых слов среди всех заметок.
      memorization_min: null, // минимальный процент скрытых слов (значение ползунка).
      memorization_max: null // максимальный процент скрытых слов (значение ползунка).
    },
    loadings: {
      isNotesLoading: false,
      isNoteLoading: false,
      isNoteItemsLoading: false,
      isNoteCreateLoading: false,
      isNoteDeleteLoading: false,
      isNoteItemRemoveLoading: false,
      isNoteUpdateLoading: false
    }
  },
  mutations: {
    SET_HAS_STATISTICS(state, val) {
      state.hasStatistics = val;
    },
    SET_STATISTICS_SESSION_START(state, time) {
      state.statistics.sessionStart = time;
    },
    SET_STATISTICS_SESSION_END(state, time) {
      state.statistics.sessionEnd = time;
    },
    SET_STATISTICS_ITEMS(state, items) {
      state.statistics.items = items;
    },
    SET_STATISTICS_PERCENT_VALUES(state, values) {
      state.statistics.percentValues = values;
    },
    SET_STATISTICS_HIDDEN_WORDS(state, words) {
      state.statistics.hiddenWords = words;
    },
    RESET_STATISTICS(state) {
      state.statistics = {
        sessionStart: null,
        sessionEnd: null,
        items: [],
        percentValues: [],
        hiddenWords: []
      };
    },
    SET_DISPLAYED_STATISTICS(state, stat) {
      state.displayedStatistics = stat;
    },
    START_COLLECT_STATISTICS(state) {
      state.collectStatistics = true;
    },
    FINISH_COLLECT_STATISTICS(state) {
      state.collectStatistics = false;
    },
    SET_REDACTIONTEXT(state, payload) {
      state.redactionText = payload;
    },
    SET_REDACTION_PASSAGE_SETTINGS(state, payload) {
      state.redactionPassageSettings = payload;
      localStorage.setItem('passageSettings', JSON.stringify(payload));
    },
    SET_REDACTION_SETTINGS(state, payload) {
      state.redactionSettings = payload;
      localStorage.setItem('redactionSettings', JSON.stringify(payload));
    },
    SHUFFLE_REDACTION_TEXTS(state, payload) {
      state.redactionTexts = payload;
    },
    UPDATE_REDACTION_STATE(state, payload) {
      state.redactionState = payload;
    },
    UPDATE_IS_SHUFFLED(state, payload) {
      state.redactionState.isShuffled = payload;
    },
    SET_NOTES(state, payload) {
      state.notes = payload;
    },
    SET_NOTES_SORT_BY(state, payload) {
      state.notesSortBy = payload;
    },
    SET_CURRENT_NOTE(state, payload) {
      state.currentNote = payload;
    },
    SET_CURRENT_NOTE_ITEMS(state, payload) {
      state.currentNoteItems = payload;
    },
    SET_ITEMS_FOR_CURRENT_NOTE(state, items) {
      state.currentNote.items = items;
    },
    SET_BINDINGS_MSG(state, msg) {
      state.bindingNoteMsg = msg;
    },
    SET_REDACTION_CONTENTS(state, content) {
      state.redactionContents = content;
    },
    UPDATE_REDACTION_CONTENTS(state, newNote) {
      state.redactionContents = state.redactionContents.map(note => {
        if (note.id === newNote.id) return newNote;
        return note;
      });
    },
    DELETE_MASKS_FROM_REDACTION_CONTENTS(state) {
      state.redactionContents = state.redactionContents.map(note => {
        note.touched = false;
        note.hiddenPercent = 0;
        note.content.forEach(item => item.mask = null);
        return {...note};
      });
    },
    SET_REDACTION_CONTENT_FOR_MAIN_PAGE(state) {
      state.redactionContents = getNotesForMainPage();
    },
    START_NOTES_LOADING(state) {
      state.loadings.isNotesLoading = true;
    },
    FINISH_NOTES_LOADING(state) {
      state.loadings.isNotesLoading = false;
    },
    START_NOTE_LOADING(state) {
      state.loadings.isNoteLoading = true;
    },
    FINISH_NOTE_LOADING(state) {
      state.loadings.isNoteLoading = false;
    },
    START_NOTE_ITEMS_LOADING(state) {
      state.loadings.isNoteItemsLoading = true;
    },
    FINISH_NOTE_ITEMS_LOADING(state) {
      state.loadings.isNoteItemsLoading = false;
    },
    START_NOTE_CREATE_LOADING(state) {
      state.loadings.isNoteCreateLoading = true;
    },
    FINISH_NOTE_CREATE_LOADING(state) {
      state.loadings.isNoteCreateLoading = false;
    },
    START_NOTE_DELETE_LOADING(state) {
      state.loadings.isNoteDeleteLoading = true;
    },
    FINISH_NOTE_DELETE_LOADING(state) {
      state.loadings.isNoteDeleteLoading = false;
    },
    START_NOTE_ITEM_REMOVE_LOADING(state) {
      state.loadings.isNoteItemRemoveLoading = true;
    },
    FINISH_NOTE_ITEM_REMOVE_LOADING(state) {
      state.loadings.isNoteItemRemoveLoading = false;
    },
    START_NOTE_UPDATE_LOADING(state) {
      state.loadings.isNoteUpdateLoading = true;
    },
    FINISH_NOTE_UPDATE_LOADING(state) {
      state.loadings.isNoteUpdateLoading = false;
    },
  },
  actions: {
    startCollectStatistics({commit, state}) {
      console.log("startCollectStatistics");
      commit('START_COLLECT_STATISTICS');
      commit('SET_HAS_STATISTICS', true);
      commit('SET_STATISTICS_SESSION_START', (new Date()).getTime());
      commit('SET_STATISTICS_ITEMS', state.redactionContents.map(_ => ({..._})));
    },
    finishCollectStatistics({commit, state, dispatch}, saveStat = true) {
      console.log("finishCollectStatistics");
      commit('FINISH_COLLECT_STATISTICS');
      commit('SET_HAS_STATISTICS', false);
      commit('SET_STATISTICS_SESSION_END', (new Date()).getTime());
      if (saveStat) dispatch('saveStatistics', state.statistics);
      commit('RESET_STATISTICS');
    },
    async saveStatistics({dispatch, commit, state}, stat) {
      try {
        let statistics = new Statistics(stat);
        let clone = {...statistics};
        delete clone.memorization_levels;
        delete clone.memorization_per_minutes;
        commit('SET_DISPLAYED_STATISTICS', statistics);
        let statServ = (await axios.post(`/notes/${state.currentNote.id}/stats`, clone)).data.data;
        console.log(statServ);
      } catch(e) {
        errorsSource.next({status: e.response.status, payload: {dispatch, commit, state}});
      }
    },
    storeRedactionPassageSettings({ commit }, payload) {
      commit('SET_REDACTION_PASSAGE_SETTINGS', payload);
    },
    storeRedactionSettings({ commit }, payload) {
      commit('SET_REDACTION_SETTINGS', payload);
    },
    async getNotes({ commit, state, dispatch }, params) {
      try {
        commit('START_NOTES_LOADING');
        let notes;
        if (params) {
          notes = (await axios.get('search/note', {params})).data.data;
        } else {
          notes = (await axios.get('notes')).data.data;
        }
        commit('SET_NOTES', notes);
        commit('FINISH_NOTES_LOADING');
      } catch(e) {
        commit('FINISH_NOTES_LOADING');
        errorsSource.next({status: e.response.status, payload: {dispatch, commit, state}});
      }
    },
    async getNote({dispatch, commit, state}, id) {
      try {
        commit('START_NOTE_LOADING');
        let note = (await axios.get(`notes/${id}`)).data.data;
        commit('SET_CURRENT_NOTE', note);
        commit('FINISH_NOTE_LOADING');
      } catch(e) {
        commit('FINISH_NOTE_LOADING');
        errorsSource.next({status: e.response.status, payload: {dispatch, commit, state}});
      }
    },
    async getNoteItems({dispatch, commit, state}, noteId) {
      try {
        commit('START_NOTE_ITEMS_LOADING');
        let items = (await axios.get(`notes/${noteId}/items`)).data.data;
        commit('SET_CURRENT_NOTE_ITEMS', items);
        commit('FINISH_NOTE_ITEMS_LOADING');
      } catch(e) {
        commit('FINISH_NOTE_ITEMS_LOADING');
        errorsSource.next({status: e.response.status, payload: {dispatch, commit, state}});
      }
    },
    async createNote({ commit, getters, dispatch, state }, {currentNote, currentNoteItems}) {
      try {
        deleteSpecialCharacters(currentNoteItems, fields);
        commit('START_NOTE_CREATE_LOADING');
        let note = (await axios.post('notes', currentNote)).data.data;
        let items = (await Promise.all(
          currentNoteItems.map(item => axios.post(`notes/${note.id}/items`, item))
        )).map(item => item.data.data);
        let notes = getters.notes.map(_ => ({..._}));
        notes.push(note);

        commit('SET_NOTES', notes);
        commit('SET_CURRENT_NOTE', note);
        commit('SET_CURRENT_NOTE_ITEMS', items);
        commit('SET_ALLOW_TO_LEAVE_PAGE', true, { root: true });
        commit('FINISH_NOTE_CREATE_LOADING');

        router.push({ name: `view-note`, params: { id: note.id }});
      } catch(e) {
        commit('FINISH_NOTE_CREATE_LOADING');
        errorsSource.next({status: e.response.status, payload: {dispatch, commit, state}});
      }
    },
    async updateNote({ commit, getters, dispatch, state }, {currentNote, currentNoteItems, noRedirect}) {
      try {
        deleteSpecialCharacters(currentNoteItems, fields);
        commit('START_NOTE_UPDATE_LOADING');
        let data = (await Promise.all([
          axios.put(`notes/${currentNote.id}`, currentNote)
        ].concat(currentNoteItems.map(item => {
          if (item.new) {
            delete item.new;
            return axios.post(`notes/${currentNote.id}/items`, item);
          } else {
            delete item.new;
            delete item.note;
            return axios.put(`notes/${currentNote.id}/items/${item.id}`, item);
          }
        })))).map((item, index) => {
          if (index === 0) return item.data.data;
          else return item.data;
        });
        let note = data[0];
        let notes = getters.notes
          .map(item => {
            if (item.id === note.id) return {...note};

            return {...item};
          }, []);

        commit('SET_NOTES', notes);
        commit('SET_CURRENT_NOTE', note);
        commit('SET_ALLOW_TO_LEAVE_PAGE', true, { root: true });
        commit('FINISH_NOTE_UPDATE_LOADING');

        if (!noRedirect) router.push({ name: `view-note`, params: { id: note.id }});
      } catch(e) {
        commit('FINISH_NOTE_UPDATE_LOADING');
        errorsSource.next({status: e.response.status, payload: {dispatch, commit, state}});
      }
    },
    async updateNoteBinding({ commit, getters, dispatch, state }, currentNote) {
      try {
        await dispatch('updateNote', {currentNote, currentNoteItems: [], noRedirect: true});
      } catch(e) {
        errorsSource.next({status: e.response.status, payload: {dispatch, commit, state}});
      }
    },
    async updateBookNote({ commit, getters, dispatch, state }, {currentNote, currentNoteItems, deletedItems = []}) {
      try {
        deleteSpecialCharacters(currentNoteItems, fields);
        if (deletedItems === null) deletedItems = [];
        commit('START_NOTE_UPDATE_LOADING');

        let data = (await Promise.all([
          axios.put(`notes/${currentNote.id}`, currentNote),
          ...deletedItems.map(item => axios.delete(`notes/${currentNote.id}/items/${item.id}`, item)),
          ...currentNoteItems.map(item => axios.post(`notes/${currentNote.id}/items`, item))
        ])).map((item, index) => {
          if (index === 0) return item.data.data;
          else return item.data;
        });
        let note = data[0];
        let notes = getters.notes
          .map(item => {
            if (item.id === note.id) return {...note};

            return {...item};
          }, []);

        commit('SET_NOTES', notes);
        commit('SET_CURRENT_NOTE', note);
        commit('SET_ALLOW_TO_LEAVE_PAGE', true, { root: true });
        commit('FINISH_NOTE_UPDATE_LOADING');

        router.push({ name: `notes`});
      } catch(e) {
        commit('FINISH_NOTE_UPDATE_LOADING');
        errorsSource.next({status: e.response.status, payload: {dispatch, commit, state}});
      }
    },
    async deleteNote({ commit, getters, dispatch, state }, id) {
      try {
        commit('START_NOTE_DELETE_LOADING');
        let note = (await axios.delete(`notes/${id}`)).data.data;
        let notes = getters.notes
          .reduce((prev, next) => {
            if (next.id !== note.id) prev.push({...next});

            return prev;
          }, []);

        commit('SET_NOTES', notes) ;
        commit('FINISH_NOTE_DELETE_LOADING');
      } catch(e) {
        commit('FINISH_NOTE_DELETE_LOADING');
        errorsSource.next({status: e.response.status, payload: {dispatch, commit, state}});
      }
    },
    resetCurrentNote({ commit }) {
      commit('SET_CURRENT_NOTE', {
        title: "",
        description: "",
        position: 0,
        course_id: null,
        type: "",
        cover_image: null,
        public: false
      });
    },
    addCurrentNoteItem({ commit, getters }) {
      let itemMaxId = 0;
      let items = [...getters.currentNoteItems];
      if (items.length) {
        items = items
          .map(item => {
            if (item.id > itemMaxId) itemMaxId = item.id;

            return {...item};
          });
      }

      items.push({
        id: itemMaxId + 1,
        term_text: "",
        term_image: null,
        term_image2: null,
        term_definition: "",
        passage_text: "",
        position: itemMaxId + 1,
        new: true
      });

      commit('SET_CURRENT_NOTE_ITEMS', items);
    },
    async removeCurrentNoteItem({ commit, getters, dispatch, state }, {deletedItem, currentNote}) {
      try {
        commit('START_NOTE_ITEM_REMOVE_LOADING');
        if (!deletedItem.new) {
          let item = await axios.delete(`notes/${currentNote.id}/items/${deletedItem.id}`, deletedItem);
        }

        let items = getters.currentNoteItems
          .filter(item => item !== deletedItem)
          .map(_ => ({..._}));

        commit('SET_CURRENT_NOTE_ITEMS', items);
        commit('FINISH_NOTE_ITEM_REMOVE_LOADING');
      } catch(e) {
        commit('FINISH_NOTE_ITEM_REMOVE_LOADING');
        errorsSource.next({status: e.response.status, payload: {dispatch, commit, state}});
      }
    }
  },
  getters: {
    notes: (state) => state.notes,
    currentNote: (state) => state.currentNote,
    currentNoteItems: (state) => state.currentNoteItems,
    notesSortBy: (state) => state.notesSortBy,
    myNotes: (state) => state.notes,
    redactionTexts: (state) => state.redactionTexts,
    redactionPassageSettings: (state) => state.redactionPassageSettings,
    redactionSettings: (state) => state.redactionSettings,
    percent: (state) => state.redactionState.percent,
    shuffledText: (state) => state.redactionState.shuffledText,
    isShuffled: (state) => state.redactionState.isShuffled,
    allowLeavePage: (rootState) => rootState.allowLeavePageWithoutConfirmation,
    bindingNoteMsg: (rootState) => rootState.bindingNoteMsg,
    collectStatistics: (state) => state.collectStatistics,
    hasStatistics: (state) => state.hasStatistics,
    statistics: (state) => state.statistics,
    displayedStatistics: (state) => state.displayedStatistics,
    redactionContents: (state) => state.redactionContents,
    isNotesLoading: (state) => state.loadings.isNotesLoading,
    isNoteLoading: (state) => state.loadings.isNoteLoading,
    isNoteItemsLoading: (state) => state.loadings.isNoteItemsLoading,
    isNoteCreateLoading: (state) => state.loadings.isNoteCreateLoading,
    isNoteDeleteLoading: (state) => state.loadings.isNoteDeleteLoading,
    isNoteItemRemoveLoading: (state) => state.loadings.isNoteItemRemoveLoading,
    isNoteUpdateLoading: (state) => state.loadings.isNoteUpdateLoading,
  }
}


function getNotesForMainPage() {
  return [
    {
      id: 1,
      type: 'flashcard',
      hiddenPercent: 0,
      touched: false,
      content: [
        {
          value: `Memscore is a simple and powerful tool that can greatly enhance your learning. Here's how it works. Read the text below. Next, adjust the slider. Now try filling in the blanks.`,
          mask: null,
          type: 'text'
        },
        {
          value: `Shall I compare thee to a summer’s day?
Thou art more lovely and more temperate:
Rough winds do shake the darling buds of May,
And summer’s lease hath all too short a date`,
          mask: null,
          type: 'text'
        }
      ]
    },
    {
      id: 2,
      type: 'flashcard',
      hiddenPercent: 0,
      touched: false,
      content: [
        {
          value: `If you can't remember a word, don't worry! Hover your cursor over the blank to reveal the answer. Once you're confident, try moving the slider to the right. See if you can still recall everything from memory!`,
          mask: null,
          type: 'text'
        },
        {
          value: `A musical scale is an ascending or descending series of tones, progressing according to some definite system, and all bearing a very intimate relation to the first tone—the key-tone or tonic.`,
          mask: null,
          type: 'text'
        }
      ]
    },
    {
      id: 3,
      type: 'flashcard',
      hiddenPercent: 0,
      touched: false,
      content: [
        {
          value: `Studies show that practicing information retrieval improves long-term retention. That means that by filling in these blanks, you are exercising and strengthening your memory!`,
          mask: null,
          type: 'text'
        },
        {
          value: `Chocolate Chip Cookie Ingredients:

1 cup salted butter softened
1 cup white (granulated) sugar
1 cup light brown sugar packed
2 tsp pure vanilla extract
2 large eggs
3 cups all-purpose flour
1 tsp baking soda
½ tsp baking powder
1 tsp sea salt
2 cups chocolate chips`,
          mask: null,
          type: 'text'
        }
      ]
    },
    {
      id: 4,
      type: 'flashcard',
      hiddenPercent: 0,
      touched: false,
      content: [
        {
          value: `Memscore offers a lot of cool features to enhance learning. For example, use our keyboard shortcuts to streamline your studying. You can see a list of them by pressing the keyboard icon below.`,
          mask: null,
          type: 'text'
        },
        {
          value: `public class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\t// Prints "Hello, World" to the terminal window. System.out.println("Hello, World");\n\t}\n}`,
          mask: null,
          type: 'text'
        }
      ]
    },
    {
      id: 5,
      type: 'flashcard',
      hiddenPercent: 0,
      touched: false,
      content: [
        {
          value: `Learn anything on Memscore! Study books, passages, or flashcards. Memorize foreign languages, speeches, and more!`,
          mask: null,
          type: 'text'
        },
        {
          value: `data:image/png;base64,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`,
          mask: null,
          type: 'img',
          base64: true
        }
      ]
    },
    {
      id: 6,
      type: 'flashcard',
      hiddenPercent: 0,
      touched: false,
      content: [
        {
          value: `Study anything you want by simply creating a note! Register today to learn anything and remember everything with Memscore!`,
          mask: null,
          type: 'text'
        },
        {
          value: `data:image/png;base64,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BQCQCkkKACAVkhQAQCokKQCAVEhSAACpkKQAAFIhSQEApEKSAgBIhSQFAJAKSQoAIBWSFABAKiQpAIBUSFIAAKmQpAAAUiFJAQCkQpICAEiFJAUAkApJCgAgFZIUAEAqJCkAgFRIUgAAqZCkAABSIUkBAKRCkgIASIUkBQCQCkkKACAVkhQAQCokKQCAVEhSAACpkKQAAFIhSQEApEKSAgBIhSQFAJAKSQoAIBWSFABAKiQpAIBUSFIAAKmQpAAAUiFJAQCkQpICAEiFJAUAkApJCgAgFZIUAEAqJCkAgFRIUgAAqZCkAABSIUkBAKRCkgIASIUkBQCQCkkKACAVkhQAQCokKQCAVEhSAACpkKQAAFIhSQEApEKSAgBIhSQFAJAKSQoAIBWSFABAKiQpAIBUSFIAAKmQpAAAUiFJAQCkQpICAEiFJAUAkApJCgAgFZIUAEAqJCkAgFRIUgAAqZCkAABSIUkBAKRCkgIASIUkBQCQCkkKACAVkhQAQCokKQCAVEhSAACpkKQAAFIhSQEApEKSAgBIhSQFAJAKSQoAIBWSFABAKiQpAIBU/w8OKuxfAJ4udwAAAABJRU5ErkJggg==`,
          mask: null,
          type: 'img',
          base64: true
        }
      ]
    }
  ];
}
