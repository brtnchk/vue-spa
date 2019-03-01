<template>
  <div class="body body--start notes">
    <section class="c-modal c-modal--courseSaveNotes" id="c-modal">
      <div class="c-modal__wrapper">
        <div class="c-modal__header d-flex align-items-center">
          <p class="c-modal__title subtitle">Save to course</p><a class="c-modal__close" href="#" title=""><i class="icon-font icon-error"></i></a>
        </div>
        <div class="c-modal__body">
          <div class="btn__wrapper-link"><a class="c-btn c-btn--bigH c-btn--darkGreen" href="#" title=""><i class="icon-font icon-folder-add"></i><span>Create a new course</span></a></div>
          <div class="btn__wrapper-add"><a class="c-btn c-btn--bigH c-btn--lightGray" href="#" title=""><span>Course 1</span><i class="icon-font icon-plus"></i></a><a class="c-btn c-btn--bigH c-btn--lightGray" href="#" title=""><span>Course 1</span><i class="icon-font icon-plus"></i></a></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'NotesSaveToCourseModal',
    components: {},
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
