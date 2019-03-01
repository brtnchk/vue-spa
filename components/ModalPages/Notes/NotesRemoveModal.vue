<template>
  <div class="body body--start notes">
    <section class="c-modal c-modal--removeNote" id="c-modal">
      <div class="c-modal__wrapper">
        <div class="c-modal__header d-flex align-items-center">
          <p class="c-modal__title subtitle">Remove this note?</p><a class="c-modal__close" href="#" title=""><i class="icon-font icon-error"></i></a>
        </div>
        <div class="c-modal__body">
          <p class="c-modal__subtitle">Note name</p>
          <p class="c-modal__subinfo">You are about to delete this note and all of its data. No one will be able to access this note ever again.</p>
          <p class="c-modal__subinfo">Are you absolutely positive? There's no undo.</p>
          <form class="form" action="" method="">
            <div class="form__field form__field--btn">
              <button class="form__btn form__btn--full" type="submit">Remove</button>
              <button class="form__btn form__btn--full" type="submit">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'NotesRemoveModal',
    components: {},
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
