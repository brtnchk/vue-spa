<template>
  <section class="menu" id="menu">
    <div class="menu__wrapper">
      <a @click.prevent="setDisplayedSidebarMenu('main')" class="menu__link" href="" title="">
        <div class="menu__link-icon"><i class="icon-font icon-arrow"></i></div>
        <span>Navigation</span>
      </a>
    </div>
    <nav class="nav nav--sidebar">
      <ul class="nav__list">
        <li
          @click.prevent="setSelectedCatorogyIdForCourses(null)"
          class="nav__item nav__item-0 nav__item-folder">
          <a @click.prevent="goTo('browse-courses')" class="nav__link nav__link-0" href="#" title="">
            <div class="nav__link-icon">
              <i class="icon-font icon-folder"></i>
            </div>
            <span class="nav__link-text">Courses</span>
          </a>
        </li>
      </ul>
    </nav>
    <CategoryList
      v-if="showCoursesCategories"
      @input="setSelectedCatorogyIdForCourses($event)"
      :categories="categories"
      :selectedCategoryId="selectedCatorogyIdForCourses"></CategoryList>
    <nav class="nav nav--sidebar">
      <ul class="nav__list">
        <li
          @click.prevent="setSelectedCatorogyIdForNotes(null)"
          class="nav__item nav__item-0 nav__item-notes">
          <a @click.prevent="goTo('browse-notes')" class="nav__link nav__link-0" href="#" title="">
            <div class="nav__link-icon">
              <i class="icon-font icon-notes"></i>
            </div>
            <span class="nav__link-text">Notes</span>
          </a>
        </li>
      </ul>
    </nav>
    <CategoryList
      v-if="showNotesCategories"
      @input="setSelectedCatorogyIdForNotes($event)"
      :categories="categories"
      :selectedCategoryId="selectedCatorogyIdForNotes"></CategoryList>
  </section>
</template>

<script>
  import {
    mapActions,
    mapGetters,
    mapMutations
  } from 'vuex';

  import CategoryList from '../Controls/CategoryList.vue';
  import methods from './mixins';

  export default {
    name: 'BrowseSidebarMenu',
    components: {
      CategoryList
    },
    mixins: [
      methods
    ],
    props: [],
    mounted() {
    },
    created() {
      this.getCategories();
      this.setSelectedCatorogyIdForNotes();
      this.setSelectedCatorogyIdForCourses();
    },
    computed: {
      ...mapGetters({
        categories: 'categories/categories',
        selectedCatorogyIdForNotes: 'selectedCatorogyIdForNotes',
        selectedCatorogyIdForCourses: 'selectedCatorogyIdForCourses'
      }),
      showNotesCategories() {
        return this.$route.name === 'browse-notes';
      },
      showCoursesCategories() {
         return this.$route.name === 'browse-courses';
      }
    },
    methods: {
      ...mapMutations({
        setSelectedCatorogyIdForNotes: 'setSelectedCatorogyIdForNotes',
        setSelectedCatorogyIdForCourses: 'setSelectedCatorogyIdForCourses'
      }),
      ...mapActions({
        getCategories: 'categories/getCategories'
      })
    }
  }
</script>

<style scoped>
</style>
