<template>
  <div class="body p-classes">
    <section class="c-modal c-modal--classesInvite" id="c-modal">
      <div class="c-modal__wrapper">
        <div class="c-modal__header d-flex align-items-center">
          <p class="c-modal__title subtitle">Invite members</p><a class="c-modal__close" href="#" title=""><i class="icon-font icon-error"></i></a>
        </div>
        <div class="c-modal__body">
          <p class="c-modal__text">Invite members to this class by typing in their username or email address.</p>
          <form class="form" action="" method="">
            <div class="form__field--group">
              <div class="form__field form__field--input form__field--dropdown is-find">
                <div class="form__input-wrap">
                  <input class="form__input" type="text" id="sendMessageTo" name="sendMessageTo" placeholder="Enter a username or email">
                </div>
                <div class="form__input-dropdown">
                  <div>
                    <ul>
                      <li>
                        <p>Josh192</p><span>School name</span>
                      </li>
                      <li>
                        <p>Josh12</p><a class="c-btn c-btn--darkGreen" href="#" title="">Invite sent!</a>
                      </li>
                      <li>
                        <p>Josh1</p><a class="c-btn c-btn--darkGreen" href="#" title="">Invite sent!</a>
                      </li>
                      <li>
                        <p>Jos</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="form__field form__field--btn">
                <button class="form__btn" type="submit">Send invite</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'InviteMembers',
    components: {},
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
