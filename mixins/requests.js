import axios from 'axios';
export default {
  data() {
    return {
      form: this.formData()
    };
  },
  computed: {
    loading () {
      return this.$store.getters.loading;
    }
  },
  methods: {
    mounted() {
      this.$validator.localize('en', this.dictionary);
    },
    postRequest (path = null, data = {}, headers = {}) {
      this.$store.dispatch('setLoading', true);
      this.$validator.validateAll();

      return this.$validator.validate().then(result => {
        if (result) {
          return axios.post(path, data, headers).then((response) => {
            this.setFlashMessage(response.data.message);
            this.$store.dispatch('setLoading', false);
            return response;
          }).catch((error) => {
            if (error.response.status === 422) this.setServerErrors(error.response.data.errors);
            this.$store.dispatch('setLoading', false);
            this.setFlashMessage(error.response.data.message, 'error', error.response.data.errors);
            // throw error;
          });
        } else {
          this.$store.dispatch('setLoading', false);
        }
      });
    },
    putRequest (path = null, data = {}, headers = {}) {
      this.$store.dispatch('setLoading', true);
      this.$validator.validateAll();

      return this.$validator.validate().then(result => {
        if (result) {
          return axios.put(path, data, headers).then((response) => {
            this.setFlashMessage(response.data.message, 'success', error.response.data.errors);
            this.$store.dispatch('setLoading', false);
            return response;
          }).catch((error) => {
            if (error.response.status === 422) this.setServerErrors(error.response.data.errors);
            this.$store.dispatch('setLoading', false);
            this.setFlashMessage(error.response.data.message, 'error', error.response.data.errors);
            // throw error;
          });
        } else {
          this.$store.dispatch('setLoading', false);
        }
      });
    },
    setServerErrors (errors) {
      for (let field in errors) {
        if (!errors.hasOwnProperty(field)) continue;
        this.$validator.errors.add({field: field, msg: errors[field].first()})
      }
    },
    setFlashMessage (text = null, type = 'success', errors = []) {
      const message = {
        timeout: 7000,
        type,
        text,
        errors
      };
      this.$store.dispatch('setMessage', message);
      setTimeout(_ => {
        this.$store.dispatch('setMessage', {timeout: message.timeout, type: null, text: null, errors: []});
      }, message.timeout);
    },
    clear () {
      this.form = this.formData();
      this.$validator.reset();
    }
  }
}
