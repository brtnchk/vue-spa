<template>
  <div class="body body--start notes">
    <section class="c-modal c-modal--notes" id="c-modal">
      <div class="c-modal__wrapper">
        <div class="c-modal__header d-flex align-items-center">
          <p class="c-modal__title subtitle">Export</p><a class="c-modal__close" href="#" title=""><i class="icon-font icon-error"></i></a>
        </div>
        <div class="c-modal__body">
          <form class="form" action="" method="">
            <div class="form__wrapper">
              <div class="form__wrapper-top">
                <div class="form__wrapper-left">
                  <label class="form__label form__label--notes">Between term and definition</label>
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
                <div class="form__wrapper-right">
                  <label class="form__label form__label--notes">Between rows</label>
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
              </div>
              <div class="form__wrapper-middle">
                <div class="form__field form__field--copy">
                  <input type="text" name="" placeholder="Copy and paste the text below. It is read-only." readonly><a class="c-btn c-btn--darkGreen c-btn--bigH" href="#" title="">Copy text</a>
                </div>
              </div>
              <div class="form__wrapper-bottom">
                <div class="form__field form__field--textarea">
                  <div class="form__textarea-wrap">
                    <textarea class="form__textarea" id="notesExportDesc" name="notesExportDesc" placeholder="Type description"></textarea>
                  </div>
                  <div class="form__notify form__notify--hide"></div>
                </div>
                <div class="form__field form__field--btn">
                  <button class="form__btn" type="submit">Export</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'NotesExportModal',
    components: {},
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
