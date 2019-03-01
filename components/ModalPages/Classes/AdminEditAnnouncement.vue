<template>
  <div class="body p-classes">
    <section class="c-modal c-modal--classAnnouncement" id="c-modal">
      <div class="c-modal__wrapper">
        <div class="c-modal__header d-flex align-items-center">
          <p class="c-modal__title subtitle">Edit an announcement</p><a class="c-modal__close" href="#" title=""><i class="icon-font icon-error"></i></a>
        </div>
        <div class="c-modal__body">
          <p class="c-modal__subinfo">Your accouncement</p>
          <form class="form" action="" method="">
            <div class="form__field form__field--textarea">
              <div class="form__textarea-wrap">
                <textarea class="form__textarea" id="1" name="1" placeholder=""></textarea>
              </div>
              <div class="form__notify form__notify--hide"></div>
            </div>
            <div class="form__field form__field--btn">
              <button class="form__btn" type="submit">Update</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'AdminEditAnnouncement',
    components: {},
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
