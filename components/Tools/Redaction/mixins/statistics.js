import {
  mapGetters,
  mapMutations,
  mapActions
} from 'vuex';

let blockWatchPercent = false;

export default {
  watch: {
    redactionContents: {
      handler(val) {
        this.saveHiddenPercentStat();
        this.saveHiddenBricksStat();
      },
      immediate: true
    }
  },
  computed: {
    ...mapGetters({
      collectStatistics: 'notes/collectStatistics',
      hasStatistics: 'notes/hasStatistics',
      statistics: 'notes/statistics',
    })
  },
  methods: {
    ...mapMutations({
      setStatistiscSessionStart: 'notes/SET_STATISTICS_SESSION_START',
      setStatistiscSessionEnd: 'notes/SET_STATISTICS_SESSION_END',
      setStatistiscItems: 'notes/SET_STATISTICS_ITEMS',
      setStatistiscPercentValues: 'notes/SET_STATISTICS_PERCENT_VALUES',
      setStatistiscHiddenWords: 'notes/SET_STATISTICS_HIDDEN_WORDS',
      resetStatistisc: 'notes/RESET_STATISTICS'
    }),
    ...mapActions({
      startCollectStatistics: 'notes/startCollectStatistics',
      finishCollectStatistics: 'notes/finishCollectStatistics'
    }),
    onStartSession() {
      this.$emit('fullscreen');
      if (!this.collectStatistics) this.startCollectStatistics();
    },
    onFinishSession() {
      this.finishCollectStatistics();
      this.showModal({name: 'notesResults'});
    },
    saveHiddenPercentStat() {
      if (!this.collectStatistics) return;

      let values = this.statistics.percentValues.map(_ => _);
      values.push(this.currentNote.hiddenPercent);
      this.setStatistiscPercentValues(values);
    },
    saveHiddenBricksStat() {
      if (!this.collectStatistics) return;
      if (!this.currentNote.touched) return;
      if (blockWatchPercent) return;

      blockWatchPercent = true;
      setTimeout(_ => blockWatchPercent = false, 100);

      let totalHiddenBricks = this.currentNote.content.reduce((prev, next) => {
        if (next.mask === null) return prev;
        return prev += next.mask.hiddenBricks;
      }, 0);
      let hiddenWords = this.statistics.hiddenWords.map(_ => ({..._}));
      hiddenWords.push({
        id: this.currentNote.id,
        count: totalHiddenBricks,
        date: (new Date()).getTime()
      });
      this.setStatistiscHiddenWords(hiddenWords);
    }
  }
};
