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
    <nav class="nav nav--header">
      <ul class="nav__list">
        <li
          v-for="(item, index) in menuItems"
          @click.prevent="onItemClick"
          class="nav__item nav__item-0 nav__item-profile">
          <router-link
            :to="item.route"
            :class="['nav__link nav__link-' + index, {'is-active': item.active}]">
            <div class="nav__link-icon">
              <i :class="['icon-font', item.icon]"></i>
            </div>
            <span class="nav__link-text">{{ item.title }}</span>
          </router-link>
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
      return {
        menuItems: [
          {
            title: 'Profile',
            route: '/settings',
            name: 'profile',
            icon: 'icon-profile',
            active: false
          },
          {
            title: 'Account',
            route: '/settings/account',
            name: 'account',
            icon: 'icon-account',
            active: false
          },
//          {
//            title: 'Notification',
//            route: '/settings/notification',
//            name: 'notification',
//            icon: 'icon-notification',
//            active: false
//          },
          {
            title: 'Refer a friend',
            route: '/settings/refer-friend',
            name: 'refer-friend',
            icon: 'icon-refer',
            active: false
          },
          {
            title: 'Billing methods',
            route: '/settings/billing-methods',
            name: 'billing-methods',
            icon: 'icon-billing',
            active: false
          }
        ]
      };
    },
    created() {
      this.onItemClick();
    },
    computed: {},
    methods: {
      onItemClick() {
        this.menuItems = this.getNewMenuItems(this.$route.name);
      },
      getNewMenuItems(routeName) {
        return this.menuItems.map(item => {
          let newItem = {...item};
          newItem.active = item.name === routeName;

          return newItem;
        });
      }
    }
  }
</script>

<style scoped>
</style>
