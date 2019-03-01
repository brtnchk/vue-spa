<template>
  <div v-if="passwordResetState" class="body reset">
    <section class="c-modal c-modal--reset" id="c-modal">
      <div class="c-modal__wrapper">
        <div class="c-modal__header d-flex align-items-center">
          <p class="c-modal__title subtitle">Reset password</p>
          <!--<a-->
            <!--@click.prevent="hideModal({name: 'passwordReset'})"-->
            <!--class="c-modal__close"-->
            <!--href=""-->
            <!--title="">-->
            <!--<i class="icon-font icon-error"></i>-->
          <!--</a>-->
        </div>
        <div class="c-modal__body">
          <form class="form" action="" method="">
            <div
              class="form__field form__field--input"
              :class="{ 'is-invalid': false }">
              <label class="form__label" for="newPassword">New Password</label>
              <div class="form__input-wrap">
                <input
                  class="form__input"
                  type="text"
                  id="newPassword"
                  name="resetSendEmail"
                  placeholder=""
                  v-model="newPassword"
                  v-validate="'required|min:6|max:60'"
                  data-vv-name="newPassword">
              </div>
              <div class="form__notify">
                <span class="text-danger">{{ errors.first('newPassword') }}</span>
              </div>
            </div>
            <div
              class="form__field form__field--input"
              :class="{ 'is-invalid': false }">
              <label class="form__label" for="confirmPassword">Confirm Password</label>
              <div class="form__input-wrap">
                <input
                  class="form__input"
                  type="text"
                  id="confirmPassword"
                  name="resetSendEmail"
                  placeholder=""
                  v-model="confirmPassword"
                  v-validate="'required|min:6|max:60'"
                  data-vv-name="confirmPassword">
              </div>
              <div class="form__notify">
                <span class="text-danger">{{ errors.first('confirmPassword') }}</span>
              </div>
            </div>
            <md-progress-bar v-if="loading" md-mode="indeterminate"></md-progress-bar>
            <div class="form__field form__field--btn">
              <button
                @click.prevent="sumbit"
                :disable="loading"
                class="form__btn form__btn--full"
                type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex';
  import axios from 'axios';

  export default {
    name: 'PasswordResetModal',
    components: {},
    props: [],
    data() {
      return {
        newPassword: '',
        confirmPassword: '',
        loading: false
      };
    },
    mounted() {
    },
    created() {
    },
    computed: {
      ...mapGetters(['passwordResetState']),
      token() {
        return this.$route.query.token;
      }
    },
    methods: {
      ...mapActions(['hideModal']),
      ...mapActions({
        changePassword: 'auth/changePassword'
      }),
      sumbit() {
        this.$validator.validate().then(valid => {
          if (valid === false) return;

          this.loading = true;
          this.changePassword({token: this.token, password: this.newPassword}).then(err => {
            this.loading = false;
            if (!err) {
              this.$router.push({name: 'notes'});
              this.hideModal({name: 'passwordReset'});

              return;
            }

            this.$validator.errors.add({field: 'newPassword', msg: err.response.data});
          }).catch(_ => this.loading = false);
        });
      }
    }
  }
</script>

<style scoped>
</style>
