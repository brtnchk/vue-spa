<template>
  <div class="body body--start setting">
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
  import {mapMutations, mapActions, mapGetters} from 'vuex';
  import SidebarMenu from '../SidebarMenu/SidebarMenu.vue';

  export default {
    name: "Settings",
    components: {
      SidebarMenu
    },
    data() {
      return {
        loading: true,
        leftMenu: false,
      }
    },
    methods: {
      ...mapMutations(['setDisplayedSidebarMenu']),
      ...mapActions({getSettingsData: 'settings/getSettingsData'}),
    },
    created() {
      // console.log('created')
      this.setDisplayedSidebarMenu('settings');
      this.getSettingsData().then(() => {
        this.loading = false;
        // this.$router.push({path: '/settings/profile'});
      });
    }
  }
</script>

<style scoped>

</style>
