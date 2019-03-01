<template>
  <div class="body setting">
    <section class="c-modal c-modal--delAcc" id="c-modal">
      <div class="c-modal__wrapper">
        <div class="c-modal__header d-flex align-items-center">
          <p class="c-modal__title subtitle">Delete account</p><a class="c-modal__close" href="" title=""><i class="icon-font icon-error"></i></a>
        </div>
        <div class="c-modal__body">
          <p class="c-modal__text">To confirm it's really you, please enter your Memscore password.</p>
          <form class="form" action="" method="">
            <div class="form__field form__field--input">
              <label class="form__label" for="delAcc">Password</label>
              <div class="form__input-wrap">
                <input class="form__input" type="text" id="delAcc" name="delAcc" placeholder="">
              </div>
              <div class="form__notify form__notify--hide"></div>
            </div>
            <div class="form__field form__field--btn">
              <button class="form__btn form__btn--full" type="submit">Continue</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'DeleteAccountModal',
    components: {},
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
