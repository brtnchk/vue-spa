<template>
  <div class="body login"
       v-if="registerModalState">
    <section class="c-modal c-modal--register" id="c-modal">
      <div class="c-modal__wrapper">
        <div class="c-modal__header d-flex align-items-center">
          <p class="c-modal__title subtitle">Sign up</p>
          <a class="c-modal__close" href="" title="" @click.prevent="hideModal({name: 'register'})">
            <i class="icon-font icon-error"></i>
          </a>
        </div>
        <div class="c-modal__body">
          <!-- <p class="c-modal__info">or <a href='#'>log in to your account</a></p> -->
          <!-- <button class="c-btn c-btn--bigH c-btn--gp" type="button">
            <div><i class="icon-font icon-i-gp"></i></div><span>Log in with Google</span>
          </button>
          <button class="c-btn c-btn--bigH c-btn--fb" type="button">
            <div><i class="icon-font icon-i-fb"></i></div><span>Log in with Facebook</span>
          </button> -->
          <form class="form" action="" method="">
            <label class="form__label">Birthday</label>
            <div class="form__field form__field--group form__field--select form__field--select-date">
              <div class="form__select-wrap">
                <div class="form__select">
                                    <span class="select__value">
                                        {{form.month == '0' ? 'Month' : months[form.month]}}
                                    </span>
                  <select
                    v-validate="'required|between:1,12'"
                    data-vv-name="month"
                    name="month"
                    v-model="form.month">
                    <option v-for="(month, key) in months" :value="key">{{month}}</option>
                  </select>
                  <span class="select__icon-wrap"><i class="icon-font icon-arrow"></i></span>
                </div>
              </div>
              <div class="form__select-wrap">
                <div class="form__select">
                  <span class="select__value">{{form.day == '0' ? 'Day' : form.day}}</span>
                  <select
                    v-validate="'required|between:1,31'"
                    data-vv-name="month"
                    name="day"
                    v-model="form.day">
                    <option value="0" disabled selected hidden>Day</option>
                    <option v-for="n in 31" :value="n">{{n}}</option>
                  </select>
                  <span class="select__icon-wrap">
                                        <i class="icon-font icon-arrow"></i>
                                    </span>
                </div>
              </div>
              <div class="form__select-wrap">
                <div class="form__select">
                                    <span class="select__value">
                                        {{form.year == '0' ? 'Year' : form.year}}
                                    </span>
                  <select name="" v-model="form.year">
                    <option value="0" disabled selected hidden>Year</option>
                    <option v-for="n in currentYear - minYear" :value="currentYear-n">
                      {{currentYear-n}}
                    </option>
                  </select>
                  <span class="select__icon-wrap">
                                        <i class="icon-font icon-arrow"></i>
                                    </span>
                </div>
              </div>
              <div class="form__notify form__notify--hide"></div>
            </div>
            <div class="form__field form__field--input">
              <label class="form__label" for="signupEmail">Email</label>
              <div class="form__input-wrap">
                <input v-model="form.email"
                       v-validate="'required|email|max:150'"
                       data-vv-name="email"
                       :class="{'is-invalid': errors.first('email')}"
                       class="form__input"
                       type="text"
                       id="signupEmail"
                       name="email"
                       placeholder="Type your email">
              </div>
              <div class="form__notify">
                <span class="text-danger">{{ errors.first('email') }}</span>
              </div>
            </div>
            <div class="form__field form__field--input">
              <label class="form__label" for="signupUsername">Username</label>
              <div class="form__input-wrap">
                <input v-model="form.username"
                       v-validate="'required|max:50|min:3|username|checkSpaces'"
                       data-vv-name="username"
                       :class="{'is-invalid': errors.first('username')}"
                       class="form__input"
                       type="text"
                       id="signupUsername"
                       name="username"
                       placeholder="Type your username">
              </div>
              <div class="form__notify"><span class="text-danger">{{ errors.first('username') }}</span>
              </div>
            </div>
            <div class="form__field form__field--input">
              <label class="form__label" for="signupPassword">Password</label>
              <div class="form__input-wrap">
                <input v-model="form.password"
                       v-validate="'required|min:6|max:60'"
                       data-vv-name="password"
                       :class="{'is-invalid': errors.first('password')}"
                       class="form__input"
                       type="password"
                       id="signupPassword"
                       name="password"
                       placeholder="Type your password">
              </div>
              <div class="form__notify"><span class="text-danger">{{ errors.first('password') }}</span>
              </div>
            </div>
            <div class="form__field form__field--checkbox">
              <div class="form__checkbox-wrap">
                <input
                  v-validate="'required'"
                  v-model="form.accept_term"
                  class="form__checkbox"
                  type="checkbox"
                  id="signupRadio"
                  name="term">
                <label for="signupRadio">
                  <u></u>
                  <span>I accept Memscore’s
                                        <a href='/about/terms' target="_blank">Terms of Service</a> and
                                        <a href='/about/privacy' target="_blank">Privacy Policy</a>
                                    </span>
                  <i class="icon-font icon-check"></i>
                </label>
                <div class="form__notify" v-if="errors.first('term')">
                                    <span class="text-danger">
                                        You need to accept Memscore’s Terms of Service and Privacy Policy
                                    </span>
                </div>
              </div>
            </div>
            <div v-if="message.text" class="form__notify form__notify--show">
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
              <button class="form__btn form__btn--full" type="submit" @click.prevent="register">
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import moment from 'moment'
  import requests from '@/mixins/requests';
  import {mapGetters, mapActions, mapMutations} from 'vuex';
  import axios from 'axios';

  export default {
    name: "RegisterModal",
    $_veeValidate: {
      validator: 'registration',
    },
    mixins: [requests],
    data() {
      return {
        form: this.formData(),
        months: {
          1: 'January',
          2: 'February',
          3: 'March',
          4: 'April',
          5: 'May',
          6: 'June',
          7: 'July',
          8: 'August',
          9: 'September',
          10: 'October',
          11: 'November',
          12: 'December'
        },
        currentYear: moment().add(1, 'year').format('YYYY'),
        minYear: 1950
      };
    },
    methods: {
      ...mapActions(['hideModal', 'showModal']),
      ...mapActions({login: 'auth/login'}),
      ...mapMutations({setToken: 'auth/setTokenToState', setUser: 'auth/setUserData'}),
      ...mapActions({saveUserData: 'auth/saveUserData'}),
      ...mapActions({clearUserData: 'auth/clearUserData'}),

      back() {
        this.$router.push({name: 'home'});
      },

      formData() {
        return {
          username: '',
          email: '',
          password: '',
          month: 0,
          day: 0,
          year: 0,
          accept_term: ''
        };
      },

      register() {
        if (this.userData && this.userData.token) {
          this.createUser();
          return;
        }
        this.saveUserData(this.form);
        this.hideModal({name: 'register'});
        this.showModal({name: 'paymentDetails'});
      },

      goTo(routeName, params) {
        this.$router.push({name: routeName, params})
      },

      createUser() {
        this.postRequest('register', this.form).then(response => {
//        axios.post('register', this.userData).then(response => {
          if (response.status === 200) {
            this.login({payload: response.data}).then(() => {
              this.$router.push({name: 'notes'});
              this.hideModal({name: 'register'});
              this.clearUserData();
            });
          }
        })
      }

    },
    computed: {
      ...mapGetters(['registerModalState', 'message']),
      ...mapGetters({userData: 'auth/userData'}),
    }
  };
</script>

<style scoped>

</style>
