<template>
  <div class="body redaction-settings" v-if="redactionSettingsState">
    <section class="c-modal c-modal--redaction-settings" id="c-modal">
      <div class="c-modal__wrapper">
        <div class="c-modal__header d-flex align-items-center">
          <p class="c-modal__title subtitle">Settings</p>
          <a class="c-modal__close" href="#" title=""
            @click.prevent="hideModal({name: 'redactionSettings'})">
            <i class="icon-font icon-error"></i>
          </a>
        </div>
        <div class="c-modal__body">
          <div class="">
            <p class="c-modal__info w-100 py-2">Memorization algorithm</p>
            <div class="form__field form__field--radio mb-2">
              <input
                v-model="internalSettings.algorithm"
                id="radioCharacters"
                class="form__checkbox"
                type="radio"
                value="characters">
              <label for="radioCharacters">
                <span class="text-dark">Characters</span>
              </label>
            </div>
            <div class="form__field form__field--radio">
              <input
                v-model="internalSettings.algorithm"
                id="radioWords"
                class="form__radio"
                type="radio"
                value="words">
              <label for="radioWords">
                <span class="text-dark">Words</span>
              </label>
            </div>
          </div>
          <div class="">
            <p class="c-modal__info w-100 py-2">Image parametrs</p>
            <div class="form-group row">
              <div class="col-5 pr-0">
                <label class="form__label">Width values</label>
                <div class="form__field form__field--select ">
                  <div class="form__select-wrap">
                    <div class="form__select">
                      <span class="select__value">
                        5
                      </span>
                      <select id="selectWidthValue">
                          <option value="5">5</option>
                      </select>
                      <span class="select__icon-wrap"><i class="icon-font icon-arrow"></i></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="text-center w-100 py-5">
                  x
                </div>
              </div>
              <div class="col-5 pl-0">
                <label class="form__label">Height values</label>
                <div class="form__field form__field--select mb-4">
                  <div class="form__select-wrap">
                    <div class="form__select">
                      <span class="select__value">
                        5
                      </span>
                      <select id="selectWidthValue">
                        <option value="5">5</option>
                      </select>
                      <span class="select__icon-wrap"><i class="icon-font icon-arrow"></i></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p class="c-modal__info w-100 pb-2">Autoplay speed</p>
            <div class="form__field form__field--input">
              <div class="tool__control-middle d-flex align-items-center mw-100">
                <span>Slow</span>
                <div class="tool__control-slider form__field--range mb-0">
                  <input
                    id="inputSpeed"
                    type="range"
                    min="50"
                    max="200"
                    step="10"
                    class="slider w-100">
                </div>
                <span>Fast</span>
              </div>
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
    mapMutations,
    mapActions
  } from 'vuex';

  export default {
    name: 'RedactionSettingsModal',
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
      redactionSettingsState: {
        immediate: true,
        handler(state) {
          if (!state) return;

          this.internalSettings = {...this.settings};
        }
      }
    },
    computed: {
      ...mapGetters({
        settings: 'notes/redactionSettings',
        redactionSettingsState : 'redactionSettingsState',
      }),
    },
    methods: {
      ...mapMutations({
        deleteRedactionMasks: 'notes/DELETE_MASKS_FROM_REDACTION_CONTENTS'
      }),
      ...mapActions([
        'hideModal',
        'showModal',
      ]),
      ...mapActions({
        storeSettings: 'notes/storeRedactionSettings'
      }),
      showReset() {
        this.hideModal({name: 'redactionSettings'});
        this.showModal({name: 'redactionSettings'});
      },
      save() {
        this.loading = true;
        this.deleteRedactionMasks();
        this.storeSettings(this.internalSettings);
        this.hideModal({name: 'redactionSettings'});
        this.loading = false;
      }
    }
  }
</script>

<style lang="css">
</style>
