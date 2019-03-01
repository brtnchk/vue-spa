<template>
  <div class="section__subtitle-wrap">
    <div class="section__subtitle-left">
      <div class="section__subtitle-icon"><i class="icon-font icon-notes"></i></div>
      <span>{{ items.length }} <slot></slot></span>
    </div>
    <div class="section__subtitle-right">
      <div class="c-dropdown">
        <a href="#" id="sortBy" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span>
            Sort by:
            <span>{{ value.title }}</span>
          </span>
          <i class="icon-font icon-arrow"></i>
        </a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="sortBy" x-placement="bottom-end" style="position: absolute; transform: translate3d(-186px, 24px, 0px); top: 0px; left: 0px; will-change: transform;">
          <a @click.prevent="onSortByName" class="dropdown-item" href="#"><span>Sort A to Z</span></a>
          <a @click.prevent="onSortByDate" class="dropdown-item" href="#"><span>Sort by date</span></a>
          <!--<a class="dropdown-item" href="#"><span>Custom</span></a>-->
          <a @click.prevent="onSortByDate" class="dropdown-item" href="#"><span>Default</span></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SortByDropdown',
    components: {},
    props: ['items', 'value'],
    computed: {},
    methods: {
      onSortByDate() {
        this.$emit('input', {
          key: 'created_at',
          title: 'Date',
          type: 'date'
        });
      },
      onSortByName() {
        this.$emit('input', {
          key: 'title',
          title: 'Sort A to Z',
          type: 'string'
        });
      }
    }
  }
</script>

<style scoped>
</style>
