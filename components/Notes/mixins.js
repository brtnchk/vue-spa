import {
  mapGetters,
  mapActions,
  mapMutations
} from 'vuex';
import Spinner from 'vue-simple-spinner'

export const addNote = {
  components: {
    Spinner
  },
  data() {
    return {
      coverRef: null,
      coverImgData: null
    };
  },
  mounted() {
    this.getCourses();
    this.getCategories();
  },
  created() {
    if (this.mode === 'create') {
      this.resetCurrentNote();
      this.setCurrentNoteItems([]);
    }

    // this.currentNote.user_id  = this.user.id;
    this.setDisplayedSidebarMenu('notes');
  },
  computed: {
    ...mapGetters({
      user: 'auth/user',
      currentNote: 'notes/currentNote',
      currentNoteItems: 'notes/currentNoteItems',
      discardWorkState: 'discardWorkState',
      courses: 'courses/courses',
      categories: 'categories/categories',
      isNoteLoading: 'notes/isNoteLoading',
      isNoteItemsLoading: 'notes/isNoteItemsLoading',
      isNoteCreateLoading: 'notes/isNoteCreateLoading',
      isNoteItemRemoveLoading: 'notes/isNoteItemRemoveLoading',
      isNoteUpdateLoading: 'notes/isNoteUpdateLoading'
    }),
    itemCount() {
      if (!this.currentNoteItems) {
        return 1;
      }

      return this.currentNoteItems.length + 1;
    },
    downloadNote() {
      return !this.currentNote.title;
    }
  },
  methods: {
    ...mapMutations({
      setAllowToLeavePage: 'SET_ALLOW_TO_LEAVE_PAGE',
      setDisplayedSidebarMenu: 'setDisplayedSidebarMenu',
      setCurrentNoteItems: 'notes/SET_CURRENT_NOTE_ITEMS',
    }),
    ...mapActions({
      getNote: 'notes/getNote',
      getNoteItems: 'notes/getNoteItems',
      createNote: 'notes/createNote',
      updateNote: 'notes/updateNote',
      updateBookNote: 'notes/updateBookNote',
      getCourses: 'courses/getCourses',
      getCategories: 'categories/getCategories',
      resetCurrentNote: 'notes/resetCurrentNote',
      addCurrentNoteItem: 'notes/addCurrentNoteItem',
      removeCurrentNoteItem: 'notes/removeCurrentNoteItem'
    }),
    onRemoveNoteItem(deletedItem) {
      this.removeCurrentNoteItem({deletedItem, currentNote: this.currentNote});
    },
    onAddNoteItem() {
      let cards = this.$refs.cards;
      this.addCurrentNoteItem();

      this.$nextTick(_ => {
        if (!cards) {
          this.doFocus(this.$refs.cards);

          return;
        }

        this.doFocus(cards);
      });
    },
    doFocus(cards) {
      // focusOnInput смотри NoteItems/mixins.js, миксина noteItemMethods
      if (!cards.push) return cards.focusOnInput();
      cards[cards.length - 1].focusOnInput();
    }
  }
};
