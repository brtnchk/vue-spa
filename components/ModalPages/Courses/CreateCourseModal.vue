<template>
  <div v-if="createCourseState" class="body p-courses">
    <section class="c-modal c-modal--coursesEdit" id="c-modal">
      <div class="c-modal__wrapper">
        <div class="c-modal__header d-flex align-items-center">
          <p class="c-modal__title subtitle">Create a new course</p>
          <a class="c-modal__close" href="#" @click="hideModal({name: 'createCourse'})" title="">
            <i class="icon-font icon-error"></i>
          </a>
        </div>
        <div class="c-modal__body">
          <form class="form" @submit.prevent="submit">
            <div class="form__field form__field--input">
              <label class="form__label" for="title">Title</label>
              <div class="form__input-wrap">
                <input class="form__input" type="text" id="title" name="title" placeholder="Course title" v-model="form.title">
              </div>
              <div class="form__notify form__notify--hide"></div>
            </div>
            <label class="form__label">Category (optional)</label>
            <div class="form__field form__field--select">
              <div class="form__select-wrap">
                <SelectControl v-model="form.category_id" :items="categories"></SelectControl>
              </div>
            </div>
            <div class="form__field form__field--input">
              <label class="form__label" for="description">Description</label>
              <div class="form__input-wrap">
                <input class="form__input" type="text" id="description" v-model="form.description" name="description" placeholder="Enter description">
              </div>
              <div class="form__notify form__notify--hide"></div>
            </div>
            <div class="form__field form__field--btn">
              <button class="form__btn" type="submit">Create a course</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import requests from '@/mixins/requests';
  import {
    mapActions,
    mapGetters
  } from 'vuex';

  import SelectControl from '../../Controls/SelectControl.vue';

  export default {
    name: "CreateCourseModal",
    mixins: [requests],
    $_veeValidate: {
      validator: 'new-course',
    },
    components: {
      SelectControl
    },
    data() {
      return {
        form: {
          title: '',
          description: '',
          category_id: 0,
        },
      };
    },
    computed: {
      ...mapGetters(['createCourseState']),
      ...mapGetters({
        categories: 'categories/myCategories',
      }),
      selectedCategory() {
        return this.categories.filter((c) => c.id === this.form.category_id)[0] || {
          title: 'Course category',
        };
      },
    },
    methods: {
      ...mapActions(['hideModal']),
      formData() {
        return {
          title: '',
          description: '',
          category_id: 0,
        };
      },
      submit() {
        this.$validator.validateAll();
        this.postRequest('courses', this.form).then(response => {
          if (response && response.status === 201) {
            this.hideModal({name: 'createCourse', payload: true});
            this.clear();
          }
        });
      }
    }
  }
</script>
