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
                  <li class="nav__item nav__item-0 nav__item-browse"><a class="nav__link is-active nav__link-0" href="#" title="">
                    <div class="nav__link-icon"><i class="icon-font icon-browse"></i></div><span class="nav__link-text">Browse</span></a></li>
                  <li class="nav__item nav__item-1 nav__item-notes"><a class="nav__link nav__link-1" href="#" title="">
                    <div class="nav__link-icon"><i class="icon-font icon-notes"></i></div><span class="nav__link-text">Study</span></a></li>
                  <li class="nav__item nav__item-2 nav__item-recent"><a class="nav__link nav__link-2" href="#" title="">
                    <div class="nav__link-icon"><i class="icon-font icon-recent"></i></div><span class="nav__link-text">Recent</span></a></li>
                  <li class="nav__item nav__item-3 nav__item-statistics"><a class="nav__link nav__link-3" href="#" title="">
                    <div class="nav__link-icon"><i class="icon-font icon-statistics"></i></div><span class="nav__link-text">Statistics</span></a></li>
                  <li class="nav__item nav__item-4 nav__item-schedule"><a class="nav__link nav__link-4" href="#" title="">
                    <div class="nav__link-icon"><i class="icon-font icon-schedule"></i></div><span class="nav__link-text">Schedule</span></a></li>
                  <li class="nav__item nav__item-5 nav__item-forum"><a class="nav__link nav__link-5" href="#" title="">
                    <div class="nav__link-icon"><i class="icon-font icon-forum"></i></div><span class="nav__link-text">Forum</span></a></li>
                  <li class="nav__item nav__item-6 nav__item-setting"><a class="nav__link nav__link-6" href="#" title="">
                    <div class="nav__link-icon"><i class="icon-font icon-setting"></i></div><span class="nav__link-text">Settings</span></a></li>
                </ul>
              </nav>
              <nav class="nav nav--sidebar nav--sidebar-1">
                <ul class="nav__list">
                  <li class="nav__item nav__item-0"><a class="nav__link nav__link-0" href="#" title="">Classes</a></li>
                </ul>
              </nav>
              <nav class="nav nav--sidebar nav--sidebar-2">
                <ul class="nav__list">
                  <li class="nav__item nav__item-0"><a class="nav__link nav__link-0" href="#" title="">
                    <div class="nav__link-image"><img src="./img/img-user-0.png" srcset="./img/img-user-0@2x.png 2x" alt="" title=""/></div><span class="nav__link-text">Class 1</span></a></li>
                  <li class="nav__item nav__item-1"><a class="nav__link nav__link-1" href="#" title="">
                    <div class="nav__link-image"><img src="./img/img-user-0.png" srcset="./img/img-user-0@2x.png 2x" alt="" title=""/></div><span class="nav__link-text">Class 2</span></a></li>
                </ul>
              </nav>
              <nav class="nav nav--sidebar nav--sidebar-3">
                <ul class="nav__list">
                  <li class="nav__item nav__item-0 nav__item-join"><a class="nav__link nav__link-0" href="#" title="">
                    <div class="nav__link-icon"><i class="icon-font icon-join"></i></div><span class="nav__link-text">Join or create a class</span></a></li>
                </ul>
              </nav>
            </section>
            <!-- MAIN NAV :: END-->
          </div>
          <div class="section__wrapper-right">
            <div class="section__title section__title--forum">
              <div class="section__title-wrap">
                <div class="section__title-left">
                  <div class="section__title-icon"><i class="icon-font icon-forum"></i></div><span>Forum</span>
                  <div class="section__title-icon section__title-icon--arrow"><i class="icon-font icon-arrow"></i></div><span>Topic Name</span>
                </div>
                <div class="section__title-right">
                  <div class="forum__btn-wrap"><a class="forum__btn forum__btn--follow c-btn c-btn--bigH c-btn--darkGreen" href="#" title=""><i class="icon-font icon-eye"></i><span>Follow</span></a></div>
                </div>
              </div>
            </div>
            <div class="forum">
              <div class="forum__body-bottom">
                <div class="forum__body-left">
                  <div class="forum__box forum__post">
                    <div class="forum__post-top">
                      <div class="forum__post-left">
                        <div class="forum__post-img"><img srcset="./img/img-user-0.png, ./img/img-user-0@2x.png 2x" alt="" title=""></div>
                      </div>
                      <div class="forum__post-right">
                        <p class="forum__post-title">Please stop slamming the Klingon and High Valyrian courses, everyone.</p>
                        <p class="forum__post-user"><i class="icon-font icon-profile"></i><span>Author name</span></p>
                        <p class="forum__post-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <div class="forum__post-control">
                          <div><a class="forum__box-btn forum__box-btn--like" href="#" title=""><i class="icon-font icon-like"></i><span>12</span></a><a class="forum__box-btn forum__box-btn--dislike" href="#" title=""><i class="icon-font icon-like"></i></a><a class="forum__box-btn forum__box-btn--recent" href="#" title=""><i class="icon-font icon-recent"></i><span>1 day ago</span></a></div>
                          <div>
                            <div class="c-dropdown">
                              <div class="dropdown"><a class="dropdown__btn" href="#" id="forumPostMain" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span></span><span></span><span></span></a>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="forumPostMain"><a class="dropdown-item" href="#">
                                  <div><i class="icon-font icon-ban"></i></div><span>Hide</span></a><a class="dropdown-item" href="#">
                                  <div><i class="icon-font icon-info"></i></div><span>Report</span></a></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="forum__post-bottom">
                      <div class="forum__post-left">
                        <div class="forum__post-img"><img srcset="./img/img-user-0.png, ./img/img-user-0@2x.png 2x" alt="" title=""></div>
                      </div>
                      <div class="forum__post-right">
                        <form class="form" action="" method="">
                          <div class="form__field form__field--textarea">
                            <div class="form__textarea-wrap">
                              <textarea class="form__textarea" id="" name="" placeholder="Add a comment"></textarea>
                            </div>
                            <div class="form__notify form__notify--hide"></div>
                          </div>
                          <div class="form__field form__field--btn">
                            <button class="form__btn forum__post-btn" type="submit">Comment</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div class="forum__box forum__post">
                    <div class="forum__post-top forum__post-top--wp">
                      <div class="forum__post-left">
                        <div class="forum__post-img"><img srcset="./img/img-user-0.png, ./img/img-user-0@2x.png 2x" alt="" title=""></div>
                      </div>
                      <div class="forum__post-right">
                        <p class="forum__post-user"><i class="icon-font icon-profile"></i><span>Author name</span></p>
                        <p class="forum__post-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div class="forum__post-control">
                          <div><a class="forum__box-btn forum__box-btn--like" href="#" title=""><i class="icon-font icon-like"></i><span>12</span></a><a class="forum__box-btn forum__box-btn--dislike" href="#" title=""><i class="icon-font icon-like"></i></a><a class="forum__box-btn forum__box-btn--recent" href="#" title=""><i class="icon-font icon-recent"></i><span>1 day ago</span></a><a class="forum__box-btn forum__box-btn--reply" href="#" title=""><i class="icon-font icon-export"></i><span>Reply</span></a></div>
                          <div>
                            <div class="c-dropdown">
                              <div class="dropdown"><a class="dropdown__btn" href="#" id="forumPostMess0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span></span><span></span><span></span></a>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="forumPostMess0"><a class="dropdown-item" href="#">
                                  <div><i class="icon-font icon-ban"></i></div><span>Hide</span></a><a class="dropdown-item" href="#">
                                  <div><i class="icon-font icon-info"></i></div><span>Report</span></a></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="forum__box forum__post forum__post--ml">
                    <div class="forum__post-top">
                      <div class="forum__post-left">
                        <div class="forum__post-img"><img srcset="./img/img-user-0.png, ./img/img-user-0@2x.png 2x" alt="" title=""></div>
                      </div>
                      <div class="forum__post-right">
                        <p class="forum__post-user"><i class="icon-font icon-profile"></i><span>Author name</span></p>
                        <p class="forum__post-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div class="forum__post-control">
                          <div><a class="forum__box-btn forum__box-btn--like" href="#" title=""><i class="icon-font icon-like"></i><span>12</span></a><a class="forum__box-btn forum__box-btn--dislike" href="#" title=""><i class="icon-font icon-like"></i></a><a class="forum__box-btn forum__box-btn--recent" href="#" title=""><i class="icon-font icon-recent"></i><span>1 day ago</span></a><a class="forum__box-btn forum__box-btn--reply" href="#" title=""><i class="icon-font icon-export"></i><span>Reply</span></a></div>
                          <div>
                            <div class="c-dropdown">
                              <div class="dropdown"><a class="dropdown__btn" href="#" id="forumPostMess2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span></span><span></span><span></span></a>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="forumPostMess2"><a class="dropdown-item" href="#">
                                  <div><i class="icon-font icon-ban"></i></div><span>Hide</span></a><a class="dropdown-item" href="#">
                                  <div><i class="icon-font icon-info"></i></div><span>Report</span></a></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="forum__post-bottom">
                      <div class="forum__post-left">
                        <div class="forum__post-img"><img srcset="./img/img-user-0.png, ./img/img-user-0@2x.png 2x" alt="" title=""></div>
                      </div>
                      <div class="forum__post-right">
                        <form class="form" action="" method="">
                          <div class="form__field form__field--textarea">
                            <div class="form__textarea-wrap">
                              <textarea class="form__textarea" name="" placeholder="Add a comment"></textarea>
                            </div>
                            <div class="form__notify form__notify--hide"></div>
                          </div>
                          <div class="form__field form__field--btn">
                            <button class="form__btn forum__post-btn c-btn c-btn--lightGray" type="submit">Cancel</button>
                            <button class="form__btn forum__post-btn" type="submit">Comment</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div class="forum__box forum__post">
                    <div class="forum__post-top forum__post-top--wp">
                      <div class="forum__post-left">
                        <div class="forum__post-img"><img srcset="./img/img-user-0.png, ./img/img-user-0@2x.png 2x" alt="" title=""></div>
                      </div>
                      <div class="forum__post-right">
                        <p class="forum__post-user"><i class="icon-font icon-profile"></i><span>Author name</span></p>
                        <p class="forum__post-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div class="forum__post-control">
                          <div><a class="forum__box-btn forum__box-btn--like" href="#" title=""><i class="icon-font icon-like"></i><span>12</span></a><a class="forum__box-btn forum__box-btn--dislike" href="#" title=""><i class="icon-font icon-like"></i></a><a class="forum__box-btn forum__box-btn--recent" href="#" title=""><i class="icon-font icon-recent"></i><span>1 day ago</span></a><a class="forum__box-btn forum__box-btn--reply" href="#" title=""><i class="icon-font icon-export"></i><span>Reply</span></a></div>
                          <div>
                            <div class="c-dropdown">
                              <div class="dropdown"><a class="dropdown__btn" href="#" id="forumPostMess1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span></span><span></span><span></span></a>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="forumPostMess1"><a class="dropdown-item" href="#">
                                  <div><i class="icon-font icon-ban"></i></div><span>Hide</span></a><a class="dropdown-item" href="#">
                                  <div><i class="icon-font icon-info"></i></div><span>Report</span></a></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="forum__body-right">
                  <div class="forum__box forum__related">
                    <p class="forum__related-title">Related topics</p><a class="forum__related-content" href="#">
                    <p>Lorem Ipsum is simply dummy text of the printing</p><span>Comments 12</span></a><a class="forum__related-content" href="#">
                    <p>Lorem Ipsum is simply dummy text of the printing</p><span>Comments 12</span></a><a class="forum__related-content" href="#">
                    <p>Lorem Ipsum is simply dummy text of the printing</p><span>Comments 12</span></a>
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

<style scoped>
</style>
