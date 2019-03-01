<template>
  <div class="body body--start p-assistant">
    <section class="c-modal c-modal--editAssistant" id="c-modal">
      <div class="c-modal__wrapper">
        <div class="c-modal__header d-flex align-items-center">
          <p class="c-modal__title subtitle">Edit entry</p><a class="c-modal__close" href="#" title=""><i class="icon-font icon-error"></i></a>
        </div>
        <div class="c-modal__body">
          <p class="c-modal__subinfo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
          <form class="form" action="" method="">
            <div class="form__field form__field--textarea">
              <label class="form__label" for="browseSuggest0">If</label>
              <div class="form__textarea-wrap">
                <textarea class="form__textarea" id="browseSuggest0" name="browseSuggest0" placeholder="Type description"></textarea>
              </div>
              <div class="form__notify form__notify--hide"></div>
            </div>
            <div class="form__field form__field--textarea">
              <label class="form__label" for="browseSuggest1">Then</label>
              <div class="form__textarea-wrap">
                <textarea class="form__textarea" id="browseSuggest1" name="browseSuggest1" placeholder="Type description"></textarea>
              </div>
              <div class="form__notify form__notify--hide"></div>
            </div>
            <div class="form__field form__field--btn">
              <button class="form__btn c-btn c-btn--lightGray" type="submit">Delete an entry</button>
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
    name: 'NoteEditModal',
    components: {},
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
