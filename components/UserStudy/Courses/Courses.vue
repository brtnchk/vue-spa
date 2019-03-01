<template>
  <div class="section__wrapper-right">
    <div class="section__title section__title--notes">
      <div class="section__title-wrap">
        <div class="section__title-left">
          <div class="section__title-icon">
            <i class="icon-font icon-folder"></i>
          </div>
          <span>Courses</span>
        </div>
        <div class="section__title-right">
          <div class="notes__search">
            <input
              v-model="searchPhrase"
              class="notes__search-input"
              type="text"
              name=""
              placeholder="Search courses">
            <button class="notes__search-btn" type="submit">
              <i class="icon-font icon-search"></i>
            </button>
            <a class="notes__search-clear" href="#" title="">
              <i class="icon-font icon-error"></i>
            </a>
          </div>
          <div class="c-dropdown">
            <a href="" @click.prevent="onShowCreateModal">
              <i class="icon-font icon-folder-add"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="section__subtitle section__subtitle--classes">
      <md-progress-bar v-if="courses.length && isCoursesLoading" md-mode="indeterminate"></md-progress-bar>
      <SortByDropdown
        @input="setCoursesSortBy($event)"
        :value="coursesSortBy"
        :items="courses">Courses</SortByDropdown>
    </div>
    <Spinner v-if="!courses.length && isCoursesLoading" line-fg-color="#00bd70" size="large"></Spinner>
    <NoteBox
      v-else
      @view="onCourseClick($event)"
      @delete="remove($event)"
      :notes="sortedCourses"
      :editEvent="false"></NoteBox>
  </div>
</template>

<script>
  import {
    mapActions,
    mapGetters,
    mapMutations
  } from 'vuex';
  import Spinner from 'vue-simple-spinner';

  import SortByDropdown from '../../Controls/SortByDropdown.vue';
  import NoteBox from '../../Controls/NoteBox.vue';
  import { sortBy, filterBy } from '../../../helpers';

  export default {
    name: "Courses",
    components: {
      Spinner,
      SortByDropdown,
      NoteBox
    },
    data() {
      return {
        searchPhrase: ''
      };
    },
    mounted() {
      this.getCourses();
      this.getMyCategories();
    },
    created() {
      this.setDisplayedSidebarMenu('courses');
    },
    computed: {
      ...mapGetters({
        courses: 'courses/courses',
        user: 'auth/user',
        coursesSortBy: 'courses/coursesSortBy',
        isCoursesLoading: 'courses/isCoursesLoading'
      }),
      sortedCourses() {
        let sorted = sortBy(this.courses, this.coursesSortBy);
        return filterBy(sorted, this.searchPhrase);
      }
    },
    methods: {
      ...mapMutations({
        setDisplayedSidebarMenu: 'setDisplayedSidebarMenu',
        setCoursesSortBy: 'courses/SET_COURSES_SORT_BY',
        setCurrentCourse: 'courses/SET_CURRENT_COURSE'
      }),
      ...mapActions({
        setLoading: 'setLoading',
        getMyCourses: 'courses/getMyCourses',
        getCourses: 'courses/getCourses',
        getUser: 'auth/getUser',
        showModal: 'showModal',
        getMyCategories: 'categories/getMyCategories',
      }),
      onShowCreateModal() {
        this.showModal({
          name: 'createCourse',
          cb: refresh => refresh && this.getCourses()
        });
      },
      edit(course) {
        this.setCurrentCourse(course);
        this.showModal({name: 'editCourse'});
      },
      remove(course) {
        this.setCurrentCourse(course);
        this.showModal({name: 'removeCourse'});
      },
      onNoteEditClick(course) {
//        this.setCurrentNote(course);
//        this.$router.push({name: `edit-${note.type}`, params: {id: note.id}});
      },
      onCourseClick(course) {
        this.setCurrentCourse(course);
        this.goTo('course', {id: course.id});
      },
      goTo(routeName, params) {
        this.$router.push({name: routeName, params})
      }
    }
  }
</script>

<style scoped>

</style>
