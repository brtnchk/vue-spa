<template>
  <div class="tool__control">
    <div class="c-grid">
      <div class="tool__control-wrap">
        <div class="tool__control-left d-flex align-items-center">
          <div class="c-dropdown c-dropdown--keyboard">
            <a
              id="toolKeyboard"
              href="#"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true">
              <i class="icon-font icon-keyboard"></i>
            </a>
            <div
              class="dropdown-menu dropdown-menu-right dropdown-keyboard down"
              aria-labelledby="toolKeyboard"
              x-placement="top-start">
              <a class="dropdown-item" href="#" @click.prevent="onIncreaseLevel">
                <span>Increase level</span>
                <div><i class="top"></i></div>
              </a>
              <a class="dropdown-item" href="#" @click.prevent="onDecreaseLevel">
                <span>Decrease level</span>
                <div><i class="bottom"></i></div>
              </a>
              <a class="dropdown-item" href="#" @click.prevent="$emit('prevStep')">
                <span>Previous card</span>
                <div><i class="left"></i></div>
              </a>
              <a class="dropdown-item" href="#" @click.prevent="$emit('nextStep')">
                <span>Next card</span>
                <div><i class="right"></i></div>
              </a>
              <a class="dropdown-item" href="#" @click.prevent="$emit('switchAlgorthm')">
                <span>Switch mode</span>
                <div><span>Z</span></div>
              </a>
              <a class="dropdown-item" href="#" @click.prevent="onReset">
                <span>Reset</span>
                <div><span>SPACE</span></div>
              </a>
              <a class="dropdown-item" href="#" @click.prevent="">
                <span>Autoplay</span>
                <div><span>A</span></div>
              </a>
              <a class="dropdown-item" href="#" @click.prevent="">
                <span>Star</span>
                <div><span>S</span></div>
              </a>
              <a
                @click.prevent="$emit('redact', {currentNote: internalCurrentNote, saveState: true})"
                class="dropdown-item"
                href="#">
                <span>Shuffle</span>
                <div><span>D</span></div>
              </a>
              <a class="dropdown-item" href="#" @click.prevent="">
                <span>Edit</span>
                <div><span>E</span></div>
              </a>
              <a class="dropdown-item" href="#" @click.prevent="$emit('fullScreen')">
                <span>Full screen</span>
                <div><span>F</span></div>
              </a>
              <a class="dropdown-item" href="#" @click.prevent="$emit('toggleAlternativeMode')">
                <span>Reverse</span>
                <div><span>R</span></div>
              </a>
            </div>
          </div>
          <div class="c-dropdown">
            <a
              id="toolStar"
              href="#"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              <i class="icon-font icon-star-full"></i>
            </a>
            <div
              class="dropdown-menu dropdown-menu-right down dropdown-star"
              aria-labelledby="toolStar">
              <a class="dropdown-item" href="#">
                <div>
                  <i class="icon-font icon-star"></i>
                </div>
                <span>All</span>
              </a>
              <a class="dropdown-item" href="#">
                <div>
                  <i class="icon-font icon-star-fill"></i>
                </div>
                <span>Starred</span>
              </a>
            </div>
          </div>
        </div>
        <div class="tool__control-middle d-flex align-items-center">
          <a
            :style="{marginRight: '20px'}"
            @click.prevent="$emit('toggleAlternativeMode')"
            href="#"
            title="">
            <i class="icon-font icon-swap"></i>
          </a>
          <a href="#" title="" @click.prevent="$emit('shuffleRedactionContents')">
            <i class="icon-font icon-shuffle"></i>
          </a>
          <div class="tool__control-slider form__field--range">
            <input
              type="range"
              v-model="internalCurrentNote.hiddenPercent"
              :min="0"
              :max="100"
              :step="5"
              @input="$emit('redact', {currentNote: internalCurrentNote, saveState: false})"
              class="slider w-100"
              id="percentSlider">
            <big :style="{width: '30px'}" class="text-center">
              <span v-show="internalCurrentNote.touched">{{ internalCurrentNote.hiddenPercent }}%</span>
            </big>
          </div>
          <div class="tool__control-group d-flex align-items-center justify-content-end">
            <a href="#" title="" @click.prevent="onReset">
              <i class="icon-font icon-prev-next"></i>
            </a>
            <a
              @click.prevent="$emit('redact', {currentNote: internalCurrentNote, saveState: true})"
              href="#"
              title="">
              <i class="icon-font icon-prev-next"></i>
            </a>
          </div>
        </div>
        <div class="tool__control-right d-flex align-items-center justify-content-end">
          <a href="#" title="" @click.prevent="$emit('showPassageSettings')">
            <i class="icon-font icon-text"></i>
          </a>
          <a href="#" title="" @click.prevent="$emit('showRedactionSettings')">
            <i class="icon-font icon-setting"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import toolControl from '../../mixins/toolControl';

  export default {
    name: 'DefaulToolControl',
    components: {},
    props: [],
    mixins: [toolControl],
    mounted() {},
    created() {},
    computed: {},
    methods: {}
  }
</script>

<style scoped>
  @import "../../styles.css";
</style>
