<template>
  <div class="section__wrapper-right">
    <div class="section__title section__title--notes">
      <div class="section__title-wrap">
        <div class="section__title-left">
          <div class="section__title-icon"><i class="icon-font icon-notes"></i></div><span>Notes</span>
        </div>
        <div class="section__title-right">
          <div class="notes__search">
            <input
              v-model="searchPhrase"
              class="notes__search-input"
              type="text"
              name=""
              placeholder="Search notes">
            <button class="notes__search-btn" type="submit"><i class="icon-font icon-search"></i></button><a class="notes__search-clear" href="#" title=""><i class="icon-font icon-error"></i></a>
          </div>
          <div class="c-dropdown"><a href="#" id="createNotesMain1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="icon-font icon-switcher-add"></i></a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="createNotesMain1">
              <router-link class="dropdown-item" to="book">
                <span>Book</span>
              </router-link>
              <router-link class="dropdown-item" to="passage">
                <span>Passage</span>
              </router-link>
              <router-link class="dropdown-item" to="flashcard">
                <span>Flashcards</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section__subtitle section__subtitle--classes">
      <md-progress-bar v-if="notes.length && isNotesLoading" md-mode="indeterminate"></md-progress-bar>
      <SortByDropdown
        @input="setNotesSortBy($event)"
        :value="notesSortBy"
        :items="notes">Notes</SortByDropdown>
    </div>
    <Spinner v-if="!notes.length && isNotesLoading" line-fg-color="#00bd70" size="large"></Spinner>
    <NoteBox
      v-if="notes.length || !isNotesLoading"
      @view="onNoteViewClick($event)"
      @edit="onNoteEditClick($event)"
      @delete="onDeleteNote($event.id)"
      :notes="sortedNotes"
      :isNoteDeleteLoading="isNoteDeleteLoading"></NoteBox>
  </div>
</template>

<script>
  import {
    mapGetters,
    mapMutations,
    mapActions
  } from 'vuex';
  import Spinner from 'vue-simple-spinner';

  import SortByDropdown from '../Controls/SortByDropdown.vue';
  import NoteBox from '../Controls/NoteBox.vue';
  import { sortBy, filterBy } from '../../helpers';

  export default {
    name: "NotesIndex",
    components: {
      Spinner,
      SortByDropdown,
      NoteBox
    },
    data() {
      return {
        deletedNoteId: null,
        searchPhrase: ''
      };
    },
    mounted() {
      this.getNotes();
    },
    created() {
      this.setDisplayedSidebarMenu('notes');
    },
    computed: {
      ...mapGetters({
        notes: 'notes/notes',
        isNotesLoading: 'notes/isNotesLoading',
        isNoteDeleteLoading: 'notes/isNoteDeleteLoading',
        notesSortBy: 'notes/notesSortBy'
      }),
      baseImgUrl() {
        return process.env.STATIC_URL;
      },
      sortedNotes() {
        let sorted = sortBy(this.notes, this.notesSortBy);
        return filterBy(sorted, this.searchPhrase);
      }
    },
    methods: {
      ...mapMutations(['setDisplayedSidebarMenu']),
      ...mapMutations({
        setNotes: 'notes/SET_NOTES',
        setNotesSortBy: 'notes/SET_NOTES_SORT_BY',
        setCurrentNote: 'notes/SET_CURRENT_NOTE'
      }),
      ...mapActions({
        getNotes: 'notes/getNotes',
        deleteNote: 'notes/deleteNote'
      }),
      onNoteViewClick(note) {
        this.setCurrentNote(note);
        this.$router.push({name: `view-note`, params: {id: note.id}});
      },
      onNoteEditClick(note) {
        this.setCurrentNote(note);
        this.$router.push({name: `edit-${note.type}`, params: {id: note.id}});
      },
      onDeleteNote(noteId) {
        this.deleteNote(noteId);
        this.deletedNoteId = noteId;
      }
    }
  }
</script>

<style scoped>

</style>
