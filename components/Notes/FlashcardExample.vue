<template>
  <div class="body body--start notes">
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
                  <div class="section__title-icon"><i class="icon-font icon-bill"></i></div><span>Note Name (Flashcard example)</span>
                </div>
                <div class="section__title-right"><a href="#" title=""><i class="icon-font icon-notify"></i></a><a class="ml-3" href="#" title=""><i class="icon-font icon-edit"></i></a><a class="ml-3" href="#" title=""><i class="icon-font icon-info"></i></a>
                  <div class="c-dropdown ml-4">
                    <div class="dropdown"><a class="dropdown__btn" href="#" id="notesFlashcardTitle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span></span><span></span><span></span></a>
                      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="notesFlashcardTitle"><a class="dropdown-item" href="#">
                        <div><i class="icon-font icon-import"></i></div><span>Import</span></a><a class="dropdown-item" href="#">
                        <div><i class="icon-font icon-remove"></i></div><span>Remove</span></a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bill">
              <div class="bill__wrapper">
                <div class="bill__row bill__row-0 bill__row--info"><a href="#" title=""><i class="icon-font icon-profile"></i><span>Owner name</span></a><a href="#" title=""><i class="icon-font icon-select"></i><span>12K</span></a><a href="#" title=""><i class="icon-font icon-like"></i><span>567</span></a><a href="#" title=""><i class="icon-font icon-save"></i><span>67</span></a><a href="#" title=""><i class="icon-font icon-recent"></i><span>1 year ago</span></a></div>
                <div class="bill__row bill__row-1 bill__row--view">
                  <div class="bill__view bill__view--half">
                    <div class="tool">
                      <div class="tool__wrapper"><a class="tool__btn" href="#" title=""><i class="icon-font icon-arrow-view"></i></a><a class="tool__btn" href="#" title=""><i class="icon-font icon-arrow-view"></i></a>
                        <div class="tool__preview">
                          <div class="tool__preview-control d-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center">
                              <input type="text" value="2"><span>of <i>4</i></span>
                            </div>
                            <div class="d-flex justify-content-end"><a href="#" title=""><i class="icon-font icon-fullscreen"></i></a></div>
                          </div>
                          <div class="tool__preview-scroll">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tatio</p>
                          </div>
                        </div>
                        <div class="tool__preview">
                          <div class="tool__preview-scroll">
                            <p>Lorem _____ dolor sit amet, ________ adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet _ magna aliquam erat ________. Ut wisi enim ad ____ veniam, quis nostrud exerci tatio</p>
                          </div>
                        </div>
                      </div>
                      <div class="tool__control">
                        <div class="tool__control-wrap">
                          <div class="tool__control-middle d-flex align-items-center">
                            <div class="tool__control-line"><a href="#" data-toggle="tooltip" data-placement="top" title="Memorization level 25%"></a></div>
                            <div class="tool__control-group d-flex align-items-center justify-content-end"><a href="#" title=""><i class="icon-font icon-prev-next"></i></a><a href="#" title=""><i class="icon-font icon-prev-next"></i></a>
                            </div>
                          </div>
                          <div class="tool__control-right d-flex align-items-center"><a class="c-btn c-btn--bigH c-btn--darkGreen" href="#" title="">Start Session</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bill__row bill__row-2 bill__row--info"><a href="#" title=""><i class="icon-font icon-notes"></i><span>Flashcards in this note (<i>4</i>)</span></a><a href="#" title="">
                  <div class="forum__box-badge"></div><span>Comments (<i>5</i>)</span></a></div>
                <div class="bill__row bill__row-3 bill__row--tabs">
                  <div class="view__tabs-wrapper"><a class="view__tabs is-active" href="#" title="">Original</a><a class="view__tabs" href="#" title="">Alphabetical</a><a class="view__tabs" href="#" title="">Favorite</a></div>
                </div>
                <form class="form bill__row bill__row-4 bill__row--card bill__block-wrapper" action="" method="">
                  <div class="section__block bill__block bill__block--three bill__block--text">
                    <div class="bill__block-left">
                      <div><span>1</span></div>
                      <div>
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                      </div>
                    </div>
                    <div class="bill__block-middle">
                      <p>Lorem Ipsum is simply dummy text of the printing</p>
                    </div>
                    <div class="bill__block-right"><a class="bill__block-btn" href="#" title=""><i class="icon-font icon-edit"></i></a><a class="bill__block-btn" href="#" title=""><i class="icon-font icon-star-full"></i></a><a class="bill__block-btn" href="#" title=""><i class="icon-font icon-speaker"></i></a></div>
                  </div>
                  <div class="section__block bill__block bill__block--three bill__block--input">
                    <div class="bill__block-left">
                      <div><span>2</span></div>
                      <div>
                        <div class="form__field form__field--input">
                          <label class="form__label" for="flashcardsBlock0">Term</label>
                          <div class="form__input-wrap">
                            <input class="form__input" type="text" id="flashcardsBlock0" name="flashcardsBlock0" placeholder="Lorem Ipsum is simply dummy text">
                          </div>
                          <div class="form__notify form__notify--hide"></div>
                        </div>
                      </div>
                    </div>
                    <div class="bill__block-middle">
                      <div class="form__field form__field--input">
                        <label class="form__label" for="flashcardsBlock1">Definition</label>
                        <div class="form__input-wrap">
                          <input class="form__input" type="text" id="flashcardsBlock1" name="flashcardsBlock1" placeholder="Lorem Ipsum is simply dummy text">
                        </div>
                        <div class="form__notify form__notify--hide"></div>
                      </div>
                    </div>
                    <div class="bill__block-right"><a class="bill__block-btn bill__block-btn--check" href="#" title=""><i class="icon-font icon-check"></i></a><a class="bill__block-btn" href="#" title=""><i class="icon-font icon-star-full"></i></a><a class="bill__block-btn" href="#" title=""><i class="icon-font icon-speaker"></i></a></div>
                  </div>
                  <div class="section__block bill__block bill__block--three bill__block--text">
                    <div class="bill__block-left">
                      <div><span>3</span></div>
                      <div>
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                      </div>
                    </div>
                    <div class="bill__block-middle">
                      <p>Lorem Ipsum is simply dummy text of the printing</p>
                    </div>
                    <div class="bill__block-right"><a class="bill__block-btn" href="#" title=""><i class="icon-font icon-edit"></i></a><a class="bill__block-btn" href="#" title=""><i class="icon-font icon-star-full"></i></a><a class="bill__block-btn" href="#" title=""><i class="icon-font icon-speaker"></i></a></div>
                  </div>
                  <div class="section__block bill__block bill__block--three bill__block--text">
                    <div class="bill__block-left">
                      <div><span>4</span></div>
                      <div>
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                      </div>
                    </div>
                    <div class="bill__block-middle">
                      <p>Lorem Ipsum is simply dummy text of the printing</p>
                    </div>
                    <div class="bill__block-right"><a class="bill__block-btn" href="#" title=""><i class="icon-font icon-edit"></i></a><a class="bill__block-btn" href="#" title=""><i class="icon-font icon-star-full"></i></a><a class="bill__block-btn" href="#" title=""><i class="icon-font icon-speaker"></i></a></div>
                  </div>
                </form>
                <div class="bill__row bill__row-5 bill__row--btn"><a class="c-btn c-btn--bigH c-btn--darkGreen" href="#" title="">Add or remove</a></div>
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
    name: 'FlashcardExample',
    components: {},
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
