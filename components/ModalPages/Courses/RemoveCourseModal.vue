<template>
  <div v-if="removeCourseState" class="body p-courses">
    <section class="c-modal c-modal--removeNote" id="c-modal">
      <div class="c-modal__wrapper">
        <div class="c-modal__header d-flex align-items-center">
          <p class="c-modal__title subtitle">Remove course</p>
          <a @click.prevent="hideModal({name: 'removeCourse'})" class="c-modal__close" href="" title="">
            <i class="icon-font icon-error"></i>
          </a>
        </div>
        <div class="c-modal__body">
          <p class="c-modal__subinfo">Deleting a course is a PERMANENT action and cannot be undone. Are you sure you want to delete this course? The notes in this course will not be deleted.</p>
          <form class="form" @submit.prevent="submit">
            <div class="form__field form__field--btn">
              <button class="form__btn form__btn--full" type="submit">Remove</button>
              <button class="form__btn form__btn--full" @click="cancel">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex';

  export default {
    name: "RemoveCourse",
    props:['id'],
    computed: {
      ...mapGetters(['removeCourseState']),
      ...mapGetters({
        currentCourse: 'courses/currentCourse'
      }),
    },
    methods: {
      ...mapActions(['hideModal']),
      ...mapActions({
        deleteCourse: 'courses/deleteCourse',
      }),
      submit() {
        this.deleteCourse(this.currentCourse.id)
          .then(response => {
            this.hideModal({name: 'removeCourse'});
          });
      },
      cancel() {
        this.hideModal({name: 'removeCourse'});
      },
    }
  }

</script>

<style scoped>
</style>
