<template>
  <div class="body body--start notes">
    <section class="fullscreen" id="fullscreen">
      <div class="fullscreen__wrapper">
        <div class="fullscreen__wrapper-top">
          <p class="fullscreen__title">Press Esc to exit full screen mode</p>
          <div class="tool tool--full">
            <div class="tool__wrapper"><a class="tool__btn" href="#" title=""><i class="icon-font icon-arrow-view"></i></a><a class="tool__btn" href="#" title=""><i class="icon-font icon-arrow-view"></i></a>
              <div class="tool__preview">
                <div class="tool__preview-control d-flex align-items-center justify-content-between">
                  <div class="d-flex align-items-center">
                    <input type="text" value="2"><span>of <i>4</i></span>
                  </div>
                  <div class="d-flex justify-content-end"><a href="#" title=""><i class="icon-font icon-speaker"></i></a><a href="#" title=""><i class="icon-font icon-star-full"></i></a></div>
                </div>
                <div class="tool__preview-scroll">
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tatio</p>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tatio</p>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tatio</p>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tatio</p>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tatio</p>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tatio</p>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tatio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="fullscreen__wrapper-bottom">
          <div class="tool">
            <div class="tool__control">
              <div class="tool__control-wrap">
                <div class="tool__control-left d-flex align-items-center">
                  <div class="c-dropdown c-dropdown--keyboard"><a href="#" id="toolKeyboard" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="icon-font icon-keyboard"></i></a>
                    <div class="dropdown-menu dropdown-menu-left up" aria-labelledby="toolKeyboard"><a class="dropdown-item" href="#"><span>Increase level</span>
                      <div><i class="top"></i></div></a><a class="dropdown-item" href="#"><span>Decrease level</span>
                      <div><i class="bottom"></i></div></a><a class="dropdown-item" href="#"><span>Previous card</span>
                      <div><i class="left"></i></div></a><a class="dropdown-item" href="#"><span>Next card</span>
                      <div><i class="right"></i></div></a><a class="dropdown-item" href="#"><span>Switch mode</span>
                      <div><span>Z</span></div></a><a class="dropdown-item" href="#"><span>All words</span>
                      <div><span>SPACE</span></div></a><a class="dropdown-item" href="#"><span>Autoplay</span>
                      <div><span>A</span></div></a><a class="dropdown-item" href="#"><span>Star</span>
                      <div><span>S</span></div></a><a class="dropdown-item" href="#"><span>Shuffle</span>
                      <div><span>D</span></div></a><a class="dropdown-item" href="#"><span>Edit</span>
                      <div><span>E</span></div></a><a class="dropdown-item" href="#"><span>Full screen</span>
                      <div><span>F</span></div></a><a class="dropdown-item" href="#"><span>Reverse</span>
                      <div><span>R</span></div></a></div>
                  </div>
                  <div class="c-dropdown"><a href="#" id="toolStar" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="icon-font icon-star"></i></a>
                    <div class="dropdown-menu dropdown-menu-left up" aria-labelledby="toolStar"><a class="dropdown-item" href="#">
                      <div><i class="icon-font icon-star"></i></div><span>All</span></a><a class="dropdown-item" href="#">
                      <div><i class="icon-font icon-star-fill"></i></div><span>Starred</span></a></div>
                  </div>
                </div>
                <div class="tool__control-middle d-flex align-items-center">
                  <div class="tool__control-swap"><a href="#" title=""><i class="icon-font icon-swap"></i></a>
                  </div>
                  <div class="tool__control-shuffle"><a href="#" title=""><i class="icon-font icon-shuffle"></i></a>
                  </div>
                  <div class="tool__control-line"><a href="#" data-toggle="tooltip" data-placement="top" title="Memorization level 25%"></a></div>
                  <div class="tool__control-group d-flex align-items-center justify-content-end"><a href="#" title=""><i class="icon-font icon-prev-next"></i></a><a href="#" title=""><i class="icon-font icon-prev-next"></i></a>
                  </div>
                </div>
                <div class="tool__control-right d-flex align-items-center justify-content-end"><a href="#" title=""><i class="icon-font icon-text"></i></a><a href="#" title=""><i class="icon-font icon-setting"></i></a>
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
    name: 'PassageFullscreen',
    components: {},
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
