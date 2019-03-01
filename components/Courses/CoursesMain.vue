<template>
  <div class="body body--start p-courses">
    <section class="section" id="section">
      <div class="c-grid">
        <div class="section__wrapper">
          <div class="section__wrapper-left">
            <!-- NOTES MENU NAV :: START-->
            <section class="menu" id="menu">
              <div class="menu__wrapper"><a class="menu__link" href="#" title="">
                <div class="menu__link-icon"><i class="icon-font icon-arrow"></i></div><span>Navigation</span></a></div>
              <nav class="nav nav--sidebar">
                <ul class="nav__list">
                  <li class="nav__item nav__item-0 nav__item-folder"><a class="nav__link is-active nav__link-0" href="#" title="">
                    <div class="nav__link-icon"><i class="icon-font icon-folder"></i></div><span class="nav__link-text">Courses</span></a></li>
                  <li class="nav__item nav__item-1 nav__item-notes"><a class="nav__link nav__link-1" href="#" title="">
                    <div class="nav__link-icon"><i class="icon-font icon-notes"></i></div><span class="nav__link-text">Notes</span></a></li>
                </ul>
              </nav>
            </section>
            <!-- NOTES MENU NAV :: END-->
          </div>
          <div class="section__wrapper-right">
            <div class="section__title section__title--notes">
              <div class="section__title-wrap">
                <div class="section__title-left">
                  <div class="section__title-icon"><i class="icon-font icon-folder"></i></div><span>Courses</span>
                </div>
                <div class="section__title-right">
                  <div class="notes__search">
                    <input class="notes__search-input" type="text" name="" placeholder="Search notes">
                    <button class="notes__search-btn" type="submit"><i class="icon-font icon-search"></i></button><a class="notes__search-clear" href="#" title=""><i class="icon-font icon-error"></i></a>
                  </div>
                  <div class="c-dropdown"><a href="#" id="createNotesMain1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="icon-font icon-folder-add"></i></a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="createNotesMain1"><a class="dropdown-item" href="#">
                      <div><i class="icon-font icon-edit"></i></div><span>Edit</span></a><a class="dropdown-item" href="#">
                      <div><i class="icon-font icon-export-2"></i></div><span>Export</span></a><a class="dropdown-item" href="#">
                      <div><i class="icon-font icon-remove"></i></div><span>Remove</span></a></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="section__subtitle section__subtitle--classes">
              <div class="section__subtitle-wrap">
                <div class="section__subtitle-left">
                  <div class="section__subtitle-icon"><i class="icon-font icon-courses"></i></div><span>2 Courses</span>
                </div>
                <div class="section__subtitle-right">
                  <div class="c-dropdown"><a href="#" id="sortBy" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span>Sort by <span></span></span><i class="icon-font icon-arrow"></i></a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="sortBy"><a class="dropdown-item" href="#"><span>Sort A to Z</span></a><a class="dropdown-item" href="#"><span>Sort by date</span></a><a class="dropdown-item" href="#"><span>Custom</span></a><a class="dropdown-item" href="#"><span>Default</span></a></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="notes__box-wrapper">
              <div class="notes__box">
                <div class="notes__box-left"></div>
                <div class="notes__box-middle">
                  <p class="notes__box-title">Lorem Ipsum is simply dummy</p>
                  <div class="notes__box-info"><a href="#" title=""><i class="icon-font icon-select"></i><span>12K</span></a><a href="#" title=""><i class="icon-font icon-like"></i><span>567</span></a><a href="#" title=""><i class="icon-font icon-save"></i><span>67</span></a><a href="#" title=""><i class="icon-font icon-profile"></i><span>Owner Name</span></a><a href="#" title=""><i class="icon-font icon-recent"></i><span>1 year ago</span></a></div>
                </div>
                <div class="notes__box-right">
                  <div class="notes__box-drop c-dropdown">
                    <div class="dropdown"><a class="dropdown__btn" href="#" id="notesBox0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span></span><span></span><span></span></a>
                      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="notesBox0"><a class="dropdown-item" href="#">
                        <div><i class="icon-font icon-export-2"></i></div><span>Export</span></a><a class="dropdown-item" href="#">
                        <div><i class="icon-font icon-info"></i></div><span>Report</span></a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="notes__box">
                <div class="notes__box-left"></div>
                <div class="notes__box-middle">
                  <p class="notes__box-title">Lorem Ipsum is simply dummy</p>
                  <div class="notes__box-info"><a href="#" title=""><i class="icon-font icon-select"></i><span>12K</span></a><a href="#" title=""><i class="icon-font icon-like"></i><span>567</span></a><a href="#" title=""><i class="icon-font icon-save"></i><span>67</span></a><a href="#" title=""><i class="icon-font icon-profile"></i><span>Owner Name</span></a><a href="#" title=""><i class="icon-font icon-recent"></i><span>1 year ago</span></a></div>
                </div>
                <div class="notes__box-right">
                  <div class="notes__box-drop c-dropdown">
                    <div class="dropdown"><a class="dropdown__btn" href="#" id="notesBox0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span></span><span></span><span></span></a>
                      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="notesBox0"><a class="dropdown-item" href="#">
                        <div><i class="icon-font icon-export-2"></i></div><span>Export</span></a><a class="dropdown-item" href="#">
                        <div><i class="icon-font icon-info"></i></div><span>Report</span></a></div>
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
    name: 'CoursesMain',
    components: {},
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
