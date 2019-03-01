<template>
  <div class="body body--start trial">
    <section class="section" id="section">
      <div class="c-grid">
        <div class="section__wrapper">
          <div class="section__wrapper-left">
            <!-- MAIN NAV :: START-->
            <section class="menu" id="menu">
              <nav class="nav nav--sidebar nav--sidebar-0">
                <ul class="nav__list">
                  <li class="nav__item nav__item-0 nav__item-browse">
                    <a class="nav__link is-active nav__link-0" href="#" title="">
                      <div class="nav__link-icon">
                        <i class="icon-font icon-browse"></i>
                      </div>
                      <span class="nav__link-text">Browse</span>
                    </a>
                  </li>
                  <li class="nav__item nav__item-1 nav__item-notes">
                    <router-link class="nav__link nav__link-1" to="/study" title="">
                      <div class="nav__link-icon">
                        <i class="icon-font icon-notes"></i>
                      </div>
                      <span class="nav__link-text">Study</span>
                    </router-link>
                  </li>
                  <li class="nav__item nav__item-2 nav__item-recent">
                    <a class="nav__link nav__link-2" href="#" title="">
                      <div class="nav__link-icon">
                        <i class="icon-font icon-recent"></i>
                      </div>
                      <span class="nav__link-text">Recent</span>
                    </a>
                  </li>
                  <li class="nav__item nav__item-3 nav__item-statistics">
                    <a class="nav__link nav__link-3" href="#" title="">
                      <div class="nav__link-icon">
                        <i class="icon-font icon-statistics"></i>
                      </div>
                      <span class="nav__link-text">Statistics</span>
                    </a>
                  </li>
                  <li class="nav__item nav__item-4 nav__item-schedule">
                    <a class="nav__link nav__link-4" href="#" title="">
                      <div class="nav__link-icon">
                        <i class="icon-font icon-schedule"></i>
                      </div>
                      <span class="nav__link-text">Schedule</span>
                    </a>
                  </li>
                  <li class="nav__item nav__item-5 nav__item-forum">
                    <a class="nav__link nav__link-5" href="#" title="">
                      <div class="nav__link-icon">
                        <i class="icon-font icon-forum"></i>
                      </div>
                      <span class="nav__link-text">Forum</span>
                    </a>
                  </li>
                  <li class="nav__item nav__item-6 nav__item-setting">
                    <a class="nav__link nav__link-6" href="#" title="">
                      <div class="nav__link-icon">
                        <i class="icon-font icon-setting"></i>
                      </div>
                      <span class="nav__link-text">Settings</span>
                    </a>
                  </li>
                </ul>
              </nav>
              <nav class="nav nav--sidebar nav--sidebar-1">
                <ul class="nav__list">
                  <li class="nav__item nav__item-0">
                    <a class="nav__link nav__link-0" href="#" title="">Classes</a>
                  </li>
                </ul>
              </nav>
              <nav class="nav nav--sidebar nav--sidebar-2">
                <ul class="nav__list">
                  <li class="nav__item nav__item-0">
                    <a class="nav__link nav__link-0" href="#" title="">
                      <div class="nav__link-image">
                        <img src="./img/img-user-0.png" srcset="./img/img-user-0@2x.png 2x" alt="" title="" />
                      </div>
                      <span class="nav__link-text">Class 1</span>
                    </a>
                  </li>
                  <li class="nav__item nav__item-1">
                    <a class="nav__link nav__link-1" href="#" title="">
                      <div class="nav__link-image">
                        <img src="./img/img-user-0.png" srcset="./img/img-user-0@2x.png 2x" alt="" title="" />
                      </div>
                      <span class="nav__link-text">Class 2</span>
                    </a>
                  </li>
                </ul>
              </nav>
              <nav class="nav nav--sidebar nav--sidebar-3">
                <ul class="nav__list">
                  <li class="nav__item nav__item-0 nav__item-join">
                    <a class="nav__link nav__link-0" href="#" title="">
                      <div class="nav__link-icon">
                        <i class="icon-font icon-join"></i>
                      </div>
                      <span class="nav__link-text">Join or create a class</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </section>
            <!-- MAIN NAV :: END-->
          </div>
          <div class="section__wrapper-right">
            <div class="section__title section__title--forum">
              <div class="section__title-wrap">
                <div class="section__title-left">
                  <div class="section__title-icon">
                    <i class="icon-font icon-forum"></i>
                  </div>
                  <span>Forum</span>
                  <div class="section__title-icon section__title-icon--arrow">
                    <i class="icon-font icon-arrow"></i>
                  </div>
                  <span>Topic Name</span>
                </div>
                <div class="section__title-right">
                  <div class="notes__search">
                    <input class="notes__search-input" type="text" name="" placeholder="Search forum">
                    <button class="notes__search-btn" type="submit">
                      <i class="icon-font icon-search"></i>
                    </button>
                    <a class="notes__search-clear" href="#" title="">
                      <i class="icon-font icon-error"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="forum">
              <div class="forum__body">
                <div class="forum__body-top">
                  <div class="forum__tabs-wrapper">
                    <a class="forum__tabs is-active" href="#" title="">Popular</a>
                    <a class="forum__tabs" href="#" title="">New</a>
                    <a class="forum__tabs" href="#" title="">Followed</a>
                  </div>
                </div>
                <div class="forum__body-bottom">
                  <div class="forum__body-left">
                    <div class="forum__box">
                      <div class="forum__box-top">
                        <div class="forum__box-left">
                          <div class="forum__box-img">
                            <img srcset="./img/img-user-0.png, ./img/img-user-0@2x.png 2x" alt="" title="">
                          </div>
                        </div>
                        <div class="forum__box-middle">
                          <p class="forum__box-title">
                            Please stop slamming the Klingon and High Valyrian courses, everyone.
                          </p>
                        </div>
                        <div class="forum__box-right">
                          <div class="forum__box-badge"><span>102</span></div>
                        </div>
                      </div>
                      <div class="forum__box-bottom">
                        <a class="forum__box-btn forum__box-btn--like" href="#" title="">
                          <i class="icon-font icon-like"></i>
                          <span>12</span>
                        </a>
                        <a class="forum__box-btn forum__box-btn--dislike" href="#" title="">
                          <i class="icon-font icon-like"></i>
                        </a>
                        <a class="forum__box-btn forum__box-btn--recent" href="#" title="">
                          <i class="icon-font icon-recent"></i>
                          <span>1 day ago</span>
                        </a>
                        <a class="forum__box-btn forum__box-btn--profile" href="#" title="">
                          <i class="icon-font icon-profile"></i>
                          <span>Autor Name</span>
                        </a>
                        <a class="forum__box-btn forum__box-btn--book" href="#" title="">
                          <i class="icon-font icon-book"></i>
                          <span>Subscription Name</span>
                        </a>
                      </div>
                    </div>
                    <div class="forum__box">
                      <div class="forum__box-top">
                        <div class="forum__box-left">
                          <div class="forum__box-img"><img srcset="./img/img-user-0.png, ./img/img-user-0@2x.png 2x" alt="" title=""></div>
                        </div>
                        <div class="forum__box-middle">
                          <p class="forum__box-title">Please stop slamming the Klingon and High Valyrian courses, everyone.</p>
                        </div>
                        <div class="forum__box-right">
                          <div class="forum__box-badge"><span>102</span></div>
                        </div>
                      </div>
                      <div class="forum__box-bottom">
                        <a class="forum__box-btn forum__box-btn--like" href="#" title="">
                          <i class="icon-font icon-like"></i>
                          <span>12</span>
                        </a>
                        <a class="forum__box-btn forum__box-btn--dislike" href="#" title="">
                          <i class="icon-font icon-like"></i>
                        </a>
                        <a class="forum__box-btn forum__box-btn--recent" href="#" title="">
                          <i class="icon-font icon-recent"></i>
                          <span>1 day ago</span>
                        </a>
                        <a class="forum__box-btn forum__box-btn--profile" href="#" title="">
                          <i class="icon-font icon-profile"></i>
                          <span>Autor Name</span>
                        </a>
                        <a class="forum__box-btn forum__box-btn--book" href="#" title="">
                          <i class="icon-font icon-book"></i>
                          <span>Subscription Name</span>
                        </a>
                      </div>
                    </div>
                    <div class="forum__box">
                      <div class="forum__box-top">
                        <div class="forum__box-left">
                          <div class="forum__box-img">
                            <img srcset="./img/img-user-0.png, ./img/img-user-0@2x.png 2x" alt="" title=""></div>
                        </div>
                        <div class="forum__box-middle">
                          <p class="forum__box-title">Please stop slamming the Klingon and High Valyrian courses, everyone.</p>
                        </div>
                        <div class="forum__box-right">
                          <div class="forum__box-badge"><span>102</span></div>
                        </div>
                      </div>
                      <div class="forum__box-bottom">
                        <a class="forum__box-btn forum__box-btn--like" href="#" title="">
                          <i class="icon-font icon-like"></i>
                          <span>12</span>
                        </a>
                        <a class="forum__box-btn forum__box-btn--dislike" href="#" title="">
                          <i class="icon-font icon-like"></i>
                        </a>
                        <a class="forum__box-btn forum__box-btn--recent" href="#" title="">
                          <i class="icon-font icon-recent"></i>
                          <span>1 day ago</span>
                        </a>
                        <a class="forum__box-btn forum__box-btn--profile" href="#" title="">
                          <i class="icon-font icon-profile"></i>
                          <span>Autor Name</span>
                        </a>
                        <a class="forum__box-btn forum__box-btn--book" href="#" title="">
                          <i class="icon-font icon-book"></i>
                          <span>Subscription Name</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="forum__body-right">
                    <a class="forum__btn c-btn c-btn--bigH c-btn--darkGreen" href="#" title="">
                      <i class="icon-font icon-forum"></i><span>Create a topic</span>
                    </a>
                    <div class="forum__feed">
                      <div class="forum__feed-head">
                        <p>Feed</p><a href="#" title=""><i class="icon-font icon-edit"></i></a>
                      </div><a class="forum__feed-body is-active" href="#">
                        <div></div>
                        <p>Name</p>
                      </a><a class="forum__feed-body" href="#">
                        <div></div>
                        <p>Name</p>
                      </a><a class="forum__feed-body" href="#">
                        <div></div>
                        <p>Name</p>
                      </a>
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
  name: '',
  components: {},
  computed: {},
  methods: {}
}
</script>
