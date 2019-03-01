<template>
  <div class="body p-courses">
    <section class="c-modal c-modal--coursesEdit" id="c-modal">
      <div class="c-modal__wrapper">
        <div class="c-modal__header d-flex align-items-center">
          <p class="c-modal__title subtitle">Edit course</p>
          <router-link class="c-modal__close" :to="`/study/courses`" title="">
            <i class="icon-font icon-error"></i>
          </router-link>
        </div>
        <div class="c-modal__body">
          <form class="form" @submit.prevent="submit" >
            <div class="form__field form__field--input">
              <label class="form__label" for="title">Title</label>
              <div class="form__input-wrap">
                <input class="form__input" type="text" id="title" name="title" v-model="form.title">
              </div>
              <div class="form__notify form__notify--hide"></div>
            </div>
            <label class="form__label">Category (optional)</label>
            <div class="form__field form__field--select">
              <div class="form__select-wrap">
                <div class="form__select">
                  <span class="select__value">
                    {{selectedCategory.title}}
                  </span>
                  <select name="category_id" v-model="form.category_id">
                    <option
                      :value="category.id"
                      name="category_id"
                      v-for="category in categories"
                      placeholder="Coure category"
                    >
                      {{category.title}}
                    </option>
                  </select>
                  <span class="select__icon-wrap"><i class="icon-font icon-arrow"></i></span>
                </div>
              </div>
            </div>
            <div class="form__field form__field--input">
              <label class="form__label" for="description">Description</label>
              <div class="form__input-wrap">
                <input class="form__input" type="text" id="description" v-model="form.description" name="description">
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
  export default {
    name: "EditCourse",
    mixins: [requests],
    $_veeValidate: {
      validator: 'edit-course',
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
    methods: {
      ...mapActions({
        setLoading: 'setLoading', 
        getCourse: 'courses/getCourse',
        getCategory: 'categories/getCategory',
        getMyCategories: 'categories/getMyCategories'
      }),
      formData() {
        return {
          title: '',
          description: '',
          category_id: '',
        };
      },
       back(){
        router.go(-1);
      },
      submit() {
        this.$validator.validateAll();
        this.putRequest(`courses/${this.$route.params.id}`, this.form)
        .then(response => {
          if (response && response.status === 200) {
            this.$router.push({path: '/study/courses'});
            this.clear();
          }
        });
      },
    },
    computed: {
      ...mapGetters({
        categories: 'categories/myCategories',
        courses:'courses/myCourses',
        categories:'categories/myCategories'
      }),
      selectedCategory() {
        return this.categories.filter((c) => c.id === this.form.category_id)[0] || {
          title: 'Coure category',
        };
      },
    },
    created() {
      this.setLoading(true);
      this.getMyCategories();
      this.getCategory();
      this.getCourse(this.$route.params.id)
      .then((course) => {
        this.form = course;
        this.setLoading(false);
      });

    }
  }
</script>

<style scoped>

</style>