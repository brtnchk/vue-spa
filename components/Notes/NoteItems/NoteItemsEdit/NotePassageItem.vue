<template>
  <div class="bill__box section__block">
    <md-progress-bar
      v-if="isNoteItemRemoveLoading && amIRemoving"
      class="progress-bar__local"
      md-mode="indeterminate"></md-progress-bar>
    <div class="bill__box-left">
      <span class="bill__box-num">{{ index + 1 }}</span>
      <a
        @click.prevent="onRemoveItem(item)"
        class="bill__box-btn"
        href="#"
        title="">
        <i class="icon-font icon-remove"></i>
      </a>
    </div>
    <div :style="{height: calcHeight} "class="bill__box-right">
      <div class="form__field form__field--textarea">
        <label class="form__label" :for="'notesCreateText' + index">Passage</label>
        <div class="form__textarea-wrap">
          <textarea
            v-model="item.passage_text"
            @input="internalText = $event.target.value"
            :id="'notesCreateText' + index"
            :name="'notesCreateText' + index"
            :rows="rows"
            :style="{height: 'auto', overflow: 'hidden'}"
            ref="field"
            class="form__textarea"
            placeholder="Passage"></textarea>
        </div>
        <div class="form__notify form__notify--hide"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import { noteItemMethods, autoScaleTextarea } from '../mixins';

  export default {
    name: 'NotePassageItem',
    props: ['item', 'index'],
    mixins: [
      noteItemMethods,
      autoScaleTextarea
    ],
    components: {},
    data() {
      return {
        internalText: ''
      };
    },
    watch: {
      internalText(val, oldVal) {
        this.setRows(val.length < oldVal.length);
      }
    },
    computed: {},
    methods: {}
  }
</script>

<style scoped>
  .bill__box {
    position: relative;
  }

  .bill__box .progress-bar__local {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
  }

  .bill__box-btn {
    display: none;
  }

  .bill__box-left {
    cursor: pointer;
  }

  .bill__box:hover > .bill__box-left > .bill__box-btn {
    display: flex;
  }

  .bill__box:hover > .bill__box-left > .bill__box-num {
    display: none;
  }

  .bill__box-btn:hover > i {
    color: #019552;
    transition: color 0.3s ease-in-out;
  }
</style>
