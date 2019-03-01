<template>
  <p
    v-html="redactedValue"
    :style="styles"></p>
</template>

<script>
  export default {
    name: 'TextContentControl',
    components: {},
    props: {
      content: {
        type: Object,
        default: {}
      },
      styles: {
        type: Object,
        default: {}
      },
      settings: {
        type: Object,
        default: {}
      }
    },
    data() {
      return {}
    },
    mounted() {
    },
    created() {
    },
    computed: {
      redactedValue() {
        if (this.content.mask === null) return this.content.value;

        let notSpaceIndex = 0;

        return this.content
          .value
          .split(this.splitChart)
          .map((brick, index) => {
            // если элемент пробел(пустая строка) вернем без изменений
            if (~brick.search(/ +/g)) return brick;

            if (this.content.mask.mask[notSpaceIndex++]) return `<span class="blurred">${brick}</span>`;

            return brick;
          })
          .join(this.splitChart);
      },
      splitChart() {
        if (this.settings.algorithm === 'words') return " ";
        if (this.settings.algorithm === 'characters') return "";
      }
    },
    methods: {}
  }
</script>

<style scoped>
</style>
