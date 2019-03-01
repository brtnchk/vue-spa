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
                  <div class="section__title-icon"><i class="icon-font icon-message-unread"></i></div><span>Messages</span>
                </div>
                <div class="section__title-right">
                  <div class="notes__search">
                    <input class="notes__search-input" type="text" name="" placeholder="Search notes">
                    <button class="notes__search-btn" type="submit"><i class="icon-font icon-search"></i></button><a class="notes__search-clear" href="#" title=""><i class="icon-font icon-error"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="section__subtitle section__subtitle--messages">
              <div class="section__subtitle-wrap">
                <div class="section__subtitle-left"></div>
                <div class="section__subtitle-right"><a href="#" title="">
                  <div class="section__subtitle-icon"><i class="icon-font icon-messages-new"></i></div><span>New message</span></a></div>
              </div>
            </div>
            <div class="message">
              <div class="message__block message__block-0 section__block is-new">
                <div class="message__block-left">
                  <div class="message__block-user">
                    <div>
                      <div class="message__block-img"><img src="./img/img-user-0.png" srcset="./img/img-user-0@2x.png 2x" alt="" title=""></div>
                    </div>
                    <div>
                      <p>Olga Griffith</p><span>Lorem Ipsum is simply dummy tex</span>
                    </div>
                  </div>
                </div>
                <div class="message__block-right"><a href="#" title=""><i class="icon-font icon-recent"></i><span>1 day ago</span></a>
                  <div class="c-dropdown ml-4">
                    <div class="dropdown"><a class="dropdown__btn" href="#" id="messageBlock0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span></span><span></span><span></span></a>
                      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="messageBlock0"><a class="dropdown-item" href="#">
                        <div><i class="icon-font icon-message-all"></i></div><span>Archive</span></a><a class="dropdown-item" href="#">
                        <div><i class="icon-font icon-remove"></i></div><span>Remove</span></a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="message__block message__block-1 section__block">
                <div class="message__block-left">
                  <div class="message__block-user">
                    <div>
                      <div class="message__block-img"><img src="./img/img-user-0.png" srcset="./img/img-user-0@2x.png 2x" alt="" title=""></div>
                    </div>
                    <div>
                      <p>Olga Griffith</p><span>Lorem Ipsum is simply dummy tex</span>
                    </div>
                  </div>
                </div>
                <div class="message__block-right"><a href="#" title=""><i class="icon-font icon-recent"></i><span>1 day ago</span></a>
                  <div class="c-dropdown ml-4">
                    <div class="dropdown"><a class="dropdown__btn" href="#" id="messageBlock1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span></span><span></span><span></span></a>
                      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="messageBlock1"><a class="dropdown-item" href="#">
                        <div><i class="icon-font icon-message-all"></i></div><span>Archive</span></a><a class="dropdown-item" href="#">
                        <div><i class="icon-font icon-remove"></i></div><span>Remove</span></a></div>
                    </div>
                  </div>
                </div>
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
    name: 'Messages',
    components: {},
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
