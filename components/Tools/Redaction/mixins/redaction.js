import {
  mapGetters,
  mapMutations,
  mapActions
} from 'vuex';

import {
  isScrolledIntoView,
  cloneObject
} from '../../../../helpers/index';
import { closeFullscreen } from "../../../../pipes/fullscreen/fullscreenPipe";
import { maskCreator } from "../MaskCreator";

export default {
  props: {
    title: {
      type: String,
      default: 'An innovative study tool'
    }
  },
  data() {
    return {
      isAlternativeMode: false,
      currentStep: 1,
      isVisible: false,
      showFullscreenMsg: true
    };
  },
  mounted() {
    setTimeout(_ => {
      if (!this.currentNote) return;

      let block = isArray(this.$refs.block) ? this.$refs.block[0] : this.$refs.block;
      this.isVisible = isScrolledIntoView(block, true);
      window.addEventListener('scroll', () => {
        let block = isArray(this.$refs.block) ? this.$refs.block[0] : this.$refs.block;
        if (block) {
          this.isVisible = isScrolledIntoView(block, true);
        }
      });
    }, 0);
  },
  created() {
    setTimeout(_ => (this.showFullscreenMsg = false), 5000);
  },
  computed: {
    ...mapGetters({
      redactionPassageSettings: 'notes/redactionPassageSettings',
      generalSettings: 'notes/redactionSettings',
      redactionContents: 'notes/redactionContents'
    }),
    hasContent() {
      return this.redactionContents.length;
    },
    currentNote() {
      return this.redactionContents[this.currentStep - 1];
    },
    redactionTextStyles() {
      let lineScpasing = (this.redactionPassageSettings.lineScpasing == 'unset') ?
        this.redactionPassageSettings.lineScpasing :
        this.redactionPassageSettings.lineScpasing + 'em';
      let fontSize = (this.redactionPassageSettings.coefficient * this.redactionPassageSettings.fontSize);
      let font = this.redactionPassageSettings.font.value;

      return {
        'font-family': font,
        'font-size': `${fontSize / 100}px`,
        'width': this.redactionPassageSettings.width + '%',
        'opacity': (1 * this.redactionPassageSettings.brightness) / 100,
        'text-align': this.redactionPassageSettings.alignment,
        'line-height': lineScpasing,
        'margin': 'auto',
        'white-space': 'pre-wrap'
      }
    },
    settings() {
      return {
      ...this.generalSettings,
      ...this.redactionPassageSettings
      }
    }
  },
  methods: {
    ...mapMutations({
      updateRedactionContents: 'notes/UPDATE_REDACTION_CONTENTS',
      deleteMasks: 'notes/DELETE_MASKS_FROM_REDACTION_CONTENTS'
    }),
    ...mapActions({
      storeRedactionSettings: 'notes/storeRedactionSettings',
      showModal: 'showModal',
    }),
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
        this.deleteMasks();
        this.cleanUndoRedo();
      }
    },
    nextStep() {
      if (this.currentStep < this.redactionContents.length) {
        this.currentStep++;
        this.deleteMasks();
        this.cleanUndoRedo();
      } else {
        if (document.fullscreen) closeFullscreen();
        if (!this.collectStatistics) return;
        this.finishCollectStatistics();
        this.showModal({name: 'notesResults'});
      }
    },
    changeStep() {
      if(this.currentStep == '') return;
      if (this.currentStep <= 0) {
        return this.currentStep = 1;
      }
      if (this.currentStep > this.redactionContents.length) {
        return this.currentStep = this.redactionContents.length;
      }
      this.deleteMasks();
    },
    switchAlgorthm() {
      this.storeRedactionSettings({
        ...this.generalSettings,
        algorithm: this.generalSettings.algorithm === 'words' ? 'characters' : 'words',
      });
      this.deleteMasks();
    },
    toggleSwitch() {
      this.isAlternativeMode = !this.isAlternativeMode;
    },
    saveState(currentNote, saveState) {
      // если скрытие произошло не в результате нажатия на кнопку "перемешать" то очистим хранилище
      if (saveState === false) return this.cleanUndoRedo();
      // после нажатия кнопки перемешать если исходное состояние не сохранено сохраняем
      if (!this.canUndo) this.updateRedactionContents(cloneObject(currentNote));
    },
    onRedact({currentNote, saveState}) {
      /**
       * сохраняет состояние только по кнопке перемещать скрытые элементы.
       * */
      this.saveState(currentNote, saveState);
      currentNote.touched = true;
      /**
       * Получаемновый объект redact и передаем его в специальную функцию которая произведет редактуру,
       * т.е. возьмет из объекта параметры редактуры и обновит поле redactedValue. Возвращенное значени
       * будет использовано для обновления данных в хранилище. После чего Content Control обновит view.
       * */
      let dontHideFirst = currentNote.content.length > 1;
      currentNote.content.forEach((item, index) => {
        if (dontHideFirst && !index) return;
        item.mask = maskCreator
          .create(item, {
            ...this.settings,
            ...{hiddenPercent: currentNote.hiddenPercent}
          });
      });

      this.updateRedactionContents(currentNote);
    }
  }
};
