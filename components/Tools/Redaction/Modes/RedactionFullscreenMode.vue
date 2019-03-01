<template>
  <div class="body body--start notes">
    <section v-if="hasContent" class="fullscreen" id="fullscreen">
      <div class="fullscreen__wrapper">
        <div class="fullscreen__wrapper-top">
          <div :style="{margin: 'auto', width: '100%'}">
            <p class="fullscreen__title">
              <span v-if="showFullscreenMsg">Press Esc to exit full screen mode</span>
            </p>
            <div class="tool tool--half">
              <div
                :style="{
                'padding-top': 0,
                'box-shadow': '0 3px 4px 0 rgba(0, 0, 0, 0.1)',
                border: 'transparent',
                height: 'auto'
              }"
                class="tool__wrapper">
                <a @click.prevent="prevStep" class="tool__btn" href="#" title="">
                  <i class="icon-font icon-arrow-view"></i>
                </a>
                <a @click.prevent="nextStep" class="tool__btn" href="#" title="">
                  <i class="icon-font icon-arrow-view"></i>
                </a>
                <div
                  v-for="(item, index) in currentNote.content"
                  :style="{
                  'box-shadow': '0 3px 4px 0 rgba(0, 0, 0, 0.1)',
                  border: 'transparent',
                  'border-bottom': '1px solid #cbcecb',
                  height: 'auto'
                }"
                  class="tool__preview"
                  ref="block">
                  <div v-if="index === 0" class="tool_top-bar clearfix">
                    <div class="float-left">
                      <input
                        v-model="currentStep"
                        type="number"
                        class="form-control"
                        size="2"
                        maxlength="2"
                        min="1"
                        :max="redactionContents.length"
                        @input="changeStep"/>
                      <span class="text-muted px-2">
                      of {{ redactionContents.length }}
                    </span>
                    </div>
                    <div class="float-right">
                      <a
                        :style="{'font-size': '20px', color: '#0e1111'}"
                        href="#"
                        title="">
                        <i class="icon-font icon-star-full"></i>
                      </a>
                    </div>
                  </div>
                  <div
                    :style="{padding: index === 0 ? '0 55px 15px' : '40px 55px 15px'}"
                    class="tool__preview-scroll">
                    <ContentControl
                      :content="item"
                      :styles="redactionTextStyles"
                      :settings="settings"></ContentControl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="fullscreen__wrapper-bottom">
          <div class="tool">
            <DefaultToolControl
              @redact="onRedact($event)"
              @toggleAlternativeMode="toggleSwitch"
              @fullScreen=""
              @switchAlgorthm="switchAlgorthm"
              @nextStep="nextStep"
              @prevStep="prevStep"
              @undoShuffle="undo"
              @startSession="onStartSession"
              @finishSession="onFinishSession"
              @showPassageSettings="showModal({name: 'passageSettings'})"
              @showRedactionSettings="showModal({name: 'redactionSettings'})"
              :isVisible="isVisible"
              :currentNote="currentNote"
              :collectStatistics="collectStatistics"></DefaultToolControl>
          </div>
        </div>
      </div>
    </section>
    <section v-else class="fullscreen" id="fullscreen">
      <h4 :style="{'margin-bottom': '30px'}">No Content</h4>
    </section>
  </div>
</template>

<script>
  import redactionMixin from '../mixins/redaction';
  import statisticsMixin from '../mixins/statistics';
  import DefaultToolControl from '../Controls/Tools/DefaultToolControl.vue';
  import ContentControl from '../Controls/Content/ContentControl.vue';

  export default {
    name: 'RedactionFullscreenNewMode',
    components: {
      DefaultToolControl,
      ContentControl
    },
    props: [],
    mixins: [
      redactionMixin,
      statisticsMixin
    ],
    data() {
      return {}
    },
    mounted() {
    },
    created() {
    },
    computed: {},
    methods: {}
  }
</script>

<style scoped>
  @import "../styles.css";

  .tool .tool__control {
    margin-top: 25px;
  }

  .fullscreen__wrapper-top {
    display: flex;
    flex-direction: column;
    position: relative;
  }
</style>
