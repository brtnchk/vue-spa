<template>
  <div class="body redaction-settings" v-if="passageSettingsState">
    <section class="c-modal c-modal--redaction-passage-settings" id="c-modal">
      <div class="c-modal__wrapper">
        <div class="c-modal__header d-flex align-items-center">
          <p class="c-modal__title subtitle">Passage settings</p>
          <a class="c-modal__close" href="#" title=""
            @click.prevent="hideModal({name: 'passageSettings'})">
            <i class="icon-font icon-error"></i>
          </a>
        </div>
        <div class="c-modal__body">
          <div class="">
            <label class="form__label pb-3" for="selectFont">Font</label>
            <div class="form__field form__field--select mb-4">
              <div class="form__select-wrap">
                <div class="form__select">
                    <span class="select__value">
                      {{internalSettings.font.name}}
                    </span>
                    <select id="selectFont" v-model="internalSettings.font">
                      <option
                        v-for="font in availableFonts"
                        :value="font">
                        {{ font.name }}
                      </option>
                    </select>
                    <span class="select__icon-wrap"><i class="icon-font icon-arrow"></i></span>
                </div>
              </div>
            </div>
          </div>
          <div class="form__field form__field--input">
            <label class="form__label pb-3" for="inputFontSize">Font size</label>
            <div class="tool__control-middle d-flex align-items-center mw-100 mb-4">
              <a href="#" title="">
                <img src="../../../assets/icon/font-icon-down.png" alt="">
              </a>
              <div class="tool__control-slider form__field--range">
                <input
                  id="inputFontSize"
                  v-model="internalSettings.fontSize"
                  type="range"
                  min="50"
                  max="200"
                  step="10"
                  class="slider w-100">
              </div>
              <a href="#" title="">
                <img src="../../../assets/icon/font-icon-up.png" alt="">
              </a>
            </div>
          </div>
          <div class="form__field form__field--input">
            <label class="form__label pb-3" for="inputPassageWidth">Passage width</label>
            <div class="tool__control-middle d-flex align-items-center mw-100 mb-4">
              <a href="#" title="">
                <img src="../../../assets/icon/responsive-icon-sm.png" alt="">
              </a>
              <div class="tool__control-slider form__field--range">
                <input
                  id="inputPassageWidth"
                  v-model="internalSettings.width"
                  type="range"
                  min="10"
                  max="100"
                  step="10"
                  class="slider w-100">
              </div>
              <a href="#" title="">
                <img src="../../../assets/icon/responsive-icon-lg.png" alt="">
              </a>
            </div>
          </div>
          <div class="form__field form__field--input">
            <label class="form__label pb-3" for="inputBrghtness">Brightness</label>
            <div class="tool__control-middle d-flex align-items-center mw-100 mb-4">
              <a href="#" title="">
                <img src="../../../assets/icon/light-icon-low.png" alt="">
              </a>
              <div class="tool__control-slider form__field--range">
                <input
                  id="inputBrghtness"
                  v-model="internalSettings.brightness"
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  class="slider w-100">
              </div>
              <a href="#" title="">
                <img src="../../../assets/icon/light-icon-hight.png" alt="">
              </a>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <label class="form__label pb-3">Alignment</label>
            </div>
            <div class="form__field form__field--radio col-4">
                <input
                    v-model="internalSettings.alignment"
                    id="radioAlignmentJustify"
                    class="form__radio"
                    type="radio"
                    value="justify">
                <label for="radioAlignmentJustify"><span class="text-dark">Justified</span></label>
            </div>
            <div class="form__field form__field--radio col-4">
                <input
                    v-model="internalSettings.alignment"
                    id="radioAlignmentLeft"
                    class="form__radio"
                    type="radio"
                    value="left">
                <label for="radioAlignmentLeft"><span class="text-dark">Left-aligned</span></label>
            </div>
            <div class="form__field form__field--radio col-4">
                <input
                    v-model="internalSettings.alignment"
                    id="radioAlignmentRight"
                    class="form__radio"
                    type="radio"
                    value="right">
                <label for="radioAlignmentRight"><span class="text-dark">Right-aligned</span></label>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <label class="form__label pb-3">Line spacing</label>
            </div>
            <div class="form__field form__field--radio col-4">
                <input
                    v-model="internalSettings.lineScpasing"
                    id="radioSpacingSmall"
                    class="form__checkbox"
                    type="radio"
                    value="0.9">
                <label for="radioSpacingSmall"><span class="text-dark">Small</span></label>
            </div>
            <div class="form__field form__field--radio col-4">
                <input
                    v-model="internalSettings.lineScpasing"
                    id="radioSpacingMedium"
                    class="form__radio"
                    type="radio"
                    value="unset">
                <label for="radioSpacingMedium"><span class="text-dark">Medium</span></label>
            </div>
            <div class="form__field form__field--radio col-4">
                <input
                    v-model="internalSettings.lineScpasing"
                    id="radioSpacingLarge"
                    class="form__radio"
                    type="radio"
                    value="2">
                <label for="radioSpacingLarge"><span class="text-dark">Large</span></label>
            </div>
          </div>
          <div class="section__block-footer">
            <button
              class="c-btn c-btn--bigH c-btn--darkGreen"
              type="button"
              :disabled="loading"
              @click.stop="save">
              Save
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex';

  export default {
    name: "PassageSettingsModal",
    data() {
      return {
        loading: false,
        internalSettings: {}
      }
    },
    watch: {
      settings: {
        immediate: true,
        handler(settings) {
          this.internalSettings = {...settings};
        }
      },
      passageSettingsState: {
        immediate: true,
        handler(state) {
          if (!state) return;

          this.internalSettings = {...this.settings};
        }
      }
    },
    computed: {
      ...mapGetters({
        settings: 'notes/redactionPassageSettings',
        passageSettingsState : 'passageSettingsState',
        availableFonts: 'availableFonts'
      }),
    },
    methods: {
      ...mapActions([
        'hideModal',
        'showModal',
      ]),
      ...mapActions({
        storeSettings: 'notes/storeRedactionPassageSettings'
      }),
      showReset() {
        this.hideModal({name: 'passageSettings'});
        this.showModal({name: 'passageSettings'});
      },
      save() {
        this.loading = true;
        this.storeSettings(this.internalSettings);
        this.hideModal({name: 'passageSettings'});
        this.loading = false;
      }
    }
  }
</script>

<style scoped>
  #c-modal.c-modal--redaction-passage-settings .c-modal__wrapper {
    max-width: 550px;
  }

  #c-modal .form__field--range {
    margin-bottom: 0 !important;
  }

  #c-modal .form__field--range input {
    background-color: rgba(216, 216, 216, 0.8);
  }

  #c-modal .tool__control-slider {
    width: 100%;
  }

  #c-modal .form__field--range {
    margin-bottom: 0 !important;
  }

  #c-modal .form__field--range input {
    background-color: rgba(216, 216, 216, 0.8);
  }

  #c-modal .tool__control-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #4CAF50;
    cursor: pointer;
  }

  #c-modal .tool__control-slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #4CAF50;
    cursor: pointer;
  }
</style>
