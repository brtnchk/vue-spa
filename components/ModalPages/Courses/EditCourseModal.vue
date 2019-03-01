<template>
  <div v-if="editCourseState" class="body p-courses">
    <section class="c-modal c-modal--coursesEdit" id="c-modal">
      <div class="c-modal__wrapper">
        <div class="c-modal__header d-flex align-items-center">
          <p class="c-modal__title subtitle">Edit course</p>
          <a class="c-modal__close" href="#" @click.prevent="hideModal({name: 'editCourse'})" title="">
            <i class="icon-font icon-error"></i>
          </a>
        </div>
        <div class="c-modal__body">
          <form class="form" @submit.prevent="submit" >
            <div class="form__field form__field--input">
              <label class="form__label" for="title">Title</label>
              <div class="form__input-wrap">
                <input class="form__input" type="text" id="title" name="title" v-model="currentCourse.title">
              </div>
              <div class="form__notify form__notify--hide"></div>
            </div>
            <label class="form__label">Category (optional)</label>
            <div class="form__field form__field--select">
              <div class="form__select-wrap">
                <SelectControl v-model="currentCourse.category_id" :items="categories"></SelectControl>
              </div>
            </div>
            <div class="form__field form__field--input">
              <label class="form__label" for="description">Description</label>
              <div class="form__input-wrap">
                <input class="form__input" type="text" id="description" v-model="currentCourse.description" name="description">
              </div>
              <div class="form__notify form__notify--hide"></div>
            </div>
            <div class="form__field form__field--btn">
              <button class="form__btn" type="submit">Save</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import requests from '@/mixins/requests';
  import {mapActions, mapGetters} from 'vuex';

  import SelectControl from '../../Controls/SelectControl.vue';

  export default {
    name: "EditCourseModal",
    mixins: [requests],
    props:["id"],
    $_veeValidate: {
      validator: 'edit-course',
    },
    components: {
      SelectControl
    },
    data() {
      return {
        form: {
          title: '',
          description: '',
          category_id: '',
        },
      };
    },
    mounted() {
//      this.setLoading(true);
//      this.getMyCategories();
//      this.getCourse(this.id)
//        .then((course) => {
//          this.form = course;
//          this.setLoading(false);
//        });
    },
    computed: {
      ...mapGetters(['editCourseState']),
      ...mapGetters({
        categories: 'categories/myCategories',
        courses: 'courses/myCourses',
        currentCourse: 'courses/currentCourse'
      }),
      selectedCategory() {
        return this.categories.filter((c) => c.id === this.form.category_id)[0] || {
          title: 'Course category',
        };
      },
    },
    methods: {
      ...mapActions(['hideModal']),
      ...mapActions({
        setLoading: 'setLoading',
        getCourse: 'courses/getCourse',
        updateCourse: 'courses/updateCourse',
        getMyCategories: 'categories/getMyCategories',
      }),
      formData() {
        return {
          title: '',
          description: '',
          category_id: '',
        };
      },
      submit() {
        this.$validator.validateAll();
        this.updateCourse(this.currentCourse)
          .then(response => {
            this.hideModal({name: 'editCourse'});
            this.clear();
          });
      },
    }
  }
</script>
