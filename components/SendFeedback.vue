<template>
  <div class="body body--start view">
    <section class="new new--view" id="new">
      <div class="c-grid">
        <div class="new__wrapper">
          <h1 class="new__title title">Talk with our support team</h1>
          <p class="new__text text">Please submit your information and a Memscore representative will contact you as soon as possible. If you have a simple question, please see our <a href='#'>Forum.</a></p>
          <div class="new__form">
            <form class="form" action="" method="">
              <div class="form__field form__field--input">
                <label class="form__label" for="supportName">Name</label>
                <div class="form__input-wrap">
                  <input class="form__input" type="text" id="supportName" name="supportName" placeholder="">
                </div>
                <div class="form__notify form__notify--show"></div>
              </div>
              <div class="form__field form__field--input">
                <label class="form__label" for="supportEmail">Email</label>
                <div class="form__input-wrap">
                  <input class="form__input" type="text" id="supportEmail" name="supportEmail" placeholder="">
                </div>
                <div class="form__notify form__notify--hide"></div>
              </div>
              <div class="form__field form__field--textarea">
                <label class="form__label" for="supportMessage">What would you like to discuss?*</label>
                <div class="form__textarea-wrap">
                  <textarea class="form__textarea" id="supportMessage" name="supportMessage"></textarea>
                </div>
                <div class="form__notify form__notify--hide"></div>
              </div>
              <div class="form__field form__field--btn">
                <button class="form__btn" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'SendFeedback',
    components: {},
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
