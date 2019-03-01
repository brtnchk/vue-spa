<template>
  <div id="app">
    <!-- HEADER :: START-->
    <Header></Header>
    <!-- HEADER :: END-->
    <router-view></router-view>
    <!-- FOOTER :: START-->
    <Footer></Footer>
    <!-- FOOTER :: END-->
    <ModalsWrapper></ModalsWrapper>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  import Header from './components/Header';
  import Footer from './components/Footer';
  import ModalsWrapper from './components/ModalPages/ModalsWrapper.vue';

  export default {
    name: 'App',
    components: {
      Header,
      Footer,
      ModalsWrapper
    },
    data () {
      return {
        drawer: true,
        showLogin: false
      }
    },
    computed: {
      ...mapGetters({isAuth: 'auth/isAuth'}),
      message () {
        return this.$store.getters.message;
      }
    },
    methods: {
      ...mapActions({logout: 'auth/logout'}),
      handleLogout () {
        this.logout().then(() => {
          this.$router.push({name: 'login'})
        });
      }
    }
  }
</script>

<style>
  @import "rewrite.css";

  #app > .body--start {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    padding-top: 34px;
    padding-bottom: 34px;
    background-color: #f9fbf9;
  }

  #app > .body--start {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    padding-top: 34px;
    padding-bottom: 34px;
    background-color: #f9fbf9;
  }
</style>
