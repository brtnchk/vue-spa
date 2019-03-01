<template>
  <div class="body body--start notes">
    <section class="fullscreen fullscreen--image" id="fullscreen">
      <div class="fullscreen__wrapper">
        <div class="fullscreen__wrapper-top">
          <p class="fullscreen__title">Press Esc to exit full screen mode</p>
          <div class="tool tool--full">
            <div class="tool__wrapper">
              <div class="tool__preview">
                <div class="tool__preview-control d-flex align-items-center justify-content-between">
                  <div class="d-flex align-items-center"></div>
                  <div class="d-flex justify-content-end"><a href="#" title=""><i class="icon-font icon-error"></i></a></div>
                </div>
                <div class="tool__preview-figure"><img src="./img/img-bg-designed.jpg" srcset="./img/img-bg-designed@2x.jpg 2x" alt="" title="">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'FlashcardFullscreen_3',
    components: {},
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
