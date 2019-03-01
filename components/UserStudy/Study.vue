<template>
  <div class="body body--start p-courses">
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
  import SidebarMenu from '../SidebarMenu/SidebarMenu.vue';

  export default {
    name: "UserStudy",
    components: {
      SidebarMenu
    }
  }
</script>

<style scoped>

</style>
