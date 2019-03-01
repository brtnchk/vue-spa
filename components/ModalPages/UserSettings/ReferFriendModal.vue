<template>
  <div class="body setting">
    <section class="c-modal c-modal--refer" id="c-modal">
      <div class="c-modal__wrapper">
        <div class="c-modal__header d-flex align-items-center">
          <p class="c-modal__title subtitle">Refer a friend</p><a class="c-modal__close" href="#" title=""><i class="icon-font icon-error"></i></a>
        </div>
        <div class="c-modal__body">
          <form class="form" action="" method="">
            <div class="form__field form__field--input form__field--btnInput">
              <label class="form__label" for="referSendEmail">Share link via email</label>
              <div class="form__input-wrap">
                <input class="form__input" type="text" id="referSendEmail" name="referSendEmail" placeholder="Enter a title">
                <button class="form__btn" type="submit">Send email</button>
              </div>
              <div class="form__notify form__notify--hide"></div>
            </div>
            <div class="form__field form__field--input form__field--btnInput">
              <div class="form__input-wrap">
                <input class="form__input" type="text" id="" name="referCopyLink" placeholder="" value="https://minrva.com/username/cources/cource1">
                <button class="form__btn" type="button">Copy link</button>
              </div>
              <div class="form__notify form__notify--hide"></div>
            </div>
          </form>
          <button class="c-btn c-btn--bigH c-btn--fb" type="button">
            <div><i class="icon-font icon-i-fb"></i></div><span>Share on Facebook</span>
          </button>
          <button class="c-btn c-btn--bigH c-btn--tw" type="button">
            <div><i class="icon-font icon-i-tw"></i></div><span>Share on Twitter</span>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'ReferFriendModal',
    components: {},
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
