<template>
  <div class="body body--start notes">
    <section class="c-modal c-modal--settingNote" id="c-modal">
      <div class="c-modal__wrapper">
        <div class="c-modal__header d-flex align-items-center">
          <p class="c-modal__title subtitle">Settings</p><a class="c-modal__close" href="#" title=""><i class="icon-font icon-error"></i></a>
        </div>
        <div class="c-modal__body">
          <form class="form" action="" method="">
            <div>
              <label class="form__label form__label--notes">Underline for concealed words</label>
              <div class="form__field--group">
                <div class="form__field form__field--radio form__field--radio--mr">
                  <input class="form__radio" type="radio" id="notesSettingUnderlineShow" name="notesettingWords">
                  <label for="notesSettingUnderlineShow"><span>Show</span></label>
                </div>
                <div class="form__field form__field--radio">
                  <input class="form__radio" type="radio" id="notesExportUnderlineHide" name="notesettingWords" checked>
                  <label for="notesExportUnderlineHide"><span>Hide</span></label>
                </div>
              </div>
            </div>
            <div>
              <label class="form__label form__label--notes">Memorization algorithm</label>
              <div class="form__field form__field--radio">
                <input class="form__radio" type="radio" id="notesExportTab" name="notesSettingAlgorithm">
                <label for="notesExportTab"><span>Characters</span></label>
              </div>
              <div class="form__field form__field--radio">
                <input class="form__radio" type="radio" id="notesExportComma" name="notesSettingAlgorithm" checked>
                <label for="notesExportComma"><span>Words</span></label>
              </div>
            </div>
            <div>
              <label class="form__label form__label--notes">Image parameters</label>
              <div class="form__field form__field--group">
                <div>
                  <label class="form__label">Width values</label>
                  <div class="form__field form__field--select">
                    <div class="form__select-wrap">
                      <div class="form__select"><span class="select__value"></span>
                        <select name="">
                          <option value="0" disabled selected hidden>1</option>
                          <option value="1">2</option>
                          <option value="1">2</option>
                          <option value="1">2</option>
                          <option value="1">2</option>
                          <option value="1">2</option>
                          <option value="1">2</option>
                          <option value="1">2</option>
                          <option value="1">2</option>
                          <option value="1">2</option>
                          <option value="1">2</option>
                          <option value="1">2</option>
                          <option value="1">2</option>
                        </select><span class="select__icon-wrap"><i class="icon-font icon-arrow"></i></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <label class="form__label">Height values</label>
                  <div class="form__field form__field--select">
                    <div class="form__select-wrap">
                      <div class="form__select"><span class="select__value"></span>
                        <select name="">
                          <option value="0" disabled selected hidden>1</option>
                          <option value="1">3</option>
                          <option value="1">3</option>
                          <option value="1">3</option>
                          <option value="1">3</option>
                          <option value="1">3</option>
                          <option value="1">3</option>
                          <option value="1">3</option>
                          <option value="1">3</option>
                          <option value="1">3</option>
                          <option value="1">3</option>
                          <option value="1">3</option>
                          <option value="1">3</option>
                        </select><span class="select__icon-wrap"><i class="icon-font icon-arrow"></i></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <label class="form__label form__label--notes">Autoplay speed</label>
              <div class="form__field form__field--range">
                <p><span>Slow</span></p>
                <input type="range" min="0" max="100" step="1" value="60">
                <p><span>Fast</span></p>
              </div>
            </div>
            <div class="form__field form__field--btn">
              <button class="form__btn form__btn--full" type="submit">Save</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'NotesSettingsModal',
    components: {},
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
