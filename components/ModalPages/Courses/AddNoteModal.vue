<template>
  <div v-if="addNoteState" class="body p-courses">
    <section class="c-modal c-modal--courseSaveNotes" id="c-modal">
      <div class="c-modal__wrapper">
        <div class="c-modal__header d-flex align-items-center">
          <p class="c-modal__title subtitle">Add a note</p>
          <a @click.prevent="hideModal({name: 'addNote'})" class="c-modal__close" href="" title="">
            <i class="icon-font icon-error"></i>
          </a>
        </div>
        <div class="c-modal__body">
          <div class="btn__wrapper-link">
            <form class="form" action="" method="">
              <label class="form__label">Course</label>
              <div class="form__field form__field--select">
                <div class="form__select-wrap">
                  <SelectControl v-model="selectedCourse" :items="courses"></SelectControl>
                </div>
                <md-progress-bar v-if="isNoteUpdateLoading" md-mode="indeterminate"></md-progress-bar>
              </div>
            </form>
          </div>
          <div class="btn__wrapper-add">
            <a
              v-for="note in filtratedNotes"
              @click.prevent="onNoteClick(note)"
              class="c-btn c-btn--bigH c-btn--lightGray"
              href=""
              title="">
              <span>{{ note.title }}</span>
              <i
                :class="{'rotate-this-on-45-deg': note.course_id === selectedCourse}"
                class="icon-font icon-plus"></i>
            </a>
          </div>
          <div v-if="bindingNoteMsg" class="btn__wrapper-link">
            <a class="c-btn c-btn--bigH c-btn--darkGreen" href="" title="">
              <span>{{ bindingNoteMsg }}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import {
    mapActions,
    mapGetters,
    mapMutations
  } from 'vuex';

  import SelectControl from '../../Controls/SelectControl.vue';

  export default {
    name: 'AddNoteModal',
    components: {
      SelectControl
    },
    props: [],
    data() {
      return {
        selectedCourse: null,
        timeoutId: null
      }
    },
    mounted() {},
    created() {},
    computed: {
      ...mapGetters(['addNoteState']),
      ...mapGetters({
        courses: 'courses/courses',
        notes: 'notes/notes',
        bindingNoteMsg: 'notes/bindingNoteMsg',
        isNoteUpdateLoading: 'notes/isNoteUpdateLoading',
      }),
      filtratedNotes() {
        return this.notes.filter(note => this.selectedCourse);
      }
    },
    methods: {
      ...mapMutations({
        setBindingsMsg: 'notes/SET_BINDINGS_MSG'
      }),
      ...mapActions(['hideModal']),
      ...mapActions({
        getCourse: 'courses/getCourse',
        getNotes: 'notes/getNotes',
        updateNote: 'notes/updateNote',
        updateNoteBinding: 'notes/updateNoteBinding'
      }),
      async onNoteClick(note) {
        if (this.isNoteUpdateLoading) return;
        if (!this.selectedCourse) return;
        let isBinded = note.course_id === this.selectedCourse;

        await this.updateNoteBinding({
          ...note,
          ...(isBinded ? {course_id: null} : {course_id: this.selectedCourse})
        });
        if (isBinded) {
          this.setBindingsMsg('This note has been removed from the course');
        } else {
          this.setBindingsMsg('This note has been added to the course');
        }
        clearTimeout(this.timeoutId);
        this.timeoutId = setTimeout(_ => (this.setBindingsMsg(null)), 4000);
      }
    }
  }
</script>

<style scoped>
</style>
