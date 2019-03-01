<template>
  <div class="section__block section__block--appear">
    <p class="section__block-title">How you appear on Memscore</p>
    <form class="form" action="" method="">
      <div class="form__field form__field--checkbox" :class="{ 'form__field--indicator': key=='show_online_indicator' }" v-for="(value, key) in accountAppears">
        <div class="form__checkbox-wrap">
          <input
            class="form__checkbox"
            type="checkbox"
            id="appear2"
            name=""
            :id="'account-appear-'+key"
            v-model="form.appear_type"
            :value="key">
          <label :for="'account-appear-'+key">
            <u></u><span>{{value}}</span><i class="icon-font icon-check"></i>
          </label>
        </div>
      </div>
      <div class="section__block-footer">
        <button
          class="c-btn c-btn--bigH c-btn--darkGreen"
          type="submit"
          @click.prevent="handleSubmit"
          :disabled="loading"
        >Save</button>
      </div>
    </form>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  import requests from '@/mixins/requests';

  export default {
    name: "AccountAppear",
    $_veeValidate: {
      validator: 'settingsAccountAppear',
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
        return {};
      },
      handleSubmit() {
        this.postRequest('settings/update', this.form).then(response => {});
      }
    },
    computed: {
      ...mapGetters({
        accountAppears: 'settings/accountAppears',
        user: 'auth/user'
      })
    },
    created() {
      this.form.appear_type = this.user.settings.appear_type;
    }
  }
</script>

<style scoped>

</style>
