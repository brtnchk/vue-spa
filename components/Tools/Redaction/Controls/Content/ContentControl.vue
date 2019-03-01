<template>
  <component
    :is="controlTypes[content.type]"
    :content="content"
    :styles="styles"
    :settings="settings"></component>
</template>

<script>
  import TextContentControl from './TextContentControl.vue';
  import ImgContentControl from './ImgContentControl.vue';

  export default {
    name: 'ContentControl',
    components: {
      TextContentControl,
      ImgContentControl
    },
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
      return {
        controlTypes: {
          text: TextContentControl,
          img: ImgContentControl
        }
      };
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
</style>
