<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="elevation-12">
          <v-toolbar dark color="default">
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" lazy-validation>

              <v-text-field
                prepend-icon="alternate_email"
                name="email"
                label="Email"
                type="email"
                v-model="form.email"
                v-validate="'required|email|max:150'"
                :error-messages="errors.collect('email')"
                data-vv-name="email"
              ></v-text-field>

              <v-text-field
                id="password"
                prepend-icon="lock"
                name="password"
                label="Password"
                type="password"
                v-model="form.password"
                v-validate="'required|min:6|max:60'"
                :error-messages="errors.collect('password')"
                data-vv-name="password"
              ></v-text-field>

              <v-checkbox
                v-validate=""
                name="remember"
                v-model="form.remember"
                :error-messages="errors.collect('remember')"
                value="true"
                label="Remember"
                type="checkbox"
                data-vv-name="remember"
              ></v-checkbox>

            </v-form>
          </v-card-text>
          <v-card-actions>
            <router-link class="subheading pl-2 ml-1" :to="{name: 'registration'}">Registration</router-link>
            <router-link class="subheading pl-2 ml-1" :to="{name: 'reset-password'}">Reset Password</router-link>
            <v-spacer></v-spacer>
            <v-btn
              color="success"
              @click="handleLogin()"
              :loading="loading"
              :disabled="loading"
            >Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import requests from '@/mixins/requests';
  import {mapActions} from 'vuex';
  export default {
    name: 'Login',
    $_veeValidate: {
      validator: 'login',
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
          email: '',
          password: '',
          remember: false,
        };
      },
      handleLogin() {
        this.postRequest('login', this.form).then(response => {
          if (response && response.status === 200) {
            this.login({payload: response.data}).then(() => {
              this.$router.push({name: 'home'})
            });

            this.clear();
          }
        });
      },
      ...mapActions({
        login: 'auth/login',
      }),
    },
  };
</script>

<style scoped>

</style>
