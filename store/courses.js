import axios from 'axios';

import { errorsSource } from "../pipes/httpErrors/errorsPipe";

export default {
  namespaced: true,
  state: {
    myCourses: [],
    courses: [],
    currentCourse: {
      category: null,
      category_id: null,
      description: "",
      title: ""
    },
    coursesSortBy: {
      key: 'created_at',
      title: 'Date',
      type: 'date'
    },
    loadings: {
      isCoursesLoading: false,
      isCurrentCourseLoading: false,
    }
  },
  mutations: {
    setAccountAppears(state, courses) {
      state.myCourses = courses;
    },
    SET_COURSES_SORT_BY(state, payload) {
      state.coursesSortBy = payload;
    },
    SET_COURSES(state, courses) {
      state.courses = courses;
    },
    SET_CURRENT_COURSE(state, payload) {
      state.currentCourse = payload;
    },
    UPDATE_COURSE(state, newCourse) {
      state.courses = state.courses.map((course) => {
        return (newCourse.id === course.id) ? newCourse : course;
      });
    },
    DELETE_COURSE(state, id) {
      state.courses = state.courses.filter((course) => {
        return course.id !== id;
      });
    },
    START_COURSES_LOADING(state) {
      state.loadings.isCoursesLoading = true;
    },
    FINISH_COURSES_LOADING(state) {
      state.loadings.isCoursesLoading = false;
    },
    START_CURRENT_COURSE_LOADING(state) {
      state.loadings.isCurrentCourseLoading = true;
    },
    FINISH_CURRENT_COURSE_LOADING(state) {
      state.loadings.isCurrentCourseLoading = false;
    },
  },
  actions: {
    async getCourses({commit, dispatch, state}, params) {
      try {
        commit('START_COURSES_LOADING');
        let courses;
        if (params) {
          courses = (await axios.get('search/course', {params})).data.data;
        } else {
          courses = (await axios.get('courses')).data.data;
        }
        commit('SET_COURSES', courses);
        commit('FINISH_COURSES_LOADING');
      } catch(e) {
        commit('FINISH_COURSES_LOADING');
        errorsSource.next({status: e.response.status, payload: {dispatch, commit, state}});
      }
    },
    getMyCourses({dispatch, commit, state}) {
      return axios.get('courses').then(({data}) => {
        commit('setAccountAppears', data.courses);
        return data.courses;
      }).catch(e => errorsSource.next({status: e.response.status, payload: {dispatch, commit, state}}));
    },
    async getCourse({commit, dispatch, state}, id) {
      try {
        commit('START_CURRENT_COURSE_LOADING');
        let course = (await axios.get(`courses/${id}`)).data.course;
        commit('SET_CURRENT_COURSE', course);
        commit('FINISH_CURRENT_COURSE_LOADING');
      } catch(e) {
        commit('FINISH_CURRENT_COURSE_LOADING');
        errorsSource.next({status: e.response.status, payload: {dispatch, commit, state}});
      }
    },
    updateCourse({dispatch, commit, state}, data) {
      return axios.put(`courses/${data.id}`, data).then(({data}) => {
        commit('UPDATE_COURSE', data.course);
      }).catch(e => errorsSource.next({status: e.response.status, payload: {dispatch, commit, state}}));
    },
    deleteCourse({commit, getters, dispatch, state}, id) {
      return axios.delete(`courses/${id}`).then(({data}) => {
        commit('DELETE_COURSE', id);
      }).catch(e => errorsSource.next({status: e.response.status, payload: {dispatch, commit, state}}));
    },
    resetCurrentCourse({ commit }) {
      commit('SET_CURRENT_COURSE', {
        category: null,
        category_id: null,
        description: "",
        title: ""
      });
    }
  },
  getters: {
    myCourses: (state) => state.myCourses,
    courses: (state) => state.courses,
    currentCourse: (state) => state.currentCourse,
    coursesSortBy: (state) => state.coursesSortBy,
    isCoursesLoading: (state) => state.loadings.isCoursesLoading,
    isCurrentCourseLoading: (state) => state.loadings.isCurrentCourseLoading
  }
}
