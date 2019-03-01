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
            <div class="classes classes--admin">
              <div class="classes__wrapper">
                <div class="classes__row classes__row-0">
                  <div class="classes__title">
                    <div class="classes__title-left">
                      <div class="classes__title-user">
                        <div><i><img src="./img/img-user-0.png" srcset="./img/img-user-0@2x.png 2x" alt="" title=""></i></div>
                        <div>
                          <p>Class 1 (Admin view)</p><span>Institution name</span>
                        </div>
                      </div>
                    </div>
                    <div class="classes__title-right"><a class="classes__title-link" href="#" title=""><i class="icon-font icon-switcher-add"></i></a><a class="classes__title-link" href="#" title=""><i class="icon-font icon-members-add"></i></a>
                      <div class="c-dropdown">
                        <div class="dropdown"><a class="dropdown__btn" href="#" id="classMemberTitle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span></span><span></span><span></span></a>
                          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="classMemberTitle"><a class="dropdown-item" href="#">
                            <div><i class="icon-font icon-edit"></i></div><span>Edit</span></a><a class="dropdown-item" href="#">
                            <div><i class="icon-font icon-notification"></i></div><span>Notification</span></a><a class="dropdown-item" href="#">
                            <div><i class="icon-font icon-drop"></i></div><span>Drop class</span></a><a class="dropdown-item" href="#">
                            <div><i class="icon-font icon-user-delete"></i></div><span>Remove all members</span></a><a class="dropdown-item" href="#">
                            <div><i class="icon-font icon-remove"></i></div><span>Delete class</span></a></div>
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
                        <div class="section__subtitle-icon"><i class="icon-font icon-notes"></i></div><span>120 Notes</span>
                      </div>
                      <div class="section__subtitle-right"><a href="#" title=""><span>Sort by</span><i class="icon-font icon-arrow"></i></a></div>
                    </div>
                  </div>
                </div>
                <div class="classes__row classes__row-2">
                  <div class="notes__box-wrapper">
                    <div class="notes__box notes__box-0">
                      <div class="notes__box-left"></div>
                      <div class="notes__box-middle">
                        <p class="notes__box-title">Note 1</p>
                        <div class="notes__box-info"><a href="#" title=""><i class="icon-font icon-select"></i><span>12K</span></a><a href="#" title=""><i class="icon-font icon-like"></i><span>567</span></a><a href="#" title=""><i class="icon-font icon-save"></i><span>67</span></a><a href="#" title=""><i class="icon-font icon-profile"></i><span>Owner Name</span></a><a href="#" title=""><i class="icon-font icon-recent"></i><span>1 year ago</span></a></div>
                      </div>
                      <div class="notes__box-right">
                        <div class="notes__box-drop c-dropdown">
                          <div class="dropdown"><a class="dropdown__btn" href="#" id="classNotes-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span></span><span></span><span></span></a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="classNotes-0"><a class="dropdown-item" href="#">
                              <div><i class="icon-font icon-edit"></i></div><span>Edit</span></a><a class="dropdown-item" href="#">
                              <div><i class="icon-font icon-export-2"></i></div><span>Export</span></a><a class="dropdown-item" href="#">
                              <div><i class="icon-font icon-remove"></i></div><span>Remove</span></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="notes__box notes__box-1">
                      <div class="notes__box-left"></div>
                      <div class="notes__box-middle">
                        <p class="notes__box-title">Note 2</p>
                        <div class="notes__box-info"><a href="#" title=""><i class="icon-font icon-select"></i><span>12K</span></a><a href="#" title=""><i class="icon-font icon-like"></i><span>567</span></a><a href="#" title=""><i class="icon-font icon-save"></i><span>67</span></a><a href="#" title=""><i class="icon-font icon-profile"></i><span>Owner Name</span></a><a href="#" title=""><i class="icon-font icon-recent"></i><span>1 year ago</span></a></div>
                      </div>
                      <div class="notes__box-right">
                        <div class="notes__box-drop c-dropdown">
                          <div class="dropdown"><a class="dropdown__btn" href="#" id="classNotes-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span></span><span></span><span></span></a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="classNotes-1"><a class="dropdown-item" href="#">
                              <div><i class="icon-font icon-edit"></i></div><span>Edit</span></a><a class="dropdown-item" href="#">
                              <div><i class="icon-font icon-export-2"></i></div><span>Export</span></a><a class="dropdown-item" href="#">
                              <div><i class="icon-font icon-remove"></i></div><span>Remove</span></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="notes__box notes__box-2">
                      <div class="notes__box-left"></div>
                      <div class="notes__box-middle">
                        <p class="notes__box-title">Note 3</p>
                        <div class="notes__box-info"><a href="#" title=""><i class="icon-font icon-select"></i><span>12K</span></a><a href="#" title=""><i class="icon-font icon-like"></i><span>567</span></a><a href="#" title=""><i class="icon-font icon-save"></i><span>67</span></a><a href="#" title=""><i class="icon-font icon-profile"></i><span>Owner Name</span></a><a href="#" title=""><i class="icon-font icon-recent"></i><span>1 year ago</span></a></div>
                      </div>
                      <div class="notes__box-right">
                        <div class="notes__box-drop c-dropdown">
                          <div class="dropdown"><a class="dropdown__btn" href="#" id="classNotes-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span></span><span></span><span></span></a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="classNotes-2"><a class="dropdown-item" href="#">
                              <div><i class="icon-font icon-edit"></i></div><span>Edit</span></a><a class="dropdown-item" href="#">
                              <div><i class="icon-font icon-export-2"></i></div><span>Export</span></a><a class="dropdown-item" href="#">
                              <div><i class="icon-font icon-remove"></i></div><span>Remove</span></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="notes__box notes__box-3">
                      <div class="notes__box-left"></div>
                      <div class="notes__box-middle">
                        <p class="notes__box-title">Note 4</p>
                        <div class="notes__box-info"><a href="#" title=""><i class="icon-font icon-select"></i><span>12K</span></a><a href="#" title=""><i class="icon-font icon-like"></i><span>567</span></a><a href="#" title=""><i class="icon-font icon-save"></i><span>67</span></a><a href="#" title=""><i class="icon-font icon-profile"></i><span>Owner Name</span></a><a href="#" title=""><i class="icon-font icon-recent"></i><span>1 year ago</span></a></div>
                      </div>
                      <div class="notes__box-right">
                        <div class="notes__box-drop c-dropdown">
                          <div class="dropdown"><a class="dropdown__btn" href="#" id="classNotes-3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span></span><span></span><span></span></a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="classNotes-3"><a class="dropdown-item" href="#">
                              <div><i class="icon-font icon-edit"></i></div><span>Edit</span></a><a class="dropdown-item" href="#">
                              <div><i class="icon-font icon-export-2"></i></div><span>Export</span></a><a class="dropdown-item" href="#">
                              <div><i class="icon-font icon-remove"></i></div><span>Remove</span></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="notes__box notes__box-4">
                      <div class="notes__box-left"></div>
                      <div class="notes__box-middle">
                        <p class="notes__box-title">Note 5</p>
                        <div class="notes__box-info"><a href="#" title=""><i class="icon-font icon-select"></i><span>12K</span></a><a href="#" title=""><i class="icon-font icon-like"></i><span>567</span></a><a href="#" title=""><i class="icon-font icon-save"></i><span>67</span></a><a href="#" title=""><i class="icon-font icon-profile"></i><span>Owner Name</span></a><a href="#" title=""><i class="icon-font icon-recent"></i><span>1 year ago</span></a></div>
                      </div>
                      <div class="notes__box-right">
                        <div class="notes__box-drop c-dropdown">
                          <div class="dropdown"><a class="dropdown__btn" href="#" id="classNotes-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span></span><span></span><span></span></a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="classNotes-4"><a class="dropdown-item" href="#">
                              <div><i class="icon-font icon-edit"></i></div><span>Edit</span></a><a class="dropdown-item" href="#">
                              <div><i class="icon-font icon-export-2"></i></div><span>Export</span></a><a class="dropdown-item" href="#">
                              <div><i class="icon-font icon-remove"></i></div><span>Remove</span></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="notes__box notes__box-5">
                      <div class="notes__box-left"></div>
                      <div class="notes__box-middle">
                        <p class="notes__box-title">Note 6</p>
                        <div class="notes__box-info"><a href="#" title=""><i class="icon-font icon-select"></i><span>12K</span></a><a href="#" title=""><i class="icon-font icon-like"></i><span>567</span></a><a href="#" title=""><i class="icon-font icon-save"></i><span>67</span></a><a href="#" title=""><i class="icon-font icon-profile"></i><span>Owner Name</span></a><a href="#" title=""><i class="icon-font icon-recent"></i><span>1 year ago</span></a></div>
                      </div>
                      <div class="notes__box-right">
                        <div class="notes__box-drop c-dropdown">
                          <div class="dropdown"><a class="dropdown__btn" href="#" id="classNotes-5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span></span><span></span><span></span></a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="classNotes-5"><a class="dropdown-item" href="#">
                              <div><i class="icon-font icon-edit"></i></div><span>Edit</span></a><a class="dropdown-item" href="#">
                              <div><i class="icon-font icon-export-2"></i></div><span>Export</span></a><a class="dropdown-item" href="#">
                              <div><i class="icon-font icon-remove"></i></div><span>Remove</span></a></div>
                          </div>
                        </div>
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
    name: 'AdminNotes',
    components: {},
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
