<template>
  <div class="body p-notes">
    <section class="c-modal c-modal--classesInvite" id="c-modal">
      <div class="c-modal__wrapper">
        <div class="c-modal__header d-flex align-items-center">
          <p class="c-modal__title subtitle">Share access</p><a class="c-modal__close" href="#" title=""><i class="icon-font icon-error"></i></a>
        </div>
        <div class="c-modal__body">
          <p class="c-modal__text">Share access to this note with other users by typing in their username.</p>
          <form class="form" action="" method="">
            <div class="form__field--group">
              <div class="form__field form__field--input form__field--dropdown">
                <div class="form__input-wrap">
                  <input class="form__input" type="text" id="sendMessageTo" name="sendMessageTo" placeholder="">
                </div>
                <div class="form__input-dropdown">
                  <div>
                    <ul>
                      <li>
                        <p>Josh192</p><span>School name</span>
                      </li>
                      <li>
                        <p>Josh12</p>
                      </li>
                      <li>
                        <p>Josh1</p>
                      </li>
                      <li>
                        <p>Jos</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="form__field form__field--btn">
                <button class="form__btn c-btn c-btn--lightGray" type="submit">Send invite</button>
              </div>
            </div>
          </form>
          <div class="c-modal__users">
            <p class="c-modal__text">2 members</p>
            <ul>
              <li><a>
                <div><i><img src="./img/img-user-0.png" srcset="./img/img-user-0@2x.png 2x" alt="" title=""></i></div>
                <div>
                  <p>Jane Oliver</p><span>Student</span>
                </div></a>
              </li>
              <li><a>
                <div><i><img src="./img/img-user-0.png" srcset="./img/img-user-0@2x.png 2x" alt="" title=""></i></div>
                <div>
                  <p>Jane Oliver</p><span>Student</span>
                </div></a>
                <div class="c-dropdown">
                  <div class="dropdown"><a class="dropdown__btn" href="#" id="notesFlashcardTitle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span></span><span></span><span></span></a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="notesFlashcardTitle"><a class="dropdown-item" href="#">
                      <div><i class="icon-font icon-remove"></i></div><span>Remove</span></a></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'NotesShareAccess',
    components: {},
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
