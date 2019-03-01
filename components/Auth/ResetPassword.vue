<template>
  <div class="body reset">
    <!-- NEW :: START-->
    <section class="new" id="new">
      <div class="c-grid">
        <div class="new__wrapper">
          <h1 class="new__title title">Reset password</h1>
          <p class="new__text text">The password must be at least eight characters long and contain at least one number, one special character, and both lower and uppercase letters.</p>
          <div class="new__form">
            <form class="form" @submit.prevent="resetPassword">
              <div v-if="message" class="alert alert-success">
                  {{ message }}
              </div>
              <div class="form__field form__field--input" :class="{'is-invalid': errors.first('email')}">
                <label class="form__label" for="email">Email</label>
                <div class="form__input-wrap">
                  <input
                    v-model="form.email"
                    class="form__input"
                    type="email"
                    id="email"
                    name="email"
                    placeholder=""
                    v-validate="'required|email|max:150'"
                    data-vv-name="email">
                </div>
                <div class="form__notify ">
                  <span class="text-danger">
                    {{ errors.first('email') }}
                  </span>
                </div>
              </div>
              <div class="form__field form__field--input" :class="{'is-invalid': errors.first('password')}">
                <label class="form__label" for="resetNew">New password</label>
                <div class="form__input-wrap">
                  <input
                    v-model="form.password"
                    class="form__input"
                    type="password"
                    id="password"
                    name="password"
                    v-validate="'required|min:6'"
                    ref="password">
                </div>
                <div class="form__notify ">
                  <span class="text-danger">
                    {{ errors.first('password') }}
                  </span>
                </div>
                <!--<div class="form__notify form__notify&#45;&#45;show">-->
                  <!--<ul>-->
                    <!--<li>-->
                      <!--<div class="form__notify-icon form__notify-icon-error"><i class="icon-font icon-error"></i>-->
                        <!--&lt;!&ndash;+iconSVG('error')&ndash;&gt;-->
                      <!--</div><span>Password strength: weak</span>-->
                    <!--</li>-->
                    <!--<li>-->
                      <!--<div class="form__notify-icon form__notify-icon-check"><i class="icon-font icon-check"></i>-->
                        <!--&lt;!&ndash;+iconSVG('check')&ndash;&gt;-->
                      <!--</div><span>Cannot contain your name or email address</span>-->
                    <!--</li>-->
                    <!--<li>-->
                      <!--<div class="form__notify-icon form__notify-icon-error"><i class="icon-font icon-error"></i>-->
                        <!--&lt;!&ndash;+iconSVG('error')&ndash;&gt;-->
                      <!--</div><span>At least eight characters</span>-->
                    <!--</li>-->
                    <!--<li>-->
                      <!--<div class="form__notify-icon form__notify-icon-check"><i class="icon-font icon-check"></i>-->
                        <!--&lt;!&ndash;+iconSVG('check')&ndash;&gt;-->
                      <!--</div><span>At least one number, one special character, and both lower and uppercase letters.</span>-->
                    <!--</li>-->
                  <!--</ul>-->
                <!--</div>-->
              </div>
              <div class="form__field form__field--input" :class="{'is-invalid': errors.first('password_confirmation')}">
                <label class="form__label" for="passwordConfirmation">Confirm password</label>
                <div class="form__input-wrap">
                  <input
                    v-model="form.password_confirmation"
                    class="form__input"
                    type="password"
                    id="passwordConfirmation"
                    name="password_confirmation"
                    v-validate="'required|confirmed:password'"
                    data-vv-as="password">
                </div>
                <div class="form__notify ">
                  <span class="text-danger">
                    {{ errors.first('password_confirmation') }}
                  </span>
                </div>
              </div>
              <div class="form__field form__field--btn">
                <button class="form__btn" type="submit" :disabled="load">Change password</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- NEW :: END-->
  </div>
</template>

<script>
  import requests from '@/mixins/requests';

  export default {
    props: {
      token: {
        type: String,
        required: true
      },
    },
    name: 'ResetPassword',
    $_veeValidate: {
      validator: 'resetPassword',
    },
    mixins: [requests],
    data() {
      return {
        form: this.formData(),
        error: this.emailError(),
        load: false,
        message: ''
      };
    },
    methods: {
      formData() {
        return {
          token: this.token,
          email: '',
          password: '',
          password_confirmation: ''
        };
      },
      emailError() {
        return {
          status: false,
          message: '',
        }
      },
      resetPassword() {
        this.load = true;
        this.error = this.emailError();
        this.$validator.validate().then(result => {
          if (result) {
            this.axios.post('password/reset', this.form).then(({data}) => {
              this.clear();
              this.message = data.message;
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
    }
  };
</script>

<style scoped>

</style>
