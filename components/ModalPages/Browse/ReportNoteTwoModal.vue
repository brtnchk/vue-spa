<template>
  <div class="body body--start p-browse">
    <section class="c-modal c-modal--reportNote" id="c-modal">
      <div class="c-modal__wrapper">
        <div class="c-modal__header d-flex align-items-center">
          <p class="c-modal__title subtitle">Report this note</p><a class="c-modal__close" href="#" title=""><i class="icon-font icon-error"></i></a>
        </div>
        <div class="c-modal__body">
          <p class="c-modal__text">Thank you for letting us know. Because content on Memscore is created by individual students and teachers, not the Memscore team, you may run into mistakes while browsing other users’ notes. To learn more about how to correct errors you find in notes, please read our Help Center article.</p>
        </div>
        <div class="form__field form__field--btn">
          <button class="form__btn form__btn--full" type="submit">Help Center</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'ReportNoteTwoModal',
    components: {},
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
