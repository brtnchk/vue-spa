<template>
  <section class="menu" id="menu">
    <nav class="nav nav--header">
      <ul class="nav__list">
        <li
          v-for="(item, index) in menuItems"
          v-show="item.show"
          @click.prevent="onItemClick"
          class="nav__item nav__item-0 nav__item-browse">
          <a
            @click.prevent="goTo(item.name)"
            :class="['nav__link nav__link-' + index, {'is-active': item.active}]"
            href=""
            title="">
            <div class="nav__link-icon">
              <i :class="['icon-font', item.icon]"></i>
            </div>
            <span class="nav__link-text">{{ item.title }}</span>
          </a>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
  import methods from './mixins';

  export default {
    name: '',
    components: {},
    mixins: [
      methods
    ],
    data() {
      return {};
    },
    created() {
      this.onItemClick();
    },
    computed: {},
    methods: {
    }
  }
</script>

<style scoped>
</style>
