<template>
  <section v-if="hasContent" class="tool" id="tool">
    <div class="c-grid default-mode">
      <h1 :style="{'padding-top': '80px'}" class="tool__title title">{{ title }}</h1>
      <div :style="{padding: 0}" class="tool__wrapper">
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
                @click.prevent="onStartSession"
                :style="{'font-size': '20px', color: '#0e1111'}"
                href="#"
                title="">
                <i class="icon-font icon-fullscreen"></i>
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
  </section>
  <section v-else class="tool" id="tool">
    <h4 :style="{'margin-bottom': '30px'}">No Content</h4>
  </section>
</template>

<script>
  import redactionMixin from '../mixins/redaction';
  import statisticsMixin from '../mixins/statistics';
  import DefaultToolControl from '../Controls/Tools/DefaultToolControl.vue';
  import ContentControl from '../Controls/Content/ContentControl.vue';

  export default {
    name: 'RedactionDefaultMode',
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

  .tool__preview {
    margin-bottom: 0px;
  }
  .tool__preview:last-child {
    margin-bottom: 60px;
  }
  /*1px solid #979797*/
</style>
