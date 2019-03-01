<template>
  <div class="email-confirmation">
    <div v-if="confirmationStatus === 'in-process'" class="email-confirmation__in-process mt-5">
      <h1 class="title text-align-center mb-4">
        Email Confirmation
      </h1>
      <Spinner line-fg-color="#00bd70" size="large"></Spinner>
    </div>
    <div v-if="confirmationStatus === 'confirmed'" class="email-confirmation__confirmed mt-5">
      <h1 class="title text-align-center mb-4">
        You e-mail address has been confirmed.
      </h1>
      <p class="text-align-center">
        After 5 seconds you will be redirected to the main page.
      </p>
    </div>
    <div v-if="confirmationStatus === 'unable'" class="email-confirmation__unable mt-5">
      <h1 class="title text-align-center mb-4">
        Unable to confirm the e-mail address
      </h1>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters,
    mapMutations,
    mapActions
  } from 'vuex';
  import axios from 'axios';
  import Spinner from 'vue-simple-spinner';

  export default {
    name: 'EmailConfirmationPage',
    components: {
      Spinner
    },
    props: [],
    data() {
      return {
        confirmationStatus: 'in-process'
      };
    },
    mounted() {
    },
    created() {
      this.confirmEmail();
    },
    computed: {
      ...mapGetters({
        isAuth: 'auth/isAuth'
      }),
      token() {
        return this.$route.query.token;
      }
    },
    methods: {
      ...mapActions({
        showModal: 'showModal'
      }),
      confirmEmail() {
        this.confirmationStatus = 'in-process';

        axios
          .get(`/confirm?token=${this.token}`)
          .then(_ => {
            this.confirmationStatus = 'confirmed';

            if (this.isAuth) {
              setTimeout(_ => {
                this.$router.push({name: 'notes'});
              }, 5000);
            } else {
              setTimeout(_ => {
                this.showModal({name: 'login'});
              }, 5000);
            }
          })
          .catch(_ => this.confirmationStatus = 'unable');
      }
    }
  }
</script>

<style scoped>
</style>
