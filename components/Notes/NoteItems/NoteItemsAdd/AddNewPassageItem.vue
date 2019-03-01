<template>
  <div
    @click="$emit('add')"
    class="bill__box bill__box--opacity section__block">
    <div class="bill__box-left">
      <span class="bill__box-num">{{itemCount}}</span>
    </div>
    <div class="bill__box-right">
      <div class="form__field form__field--textarea">
        <label class="form__label" :for="'notesCreateText' + itemCount">Passage</label>
        <div class="form__textarea-wrap">
          <textarea
            class="form__textarea"
            :id="'notesCreateText' + itemCount"
            :name="'notesCreateText' + itemCount"
            placeholder="Passage"></textarea>
        </div>
        <div class="form__notify form__notify--hide"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AddNewPassageItem',
    props: ['itemCount'],
    components: {},
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
