<template>
  <div class="body body--start notes">
    <section class="c-modal c-modal--creteCourse" id="c-modal">
      <div class="c-modal__wrapper">
        <div class="c-modal__header d-flex align-items-center">
          <p class="c-modal__title subtitle">Create a new course</p><a class="c-modal__close" href="#" title=""><i class="icon-font icon-error"></i></a>
        </div>
        <div class="c-modal__body">
          <form class="form" action="" method="">
            <div class="form__field form__field--input">
              <label class="form__label" for="createCourseTitle">Title</label>
              <div class="form__input-wrap">
                <input class="form__input" type="text" id="createCourseTitle" name="createCourseTitle" placeholder="Enter a title">
              </div>
              <div class="form__notify form__notify--hide"></div>
            </div>
            <div class="form__field form__field--input">
              <label class="form__label" for="createCourseDesc">Description (optional)</label>
              <div class="form__input-wrap">
                <input class="form__input" type="text" id="createCourseDesc" name="createCourseDesc" placeholder="Enter a description">
              </div>
              <div class="form__notify form__notify--hide"></div>
            </div>
            <div class="form__field form__field--btn">
              <button class="form__btn form__btn--full" type="submit">Create a course</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'NotesCreateNewCourseModal',
    components: {},
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
