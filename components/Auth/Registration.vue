<template>
  <div class="body login">
    <section class="c-modal c-modal--register" id="c-modal">
      <div class="c-modal__wrapper">
        <div class="c-modal__header d-flex align-items-center">
          <p class="c-modal__title subtitle">Sign up</p>
          <a class="c-modal__close" href="" title="" @click="back">
            close
          <svg class="icon-svg icon-error">
            <use xlink:href="./static/img/sprite.svg#error"></use>
          </svg></a>
        </div>
        <div class="c-modal__body">
          <p class="c-modal__info">or <a href='#'>log in to your account</a></p>
          <!-- <button class="c-btn c-btn--bigH c-btn--gp" type="button">
            <div>
              <svg class="icon-svg icon-i-gp ">
                <use xlink:href="./static/img/sprite.svg#i-gp"></use>
              </svg>
            </div><span>Log in with Google</span>
          </button> -->
          <!-- <button class="c-btn c-btn--bigH c-btn--fb" type="button">
            <div>
              <svg class="icon-svg icon-i-fb ">
                <use xlink:href="./static/img/sprite.svg#i-fb"></use>
              </svg>
            </div><span>Log in with Facebook</span>
          </button> -->
          <form class="form" action="" method="">
            <label class="form__label">Birthday</label>
            <div class="form__field form__field--group form__field--select form__field--select-date">
              <div class="form__select-wrap">
                <div class="form__select"><span class="select__value"></span>
                  <select name="">
                    <option value="0" disabled selected hidden>Month</option>
                    <option value="january">January</option>
                    <option value="february">February</option>
                    <option value="march">March</option>
                    <option value="april">April</option>
                    <option value="may">May</option>
                    <option value="june">June</option>
                    <option value="july">July</option>
                    <option value="august">August</option>
                    <option value="september">September</option>
                    <option value="october">October</option>
                    <option value="november">November</option>
                    <option value="december">December</option>
                  </select><span class="select__icon-wrap">
                      <svg class="icon-svg icon-arrow ">
                        <use xlink:href="./static/img/sprite.svg#arrow"></use>
                      </svg></span>
                </div>
              </div>
              <div class="form__select-wrap">
                <div class="form__select"><span class="select__value"></span>
                  <select name="">
                    <option value="0" disabled selected hidden>Day</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>

                  </select><span class="select__icon-wrap">
                      <svg class="icon-svg icon-arrow ">
                        <use xlink:href="./static/img/sprite.svg#arrow"></use>
                      </svg></span>
                </div>
              </div>
              <div class="form__select-wrap">
                <div class="form__select"><span class="select__value"></span>
                  <select name="">
                    <option value="0" disabled selected hidden>Year</option>
                    <option value="1999">1999</option>
                    <option value="2000">2000</option>
                    <option value="2001">2001</option>
                    <option value="2002">2002</option>
                    <option value="2003">2003</option>
                    <option value="2004">2004</option>
                    <option value="2005">2005</option>
                    <option value="2006">2006</option>
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2019">2019</option>
                  </select><span class="select__icon-wrap">
                      <svg class="icon-svg icon-arrow ">
                        <use xlink:href="./static/img/sprite.svg#arrow"></use>
                      </svg></span>
                </div>
              </div>
              <div class="form__notify form__notify--hide"></div>
            </div>
            <div class="form__field form__field--input">
              <label class="form__label" for="signupEmail">Email</label>
              <div class="form__input-wrap">
                <input class="form__input" type="text" id="signupEmail" name="signupEmail" placeholder="Type your email">
              </div>
              <div class="form__notify form__notify--hide"></div>
            </div>
            <div class="form__field form__field--input">
              <label class="form__label" for="signupUsername">Username</label>
              <div class="form__input-wrap">
                <input class="form__input" type="text" id="signupUsername" name="signupUsername" placeholder="Type your username">
              </div>
              <div class="form__notify form__notify--hide"></div>
            </div>
            <div class="form__field form__field--input">
              <label class="form__label" for="signupPassword">Password</label>
              <div class="form__input-wrap">
                <input class="form__input" type="text" id="signupPassword" name="signupPassword" placeholder="Type your password">
              </div>
              <div class="form__notify form__notify--hide"></div>
            </div>
            <div class="form__field form__field--checkbox">
              <div class="form__checkbox-wrap">
                <input class="form__checkbox" type="checkbox" id="signupRadio" name="">
                <label for="signupRadio"><i></i><span>I accept Memscore’s <a href=''>Terms of Service</a> and <a href=''>Privacy Policy</a></span>
                  <svg class="icon-svg icon-check ">
                    <use xlink:href="./static/img/sprite.svg#check"></use>
                  </svg>
                </label>
              </div>
            </div>
            <div class="form__field form__field--btn">
              <button class="form__btn form__btn--full" type="submit">Continue</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
  <!--<v-container fluid fill-height>-->
    <!--<v-layout align-center justify-center>-->
      <!--<v-flex xs12 sm8 md6>-->
        <!--<v-card class="elevation-12">-->
          <!--<v-toolbar dark color="default">-->
            <!--<v-toolbar-title>Registration</v-toolbar-title>-->
          <!--</v-toolbar>-->
          <!--<v-card-text>-->
            <!--<v-form ref="form" lazy-validation>-->
              <!--<v-text-field-->
                      <!--prepend-icon="alternate_email"-->
                      <!--name="email"-->
                      <!--label="Email"-->
                      <!--type="email"-->
                      <!--v-model="form.email"-->
                      <!--v-validate="'required|email|max:150'"-->
                      <!--:error-messages="errors.collect('email')"-->
                      <!--data-vv-name="email"-->
              <!--&gt;</v-text-field>-->

              <!--<v-text-field-->
                <!--prepend-icon="person"-->
                <!--name="username"-->
                <!--label="Username"-->
                <!--type="text"-->
                <!--v-model="form.username"-->
                <!--v-validate="'required|max:100'"-->
                <!--:error-messages="errors.collect('username')"-->
                <!--data-vv-name="username"-->
              <!--&gt;</v-text-field>-->

              <!--<v-text-field-->
                <!--id="password"-->
                <!--prepend-icon="lock"-->
                <!--name="password"-->
                <!--label="Password"-->
                <!--type="password"-->
                <!--v-model="form.password"-->
                <!--v-validate="'required|min:6|max:60'"-->
                <!--:error-messages="errors.collect('password')"-->
                <!--ref="password"-->
                <!--data-vv-name="password"-->
              <!--&gt;</v-text-field>-->
            <!--</v-form>-->
          <!--</v-card-text>-->
          <!--<v-card-actions>-->
            <!--<router-link class="subheading pl-2 ml-1" :to="{name: 'login'}">Login</router-link>-->
            <!--<v-spacer></v-spacer>-->
            <!--<v-btn-->
              <!--color="success"-->
              <!--@click="register"-->
              <!--:loading="loading"-->
              <!--:disabled="loading"-->
            <!--&gt;Register-->
            <!--</v-btn>-->
          <!--</v-card-actions>-->
        <!--</v-card>-->
      <!--</v-flex>-->
    <!--</v-layout>-->
  <!--</v-container>-->
</template>

<script>
  import requests from '@/mixins/requests';

  export default {
    name: 'Registration',
    $_veeValidate: {
      validator: 'registration',
    },
    mixins: [requests],
    data() {
        return {
            form: this.formData()
        };
    },
    methods: {
      back() {
        this.$router.push({ name: 'home'});
        // this.$route.go(-1);
      },
      formData () {
        return {
          username: '',
          email: '',
          password: '',
        };
      },
      register() {
        this.postRequest('register', this.form).then(response => {
          if (response.status === 201) {
            this.$router.push({ name: 'login'});
            this.clear();
          }
        });
      }
    },
  };
</script>

<style scoped>

</style>
