<template>
  <div class="body body--start p-statistic">
    <section class="section" id="section">
      <div class="c-grid">
        <div class="section__wrapper">
          <div class="section__wrapper-left">
            <!-- MAIN NAV :: START-->
            <section class="menu" id="menu">
              <nav class="nav nav--sidebar nav--sidebar-0">
                <ul class="nav__list">
                  <li class="nav__item nav__item-0 nav__item-browse"><a class="nav__link is-active nav__link-0" href="#" title="">
                    <div class="nav__link-icon"><i class="icon-font icon-browse"></i></div><span class="nav__link-text">Browse</span></a></li>
                  <li class="nav__item nav__item-1 nav__item-notes"><a class="nav__link nav__link-1" href="#" title="">
                    <div class="nav__link-icon"><i class="icon-font icon-notes"></i></div><span class="nav__link-text">Study</span></a></li>
                  <li class="nav__item nav__item-2 nav__item-recent"><a class="nav__link nav__link-2" href="#" title="">
                    <div class="nav__link-icon"><i class="icon-font icon-recent"></i></div><span class="nav__link-text">Recent</span></a></li>
                  <li class="nav__item nav__item-3 nav__item-statistics"><a class="nav__link nav__link-3" href="#" title="">
                    <div class="nav__link-icon"><i class="icon-font icon-statistics"></i></div><span class="nav__link-text">Statistics</span></a></li>
                  <li class="nav__item nav__item-4 nav__item-schedule"><a class="nav__link nav__link-4" href="#" title="">
                    <div class="nav__link-icon"><i class="icon-font icon-schedule"></i></div><span class="nav__link-text">Schedule</span></a></li>
                  <li class="nav__item nav__item-5 nav__item-forum"><a class="nav__link nav__link-5" href="#" title="">
                    <div class="nav__link-icon"><i class="icon-font icon-forum"></i></div><span class="nav__link-text">Forum</span></a></li>
                  <li class="nav__item nav__item-6 nav__item-setting"><a class="nav__link nav__link-6" href="#" title="">
                    <div class="nav__link-icon"><i class="icon-font icon-setting"></i></div><span class="nav__link-text">Settings</span></a></li>
                </ul>
              </nav>
              <nav class="nav nav--sidebar nav--sidebar-1">
                <ul class="nav__list">
                  <li class="nav__item nav__item-0"><a class="nav__link nav__link-0" href="#" title="">Classes</a></li>
                </ul>
              </nav>
              <nav class="nav nav--sidebar nav--sidebar-2">
                <ul class="nav__list">
                  <li class="nav__item nav__item-0"><a class="nav__link nav__link-0" href="#" title="">
                    <div class="nav__link-image"><img src="./img/img-user-0.png" srcset="./img/img-user-0@2x.png 2x" alt="" title=""/></div><span class="nav__link-text">Class 1</span></a></li>
                  <li class="nav__item nav__item-1"><a class="nav__link nav__link-1" href="#" title="">
                    <div class="nav__link-image"><img src="./img/img-user-0.png" srcset="./img/img-user-0@2x.png 2x" alt="" title=""/></div><span class="nav__link-text">Class 2</span></a></li>
                </ul>
              </nav>
              <nav class="nav nav--sidebar nav--sidebar-3">
                <ul class="nav__list">
                  <li class="nav__item nav__item-0 nav__item-join"><a class="nav__link nav__link-0" href="#" title="">
                    <div class="nav__link-icon"><i class="icon-font icon-join"></i></div><span class="nav__link-text">Join or create a class</span></a></li>
                </ul>
              </nav>
            </section>
            <!-- MAIN NAV :: END-->
          </div>
          <div class="section__wrapper-right">
            <div class="section__title section__title--statistic">
              <div class="section__title-wrap">
                <div class="section__title-left">
                  <div class="section__title-icon"><i class="icon-font icon-statistics"></i></div><span>Statistic</span>
                </div>
                <div class="section__title-right">
                  <div class="c-dropdown ml-4">
                    <div class="dropdown"><a class="dropdown__btn" href="#" id="statisticTitle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span></span><span></span><span></span></a>
                      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="statisticTitle"><a class="dropdown-item" href="#">
                        <div><i class="icon-font icon-export-2"></i></div><span>Export</span></a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="statistic">
              <div class="statistic__wrapper">
                <div class="notes__box notes__box--statistic">
                  <div class="notes__box-left"></div>
                  <div class="notes__box-middle">
                    <div class="notes__box-info"><a href="#" title=""><i class="icon-font icon-recent"></i><span>Last review: 1 year ago</span></a></div>
                    <p class="notes__box-title">Lorem Ipsum is simply dummy text of the printing</p>
                    <div class="notes__box-details">
                      <p>Session length: <span>6:02.30</span></p>
                      <p>Average wpm: <span>120</span></p>
                      <p>Highest memorization level: <span>120</span></p>
                    </div>
                  </div>
                  <div class="notes__box-right"><a href="#" title=""><i class="icon-font icon-fullscreen"></i></a></div>
                </div>
              </div>
              <div class="statistic__wrapper">
                <div class="statistic__box section__block">
                  <div class="statistic__box-left">
                    <p>Memorized per minute</p><img srcset="./img/img-notes-graph-0.png, ./img/img-notes-graph-0@2x.png 2x" alt="" title="">
                  </div>
                  <div class="statistic__box-right">
                    <p>Memorization levels</p><img srcset="./img/img-notes-graph-1.png, ./img/img-notes-graph-1@2x.png 2x" alt="" title="">
                  </div>
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
    name: 'UserStatistics',
    components: {},
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
