<template>
  <div class="body setting">
    <section class="c-modal c-modal--storage" id="c-modal">
      <div class="c-modal__wrapper">
        <div class="c-modal__header">
          <p class="c-modal__subtitle">Pricing plan</p>
          <p class="c-modal__title subtitle">Personal storage space</p><a class="c-modal__close" href="#" title=""><i class="icon-font icon-error"></i></a>
        </div>
        <div class="c-modal__body">
          <form class="form" action="" method="">
            <div class="form__field form__field--swipe">
              <input type="checkbox" id="storageSwipe" name="">
              <label for="storageSwipe">
                <div>
                  <p>Billed monthly</p>
                </div>
                <div></div>
                <div>
                  <p>Billed yearly</p>
                </div>
              </label>
            </div>
            <p class="c-modal__info">100 GB</p>
            <p class="c-modal__subinfo">+$2.00 per month</p>
            <div class="form__field form__field--btn">
              <button class="form__btn form__btn--full" type="submit">Upgrade</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'PersonalStorageSpaceModal',
    components: {},
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
