import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      displayedSidebarMenu: 'displayedSidebarMenu',
      menuItems: 'menuItems'
    })
  },
  methods: {
    ...mapMutations({
      setDisplayedSidebarMenu: 'setDisplayedSidebarMenu',
      UPDATE_MENU_ITEMS: 'UPDATE_MENU_ITEMS'
    }),
    goTo(routeName) {
      this.$router.push({name: routeName})
    },
    onItemClick() {
      this.UPDATE_MENU_ITEMS(this.getNewMenuItems(this.$route.name));
    },
    getNewMenuItems(routeName) {
      return this.menuItems.map(item => {
        let newItem = {...item};
        newItem.active = item.name === routeName;

        return newItem;
      });
    }
  }
};
