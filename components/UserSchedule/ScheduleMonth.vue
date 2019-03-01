<template>
  <div class="body body--start calendar">
    <section class="section" id="section">
      <div class="c-grid">
        <div class="section__wrapper">
          <div class="section__wrapper-left">
            <!-- SETTING NAV :: START-->
            <section class="menu" id="menu">
              <div class="menu__wrapper"><a class="menu__link" href="#" title="">
                <div class="menu__link-icon"><i class="icon-font icon-arrow"></i></div><span>Navigation</span></a></div>
            </section>
            <!-- SETTING NAV :: END-->
            <div class="schedule__row schedule__row-0">
              <div class="schedule__subtitle">
                <p class="pr-3"><i class="icon-font icon-calendar"></i><span class="pl-2">September 2019</span></p>
                <div><a class="mr-3" href="#" title=""><i class="icon-font icon-prev-next"></i></a><a href="#" title=""><i class="icon-font icon-prev-next"></i></a></div>
              </div>
            </div>
            <div class="schedule__row schedule__row-1">
              <div class="schedule__calendar schedule__calendar--small">
                <div class="schedule__calendar-head"><a href="#" title="">Mo</a><a href="#" title="">Tu</a><a href="#" title="">We</a><a href="#" title="">Th</a><a href="#" title="">Fr</a><a href="#" title="">Sa</a><a href="#" title="">Su</a>
                </div>
                <div class="schedule__calendar-body">
                  <div class="schedule__calendar-row"><a class="schedule__calendar-block is-uncurrent" href="#" title=""><span class="schedule__calendar-val">31</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">1</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">2</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">3</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">4</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">5</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">6</span></a>
                  </div>
                  <div class="schedule__calendar-row"><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">7</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">8</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">9</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">10</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">11</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">12</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">13</span></a>
                  </div>
                  <div class="schedule__calendar-row"><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">14</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">15</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">16</span></a><a class="schedule__calendar-block is-active" href="#" title=""><span class="schedule__calendar-val">17</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">18</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">19</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">20</span></a>
                  </div>
                  <div class="schedule__calendar-row"><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">21</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">22</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">23</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">24</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">25</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">26</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">27</span></a>
                  </div>
                  <div class="schedule__calendar-row"><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">28</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">29</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">30</span></a><a class="schedule__calendar-block is-uncurrent" href="#" title=""><span class="schedule__calendar-val">1</span></a><a class="schedule__calendar-block is-uncurrent" href="#" title=""><span class="schedule__calendar-val">2</span></a><a class="schedule__calendar-block is-uncurrent" href="#" title=""><span class="schedule__calendar-val">3</span></a><a class="schedule__calendar-block is-uncurrent" href="#" title=""><span class="schedule__calendar-val">4</span></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="schedule__row schedule__row-2">
              <div class="schedule__subtitle">
                <p class="pr-3"><i class="icon-font icon-recent"></i><span class="pl-2">Overdue</span></p>
                <div><a href="#" title=""><i class="icon-font icon-remove"></i></a></div>
              </div>
            </div>
            <div class="schedule__row schedule__row-3">
              <div class="schedule__notes-wrapper"><a class="schedule__notes schedule__notes-0" href="#">
                <p>Note name</p><span>1 Aug</span></a><a class="schedule__notes schedule__notes-1" href="#">
                <p>Note name</p><span>13 Sep</span></a></div>
            </div>
          </div>
          <div class="section__wrapper-right">
            <div class="section__title section__title--schedule">
              <div class="section__title-wrap">
                <div class="section__title-left">
                  <div class="section__title-icon"><i class="icon-font icon-schedule"></i></div><span>Schedule</span>
                </div>
                <div class="section__title-right"><span class="pr-4">Today</span>
                  <p class="pr-3"><i class="icon-font icon-calendar"></i><span class="pl-2">September 2019</span></p><a class="mr-3" href="#" title=""><i class="icon-font icon-prev-next"></i></a><a href="#" title=""><i class="icon-font icon-prev-next"></i></a>
                </div>
              </div>
            </div>
            <div class="forum__tabs-wrapper"><a class="forum__tabs is-active" href="#" title="">Month</a><a class="forum__tabs" href="#" title="">Week</a></div>
            <div class="schedule__calendar schedule__calendar--big">
              <div class="schedule__calendar-body">
                <div class="schedule__calendar-row"><a class="schedule__calendar-block is-uncurrent" href="#" title=""><span class="schedule__calendar-week">Mo</span><span class="schedule__calendar-val">31</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-week">Tu</span><span class="schedule__calendar-val">1</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-week">We</span><span class="schedule__calendar-val">2</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-week">Th</span><span class="schedule__calendar-val">3</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-week">Fr</span><span class="schedule__calendar-val">4</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-week">Sa</span><span class="schedule__calendar-val">5</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-week">Su</span><span class="schedule__calendar-val">6</span></a>
                </div>
                <div class="schedule__calendar-row"><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">7</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">8</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">9</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">10</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">11</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">12</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">13</span>
                  <div class="schedule__calendar-note">
                    <p>Note name</p>
                  </div></a>
                </div>
                <div class="schedule__calendar-row"><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">14</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">15</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">16</span></a><a class="schedule__calendar-block is-active" href="#" title=""><span class="schedule__calendar-val">17</span>
                  <div class="schedule__calendar-note">
                    <p>Note name</p>
                  </div></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">18</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">19</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">20</span></a>
                </div>
                <div class="schedule__calendar-row"><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">21</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">22</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">23</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">24</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">25</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">26</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">27</span></a>
                </div>
                <div class="schedule__calendar-row"><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">28</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">29</span></a><a class="schedule__calendar-block" href="#" title=""><span class="schedule__calendar-val">30</span></a><a class="schedule__calendar-block is-uncurrent" href="#" title=""><span class="schedule__calendar-val">1</span></a><a class="schedule__calendar-block is-uncurrent" href="#" title=""><span class="schedule__calendar-val">2</span></a><a class="schedule__calendar-block is-uncurrent" href="#" title=""><span class="schedule__calendar-val">3</span></a><a class="schedule__calendar-block is-uncurrent" href="#" title=""><span class="schedule__calendar-val">4</span></a>
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
    name: '',
    components: {},
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
