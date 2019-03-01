<template>
  <div class="section__block section__block--username">
    <p class="section__block-title">Change password</p>
    <p class="section__block-text section__block-text--p">To confirm it's really you, please verify your Memscore password.</p>
      <form class="form" @submit.prevent="changePassword">
        <div v-if="message" class="alert alert-info">
          {{ message }}
        </div>
        <div class="form__field form__field--input" :class="{'is-invalid': errors.first('old_password')}">
          <label class="form__label" for="oldPassword">Current password</label>
          <div class="form__input-wrap">
            <input
              v-model="form.old_password"
              v-validate="'required|min:6|max:60'"
              data-vv-name="old_password"
              class="form__input"
              type="password"
              id="oldPassword"
              name="old_password"
              placeholder="******">
          </div>
          <div class="form__notify">
            <span class="text-danger">{{ errors.first('old_password') }}</span>
          </div>
        </div>
        <div class="form__field form__field--input" :class="{'is-invalid': errors.first('password')}">
          <label class="form__label" for="password">New password</label>
          <div class="form__input-wrap">
            <input
              v-model="form.password"
              v-validate="'required|min:6|max:60'"
              data-vv-name="password"
              class="form__input"
              type="password"
              id="password"
              name="password"
              placeholder="******">
          </div>
          <div class="form__notify">
            <span class="text-danger">{{ errors.first('password') }}</span>
          </div>
        </div>
        <div class="section__block-footer">
          <p>If you forgot your password, you can <a href='#'>reset your password.</a></p>
          <button class="c-btn c-btn--bigH c-btn--darkGreen" type="submit" :disabled="loading">Continue</button>
        </div>
      </form>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import requests from '@/mixins/requests';

  export default {
    name: "ChangePassword",
    mixins: [requests],
    data() {
      return {
        form: this.formData(),
        error: this.formError(),
        message: ''
      };
    },
    computed: {
      ...mapGetters(['loginModalState', 'loading'])
    },
    methods: {
      formData() {
        return {
          old_password: '',
          password: ''
        };
      },
      formError() {
        return {
          status: false,
          message: '',
        }
      },
      changePassword() {
        this.error = this.formError();
        this.postRequest('settings/change-password', this.form).then(response => {
          if (response && response.status === 200) {
            this.clear();
            this.message = response.data.message;
            setTimeout(_ => {
              this.message = '';
            }, 5000);
          }
        });
      }
    }
  }
</script>

<style lang="css">
</style>
