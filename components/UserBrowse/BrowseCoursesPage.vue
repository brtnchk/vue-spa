<template>
  <div class="section__wrapper-right">
    <div class="section__title section__title--browse">
      <div class="section__title-wrap">
        <div class="section__title-left">
          <div class="section__title-icon"><i class="icon-font icon-browse"></i></div><span>Browse</span>
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
        </div>
      </div>
    </div>
    <div class="section__subtitle section__subtitle--search">
      <div class="section__subtitle-wrap">
        <div class="section__subtitle-left">
          <div class="section__subtitle-icon">
            <i class="icon-font icon-notes"></i>
          </div>
          <span v-if="isCoursesLoading">0 Courses</span>
          <span v-else>{{ courses.length }} Courses</span>
        </div>
        <div class="section__subtitle-right">
          <a @click.prevent="showFilter = !showFilter" href="#" title="">
            <i class="icon-font icon-filter"></i>
            <span>Filter</span>
          </a>
        </div>
      </div>
    </div>
    <SearchFilter @input="onFilterInput($event)" :loading="isCoursesLoading" :show="showFilter"></SearchFilter>
    <div class="browse">
      <Spinner v-if="isCoursesLoading" line-fg-color="#00bd70" size="large"></Spinner>
      <div v-else class="notes__box-wrapper">
        <div v-for="course in sortedCourses" class="notes__box">
          <div @click.prevent="onCourseClick(course)" :style="{cursor: 'pointer'}" class="notes__box-left"></div>
          <div @click.prevent="onCourseClick(course)" :style="{cursor: 'pointer'}" class="notes__box-middle">
            <p class="notes__box-title">{{ course.title }}</p>
            <div class="notes__box-info">
              <!--<a href="#" title=""><i class="icon-font icon-select"></i><span>12K</span></a>-->
              <!--<a href="#" title=""><i class="icon-font icon-like"></i><span>567</span></a>-->
              <!--<a href="#" title=""><i class="icon-font icon-save"></i><span>67</span></a>-->
              <!--<a href="#" title=""><i class="icon-font icon-profile"></i><span>{{user.username}}</span></a>-->
              <a href="#" title="">
                <i class="icon-font icon-recent"></i>
                <span>{{ course.created_at | moment("from", "now") }}</span>
              </a>
            </div>
          </div>
          <div class="notes__box-right">
            <div class="notes__box-drop c-dropdown">
              <div class="dropdown">
                <a class="dropdown__btn" href="#" id="notesBox0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span></span><span></span><span></span>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="notesBox0">
                  <!--<a @click.prevent="edit(course)" class="dropdown-item" href="#">-->
                  <!--<div><i class="icon-font icon-edit"></i></div>-->
                  <!--<span>Edit</span>-->
                  <!--</a>-->
                  <a @click.prevent="remove(course)" class="dropdown-item" href="#">
                    <div><i class="icon-font icon-remove"></i></div>
                    <span>Remove</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters, mapMutations } from 'vuex';
  import Spinner from 'vue-simple-spinner';

  import { filterBy, filterByCategoryId } from '../../helpers';
  import SearchFilter from '../Controls/SearchFilter.vue';

  export default {
    name: 'BrowseCoursesPage',
    components: {
      Spinner,
      SearchFilter
    },
    props: [],
    data() {
      return {
        showFilter: true,
        searchPhrase: '',
        filter: null
      };
    },
    mounted() {
      this.setDisplayedSidebarMenu('browse');
    },
    created() {
    },
    destroyed() {
      this.setCourses([]);
    },
    watch: {
      selectedCatorogyIdForCourses: {
        handler(id) {
          this.filter.setCategoryId(id);
          this.getCourses(this.filter.json());
        }
      }
    },
    computed: {
      ...mapGetters({
        courses: 'courses/courses',
        isCoursesLoading: 'courses/isCoursesLoading',
        selectedCatorogyIdForCourses: 'selectedCatorogyIdForCourses'
      }),
      sortedCourses() {
        return filterBy(this.courses, this.searchPhrase);
      }
    },
    methods: {
      ...mapMutations({
        setDisplayedSidebarMenu: 'setDisplayedSidebarMenu',
        setCoursesSortBy: 'courses/SET_COURSES_SORT_BY',
        setCurrentCourse: 'courses/SET_CURRENT_COURSE',
        setCourses: 'courses/SET_COURSES'
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
      },
      onFilterInput(filter) {
        this.filter = filter;
        this.getCourses(filter.json());
      }
    }
  }
</script>

<style scoped>
</style>
