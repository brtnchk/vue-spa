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
                <div class="bill__row bill__row-7 bill__row--import bill__row--importBook">
                  <div class="bill__import-wrapper">
                    <p class="bill__import-text">Import your data. <span>Click <a href='#'>here</a> to upload your data.</span></p>
                  </div>
                  <div class="bill__import-block section__block mb-0">
                    <ul>
                      <li>
                        <div>
                          <p>Book name</p>
                          <p>25mb</p>
                        </div>
                        <div class="d-flex justify-content-end"><a href="#" title=""><i class="icon-font icon-remove"></i></a></div>
                      </li>
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
                <div class="bill__row bill__row-9 bill__row--preview">
                  <div class="bill__preview">
                    <div class="bill__preview-head d-flex justify-content-end">
                      <div class="c-dropdown">
                        <div class="dropdown"><a class="dropdown__btn" href="#" id="notesFlashcardTitle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span></span><span></span><span></span></a>
                          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="notesFlashcardTitle"><a class="dropdown-item" href="#">
                            <div><i class="icon-font icon-edit"></i></div><span>Edit</span></a><a class="dropdown-item" href="#">
                            <div><i class="icon-font icon-star-full"></i></div><span>Set as primary</span></a><a class="dropdown-item" href="#">
                            <div><i class="icon-font icon-remove"></i></div><span>Remove</span></a></div>
                        </div>
                      </div>
                    </div>
                    <div class="bill__preview-body">
                      <div class="tool">
                        <div class="tool__wrapper">
                          <div class="tool__preview">
                            <div class="tool__preview-control d-flex align-items-center justify-content-between">
                              <div class="d-flex align-items-center">
                                <input type="text" value="2"><span>of <i>4</i></span>
                              </div>
                              <div class="d-flex justify-content-end"><a href="#" title=""><i class="icon-font icon-edit"></i></a></div>
                            </div>
                            <div class="tool__preview-scroll"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'ImportBook',
    components: {},
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
