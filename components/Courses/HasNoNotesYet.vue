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
            <div class="section__title section__title--browse">
              <div class="section__title-wrap">
                <div class="section__title-left">
                  <div class="section__title-icon"><i class="icon-font icon-folder"></i></div><span>Courses</span>
                  <div class="section__title-icon section__title-icon--arrow"><i class="icon-font icon-arrow"></i></div><span>Course 1</span>
                </div>
                <div class="section__title-right"><a href="#" title=""><i class="icon-font icon-switcher-add"></i></a>
                  <div class="c-dropdown ml-4">
                    <div class="dropdown"><a class="dropdown__btn" href="#" id="notesFlashcardTitle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span></span><span></span><span></span></a>
                      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="notesFlashcardTitle"><a class="dropdown-item" href="#">
                        <div><i class="icon-font icon-edit"></i></div><span>Edit</span></a><a class="dropdown-item" href="#">
                        <div><i class="icon-font icon-export-2"></i></div><span>Export</span></a><a class="dropdown-item" href="#">
                        <div><i class="icon-font icon-remove"></i></div><span>Remove</span></a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="section__title-desc">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
              </div>
            </div>
            <div class="bill">
              <div class="bill__wrapper">
                <div class="bill__row bill__row-0 bill__row--info"><a href="#" title=""><i class="icon-font icon-profile"></i><span>Owner name</span></a><a href="#" title=""><i class="icon-font icon-notes"></i><span>2</span></a><a href="#" title=""><i class="icon-font icon-select"></i><span>12K</span></a><a href="#" title=""><i class="icon-font icon-like"></i><span>567</span></a><a href="#" title=""><i class="icon-font icon-save"></i><span>67</span></a><a href="#" title=""><i class="icon-font icon-recent"></i><span>1 year ago</span></a></div>
              </div>
            </div>
            <div class="search__empty">
              <p>This course has no notes yet</p>
              <p>Organize your notes into courses</p><a class="c-btn c-btn--bigH c-btn--darkGreen" href="#" title=""><i class="icon-font icon-switcher-add"></i><span>Add a note</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'HasNoNotesYet',
    components: {},
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
