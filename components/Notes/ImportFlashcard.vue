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
                  <div class="section__title-icon"><i class="icon-font icon-import"></i></div><span>Import</span>
                </div>
                <div class="section__title-right"><a href="#" title=""><i class="icon-font icon-error"></i></a></div>
              </div>
            </div>
            <div class="bill">
              <div class="bill__wrapper">
                <div class="bill__row bill__row-7 bill__row--import">
                  <div class="bill__import-wrapper">
                    <p class="bill__import-text">Import your data. <span>Copy and paste your data here or</span> upload it.</p>
                  </div>
                  <div class="bill__import-block section__block mb-0">
                    <ul>
                      <li><span>Word 1</span><span>Definition 1</span></li>
                      <li><span>Word 2</span><span>Definition 2</span></li>
                      <li><span>Word 3</span><span>Definition 3</span></li>
                    </ul>
                  </div>
                </div>
                <div class="bill__row bill__row-7 bill__row--option">
                  <form class="form" action="" method="">
                    <div class="form__wrapper">
                      <div class="form__wrapper-top">
                        <div class="form__wrapper-left">
                          <label class="form__label form__label--notes">Between term and definition</label>
                          <div class="form__field-cover">
                            <div class="form__field form__field--radio">
                              <input class="form__radio" type="radio" id="notesExportTab" name="notesExportTerm">
                              <label for="notesExportTab"><span>Tab</span></label>
                            </div>
                            <div class="form__field form__field--radio">
                              <input class="form__radio" type="radio" id="notesExportComma" name="notesExportTerm" checked>
                              <label for="notesExportComma"><span>Comma</span></label>
                            </div>
                            <div class="form__field form__field--radio">
                              <input class="form__radio" type="radio" id="notesExportTermCustom" name="notesExportTerm">
                              <label for="notesExportTermCustom"><span>Custom</span></label>
                            </div>
                            <div class="form__field form__field--custom">
                              <input type="text" name="" placeholder="-">
                            </div>
                          </div>
                        </div>
                        <div class="form__wrapper-right">
                          <label class="form__label form__label--notes">Between rows</label>
                          <div class="form__field-cover">
                            <div class="form__field form__field--radio">
                              <input class="form__radio" type="radio" id="notesExportLine" name="notesExportRows">
                              <label for="notesExportLine"><span>New line</span></label>
                            </div>
                            <div class="form__field form__field--radio">
                              <input class="form__radio" type="radio" id="notesExportSemicolon" name="notesExportRows" checked>
                              <label for="notesExportSemicolon"><span>Semicolon</span></label>
                            </div>
                            <div class="form__field form__field--radio">
                              <input class="form__radio" type="radio" id="notesExportRowCustom" name="notesExportRows">
                              <label for="notesExportRowCustom"><span>Custom</span></label>
                            </div>
                            <div class="form__field form__field--custom">
                              <input type="text" name="" placeholder="\n\n">
                            </div>
                          </div>
                        </div>
                        <div class="form__wrapper-left">
                          <label class="form__label form__label--notes">Option</label>
                          <div class="form__field form__field--checkbox form__field--checkbox-wp">
                            <div class="form__checkbox-wrap">
                              <input class="form__checkbox" type="checkbox" id="notesExport" name="" checked>
                              <label for="notesExport">
                                <u></u><span>Alphabetize</span><i class="icon-font icon-check"></i>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div class="form__wrapper-right">
                          <div class="form__field form__field--btn">
                            <button class="form__btn" type="submit">Import</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="bill__row bill__row--title"><span>Preview</span></div>
                <div class="bill__row bill__row-8 bill__row--block">
                  <div class="section__block bill__block bill__block--three bill__block--create bill__block--input">
                    <div class="bill__block-left"><span>1</span></div>
                    <div class="bill__block-middle">
                      <div class="form__field form__field--input">
                        <label class="form__label" for="notesCreate0">Term</label>
                        <div class="form__input-wrap">
                          <input class="form__input" type="text" id="notesCreate0" name="notesCreate0" placeholder="Lorem Ipsum is simply dummy text">
                        </div>
                        <div class="form__notify form__notify--hide"></div>
                      </div>
                    </div>
                    <div class="bill__block-right">
                      <div class="form__field form__field--input">
                        <label class="form__label" for="notesCreate1">Definition</label>
                        <div class="form__input-wrap">
                          <input class="form__input" type="text" id="notesCreate1" name="notesCreate1" placeholder="Lorem Ipsum is simply dummy text">
                        </div>
                        <div class="form__notify form__notify--hide"></div>
                      </div>
                    </div>
                  </div>
                  <div class="section__block bill__block bill__block--three bill__block--create bill__block--input">
                    <div class="bill__block-left"><a href="#" title=""><i class="icon-font icon-remove"></i></a></div>
                    <div class="bill__block-middle">
                      <div class="form__field form__field--input">
                        <label class="form__label" for="notesCreate2">Term</label>
                        <div class="form__input-wrap">
                          <input class="form__input" type="text" id="notesCreate2" name="notesCreate2" placeholder="Lorem Ipsum is simply dummy text">
                        </div>
                        <div class="form__notify form__notify--hide"></div>
                      </div>
                    </div>
                    <div class="bill__block-right">
                      <div class="form__field form__field--input">
                        <label class="form__label" for="notesCreate3">Definition</label>
                        <div class="form__input-wrap">
                          <input class="form__input" type="text" id="notesCreate3" name="notesCreate3" placeholder="Lorem Ipsum is simply dummy text">
                        </div>
                        <div class="form__notify form__notify--hide"></div>
                      </div>
                    </div>
                  </div>
                  <div class="section__block bill__block bill__block--three bill__block--opacity bill__block--create bill__block--input">
                    <div class="bill__block-left"><span>2</span></div>
                    <div class="bill__block-middle">
                      <div class="form__field form__field--input">
                        <label class="form__label" for="notesCreate4">Term</label>
                        <div class="form__input-wrap">
                          <input class="form__input" type="text" id="notesCreate4" name="notesCreate4" placeholder="Lorem Ipsum is simply dummy text">
                        </div>
                        <div class="form__notify form__notify--hide"></div>
                      </div>
                    </div>
                    <div class="bill__block-right">
                      <div class="form__field form__field--input">
                        <label class="form__label" for="notesCreate5">Definition</label>
                        <div class="form__input-wrap">
                          <input class="form__input" type="text" id="notesCreate5" name="notesCreate5" placeholder="Lorem Ipsum is simply dummy text">
                        </div>
                        <div class="form__notify form__notify--hide"></div>
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
    name: 'ImportFlashcard',
    components: {},
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
