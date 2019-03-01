<template>
  <div class="bill__row bill__row-3 bill__row--tabs">
    <div class="view__tabs-wrapper">
      <a
        v-for="(tab, index) in internalTabs"
        @click.prevent="onTabClick(index)"
        :class="{'is-active': tab.active}"
        class="view__tabs"
        href=""
        title="">{{ tab.title }}</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    components: {},
    props: [
      'tabs'
    ],
    data() {
      return {
        internalTabs: null
      }
    },
    mounted() {
      this.internalTabs = this.tabs.map(item => ({...item}));
    },
    methods: {
      onTabClick(activeIndex) {
        this.internalTabs = this.internalTabs.map((item, index) =>({
          ...item,
          ...{
            active: activeIndex === index
          }
        }));
      }
    }
  }
</script>

<style scoped>
</style>
