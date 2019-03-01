<template>
  <div class="body p-courses">
    <section class="c-modal c-modal--courseSaveNotes" id="c-modal">
      <div class="c-modal__wrapper">
        <div class="c-modal__header d-flex align-items-center">
          <p class="c-modal__title subtitle">Add a note</p><a class="c-modal__close" href="#" title=""><i class="icon-font icon-error"></i></a>
        </div>
        <div class="c-modal__body">
          <form class="form" action="" method="">
            <label class="form__label">Course</label>
            <div class="form__field form__field--select">
              <div class="form__select-wrap">
                <div class="form__select"><span class="select__value"></span>
                  <select name="">
                    <option value="0" disabled selected hidden>Course name 1</option>
                    <option value="1">Some courses title name</option>
                    <option value="1">Some courses title name</option>
                    <option value="1">Some courses title name</option>
                    <option value="1">Some courses title name</option>
                    <option value="1">Some courses title name</option>
                    <option value="1">Some courses title name</option>
                    <option value="1">Some courses title name</option>
                    <option value="1">Some courses title name</option>
                    <option value="1">Some courses title name</option>
                    <option value="1">Some courses title name</option>
                    <option value="1">Some courses title name</option>
                    <option value="1">Some courses title name</option>
                  </select><span class="select__icon-wrap"><i class="icon-font icon-arrow"></i></span>
                </div>
              </div>
            </div>
          </form>
          <div class="btn__wrapper-add"><a class="c-btn c-btn--bigH c-btn--lightGray" href="#" title=""><span>Course 1</span><i class="icon-font icon-plus"></i></a><a class="c-btn c-btn--bigH c-btn--lightGray" href="#" title=""><span>Course 1</span><i class="icon-font icon-plus"></i></a><a class="c-btn c-btn--bigH c-btn--lightGray" href="#" title=""><span>Course 1</span><i class="icon-font icon-plus"></i></a></div>
          <div class="btn__wrapper-link"><a class="c-btn c-btn--bigH c-btn--darkGreen" href="#" title=""><span>This note has been removed from the course</span></a></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'AddNoteThree',
    components: {},
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
