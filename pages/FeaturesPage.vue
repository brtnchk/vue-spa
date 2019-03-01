<template>
  <div class="container">
    <div class="c-grid m-4">
      <h1 class="text-center paradigm__title title">
        Features
      </h1>

      <p class="mb-4 text">
        <b class="d-block">SLIDER</b>
This feature lets users control the amount of information that is concealed by adjusting the memscore, the percentage of a note that is redacted. As a result, users can optimize the difficulty of a study session to maximize learning.
</p>

<p class="mb-4 text">
  <b class="d-block">KEYBOARD SHORTCUTS</b>
This feature lets users press the keyboard to perform certain tasks, such as increasing or decreasing the memscore and changing the memorization algorithm.
</p>

<p class="mb-4 text">
  <b class="d-block">DISPLAY SETTINGS</b>
This feature lets users adjust display settings, such as font, font size, and passage width.
</p>

<p class="mb-4 text">
  <b class="d-block">STUDY SETTINGS</b>
This feature lets users adjust study settings, such as the memorization algorithm and autoplay speed.
</p>

<p class="mb-4 text">
  <b class="d-block">STATISTICS</b>
This feature lets users see and analyze performance statistics.
</p>

<p class="mb-4 text">
  <b class="d-block">Definitions:</b>
</p>

<ul class="text mb-4">
  <li>-	Session length: time elapsed between user clicking Start session and Finish session</li>
  <li>-	Total words: total words in note that can be redacted</li>
  <li>-	Words memorized: total words in note that were redacted in that session</li>
  <li>-	Average WMPM: words memorized divided by session length</li>
  <li>-	Highest WMPM: highest value for WMPM</li>
  <li>-	Minimum memscore: smallest memscore executed in the entire session</li>
  <li>-	Maximum memscore: largest memscore executed in the entire session</li>
  <li>-	Session number: number of session.</li>
</ul>

<p class="mb-4 text">
  <b class="d-block">REVIEW</b>
This feature lets users schedule a review session based on memscore. This is accomplished by approximating the rate at which people forget and using that to calculate the amount of time it takes for a contemporaneous memscore to decrease to a selected value.
</p>

      <br>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FeaturesPage',
    components: {},
    props: [],
    data() {
      return {}
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
