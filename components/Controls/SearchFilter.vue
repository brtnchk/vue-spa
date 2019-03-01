<template>
  <div v-show="show" class="search__filter">
    <div class="search__filter-wrapper">
      <div class="search__filter-left">
        <p class="search__filter-title">Upload Date</p>
        <ul>
          <li>
            <a
              @click.prevent="onFilterChange(filter.setDateToday)"
              :class="{'is-active': filter.isToday()}"
              href="#"
              title="">Today</a>
          </li>
          <li>
            <a
              @click.prevent="onFilterChange(filter.setDateThisWeek)"
              :class="{'is-active': filter.isThisWeek()}"
              href="#"
              title="">This week</a>
          </li>
          <li>
            <a
              @click.prevent="onFilterChange(filter.setDateThisMounth)"
              :class="{'is-active': filter.isThisMounth()}"
              href="#"
              title="">This month</a>
          </li>
          <li>
            <a
              @click.prevent="onFilterChange(filter.setDateThisYear)"
              :class="{'is-active': filter.isThisYear()}"
              href="#"
              title="">This year</a>
          </li>
        </ul>
      </div>
      <div class="search__filter-middle">
        <p class="search__filter-title">Type</p>
        <ul>
          <li>
            <a
              @click.prevent="onFilterChange(filter.setDateTypeAll)"
              :class="{'is-active': filter.isTypeAll()}"
              href="#"
              title="">All</a>
          </li>
          <li>
            <a
              @click.prevent="onFilterChange(filter.setDateTypeBook)"
              :class="{'is-active': filter.isTypeBook()}"
              href="#"
              title="">Books</a>
          </li>
          <li>
            <a
              @click.prevent="onFilterChange(filter.setDateTypePassage)"
              :class="{'is-active': filter.isTypePassage()}"
              href="#"
              title="">Passages</a>
          </li>
          <li>
            <a
              @click.prevent="onFilterChange(filter.setDateTypeFlashcard)"
              :class="{'is-active': filter.isTypeFlashcard()}"
              href="#"
              title="">Flashcards</a>
          </li>
        </ul>
      </div>
      <div class="search__filter-right">
        <p class="search__filter-title">Popularity</p>
        <ul>
          <li>
            <a
              @click.prevent="onFilterChange(filter.setDatePopularityViews)"
              :class="{'is-active': filter.isPopularityViews()}"
              href="#"
              title="">Views</a>
          </li>
          <li>
            <a
              @click.prevent="onFilterChange(filter.setDatePopularityLikes)"
              :class="{'is-active': filter.isPopularityLikes()}"
              href="#"
              title="">Likes</a>
          </li>
          <li>
            <a
              @click.prevent="onFilterChange(filter.setDatePopularitySaves)"
              :class="{'is-active': filter.isPopularitySaves()}"
              href="#"
              title="">Saves</a>
          </li>
          <li>
            <a
              @click.prevent="onFilterChange(filter.setDatePopularityComments)"
              :class="{'is-active': filter.isPopularityComments()}"
              href="#"
              title="">Comments</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { SearchFilter } from './SearchFilter';

  export default {
    name: 'SearchFilter',
    components: {},
    props: {
      loading: {
        type: Boolean,
        default: false
      },
      show: {
        type: Boolean,
        default: false
      },
      factory: {
        type: String,
        default: 'craeateSimple'
      }
    },
    data() {
      return {
        filter: SearchFilter[this.factory]()
      };
    },
    mounted() {},
    created() {
      this.$emit('input', this.filter);
    },
    computed: {},
    methods: {
      onFilterChange(setter) {
        if (this.loading) return;
        setter.call(this.filter);
        this.$emit('input', this.filter);
      }
    }
  }
</script>

<style scoped>
  .search__filter ul > li > .is-active {
    background: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #F0F0F0 100%);
  }
</style>
