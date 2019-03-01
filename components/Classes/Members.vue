<template>
  <div class="body body--start p-classes">
    <section class="section" id="section">
      <div class="c-grid">
        <div class="section__wrapper">
          <div class="section__wrapper-left">
            <!-- CLASS MEMBER NAV :: START-->
            <section class="menu" id="menu">
              <div class="menu__wrapper"><a class="menu__link" href="#" title="">
                <div class="menu__link-icon"><i class="icon-font icon-arrow"></i></div><span>Navigation</span></a></div>
              <nav class="nav nav--sidebar">
                <ul class="nav__list">
                  <li class="nav__item nav__item-0 nav__item-recent"><a class="nav__link is-active nav__link-0" href="#" title="">
                    <div class="nav__link-icon"><i class="icon-font icon-recent"></i></div><span class="nav__link-text">Announcement</span></a></li>
                  <li class="nav__item nav__item-1 nav__item-courses"><a class="nav__link nav__link-1" href="#" title="">
                    <div class="nav__link-icon"><i class="icon-font icon-courses"></i></div><span class="nav__link-text">Courses</span></a></li>
                  <li class="nav__item nav__item-2 nav__item-notes"><a class="nav__link nav__link-2" href="#" title="">
                    <div class="nav__link-icon"><i class="icon-font icon-notes"></i></div><span class="nav__link-text">Notes</span></a></li>
                  <li class="nav__item nav__item-3 nav__item-members"><a class="nav__link nav__link-3" href="#" title="">
                    <div class="nav__link-icon"><i class="icon-font icon-members"></i></div><span class="nav__link-text">Members</span></a></li>
                </ul>
              </nav>
            </section>
            <!-- CLASS MEMBER NAV :: END-->
          </div>
          <div class="section__wrapper-right">
            <div class="classes">
              <div class="classes__wrapper">
                <div class="classes__row classes__row-0">
                  <div class="classes__title">
                    <div class="classes__title-left">
                      <div class="classes__title-user">
                        <div><i><img src="./img/img-user-0.png" srcset="./img/img-user-0@2x.png 2x" alt="" title=""></i></div>
                        <div>
                          <p>Class 1 (Member view)</p><span>Institution name</span>
                        </div>
                      </div>
                    </div>
                    <div class="classes__title-right"><a class="classes__title-link" href="#" title=""><i class="icon-font icon-switcher-add"></i></a><a class="classes__title-link" href="#" title=""><i class="icon-font icon-members-add"></i></a>
                      <div class="c-dropdown">
                        <div class="dropdown"><a class="dropdown__btn" href="#" id="classMemberTitle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span></span><span></span><span></span></a>
                          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="classMemberTitle"><a class="dropdown-item" href="#">
                            <div><i class="icon-font icon-notification"></i></div><span>Notification</span></a><a class="dropdown-item" href="#">
                            <div><i class="icon-font icon-info"></i></div><span>Report</span></a><a class="dropdown-item" href="#">
                            <div><i class="icon-font icon-user-delete"></i></div><span>Drop class</span></a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="classes__desc">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
                  </div>
                </div>
                <div class="classes__row classes__row-1">
                  <div class="section__subtitle section__subtitle--classes">
                    <div class="section__subtitle-wrap">
                      <div class="section__subtitle-left">
                        <div class="section__subtitle-icon"><i class="icon-font icon-account"></i></div><span>120 Members</span>
                      </div>
                      <div class="section__subtitle-right"></div>
                    </div>
                  </div>
                </div>
                <div class="classes__row classes__row-1">
                  <div class="classes__block-wrapper">
                    <div class="classes__block classes__block--members">
                      <div class="classes__block-left">
                        <div><img src="./img/img-user-0.png" srcset="./img/img-user-0@2x.png 2x" alt="" title=""></div>
                      </div>
                      <div class="classes__block-right">
                        <p>Darrell McBride</p><span>Teacher · <span>Admin</span></span>
                      </div>
                    </div>
                  </div>
                  <div class="classes__block-wrapper">
                    <div class="classes__block classes__block--members">
                      <div class="classes__block-left">
                        <div><img src="./img/img-user-0.png" srcset="./img/img-user-0@2x.png 2x" alt="" title=""></div>
                      </div>
                      <div class="classes__block-right">
                        <p>Darrell McBride</p><span>Student</span>
                      </div>
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
    name: 'Members',
    components: {},
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
