<template>
  <div class="body login" v-if="loginModalState">
    <section class="c-modal c-modal--login" id="c-modal">
      <div class="c-modal__wrapper">
        <div class="c-modal__header d-flex align-items-center">
          <p class="c-modal__title subtitle">Log in</p>
          <a class="c-modal__close" href="#" title=""
             @click.prevent="onHideModal">
            <i class="icon-font icon-error"></i>
          </a>
        </div>
        <div class="c-modal__body">
          <!-- <p class="c-modal__info">or <a href='#'>create an account</a></p> -->
          <!-- <button class="c-btn c-btn--bigH c-btn--gp" type="button">
              <div><i class="icon-font icon-i-gp"></i></div><span>Log in with Google</span>
          </button>
          <button class="c-btn c-btn--bigH c-btn--fb" type="button">
              <div><i class="icon-font icon-i-fb"></i></div><span>Log in with Facebook</span>
          </button> -->
          <form class="form" action="" method="">
            <div class="form__field form__field--input">
              <label class="form__label" for="signinEmail">Username</label>
              <div class="form__input-wrap">
                <input class="form__input"
                       type="text" id="signinEmail"
                       name="signinEmail"
                       placeholder="Type your username or email"
                       v-model="form.username"
                       v-validate="'required|min:4|max:60'"
                       :error-messages="errors.collect('username')"
                       data-vv-name="username"
                >
              </div>
              <!--form__notify&#45;&#45;hide-->
              <div class="form__notify">
                <span v-if="isUsernameEmail" class="text-danger">
                  {{ errors.first('email') }}
                </span>
                <span v-else class="text-danger">
                  {{ errors.first('username') }}
                </span>
              </div>
            </div>
            <div class="form__field form__field--input">
              <label class="form__label" for="signinPassword">Password</label>
              <div class="form__input-wrap">
                <input class="form__input"
                       type="password"
                       id="signinPassword"
                       name="signinPassword"
                       placeholder="Type your password"
                       v-model="form.password"
                       v-validate="'required|min:6|max:60'"
                       data-vv-name="password"
                       :class="{'is-invalid': errors.first('password')}"
                >
              </div>
              <div class="form__notify"><span class="text-danger">{{ errors.first('password') }}</span></div>
            </div>
            <div v-if=" message.text" class="form__notify form__notify--show">
              <h6 class="text-danger mb-3">{{ message.text }}</h6>
              <ul>
                <li v-for="error in message.errors">
                  <div class="form__notify-icon form__notify-icon-error">
                    <i class="icon-font icon-error"></i>
                  </div>
                  {{ String(error) }}
                </li>
              </ul>
            </div>
            <div class="form__field form__field--btn">
              <button
                class="form__btn form__btn--full"
                type="submit"
                @click.prevent="handleLogin()"
                :disabled="loading"
              >Login</button>
            </div>
            <div class="form__field form__field--link">
              <a class="form__link"
                 href="#"
                 title=""
                 @click.prevent="showReset"
              >Forgot password?</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import requests from '@/mixins/requests';
  import {mapGetters, mapActions} from 'vuex';
  export default {
    name: "LoginModal",
    $_veeValidate: {
      validator: 'loginModal',
    },
    mixins: [requests],
    data() {
      return {
        form: this.formData()
      };
    },
    mounted() {
      this.$validator.localize('en', this.dictionary);
    },
    methods: {
      formData() {
        return {
          username: '',
          email: '',
          password: '',
          // remember: false,
        };
      },
      showReset() {
        this.hideModal({name: 'login'});
        this.showModal({name: 'resetPassword'});
        this.$store.dispatch('setMessage', {timeout: 5000, type: null, text: null, errors: []});
      },
      handleLogin() {
        this.$validator.errors.clear();
        this.postRequest('login', this.processedForm).then(response => {
          if (response && response.status === 200) {
            this.login({payload: response.data}).then(() => {
              this.$router.push({
                name: 'browse-notes',
                query: {menu: 'main', disablMenuItems: '[{"id": 4}]'}
              });
              this.hideModal({name: 'login'});
              this.$store.dispatch('setMessage', {timeout: 5000, type: null, text: null, errors: []});
            });

            this.clear();
          }
        });
      },
      onHideModal() {
        this.hideModal({name: 'login'});
        this.$store.dispatch('setMessage', {timeout: 5000, type: null, text: null, errors: []});
      },
      ...mapActions(['hideModal', 'showModal']),
      ...mapActions({login: 'auth/login'})
    },
    computed: {
      ...mapGetters(['loginModalState', 'loading', 'message']),
      isUsernameEmail() {
        return ~this.form.username.search(/[^@]{2,}@[^@]{3,}/);
      },
      processedForm() {
        if (this.isUsernameEmail) {
          return {
            email: this.form.username,
            password: this.form.password
          };
        } else {
          return {
            username: this.form.username,
            password: this.form.password
          };
        }
      }
    }
  }
</script>

<style scoped>

</style>
