<template>
  <div class="body p-courses">
    <section class="c-modal c-modal--removeNote" id="c-modal">
      <div class="c-modal__wrapper">
        <div class="c-modal__header d-flex align-items-center">
          <p class="c-modal__title subtitle">Remove course</p>
          <router-link class="c-modal__close" :to="`/study/courses`" title="">
            <i class="icon-font icon-error"></i>
          </router-link>
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
  import axios from 'axios';
  export default {
    name: "RemoveCourse",
    methods: {
      submit() {
        axios.delete(`courses/${this.$route.params.id}`)
        .then(response => {
          if (response && response.status === 200) {
            this.$router.push({
              path: '/study/courses'
            });
          }
        });
      },
      cancel() {
        this.$router.push({
          path: '/study/courses'
        });
      },
    }
  }
    
</script>

<style scoped>
</style>