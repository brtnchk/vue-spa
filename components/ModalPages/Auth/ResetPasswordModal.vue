<template>
    <div class="body reset" v-if="resetPasswordState">
        <section class="c-modal c-modal--reset" id="c-modal">
            <div class="c-modal__wrapper">
                <div class="c-modal__header d-flex align-items-center">
                    <p class="c-modal__title subtitle">Reset password</p>
                    <a class="c-modal__close" href="" title="" @click.prevent="hideModal({name: 'resetPassword'})">
                        <i class="icon-font icon-error"></i>
                    </a>
                </div>
                <div class="c-modal__body">
                    <p class="c-modal__info">or <a href='#'>log in to your account</a></p>
                    <p class="c-modal__text text">Enter the email associated with your account, and we’ll email you a link to reset your password.</p>
                    <div class="alert alert-danger" role="alert" v-if="error.status">
                        {{error.message}}
                    </div>
                    <form class="form" action="" method="">
                        <div class="form__field form__field--input" v-bind:class="{ 'is-invalid': errors.first('email') }">
                            <label class="form__label" for="resetSendEmail">Email</label>
                            <div class="form__input-wrap">
                                <input
                                        class="form__input"
                                        type="text"
                                        id="resetSendEmail"
                                        name="resetSendEmail"
                                        placeholder=""
                                        v-model="form.email"
                                        v-validate="'required|email|max:150'"
                                        data-vv-name="email"
                                >
                            </div>
                            <!--:error-messages="errors.collect('email')"-->
                            <!--<div class="form__notify form__notify&#45;&#45;hide"></div>-->
                            <div class="form__notify"><span class="text-danger">{{ errors.first('email') }}</span></div>
                        </div>
                        <div class="form__field form__field--btn">
                            <button class="form__btn form__btn--full" type="submit" @click.prevent="sendResetLink" :disabled="load">Send reset link</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  import requests from '@/mixins/requests';
  export default {
    name: "ResetPasswordModal",
    $_veeValidate: {
      validator: 'resetPasswordModal',
    },
    mixins: [requests],
    data() {
      return {
        form: this.formData(),
        error: this.emailError(),
        load: false
      };
    },
    methods: {
      ...mapActions(['hideModal']),
      formData() {
        return {
          email: '',
        };
      },
      emailError() {
        return {
          status: false,
          message: '',
        }
      },
      sendResetLink() {
        this.load = true;
        this.error = this.emailError();
        this.$validator.validate().then(result => {
          if (result) {
            this.axios.post('password/email', this.form).then(({data}) => {
              this.hideModal({name: 'resetPassword'});
              this.$router.push({name: 'home'});
              this.load = false;
            }).catch((err) => {
              this.error.message = err.response.data.email;
              this.error.status = true;
              this.load = false;
            })
          } else {
            this.load = false;
          }
        }).catch(() => {
          this.load = false;
        })

      }
    },
    computed: {
      ...mapGetters(['resetPasswordState'])
    }
  }
</script>

<style scoped>

</style>
