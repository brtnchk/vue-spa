<template>
  <div :class="classes" class="body body--start">
    <section class="section" id="section">
      <div class="c-grid">
        <div class="section__wrapper">
          <div class="section__wrapper-left">
            <SidebarMenu></SidebarMenu>
          </div>
          <router-view/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import SidebarMenu from '../components/SidebarMenu/SidebarMenu.vue';

  export default {
    name: "PageWrapper",
    components: {
      SidebarMenu
    },
    props: {
      classes: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>
</style>
