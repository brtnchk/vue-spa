<template>
  <div class="body setting">
    <section class="c-modal c-modal--promo" id="c-modal">
      <div class="c-modal__wrapper">
        <div class="c-modal__header">
          <p class="c-modal__title subtitle">Payment details</p>
        </div>
        <div class="c-modal__body">
          <form class="form" action="" method="">
            <div class="form__field form__field--group form__field--radiogroup">
              <div class="form__field--radio">
                <input class="form__radio" type="radio" id="paymentCard" name="payment" checked>
                <label for="paymentCard">
                  <input class="form__radio--input" type="text">
                  <input class="form__radio--input" type="text">
                  <input class="form__radio--input" type="text">
                  <input class="form__radio--input" type="text">
                </label>
              </div>
              <div class="form__field--radio">
                <input class="form__radio" type="radio" id="paymentMethod" name="payment">
                <label for="paymentMethod"><span>Paypal</span></label>
              </div>
            </div>
            <div class="form__field form__field--input">
              <label class="form__label" for="paymentCardName">Name on card</label>
              <div class="form__input-wrap">
                <input class="form__input" type="text" id="paymentCardName" name="paymentCardName" placeholder="">
              </div>
              <div class="form__notify form__notify--hide"></div>
            </div>
            <div class="form__field form__field--input">
              <label class="form__label" for="paymentCardNumber">Credit card number</label>
              <div class="form__input-wrap">
                <input class="form__input" type="text" id="paymentCardNumber" name="paymentCardNumber" placeholder="">
              </div>
              <div class="form__notify form__notify--hide"></div>
            </div>
            <div class="form__field form__field--group">
              <div class="form__field form__field--input">
                <label class="form__label" for="paymentMonth">Month</label>
                <div class="form__input-wrap">
                  <input class="form__input" type="text" id="paymentMonth" name="paymentMonth" placeholder="">
                </div>
                <div class="form__notify form__notify--hide"></div>
              </div>
              <div class="form__field form__field--input">
                <label class="form__label" for="paymentYear">Year</label>
                <div class="form__input-wrap">
                  <input class="form__input" type="text" id="paymentYear" name="paymentYear" placeholder="">
                </div>
                <div class="form__notify form__notify--hide"></div>
              </div>
              <div class="form__field form__field--input">
                <label class="form__label" for="paymentCvv">CVV</label>
                <div class="form__input-wrap">
                  <input class="form__input" type="text" id="paymentCvv" name="paymentCvv" placeholder="">
                </div>
                <div class="form__notify form__notify--hide"></div>
              </div>
            </div>
            <div class="form__field form__field--input">
              <label class="form__label" for="paymentPromo">Referrer promo code</label>
              <div class="form__input-wrap">
                <input class="form__input" type="text" id="paymentPromo" name="paymentPromo" placeholder="">
              </div>
              <div class="form__notify form__notify--hide"></div>
            </div>
            <div class="form__field form__field--btn">
              <button class="form__btn form__btn--full" type="submit">Save</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'PaymentDetailsPromoModal',
    components: {},
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
