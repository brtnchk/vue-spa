<template>
  <component
    @fullscreen="onFullscreen"
    :is="currentComponent"></component>
</template>

<script>
  import RedactionFullscreenNewMode from './Modes/RedactionFullscreenMode.vue';
  import RedactionSimpleNewMode from './Modes/RedactionSimpleMode.vue';
  import RedactionDefaultNewMode from './Modes/RedactionDefaultMode.vue';
  import { fullscreenPipe$, openFullscreen } from '../../../pipes/fullscreen/fullscreenPipe';

  export default {
    name: '',
    components: {},
    props: {
      mode: {
        type: String,
        default: 'default'
      }
    },
    data() {
      return {
        internalMode: 'default',
        RedactionSimpleNewMode,
        RedactionDefaultNewMode,
        RedactionFullscreenNewMode
      };
    },
    mounted() {
      fullscreenPipe$.subscribe(({state: enabledFullscreen, payload: internalMode}) => {
        if (enabledFullscreen) {
          this.internalMode = 'fullscreen';
        } else {
          this.internalMode = internalMode;
        }
      });
    },
    created() {
    },
    watch: {
      mode: {
        immediate: true,
        handler(val) {
          this.internalMode = val;
        }
      }
    },
    computed: {
      currentComponent() {
        if (this.internalMode === 'simple') return this.RedactionSimpleNewMode;
        if (this.internalMode === 'fullscreen') return this.RedactionFullscreenNewMode;

        return this.RedactionDefaultNewMode;
      }
    },
    methods: {
      onFullscreen() {
        // передаем к какому виду компонента нужно вернуться после выхода из полноэкранного режима
        openFullscreen(this.internalMode);
      }
    }
  }
</script>

<style scoped>
</style>
