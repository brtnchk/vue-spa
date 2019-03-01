<template>
  <div>
    <MainSidebarMenu v-if="displayedSidebarMenu === 'main'"></MainSidebarMenu>
    <SettingsSidebarMenu v-if="displayedSidebarMenu === 'settings'"></SettingsSidebarMenu>
    <NoteSidebarMenu v-if="displayedSidebarMenu === 'notes'"></NoteSidebarMenu>
    <CoursesSidebarMenu v-if="displayedSidebarMenu === 'courses'"></CoursesSidebarMenu>
    <BrowseSidebarMenu v-if="displayedSidebarMenu === 'browse'"></BrowseSidebarMenu>
  </div>
</template>

<script>
  import methods from './mixins';

  import MainSidebarMenu from './MainSidebarMenu.vue';
  import SettingsSidebarMenu from './SettingsSidebarMenu.vue';
  import NoteSidebarMenu from './NoteSidebarMenu.vue';
  import CoursesSidebarMenu from './CoursesSidebarMenu.vue';
  import BrowseSidebarMenu from './BrowseSidebarMenu.vue';

  export default {
    name: 'SidebarMenu',
    components: {
      MainSidebarMenu,
      SettingsSidebarMenu,
      NoteSidebarMenu,
      CoursesSidebarMenu,
      BrowseSidebarMenu
    },
    mixins: [
      methods
    ],
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
