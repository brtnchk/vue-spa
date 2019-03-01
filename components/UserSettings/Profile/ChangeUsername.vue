<template>
  <div class="section__block section__block--userOnce">
    <p class="section__block-title">Change username</p>
    <p class="section__block-text">You can change your username only once.</p>
    <form class="form" action="" method="">
      <div class="form__field form__field--input" :class="{'is-invalid': errors.first('username')}">
        <label class="form__label" for="userOnceNew">New username</label>
        <div class="form__input-wrap">
          <input
            class="form__input"
            type="text"
            id="userOnceNew"
            name=""
            placeholder=""
            v-model="form.username"
            v-validate="'required|max:50|min:3|username|checkSpaces'"
            data-vv-name="username"
          >
        </div>
        <div class="form__notify"><span class="text-danger">{{ errors.first('username') }}</span></div>
      </div>
      <div class="section__block-footer">
        <button
          class="c-btn c-btn--bigH c-btn--darkGreen"
          type="submit"
          :disabled="loading"
          @click.prevent="handleSubmit"
        >Permanently change my username</button>
      </div>
    </form>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex';
  import requests from '@/mixins/requests';

  export default {
    name: "ChangeUsername",
    $_veeValidate: {
      validator: 'settingsChangeUsername',
    },
    mixins: [requests],
    data() {
      return {
        form: this.formData()
      }
    },
    created() {
      this.form.username = this.user.username
    },
    computed: {
      ...mapGetters({
        appLoading: 'loading',
        user: 'auth/user'
      })
    },
    methods: {
      ...mapActions({
        update: 'auth/updateUser'
      }),
      formData() {
        return {
          username: '',
        };
      },
      handleSubmit() {
        this.postRequest('user/update', this.form).then(response => {
          if (response && response.status === 201) {
            this.form.username = response.data.username;
            this.update({payload: response.data})
          }
        });
      },
    }
  }
</script>

<style scoped>

</style>
