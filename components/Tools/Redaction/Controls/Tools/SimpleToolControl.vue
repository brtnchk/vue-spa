<template>
  <div
    :style="{'background': 'transparent', 'box-shadow': 'none', margin: '0 0 50px'}"
    class="tool__control">
    <div class="c-grid">
      <div class="tool__control-wrap">
        <div
          :style="{'max-width': '100%', 'margin-right': '30px', 'margin-left': '-45px'}"
          class="tool__control-middle d-flex align-items-center">
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
              @click.prevent="$emit('redact', {currentNote: internalCurrentNote, saveState: false})"
              href="#"
              title="">
              <i class="icon-font icon-prev-next"></i>
            </a>
          </div>
        </div>
        <div
          :style="{'margin-right': '-15px'}"
          class="tool__control-right d-flex align-items-center justify-content-end">
          <div class="tool__control-right d-flex align-items-center">
            <a
              v-if="!collectStatistics"
              @click.prevent="$emit('startSession')"
              class="c-btn c-btn--bigH c-btn--darkGreen"
              href="#"
              title="">
              Start Session
            </a>
            <a
              v-else
              @click.prevent="$emit('finishSession')"
              class="c-btn c-btn--bigH c-btn--darkGreen"
              href="#"
              title="">
              Finish Session
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import toolControl from '../../mixins/toolControl';

  export default {
    name: 'SimpleToolControl',
    components: {},
    mixins: [toolControl],
    mounted() {},
    created() {},
    watch: {},
    computed: {},
    methods: {}
  }
</script>

<style scoped>
  @import "../../styles.css";
</style>
