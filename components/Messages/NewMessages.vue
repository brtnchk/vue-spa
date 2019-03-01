<template>
  <div class="body body--start p-messages">
    <section class="section" id="section">
      <div class="c-grid">
        <div class="section__wrapper">
          <div class="section__wrapper-left">
            <!-- MESSAGES NAV :: START-->
            <section class="menu" id="menu">
              <div class="menu__wrapper"><a class="menu__link" href="#" title="">
                <div class="menu__link-icon"><i class="icon-font icon-arrow"></i></div><span>Navigation</span></a></div>
              <nav class="nav nav--sidebar">
                <ul class="nav__list">
                  <li class="nav__item nav__item-0 nav__item-message-all"><a class="nav__link nav__link-0" href="#" title="">
                    <div class="nav__link-icon"><i class="icon-font icon-message-all"></i></div><span class="nav__link-text">All</span></a></li>
                  <li class="nav__item nav__item-1 nav__item-message-unread"><a class="nav__link nav__link-1" href="#" title="">
                    <div class="nav__link-icon"><i class="icon-font icon-message-unread"></i></div><span class="nav__link-text">Unread</span></a></li>
                  <li class="nav__item nav__item-2 nav__item-message-archived"><a class="nav__link nav__link-2" href="#" title="">
                    <div class="nav__link-icon"><i class="icon-font icon-message-archived"></i></div><span class="nav__link-text">Archived</span></a></li>
                </ul>
              </nav>
            </section>
            <!-- MESSAGES NAV :: END-->
          </div>
          <div class="section__wrapper-right">
            <div class="section__title section__title--messages">
              <div class="section__title-wrap">
                <div class="section__title-left">
                  <div class="section__title-icon"><i class="icon-font icon-message-unread"></i></div><span>New messages</span>
                </div>
                <div class="section__title-right"><a href="#" title=""><i class="icon-font icon-error"></i></a></div>
              </div>
            </div>
            <div class="message">
              <div class="message__box section__block">
                <form class="form" action="" method="">
                  <div class="message__box-input">
                    <div class="form__field form__field--input form__field--dropdown is-find">
                      <label class="form__label" for="sendMessageTo">To</label>
                      <div class="form__input-wrap">
                        <input class="form__input" type="text" id="sendMessageTo" name="sendMessageTo" placeholder="Enter a username or email" value="Josh1">
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
                  </div>
                  <div class="message__box-textarea">
                    <div>
                      <div class="message__block-img"><img src="./img/img-user-0.png" srcset="./img/img-user-0@2x.png 2x" alt="" title=""></div>
                    </div>
                    <div>
                      <div class="form__field form__field--textarea">
                        <div class="form__textarea-wrap">
                          <textarea class="form__textarea" id="" name="" placeholder="Add a comment"></textarea>
                        </div>
                        <div class="form__notify form__notify--hide"></div>
                      </div>
                      <div class="form__field form__field--btn">
                        <button class="form__btn message__box-btn" type="submit">Send</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'NewMessages',
    components: {},
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
