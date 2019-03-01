<template>
  <div class="section__wrapper-right">
    <div class="section__title section__title--browse">
      <div class="section__title-wrap">
        <div class="section__title-left">
          <div class="section__title-icon"><i class="icon-font icon-browse"></i></div><span>Browse</span>
        </div>
        <div class="section__title-right">
          <div class="notes__search">
            <input
              v-model="searchPhrase"
              class="notes__search-input"
              type="text"
              name=""
              placeholder="Search note">
            <button class="notes__search-btn" type="submit"><i class="icon-font icon-search"></i></button><a class="notes__search-clear" href="#" title=""><i class="icon-font icon-error"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div class="section__subtitle section__subtitle--search">
      <div class="section__subtitle-wrap">
        <div class="section__subtitle-left">
          <div class="section__subtitle-icon">
            <i class="icon-font icon-notes"></i>
          </div>
          <span v-if="isNotesLoading">0 Notes</span>
          <span v-else>{{ notes.length }} Notes</span>
        </div>
        <div class="section__subtitle-right">
          <a @click.prevent="showFilter = !showFilter" href="#" title="">
            <i class="icon-font icon-filter"></i><span>Filter</span>
          </a>
        </div>
      </div>
    </div>
    <SearchFilter @input="onFilterInput($event)" :loading="isNotesLoading" :show="showFilter"></SearchFilter>
    <div class="browse">
      <Spinner v-if="isNotesLoading" line-fg-color="#00bd70" size="large"></Spinner>
      <div
        v-if="!isNotesLoading"
        class="notes__box-wrapper">
        <div
          v-for="(note, index) in sortedNotes"
          :class="'notes__box notes__box-' + index">
          <md-progress-bar
            v-if="isNoteDeleteLoading && (deletedNoteId === note.id)"
            class="me-snuggle-top"
            md-mode="indeterminate"></md-progress-bar>
          <div
            @click.prevent="onNoteViewClick(note)"
            :style="{cursor: 'pointer'}"
            class="notes__box-left">
            <img
              v-if="note.cover_image"
              :srcset="note.cover_image"
              alt=""
              title="">
          </div>
          <div
            @click.prevent="onNoteViewClick(note, note.user_id)"
            :style="{cursor: 'pointer'}"
            class="notes__box-middle">
            <p class="notes__box-title">{{ note.title }}</p>
            <div class="notes__box-info">
              <!--<a href="#" title="">-->
              <!--<i class="icon-font icon-select"></i>-->
              <!--<span>12K</span>-->
              <!--</a>-->
              <!--<a href="#" title="">-->
              <!--<i class="icon-font icon-like"></i>-->
              <!--<span>567</span>-->
              <!--</a>-->
              <!--<a href="#" title="">-->
              <!--<i class="icon-font icon-save"></i>-->
              <!--<span>67</span>-->
              <!--</a>-->
              <!--<a href="#" title="">-->
              <!--<i class="icon-font icon-profile"></i>-->
              <!--<span>Owner Name</span>-->
              <!--</a>-->
              <a href="#" title="">
                <i class="icon-font icon-recent"></i>
                <span>{{ note.created_at | moment("from", "now") }}</span>
              </a>
            </div>
          </div>
          <div class="notes__box-right">
            <div class="notes__box-drop c-dropdown">
              <div class="dropdown">
                <a
                  :id="'notesBox' + index"
                  class="dropdown__btn"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  <span></span><span></span><span></span>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="notesBox0">
                  <a @click.prevent="onNoteEditClick(note)" :href="note.type + '/edit'" class="dropdown-item">
                    <div><i class="icon-font icon-edit"></i></div>
                    <span>Edit</span>
                  </a>
                  <!--<a class="dropdown-item" href="#">-->
                  <!--<div><i class="icon-font icon-star-full"></i></div>-->
                  <!--<span>Set as primary</span>-->
                  <!--</a>-->
                  <a @click.prevent="onDeleteNote(note.id)" class="dropdown-item" href="">
                    <div><i class="icon-font icon-remove"></i></div>
                    <span>Remove</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters, mapMutations } from 'vuex';
  import Spinner from 'vue-simple-spinner';

  import SearchFilter from '../Controls/SearchFilter.vue';
  import { filterBy, filterByCategoryId } from '../../helpers';

  export default {
    name: 'BrowseNotePage',
    components: {
      Spinner,
      SearchFilter
    },
    props: [],
    data() {
      return {
        showFilter: true,
        deletedNoteId: null,
        searchPhrase: '',
        filter: null
      };
    },
    mounted() {
      this.setSidebarMenu();
      this.$router.push({name: 'browse-notes'});
    },
    created() {},
    destroyed() {
      this.setNotes([]);
    },
    watch: {
      selectedCatorogyIdForNotes: {
        handler(id) {
          this.filter.setCategoryId(id);
          this.getNotes(this.filter.json());
        }
      }
    },
    computed: {
      ...mapGetters({
        notes: 'notes/notes',
        isNotesLoading: 'notes/isNotesLoading',
        isNoteDeleteLoading: 'notes/isNoteDeleteLoading',
        selectedCatorogyIdForNotes: 'selectedCatorogyIdForNotes'
      }),
      sortedNotes() {
        return filterBy(this.notes, this.searchPhrase);
      }
    },
    methods: {
      ...mapMutations({
        setDisplayedSidebarMenu: 'setDisplayedSidebarMenu',
        setNotes: 'notes/SET_NOTES',
        setNotesSortBy: 'notes/SET_NOTES_SORT_BY',
        setCurrentNote: 'notes/SET_CURRENT_NOTE',
        ENABLE_MENU_ITEMS: 'ENABLE_MENU_ITEMS',
        DISABLE_MENU_ITEMS: 'DISABLE_MENU_ITEMS'
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
      },
      onFilterInput(filter) {
        this.filter = filter;
        this.getNotes(filter.json());
      },
      setSidebarMenu() {
        let disabledMenuItems = this.$route.query.disablMenuItems;
        let menu = this.$route.query.menu;
        if (disabledMenuItems) {
          this.setDisplayedSidebarMenu(menu);
          // отключаем ненужные пункты меню из main меню
          this.DISABLE_MENU_ITEMS(JSON.parse(disabledMenuItems));
        } else {
          this.setDisplayedSidebarMenu('browse');
        }
      }
    }
  }
</script>

<style scoped>
</style>
