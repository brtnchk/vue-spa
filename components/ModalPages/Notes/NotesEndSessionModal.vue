<template>
  <div v-if="endSessionState" class="body body--start notes">
    <section class="c-modal c-modal--endSession" id="c-modal">
      <div class="c-modal__wrapper">
        <div class="c-modal__header d-flex align-items-center">
          <p class="c-modal__title subtitle">End session?</p><a class="c-modal__close" href="#" title=""><i class="icon-font icon-error"></i></a>
        </div>
        <div class="c-modal__body">
          <p class="c-modal__text">Your statistics will not be saved.</p>
          <form class="form" action="" method="">
            <div class="form__field form__field--btn">
              <button @click.prevent="onDiscardClick" class="form__btn form__btn--full" type="submit">End</button>
              <button @click.prevent="onCancelClick" class="form__btn form__btn--full" type="submit">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex';

  export default {
    name: 'NotesEndSessionModal',
    components: {},
    computed: {
      ...mapGetters(['endSessionState'])
    },
    methods: {
      ...mapActions(['hideModal']),
      onDiscardClick() {
        this.hideModal({name: 'endSession', payload: true});
      },
      onCancelClick() {
        this.hideModal({name: 'endSession', payload: false});
      }
    }
  }
</script>

<style scoped>
</style>
