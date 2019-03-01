<template>
  <div class="body login" v-if="paymentDetailsState">
    <section class="c-modal c-modal--payment" id="c-modal">
      <div class="c-modal__wrapper">
        <div class="c-modal__header">
          <p class="c-modal__subtitle">Pricing plan</p>
          <p class="c-modal__title subtitle">Payment details</p>
          <a
            @click.prevent="hideModal({name: 'paymentDetails'})"
            class="c-modal__close"
            href="#"
            title="">
            <i class="icon-font icon-error"></i>
          </a>
        </div>
        <div class="c-modal__body">
          <form class="form" action="" method="">
            <!--<div class="form__field form__field&#45;&#45;group form__field&#45;&#45;radiogroup">-->
              <!--<div class="form__field form__field&#45;&#45;radio">-->
                <!--<input class="form__radio" type="radio" id="paymentCard" name="payment" checked>-->
                <!--<label for="paymentCard">-->
                  <!--<input class="form__radio&#45;&#45;input" type="text">-->
                  <!--<input class="form__radio&#45;&#45;input" type="text">-->
                  <!--<input class="form__radio&#45;&#45;input" type="text">-->
                  <!--<input class="form__radio&#45;&#45;input" type="text">-->
                <!--</label>-->
              <!--</div>-->
              <!--<div class="form__field form__field&#45;&#45;radio">-->
                <!--<input class="form__radio" type="radio" id="paymentMethod" name="payment">-->
                <!--<label for="paymentMethod"><span>Paypal</span></label>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="form__field form__field&#45;&#45;input">-->
              <!--<label class="form__label" for="paymentCardName">Name on card</label>-->
              <!--<div class="form__input-wrap">-->
                <!--<input-->
                  <!--class="form__input"-->
                  <!--type="text"-->
                  <!--id="paymentCardName"-->
                  <!--name="paymentCardName"-->
                  <!--placeholder="Name on card">-->
              <!--</div>-->
              <!--<div class="form__notify form__notify&#45;&#45;hide"></div>-->
            <!--</div>-->
            <div class="form__field form__field--input">
              <label class="form__label" for="paymentCardNumber">Credit card number</label>
              <div class="form__input-wrap">
                <!--<input-->
                  <!--class="form__input"-->
                  <!--type="text"-->
                  <!--id="paymentCardNumber"-->
                  <!--name="paymentCardNumber" placeholder="1234 1234 1234 1234">-->
                <card-number
                  class='stripe-element card-number field'
                  ref='cardNumber'
                  :stripe='stripeKey'
                  :options='stripeOptions'
                  @change='number = $event.complete'/>
              </div>
              <div class="form__notify form__notify--hide"></div>
            </div>
            <div class="form__field form__field--group">
              <div class="form__field form__field--input">
                <label class="form__label" for="paymentMonth">Expiration</label>
                <div class="form__input-wrap">
                  <!--<input-->
                    <!--class="form__input"-->
                    <!--type="text"-->
                    <!--id="paymentMonth"-->
                    <!--name="paymentMonth"-->
                    <!--placeholder="MM/YY">-->
                  <card-expiry
                    class='stripe-element card-expiry field'
                    ref='cardExpiry'
                    :stripe='stripeKey'
                    :options='stripeOptions'
                    @change='expiry = $event.complete'/>
                </div>
                <div class="form__notify form__notify--hide"></div>
              </div>
              <!--<div class="form__field form__field&#45;&#45;input">-->
                <!--<label class="form__label" for="paymentYear">Year</label>-->
                <!--<div class="form__input-wrap">-->
                  <!--<input class="form__input" type="text" id="paymentYear" name="paymentYear" placeholder="">-->
                <!--</div>-->
                <!--<div class="form__notify form__notify&#45;&#45;hide"></div>-->
              <!--</div>-->
              <div class="form__field form__field--input">
                <label class="form__label" for="paymentCvv">CVC</label>
                <div class="form__input-wrap">
                  <!--<input -->
                    <!--class="form__input" -->
                    <!--type="text" -->
                    <!--id="paymentCvv" -->
                    <!--name="paymentCvv"-->
                    <!--placeholder="CVC">-->
                  <card-cvc
                    class='stripe-element card-cvc field'
                    ref='cardCvc'
                    :stripe='stripeKey'
                    :options='stripeOptions'
                    @change='cvc = $event.complete'/>
                </div>
                <div class="form__notify form__notify--hide"></div>
              </div>
            </div>
            <div class="form__field form__field--btn">
              <md-progress-bar v-if="loading" md-mode="indeterminate"></md-progress-bar>
              <button
                @click.prevent='pay'
                :disabled='loading || !complete'
                class="form__btn form__btn--full"
                type="submit">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import { Card, createToken, CardNumber, CardExpiry, CardCvc } from 'vue-stripe-elements';
  import axios from 'axios';

  export default {
    name: "PaymentDetailsModal",
    components: {
      Card, CardNumber, CardExpiry, CardCvc
    },
    data() {
      return {
        complete: false,
        number: false,
        expiry: false,
        cvc: false,
        loading: false,
        stripeOptions: {
          // see https://stripe.com/docs/stripe.js#element-options for details
          style: {
            base: {
              fontFamily: 'Poppins, sans-serif',
              fontSize: '12px'
            }
          }
        }
      }
    },
    watch: {
      number () { this.update() },
      expiry () { this.update() },
      cvc () { this.update() }
    },
    computed: {
      ...mapGetters(['paymentDetailsState']),
      ...mapGetters({user: 'auth/user', token: 'auth/getToken'}),
      ...mapGetters({userData: 'auth/userData'}),
      stripeKey() {
        return process.env.STRIPE_PUBLIC_KEY;
      }
    },
    methods: {
      ...mapActions(['hideModal', 'showModal']),
      ...mapActions({login: 'auth/login'}),
      ...mapActions({clearUserData: 'auth/clearUserData'}),
      update () {
        this.complete = this.number && this.expiry && this.cvc;

        if (this.number) {
          if (!this.expiry) {
            this.$refs.cardExpiry.focus()
          } else if (!this.cvc) {
            this.$refs.cardCvc.focus()
          }
        } else if (this.expiry) {
          if (!this.cvc) {
            this.$refs.cardCvc.focus()
          } else if (!this.number) {
            this.$refs.cardNumber.focus()
          }
        }
      },
      handleSubmit() {
        this.login({payload: {access_token: this.token, user: this.user}}).then(() => {
          this.hideModal({name: 'paymentDetails'});
          this.$router.push({name: 'notes'})
        })
      },
      pay() {
        this.loading = true;

        createToken().then(data => {
          if(!data.token.id) return false;
          this.userData.token = data.token.id;

          axios.post('register', this.userData).then(response => {
            if (response.status === 200) {
              this.login({payload: response.data}).then(() => {
                this.$router.push({name: 'notes'});
                this.hideModal({name: 'paymentDetails'});
                this.clearUserData();
              });
            }
            this.loading = false;

          }).catch(() => {
            this.hideModal({name: 'paymentDetails'});
            this.showModal({name: 'register'});
            this.loading = false;
          });
        }).catch(_  => this.loading = false);
      }
    }
  }
</script>

<style scoped>
  .field {
    padding: 14px 20px;
    border-radius: 4px;
    border: 1px solid #cbcecb;
    background-color: #fff;
  }
</style>
