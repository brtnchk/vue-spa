<template>
  <div class="body body--start trial">
    <section class="c-modal c-modal--forum" id="c-modal">
      <div class="c-modal__wrapper">
        <div class="c-modal__header d-flex align-items-center">
          <p class="c-modal__title subtitle">Create a topic</p><a class="c-modal__close" href="#" title=""><i class="icon-font icon-error"></i></a>
        </div>
        <div class="c-modal__body">
          <form class="form" action="" method="">
            <label class="form__label">Topic</label>
            <div class="form__field form__field--select">
              <div class="form__select-wrap">
                <div class="form__select"><span class="select__value"></span>
                  <select name="">
                    <option value="0" disabled selected hidden>Pick a discussion topic</option>
                    <option value="1">Some topic title name</option>
                    <option value="1">Some topic title name</option>
                    <option value="1">Some topic title name</option>
                    <option value="1">Some topic title name</option>
                    <option value="1">Some topic title name</option>
                    <option value="1">Some topic title name</option>
                    <option value="1">Some topic title name</option>
                    <option value="1">Some topic title name</option>
                    <option value="1">Some topic title name</option>
                    <option value="1">Some topic title name</option>
                    <option value="1">Some topic title name</option>
                    <option value="1">Some topic title name</option>
                  </select><span class="select__icon-wrap"><i class="icon-font icon-arrow"></i></span>
                </div>
              </div>
            </div>
            <div class="form__field form__field--input">
              <label class="form__label" for="forumTopicTitle">Title</label>
              <div class="form__input-wrap">
                <input class="form__input" type="text" id="forumTopicTitle" name="forumTopicTitle" placeholder="Type topic title">
              </div>
              <div class="form__notify form__notify--hide"></div>
            </div>
            <div class="form__field form__field--textarea">
              <label class="form__label" for="forumTopicDescription">Description</label>
              <div class="form__textarea-wrap">
                <textarea class="form__textarea" id="forumTopicDescription" name="forumTopicDescription" placeholder="Type description"></textarea>
              </div>
              <div class="form__notify form__notify--hide"></div>
            </div>
            <div class="form__field form__field--btn">
              <button class="form__btn" type="submit">Create</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'CreateTopicModal',
    components: {},
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
