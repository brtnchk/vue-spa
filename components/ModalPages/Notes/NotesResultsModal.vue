<template>
  <div v-if="notesResultsState" class="body body--start notes">
    <section class="c-modal c-modal--notesGreat" id="c-modal">
      <div class="c-modal__wrapper">
        <div class="c-modal__header d-flex align-items-center">
          <p class="c-modal__title subtitle">Great work! You did it!</p>
          <a @click.prevent="hideModal({name: 'notesResults'})" class="c-modal__close" href="#" title=""><i class="icon-font icon-error"></i></a>
        </div>
        <div class="c-modal__body">
          <p class="c-modal__subtitle"><span>Did you like this note?</span><a href="#" title=""><i class="icon-font icon-like"></i></a></p>
          <div class="notes__statistics">
            <p class="notes__statistics-title">Statistics</p>
            <ul class="notes__statistics-list">
              <ul class="notes__statistics-list">
                <li class="notes__statistics-item">
                  <span>Session length</span><span>{{ displayedStatistics.session_length }}</span>
                </li>
                <li class="notes__statistics-item">
                  <span>Highest wmpm</span><span><!--12:10.30--></span>
                </li>
                <li class="notes__statistics-item">
                  <span>Total words</span><span>{{ displayedStatistics.words_total }}</span>
                </li>
                <li class="notes__statistics-item">
                  <span>Minimum memscore</span><span>{{ formatPercent(displayedStatistics.memorization_min) }}</span>
                </li>
                <li class="notes__statistics-item">
                  <span>Words memorized</span><span>{{ displayedStatistics.words_memorized }}</span>
                </li>
                <li class="notes__statistics-item">
                  <span>Maximum memscore</span><span>{{ formatPercent(displayedStatistics.memorization_max) }}</span>
                </li>
                <li class="notes__statistics-item">
                  <span>Average wmpm</span><span>{{ displayedStatistics.words_memorized_avg }}</span>
                </li>
                <li class="notes__statistics-item">
                  <span>Session number</span><span>10</span>
                </li>
              </ul>
            </ul>
          </div>
          <div class="notes__graph">
            <div class="notes__graph-wrapper">
              <div class="notes__graph-left">
                <p class="notes__graph-title">Words memorized per minute (WMPM)</p>
                <div class="notes__graph-content" style="position: relative;">
                  <canvas id="memorized-per-minute"></canvas>
                  <!--<img srcset="../../../assets/img/img-notes-graph-0.png, ../../../assets/img/img-notes-graph-0@2x.png 2x" alt="" title="">-->
                </div>
              </div>
              <div class="notes__graph-right">
                <p class="notes__graph-title">Memscore</p>
                <div class="notes__graph-content" style="position: relative;">
                  <canvas id="memorization-levels"></canvas>
                  <!--<img srcset="../../../assets/img/img-notes-graph-1.png, ../../../assets/img/img-notes-graph-1@2x.png 2x" alt="" title="">-->
                </div>
              </div>
            </div>
          </div>
          <div class="notes__rate">
            <div class="notes__rate-wrapper">
              <div class="notes__rate-left">
                <p class="notes__rate-title">Personal note</p>
                <div class="notes__rate-info">
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis </p>
                </div>
              </div>
              <div class="notes__rate-right">
                <p class="notes__rate-title">Rate difficulty</p>
                <div class="notes__rate-star"><a href="#" title=""><i class="icon-font icon-star-fill"></i></a><a href="#" title=""><i class="icon-font icon-star-fill"></i></a><a href="#" title=""><i class="icon-font icon-star-fill"></i></a><a href="#" title=""><i class="icon-font icon-star"></i></a><a href="#" title=""><i class="icon-font icon-star-full"></i></a></div>
                <p class="notes__rate-subtitle subtitle">Too hard!</p>
                <a @click.prevent="hideModal({name: 'notesResults'})" class="notes__rate-btn c-btn c-btn--bigH c-btn--darkGreen" href="#" title="">Schedule review</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex';
  import Chart from 'chart.js';

  function createChart(ctx, label, labels, data, type, yend, displayXTicks = true) {
    let myChart = new Chart(ctx, {
      type,
      data: {
        labels,
        datasets: [{
          label,
          data,
          backgroundColor: labels.map(_ => '#019552'),
          borderColor: [],
          borderWidth: 1,
          pointBackgroundColor: "#019552",
          fill: 'transparent'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              callback: function(value, index, values) {
                return value + yend;
              }
            }
          }],
          xAxes: [{
            ticks: {
              display: displayXTicks
            }
          }]
        }
      }
    });
  }

  export default {
    name: 'NotesResultsModal',
    components: {},
    watch: {
      displayedStatistics: {
        handler(value) {
          setTimeout(_ => {
            createChart(
              document.getElementById("memorized-per-minute").getContext("2d"),
              'Memorized words',
              this.displayedStatistics.memorization_per_minutes.map((item, index) => `${index + 1}m`),
              this.displayedStatistics.memorization_per_minutes,//.map(item => `${item}w`),
              'bar',
              'w',
              true
            );
            createChart(
              document.getElementById("memorization-levels").getContext("2d"),
              'Memscore',
              this.displayedStatistics.memorization_levels.map((item, index) => index),
              this.displayedStatistics.memorization_levels,//.map(item => `${item}%`),
              'line',
              '%',
              false
            );
          }, 0);
        }
      }
    },
    computed: {
      ...mapGetters(['notesResultsState']),
      ...mapGetters({
        displayedStatistics: 'notes/displayedStatistics'
      })
    },
    methods: {
      formatPercent(value) {
        if (!value || value < 0) value = 0.0;
        if (value > 1.0) value = 1.0;

        return Math.round(value * 100) + '%';
      },
      ...mapActions(['hideModal'])
    }
  }
</script>

<style scoped>
</style>
