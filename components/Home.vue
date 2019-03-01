<template>
  <div class="body home">
    <!-- LEARN :: START-->
    <section class="learn" id="learn">
      <div class="c-grid">
        <div class="learn__wrapper">
          <h1 class="learn__title title">Learn anything.<br>Remember everything.</h1>
          <a class="learn__btn c-btn c-btn--darkGreen c-btn--bigH" href="#" title="" @click.prevent="showModal({name:'pricing'})">Start my free trial</a>
          <p class="learn__text text">Already a Memscore member? <a href='#' @click.prevent="showModal({name: 'login'})">Log in now.</a></p>
        </div>
      </div>
    </section>
    <!-- LEARN :: END-->
    <!-- PARADIGM :: START-->
    <section class="paradigm" id="paradigm">
      <div class="c-grid">
        <div class="paradigm__wrapper d-flex align-items-center">
          <div class="paradigm__wrapper-left">
            <h1 class="paradigm__title title">A paradigm shift <br>in education</h1>
            <p class="paradigm__text text">Memscore promotes active learning by increasing engagement and interaction. Gain knowledge by studying and reviewing notes and courses. Build the community by participating in the forum and collaborating to create content.</p>
          </div>
          <div class="paradigm__wrapper-right">
            <div class="paradigm__video">
              <video src="https://d2ps9ecbzt1af5.cloudfront.net/IndieGoGo.mp4" controls poster="../assets/img/img-poster-paradigm@2x.jpg"></video>
              <!-- <a><i class="icon-font icon-play"></i></a> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- PARADIGM :: END-->
    <!-- TOOL :: START-->
    <section-redaction>
    </section-redaction>
    <!-- <section class="tool" id="tool">
        <div class="c-grid">
            <div class="tool__wrapper">
                <h1 class="tool__title title">An innovative study tool</h1>
                <div class="tool__preview">
                    <div class="tool__preview-scroll">
                        <p>The following is an excerpt from “Gray’s Anatomy: Descriptive and Applied,” published in 1913:</p>
                        <p>The skull, formed by the union of the several cranial and facial bones already described, when considered as a whole is divisible into five regions — a superior region or vertex, an inferior region or base, two lateral regions, and an anterior region, the face… [Regarding the skull's surface], the external face (norma verticalis) is bounded, in front, by the glabella and superciliary ridges; behind, by the occipital protuberance and superior curved lines of the occipital bone; laterally, by an imaginary line extending from the outer end of the superior curved line, along the temporal ridge, to the external angular process of the frontal bone.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="tool__control">
            <div class="c-grid">
                <div class="tool__control-wrap">
                    <div class="tool__control-left d-flex align-items-center">
                        <a href="#" title="">
                            <i class="icon-font icon-keyboard"></i>
                        </a>
                        <a href="#" title="">
                            <i class="icon-font icon-star"></i>
                        </a>
                    </div>
                    <div class="tool__control-middle d-flex align-items-center">
                        <div class="tool__control-shuffle">
                            <a href="#" title="">
                                <i class="icon-font icon-shuffle"></i>
                            </a>
                        </div>
                        <div class="tool__control-line">
                            <a href="#" title=""></a>
                        </div>
                        <div class="tool__control-group d-flex align-items-center justify-content-end">
                            <a href="#" title="">
                                <i class="icon-font icon-prev-next"></i>
                            </a>
                            <a href="#" title="">
                                <i class="icon-font icon-prev-next"></i>
                            </a>
                        </div>
                    </div>
                    <div class="tool__control-right d-flex align-items-center justify-content-end">
                        <a href="#" title="">
                            <i class="icon-font icon-swap"></i>
                        </a>
                        <a href="#" title="">
                            <i class="icon-font icon-text"></i>
                        </a>
                        <a href="#" title="">
                            <i class="icon-font icon-setting"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section> -->
    <!-- TOOL :: END-->
    <!-- DESIGNED :: START-->
    <section class="designed" id="designed">
      <div class="c-grid">
        <div class="designed__wrapper d-flex align-items-center justify-content-sm-between">
          <div class="designed__wrapper-left">
            <h1 class="designed__title title">Designed for students and teachers</h1>
            <p class="designed__text text">Memscore is a useful resource that belongs in every school. Sign up for Memscore today to see how it can promote learning in the classroom!</p>
            <a class="designed__btn c-btn c-btn--bigH c-btn--darkGreen" href="#" title="" @click.prevent="showModal({name: 'pricing'})">Start my free trial</a>
          </div>
          <div class="designed__wrapper-right">
            <div class="designed__block"><img srcset="../assets/img/img-bg-designed.jpg, ../assets/img/img-bg-designed@2x.jpg 2x" alt="" title=""></div>
          </div>
        </div>
      </div>
    </section>
    <!-- DESIGNED :: END-->
  </div>
</template>

<script>
  import {mapActions, mapMutations, mapGetters} from 'vuex';
  import Redaction from './Tools/Redaction/Redaction.vue';
  export default {
    name: 'Home',
    components: {
      'section-redaction': Redaction
    },
    created() {
      this.setRedactionContent();
    },
    methods: {
      ...mapMutations({setRedactionContent: 'notes/SET_REDACTION_CONTENT_FOR_MAIN_PAGE'}),
      ...mapActions({showModal: 'showModal'}),
    }
  }
</script>

<style scoped>
</style>
