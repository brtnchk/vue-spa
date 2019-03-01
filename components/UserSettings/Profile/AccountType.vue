<template>
  <div class="section__block section__block--type">
    <p class="section__block-title">Account type</p>
    <p class="section__block-subtitle">Select your account type:</p>
    <form class="form" action="" method="">
      <div
        class="form__field form__field--checkbox"
        v-for="(value, key) in accountTypes">
        <div class="form__checkbox-wrap">
          <input
            class="form__checkbox"
            type="checkbox"
            :id="'account-type-'+key"
            name=""
            v-model="form.account_type"
            :value="key"
          >
          <label :for="'account-type-'+key">
            <u></u><span>{{value}}</span><i class="icon-font icon-check"></i>
          </label>
        </div>
      </div>
      <div class="section__block-footer">
        <button
          class="c-btn c-btn--bigH c-btn--darkGreen"
          type="submit"
          :disabled="loading"
          @click.prevent="handleSubmit"
        >Save</button>
      </div>
    </form>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  import requests from '@/mixins/requests';

  export default {
    name: "AccountType",
    $_veeValidate: {
      validator: 'settingsAccountType',
    },
    mixins: [requests],
    data() {
      return {
        form: this.formData(),
      }
    },
    methods: {
      ...mapActions({save: 'settings/updateSettings'}),
      formData() {
        return {
          account_type: [],
        };
      },
      handleSubmit() {
        this.postRequest('settings/update', this.form).then(response => {
          if (response && response.status === 201) {
            this.form.account_type = response.data.settings.account_type;
            this.save({settings: response.data.settings})
          }
        });
      }
    },
    computed: {
      ...mapGetters({
        accountTypes: 'settings/accountTypes',
        user: 'auth/user'
      })
    },
    created() {
      this.form.account_type = this.user.settings.account_type;
    }
  }
</script>

<style scoped>

</style>
