<template>
  <div class="section__wrapper-right">
    <Spinner
      v-if="isCurrentCourseLoading"
      :style="{'margin-top': '40px'}"
      line-fg-color="#00bd70"
      size="large"></Spinner>
    <div v-if="!isCurrentCourseLoading" class="section__title section__title--browse">
      <div class="section__title-wrap">
        <div class="section__title-left">
          <div class="section__title-icon">
            <i class="icon-font icon-folder"></i>
          </div>
          <span>Courses</span>
          <div class="section__title-icon section__title-icon--arrow">
            <i class="icon-font icon-arrow"></i>
          </div>
          <span>{{currentCourse.title}}</span>
        </div>
        <div class="section__title-right">
          <a
            @click.prevent="onAddNoteClick"
            href=""
            title="">
            <i class="icon-font icon-switcher-add"></i>
          </a>
          <!--<a class="ml-3" href="#" title="">-->
            <!--<i class="icon-font icon-info"></i>-->
          <!--</a>-->
          <div class="c-dropdown ml-4">
            <div class="dropdown">
              <a class="dropdown__btn" href="#" id="notesFlashcardTitle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span></span><span></span><span></span>
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="notesFlashcardTitle">
                <a @click.prevent="showModal({name: 'editCourse'})" class="dropdown-item" href="" >
                  <div>
                    <i class="icon-font icon-edit"></i>
                  </div>
                  <span>Edit</span>
                </a>
                <!--<a class="dropdown-item" href="#">-->
                  <!--<div>-->
                    <!--<i class="icon-font icon-export-2"></i>-->
                  <!--</div>-->
                  <!--<span>Export</span>-->
                <!--</a>-->
                <a @click.prevent="onRemoveModalClick" class="dropdown-item" href="">
                  <div>
                    <i class="icon-font icon-remove"></i>
                  </div>
                  <span>Remove</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section__title-desc">
        <p>{{currentCourse.description}}</p>
      </div>
    </div>
    <div v-if="!isCurrentCourseLoading" class="bill">
      <div class="bill__wrapper">
        <div class="bill__row bill__row-0 bill__row--info">
          <a href="#" title=""><i class="icon-font icon-profile"></i><span>{{user.username}}</span></a>
          <!--<a href="#" title=""><i class="icon-font icon-notes"></i><span>2</span></a>-->
          <!--<a href="#" title=""><i class="icon-font icon-select"></i><span>12K</span></a>-->
          <!--<a href="#" title=""><i class="icon-font icon-like"></i><span>567</span></a>-->
          <!--<a href="#" title=""><i class="icon-font icon-save"></i><span>67</span></a>-->
          <a href="#" title="">
            <i class="icon-font icon-recent"></i>
            <span>{{ currentCourse.created_at | moment("from", "now") }}</span>
          </a>
        </div>
      </div>
    </div>
    <Spinner v-if="!isCurrentCourseLoading && isNotesLoading" line-fg-color="#00bd70" size="large"></Spinner>
    <NoteBox
      v-if="!isNotesLoading && !hasNoNotes"
      @view="onNoteViewClick($event)"
      @edit="onNoteEditClick($event)"
      @delete="onDeleteNote($event.id)"
      :notes="notes"
      :isNoteDeleteLoading="isNoteDeleteLoading"></NoteBox>
    <div v-if="hasNoNotes" class="search__empty">
      <p>This course has no notes yet</p>
      <p>Organize your notes into courses</p>
      <a
        @click.prevent="onAddNoteClick"
        class="c-btn c-btn--bigH c-btn--darkGreen"
        href=""
        title="">
        <i class="icon-font icon-switcher-add"></i>
        <span>Add a note</span>
      </a>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters, mapMutations } from 'vuex';
  import Spinner from 'vue-simple-spinner';

  import requests from '@/mixins/requests';
  import NoteBox from '../../Controls/NoteBox.vue';

  export default {
    name: "Course",
    components: {
      Spinner,
      NoteBox
    },
    data() {
      return {
        deletedNoteId: null
      };
    },
    mounted() {
      this.setDisplayedSidebarMenu('courses');
      this.getCourse(this.$route.params.id);
      this.getCourses();
      this.getNotes();
    },
    computed: {
      ...mapGetters({
        courses: 'courses/courses',
        notes: 'notes/notes',
        user: 'auth/user',
        currentCourse: 'courses/currentCourse',
        isCurrentCourseLoading: 'courses/isCurrentCourseLoading',
        isNoteDeleteLoading: 'notes/isNoteDeleteLoading',
        isNotesLoading: 'notes/isNotesLoading'
      }),
      hasNoNotes() {
        return !this.isCurrentCourseLoading && !this.isNotesLoading && this.notes.length === 0;
      }
    },
    methods: {
      ...mapMutations({
        setDisplayedSidebarMenu: 'setDisplayedSidebarMenu',
        setNotes: 'notes/SET_NOTES',
        setNotesSortBy: 'notes/SET_NOTES_SORT_BY',
        setCurrentNote: 'notes/SET_CURRENT_NOTE'
      }),
      ...mapActions({
        getCourses: 'courses/getCourses',
        getCourse: 'courses/getCourse',
        getNotes: 'notes/getNotes',
        deleteNote: 'notes/deleteNote',
        getUser: 'auth/getUser',
        showModal: 'showModal'
      }),
      onRemoveModalClick() {
        this.showModal({
          name: 'removeCourse',
          cb: _ => this.$router.push({name: 'courses'})
        })
      },
      onAddNoteClick() {
        if (this.isNotesLoading) return;
        this.showModal({name: 'addNote'});
      },
      onNoteEditClick(note) {
        this.setCurrentNote(note);
        this.$router.push({name: `edit-${note.type}`, params: {id: note.id}});
      },
      onNoteViewClick(note) {
        this.setCurrentNote(note);
        this.$router.push({name: `view-note`, params: {id: note.id}});
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
