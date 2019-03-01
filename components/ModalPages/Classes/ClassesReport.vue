<template>
  <div class="body p-classes">
    <section class="c-modal c-modal--reportUser c-modal--classesReport" id="c-modal">
      <div class="c-modal__wrapper">
        <div class="c-modal__header d-flex align-items-center">
          <p class="c-modal__title subtitle">Report this class</p><a class="c-modal__close" href="#" title=""><i class="icon-font icon-error"></i></a>
        </div>
        <div class="c-modal__body">
          <p class="c-modal__text">Why are you reporting this class?</p>
          <form class="form" action="" method="">
            <div class="form__field form__field--radio">
              <input class="form__radio" type="radio" id="reportNote0" name="reportNoteBrowse">
              <label for="reportNote0"><span>The class name is misleading</span></label>
            </div>
            <div class="form__field form__field--radio">
              <input class="form__radio" type="radio" id="reportNote1" name="reportNoteBrowse">
              <label for="reportNote1"><span>It is inappropriate.</span></label>
            </div>
            <div class="form__field form__field--radio">
              <input class="form__radio" type="radio" id="reportNote2" name="reportNoteBrowse" checked>
              <label for="reportNote2"><span>it is being used to cheat.</span></label>
            </div>
            <div class="form__field form__field--input">
              <div class="form__input-wrap">
                <input class="form__input" type="text" id="delAcc" name="delAcc" placeholder="Your feedback">
              </div>
              <div class="form__notify form__notify--hide"></div>
            </div>
            <div class="form__field form__field--radio">
              <input class="form__radio" type="radio" id="reportNote3" name="reportNoteBrowse">
              <label for="reportNote3"><span>It violates my intellectual property rights.</span></label>
            </div>
            <div class="form__field form__field--btn">
              <button class="form__btn form__btn--full c-btn c-btn--lightGray" type="submit">Continue</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'ClassesReport',
    components: {},
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
