<template>
  <section class="menu" id="menu">
    <div class="menu__wrapper">
      <a class="menu__link" href="#" title="" @click.prevent="setDisplayedSidebarMenu('main')">
        <div class="menu__link-icon">
          <i class="icon-font icon-arrow"></i>
        </div>
        <span>Navigation</span>
      </a>
    </div>
    <nav class="nav nav--sidebar">
      <ul class="nav__list">
        <li class="nav__item nav__item-0 nav__item-folder">
          <a @click.prevent="goTo('courses')" class="nav__link is-active nav__link-0" href="/courses" title="">
            <div class="nav__link-icon"><i class="icon-font icon-folder"></i></div>
            <span class="nav__link-text">Courses</span>
          </a>
        </li>
        <li class="nav__item nav__item-1 nav__item-notes">
          <a @click.prevent="goTo('notes')" class="nav__link nav__link-1" href="/notes" title="">
            <div class="nav__link-icon"><i class="icon-font icon-notes"></i></div>
            <span class="nav__link-text">Notes</span>
          </a>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
  import methods from './mixins';

  export default {
    name: 'CoursesSidebarMenu',
    components: {},
    mixins: [
      methods
    ],
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
