import Mousetrap from 'mousetrap';

import { runIf, cloneObject } from '../../../../helpers/index';

export default {
  props: ['currentNote', 'collectStatistics', 'isVisible'],
  data() {
    return {
      internalCurrentNote: {}
    };
  },
  mounted() {
    Mousetrap.bind('up', (e) => runIf(this.isVisible, () => {
      e.preventDefault();
      this.onIncreaseLevel();
    }));
    Mousetrap.bind('down', (e) => runIf(this.isVisible, () => {
      e.preventDefault();
      this.onDecreaseLevel();
    }));
    Mousetrap.bind('left', (e) => runIf(this.isVisible, () => {
      e.preventDefault();
      this.$emit('prevStep');
    }));
    Mousetrap.bind('right', (e) => runIf(this.isVisible, () => {
      e.preventDefault();
      this.$emit('nextStep');
    }));
    Mousetrap.bind('z', (e) => runIf(this.isVisible, () => {
      e.preventDefault();
      this.$emit('switchAlgorthm');
    }));
    Mousetrap.bind('space', (e) => runIf(this.isVisible, () => {
      e.preventDefault();
      this.onReset();
    }));
    Mousetrap.bind('d', (e) => runIf(this.isVisible, () => {
      e.preventDefault();
      this.$emit('redact', {currentNote: this.internalCurrentNote, saveState: true});
    }));
    Mousetrap.bind('r', (e) => runIf(this.isVisible, () => {
      e.preventDefault();
      // this.$emit('undoShuffle');
      this.onReset();
    }));
    Mousetrap.bind('f', (e) => runIf(this.isVisible, () => {
      e.preventDefault();
      this.$emit('fullscreen');
    }));
  },
  watch: {
    currentNote: {
      immediate: true,
      handler(currentNote) {
        this.internalCurrentNote = cloneObject(currentNote);
      }
    }
  },
  computed: {},
  methods: {
    onIncreaseLevel() {
      if (this.internalCurrentNote.hiddenPercent >= 100) return;

      this.internalCurrentNote.hiddenPercent += 5;
      this.$emit('redact', {currentNote: this.internalCurrentNote, saveState: false});
    },
    onDecreaseLevel() {
      if (this.internalCurrentNote.hiddenPercent <= 0) return;

      this.internalCurrentNote.hiddenPercent -= 5;
      this.$emit('redact', {currentNote: this.internalCurrentNote, saveState: false});
    },
    onReset() {
      this.internalCurrentNote.hiddenPercent = 0;
      this.$emit('redact', {currentNote: this.internalCurrentNote, saveState: false});
    },
    onPrevStep(e) {
      e.preventDefault();
      this.$emit('prevStep')
    },
    onNextStep(e) {
      e.preventDefault();
      this.$emit('nextStep')
    }
  }
};
