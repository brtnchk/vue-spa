<template>
  <div class="body login" v-if="addCardState">
    <section class="c-modal c-modal--payment" id="c-modal">
      <div class="c-modal__wrapper">
        <div class="c-modal__header">
          <!--<p class="c-modal__subtitle">Pricing plan</p>-->
          <p class="c-modal__title subtitle">Add card</p>
          <a class="c-modal__close" href="#" title="" @click="hideModal({name: 'addCard'})"><i class="icon-font icon-error"></i></a>
        </div>
        <div class="c-modal__body">

          <card class='stripe-card'
                :class='{ complete }'
                :stripe="stripeKey"
                :options='stripeOptions'
                @change='complete = $event.complete'
          />

          <button class='pay-with-stripe' @click='addCard' :disabled='!complete'>Add card</button>
          <!--<form class="form" action="" method="">-->
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
                <!--<input class="form__input" type="text" id="paymentCardName" name="paymentCardName" placeholder="">-->
              <!--</div>-->
              <!--<div class="form__notify form__notify&#45;&#45;hide"></div>-->
            <!--</div>-->
            <!--<div class="form__field form__field&#45;&#45;input">-->
              <!--<label class="form__label" for="paymentCardNumber">Credit card number</label>-->
              <!--<div class="form__input-wrap">-->
                <!--<input class="form__input" type="text" id="paymentCardNumber" name="paymentCardNumber" placeholder="">-->
              <!--</div>-->
              <!--<div class="form__notify form__notify&#45;&#45;hide"></div>-->
            <!--</div>-->
            <!--<div class="form__field form__field&#45;&#45;group">-->
              <!--<div class="form__field form__field&#45;&#45;input">-->
                <!--<label class="form__label" for="paymentMonth">Month</label>-->
                <!--<div class="form__input-wrap">-->
                  <!--<input class="form__input" type="text" id="paymentMonth" name="paymentMonth" placeholder="">-->
                <!--</div>-->
                <!--<div class="form__notify form__notify&#45;&#45;hide"></div>-->
              <!--</div>-->
              <!--<div class="form__field form__field&#45;&#45;input">-->
                <!--<label class="form__label" for="paymentYear">Year</label>-->
                <!--<div class="form__input-wrap">-->
                  <!--<input class="form__input" type="text" id="paymentYear" name="paymentYear" placeholder="">-->
                <!--</div>-->
                <!--<div class="form__notify form__notify&#45;&#45;hide"></div>-->
              <!--</div>-->
              <!--<div class="form__field form__field&#45;&#45;input">-->
                <!--<label class="form__label" for="paymentCvv">CVV</label>-->
                <!--<div class="form__input-wrap">-->
                  <!--<input class="form__input" type="text" id="paymentCvv" name="paymentCvv" placeholder="">-->
                <!--</div>-->
                <!--<div class="form__notify form__notify&#45;&#45;hide"></div>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="form__field form__field&#45;&#45;btn">-->
              <!--<button class="form__btn form__btn&#45;&#45;full" type="submit" @click.prevent="handleSubmit">Sign up</button>-->
            <!--</div>-->
          <!--</form>-->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  import { Card, createToken } from 'vue-stripe-elements';
  import axios from 'axios';

  export default {
    data() {
        return {
            complete: false,
            stripeOptions: {
                // see https://stripe.com/docs/stripe.js#element-options for details
            }
        }
    },
    name: "AddCardModal",
    methods: {
        ...mapActions(['hideModal', 'showModal']),
        ...mapActions({
            login: 'auth/login',
        }),
        addCard() {
            createToken().then(data =>
                axios.post(process.env.API_URL + '/payment/method', {
                    token: data.token.id
                }).then(response => {
                    if(response.status === 200) {
                        this.$store.dispatch('settings/addNewCard', response.data);
                        this.hideModal({name: 'addCard'});
                    }
                })
            )
        },
    },
    components: {
        Card
    },
    computed: {
      ...mapGetters(['addCardState']),
      ...mapGetters(['cardItems']),
      stripeKey(){
        return process.env.STRIPE_PUBLIC_KEY;
      },
    }
  }
</script>

<style scoped>

</style>
