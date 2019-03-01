<template>
  <div class="body p-classes">
    <section class="c-modal c-modal--removeNote" id="c-modal">
      <div class="c-modal__wrapper">
        <div class="c-modal__header d-flex align-items-center">
          <p class="c-modal__title subtitle">Drop this class?</p><a class="c-modal__close" href="#" title=""><i class="icon-font icon-error"></i></a>
        </div>
        <div class="c-modal__body">
          <p class="c-modal__subtitle">Class name</p>
          <p class="c-modal__subinfo">You are about to drop this class. Doing so will permanently remove you from it.</p>
          <p class="c-modal__subinfo">Are you absolutely positive? There's no undo.</p>
          <form class="form" action="" method="">
            <div class="form__field form__field--btn">
              <button class="form__btn form__btn--full" type="submit">Yes, drop class</button>
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
    name: 'DropThisClass',
    components: {},
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
