<template>
  <div class="body body--start notes">
    <section class="c-modal c-modal--pageSetting" id="c-modal">
      <div class="c-modal__wrapper">
        <div class="c-modal__header d-flex align-items-center">
          <p class="c-modal__title subtitle">Page settings</p><a class="c-modal__close" href="#" title=""><i class="icon-font icon-error"></i></a>
        </div>
        <div class="c-modal__body">
          <form class="form" action="" method="">
            <label class="form__label">Font</label>
            <div class="form__field form__field--select">
              <div class="form__select-wrap">
                <div class="form__select"><span class="select__value"></span>
                  <select name="">
                    <option value="0" disabled selected hidden>Poppins</option>
                    <option value="january">Tahoma</option>
                    <option value="february">Lato</option>
                    <option value="march">Times New Roman</option>
                  </select><span class="select__icon-wrap"><i class="icon-font icon-arrow"></i></span>
                </div>
              </div>
            </div>
            <label class="form__label">Font size</label>
            <div class="form__field form__field--range">
              <p class="icon-text-wrap"><i class="icon-font icon-text"></i></p>
              <input type="range" min="0" max="100" step="1" value="30">
              <p class="icon-text-wrap"><i class="icon-font icon-text"></i></p>
            </div>
            <label class="form__label">Page width</label>
            <div class="form__field form__field--range">
              <p class="icon-width-wrap"><span></span></p>
              <input type="range" min="0" max="100" step="1" value="10">
              <p class="icon-width-wrap"><span></span></p>
            </div>
            <label class="form__label">Brightness</label>
            <div class="form__field form__field--range">
              <p><i class="icon-font icon-light"></i></p>
              <input type="range" min="0" max="100" step="1" value="60">
              <p><i class="icon-font icon-light"></i></p>
            </div>
            <label class="form__label">Alignment</label>
            <div class="form__field--group justify-content-between">
              <div class="form__field form__field--radio form__field--radio--mr">
                <input class="form__radio" type="radio" id="pageSettingJustified" name="pageSettingAlign">
                <label for="pageSettingJustified"><span>Justified</span></label>
              </div>
              <div class="form__field form__field--radio form__field--radio--mr">
                <input class="form__radio" type="radio" id="pageSettingAlignLeft" name="pageSettingAlign" checked>
                <label for="pageSettingAlignLeft"><span>Left-aligned</span></label>
              </div>
              <div class="form__field form__field--radio">
                <input class="form__radio" type="radio" id="pageSettingAlignRight" name="pageSettingAlign">
                <label for="pageSettingAlignRight"><span>Right-aligned</span></label>
              </div>
            </div>
            <label class="form__label">Line spacing</label>
            <div class="form__field--group justify-content-between">
              <div class="form__field form__field--radio form__field--radio--mr">
                <input class="form__radio" type="radio" id="pageSettingSpacSmall" name="pageSettingSpacing">
                <label for="pageSettingSpacSmall"><span>Small</span></label>
              </div>
              <div class="form__field form__field--radio form__field--radio--mr">
                <input class="form__radio" type="radio" id="pageSettingSpacMedium" name="pageSettingSpacing" checked>
                <label for="pageSettingSpacMedium"><span>Medium</span></label>
              </div>
              <div class="form__field form__field--radio">
                <input class="form__radio" type="radio" id="pageSettingSpacLarge" name="pageSettingSpacing">
                <label for="pageSettingSpacLarge"><span>Large</span></label>
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
    name: 'NotesPageSettingsModal',
    components: {},
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
