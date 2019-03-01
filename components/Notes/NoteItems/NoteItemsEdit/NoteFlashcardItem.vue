<template>
  <div
    class="section__block bill__block bill__block--three bill__block--create bill__block--input">
    <md-progress-bar
      v-if="isNoteItemRemoveLoading && amIRemoving"
      class="progress-bar__local"
      md-mode="indeterminate"></md-progress-bar>
    <div class="bill__block-left">
      <span class="bill__box-num">{{ index + 1 }}</span>
      <a
        @click.prevent="onRemoveItem(item)"
        class="bill__box-btn"
        href="#"
        title="">
        <i class="icon-font icon-remove"></i>
      </a>
    </div>
    <div class="bill__block-middle">
      <InputWithImg
        v-model="item.term_image"
        @inputText="item.term_text=$event"
        :text="item.term_text"
        :index="item.id"
        :lable="'Term'"
        :autoFocus="true"></InputWithImg>
    </div>
    <div class="bill__block-right">
      <InputWithImg
        v-model="item.term_image2"
        @inputText="item.term_definition=$event"
        :text="item.term_definition"
        :index="'-def' + item.id"
        :lable="'Definition'"
        :autoFocus="false"></InputWithImg>
    </div>
  </div>
</template>

<script>
  import InputWithImg from '../../../Controls/InputWithImg.vue';
  import { noteItemMethods } from '../mixins';

  export default {
    name: 'NoteFlashcardItem',
    props: ['item', 'index'],
    mixins: [
      noteItemMethods
    ],
    data() {
      return {};
    },
    components: {
      InputWithImg
    },
    computed: {},
    methods: {}
  }
</script>

<style scoped>
  .section__block {
    position: relative;
  }

  .section__block .progress-bar__local {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
  }

  .bill__box-btn {
    display: none;
  }

  .bill__block:hover > .bill__block-left > .bill__box-btn {
    display: flex;
  }

  .bill__block:hover > .bill__block-left > .bill__box-num {
    display: none;
  }

  .bill__box-btn:hover > i {
    color: #019552;
    transition: color 0.3s ease-in-out;
  }
</style>
