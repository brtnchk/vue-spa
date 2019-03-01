<template>
  <div class="body body--start p-assistant">
    <section class="c-modal c-modal--classAdminEdit" id="c-modal">
      <div class="c-modal__wrapper">
        <div class="c-modal__header d-flex align-items-center">
          <p class="c-modal__title subtitle">Settings</p><a class="c-modal__close" href="#" title=""><i class="icon-font icon-error"></i></a>
        </div>
        <div class="c-modal__body">
          <form class="form" action="" method="">
            <div class="bill__create">
              <div class="bill__create-left">
                <label class="form__label">Avatar</label>
                <div class="bill__create-box"><img srcset="./img/img-create.png, ./img/img-create@2x.png 2x" alt="" title="">
                  <p>Choose an image</p>
                </div>
              </div>
              <div class="bill__create-right d-flex flex-column justify-content-between">
                <div class="form__field form__field--input">
                  <label class="form__label" for="createTitle">Bot name</label>
                  <div class="form__input-wrap">
                    <input class="form__input" type="text" id="createTitle" name="createTitle" placeholder="Type bot name">
                  </div>
                  <div class="form__notify form__notify--hide"></div>
                </div>
                <div class="form__field form__field--input">
                  <label class="form__label" for="createDescription">Description (optional)</label>
                  <div class="form__input-wrap">
                    <input class="form__input" type="text" id="createDescription" name="createDescription" placeholder="Type your description">
                  </div>
                  <div class="form__notify form__notify--hide"></div>
                </div>
              </div>
            </div>
            <div class="form__field form__field--btn">
              <button class="form__btn c-btn c-btn--lightGray" type="submit">Delete a bot</button>
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
    name: 'NoteAssistantSettings',
    components: {},
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
