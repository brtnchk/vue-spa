<template>
  <div
    @click="$emit('add')"
    class="section__block bill__block bill__block--three bill__block--opacity bill__block--create bill__block--input">
    <div class="bill__block-left">
      <span>{{itemCount}}</span>
    </div>
    <div class="bill__block-middle">
      <div class="form__field form__field--input form__field--icon">
        <label class="form__label" :for="'notesCreate' + itemCount">Term</label>
        <div class="form__input-wrap"><a href="#" title=""><i class="icon-font icon-picture"></i></a>
          <input
            class="form__input"
            type="text"
            :id="'notesCreate' + itemCount"
            :name="'notesCreate' + itemCount"
            placeholder="Lorem Ipsum is simply dummy text">
        </div>
        <div class="form__notify form__notify--hide"></div>
      </div>
    </div>
    <div class="bill__block-right">
      <div class="form__field form__field--input form__field--icon">
        <label class="form__label" :for="'notesCreate' + itemCount + 1">Definition</label>
        <div class="form__input-wrap"><a href="#" title=""><i class="icon-font icon-picture"></i></a>
          <input
            class="form__input"
            type="text"
            :id="'notesCreate' + itemCount + 1"
            :name="'notesCreate' + itemCount + 1"
            placeholder="Lorem Ipsum is simply dummy text">
        </div>
        <div class="form__notify form__notify--hide"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AddNewFlashcardItem',
    props: ['itemCount'],
    components: {},
    computed: {},
    methods: {}
  }
</script>

<style scoped>
  .bill__block--create {
    cursor: pointer;
  }
</style>
