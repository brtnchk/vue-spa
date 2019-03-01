<template>
  <nav class="nav nav--sidebar nav--sidebar-3 nav--browse nav--wicon">
    <ul class="nav__list">
      <li
        v-for="(category, index) in internalCategories"
        @click.prevent="onCategoryClick(category.id)"
        :class="'nav__item nav__item-' + index">
        <a
          :class="{'is-active': internalSelectedCategoryId === category.id}"
          class="nav__link nav__link-0"
          href="#"
          title="">{{ category.title }}</a>
      </li>
      <li v-if="categories.length > displayedCategories && reduceCategories" class="nav__item nav__item-more">
        <a @click.prevent="reduceCategories=false" class="nav__link nav__link-more" href="#" title="">
          + Show more
        </a>
      </li>
      <li v-if="categories.length > displayedCategories && !reduceCategories" class="nav__item nav__item-more">
        <a @click.prevent="reduceCategories=true" class="nav__link nav__link-more" href="#" title="">
          - Reduce
        </a>
      </li>
      <li v-if="categories.length <= displayedCategories" class="nav__item nav__item-more"></li>
    </ul>
  </nav>
</template>

<script>
  import {
    mapActions,
    mapGetters,
    mapMutations
  } from 'vuex';

  export default {
    name: 'CategoryList',
    components: {},
    props: {
      categories: {
        type: Array,
        default: []
      },
      selectedCategoryId: {
        type: Number,
        default: null
      },
      displayedCategories: {
        type: Number,
        default: 4
      }
    },
    data() {
      return {
        reduceCategories: true,
        internalSelectedCategoryId: null
      };
    },
    mounted() {},
    created() {},
    watch: {
      selectedCategoryId: {
        immediate: true,
        handler(val) {
          this.internalSelectedCategoryId = val;
        }
      }
    },
    computed: {
      internalCategories() {
        if (!this.reduceCategories) return this.categories.slice(0);
        return this.categories.slice(0, this.displayedCategories);
      }
    },
    methods: {
      onCategoryClick(id) {
        if (this.internalSelectedCategoryId === id) {
          return this.$emit('input', null);
        }

        this.$emit('input', id);
      }
    }
  }
</script>

<style scoped>
</style>
