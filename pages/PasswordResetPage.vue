<template>
  <div class="password-reset"></div>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex';

  export default {
    name: 'PasswordResetPage',
    components: {},
    props: [],
    data() {
      return {}
    },
    mounted() {
    },
    created() {
      this.showModal({name: 'passwordReset'});
    },
    computed: {},
    methods: {
      ...mapActions(['hideModal', 'showModal']),
    }
  }
</script>

<style scoped>
</style>
