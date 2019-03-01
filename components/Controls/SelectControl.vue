<template>
  <div class="form__select">
    <span :class="{'is-choose': internalValue.title}" class="select__value">
      {{ internalValue.title }}
    </span>
    <select v-model="internalValue">
      <option value="" selected=""></option>
      <option v-for="item in items" :value="item">
        {{ item.title }}
      </option>
    </select>
    <span class="select__icon-wrap">
      <i class="icon-font icon-arrow"></i>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'SelectControl',
    components: {},
    props: {
      value: [String, Number],
      items: {
        type: Array,
        default: _ => []
      },
      // Если в v-model для связывания нужно использовать отличное от id элемента поле передайте его как
      // значение для входного параметра emitedField.
      // Явное указание id как испускаемого значения:
      // <SelectControl v-model="currentNote.course_id" :items="courses" :emitedField="'id'"></SelectControl>
      // для $emit('input') будет взято значение courses[SelectedCourseId][emitedField] т.е. id элемента(курса)
      emitedField: {
        type: String,
        default: 'id'
      },
    },
    data() {
      return {
        internalValue: {}
      };
    },
    watch: {
      value: {
        immediate: true,
        handler(field) {
          if (field === this.internalValue[this.emitedField]) return;

          let selectedItem = this.items.find(item => item[this.emitedField] === field);
          if (selectedItem) this.internalValue = selectedItem;
        }
      },
      internalValue(val) {
        this.$emit('input', val[this.emitedField]);
      }
    },
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
