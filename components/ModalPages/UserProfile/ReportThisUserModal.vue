<template>
  <div class="body body--start view">
    <section class="c-modal c-modal--reportUser" id="c-modal">
      <div class="c-modal__wrapper">
        <div class="c-modal__header d-flex align-items-center">
          <p class="c-modal__title subtitle">Report this user</p><a class="c-modal__close" href="#" title=""><i class="icon-font icon-error"></i></a>
        </div>
        <div class="c-modal__body">
          <p class="c-modal__text">Why are you reporting this user?</p>
          <form class="form" action="" method="">
            <div class="form__field form__field--checkbox">
              <div class="form__checkbox-wrap">
                <input class="form__checkbox" type="checkbox" id="reportUser0" name="reportUser0">
                <label for="reportUser0">
                  <u></u><span>There is inappropriate content on this user's account.</span><i class="icon-font icon-check"></i>
                </label>
              </div>
            </div>
            <div class="form__field form__field--checkbox">
              <div class="form__checkbox-wrap">
                <input class="form__checkbox" type="checkbox" id="reportUser1" checked name="reportUser1">
                <label for="reportUser1">
                  <u></u><span>I'm worried about this user.</span><i class="icon-font icon-check"></i>
                </label>
              </div>
            </div>
            <div class="form__field form__field--input">
              <div class="form__input-wrap">
                <input class="form__input" type="text" id="delAcc" name="delAcc" placeholder="Your feedback">
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
    name: 'ReportThisUserModal',
    components: {},
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
