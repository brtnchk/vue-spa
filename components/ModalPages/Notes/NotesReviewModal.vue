<template>
  <div class="body body--start notes">
    <section class="c-modal c-modal--reviewNotes" id="c-modal">
      <div class="c-modal__wrapper">
        <div class="c-modal__header d-flex align-items-center">
          <p class="c-modal__title subtitle">Review level</p><a class="c-modal__close" href="#" title=""><i class="icon-font icon-error"></i></a>
        </div>
        <div class="c-modal__body">
          <form class="form" action="" method="">
            <div class="form__field form__field--input">
              <label class="form__label" for="reviewLevel">Enter review level</label>
              <div class="form__input-wrap">
                <input class="form__input" type="text" id="reviewLevel" name="reviewLevel" placeholder="">
              </div>
              <div class="form__notify form__notify--hide"></div>
            </div>
            <label class="form__label">Select date (optional)</label>
            <div class="form__field form__field--group form__field--select form__field--select-date">
              <div class="form__select-wrap">
                <div class="form__select"><span class="select__value"></span>
                  <select name="">
                    <option value="0" disabled selected hidden>Month</option>
                    <option value="january">January</option>
                    <option value="february">February</option>
                    <option value="march">March</option>
                    <option value="april">April</option>
                    <option value="may">May</option>
                    <option value="june">June</option>
                    <option value="july">July</option>
                    <option value="august">August</option>
                    <option value="september">September</option>
                    <option value="october">October</option>
                    <option value="november">November</option>
                    <option value="december">December</option>
                  </select><span class="select__icon-wrap"><i class="icon-font icon-arrow"></i></span>
                </div>
              </div>
              <div class="form__select-wrap">
                <div class="form__select"><span class="select__value"></span>
                  <select name="">
                    <option value="0" disabled selected hidden>Day</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                  </select><span class="select__icon-wrap"><i class="icon-font icon-arrow"></i></span>
                </div>
              </div>
              <div class="form__select-wrap">
                <div class="form__select"><span class="select__value"></span>
                  <select name="">
                    <option value="0" disabled selected hidden>Year</option>
                    <option value="1999">1999</option>
                    <option value="2000">2000</option>
                    <option value="2001">2001</option>
                    <option value="2002">2002</option>
                    <option value="2003">2003</option>
                    <option value="2004">2004</option>
                    <option value="2005">2005</option>
                    <option value="2006">2006</option>
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2019">2019</option>
                  </select><span class="select__icon-wrap"><i class="icon-font icon-arrow"></i></span>
                </div>
              </div>
              <div class="form__notify form__notify--hide"></div>
            </div>
            <div class="form__field form__field--btn">
              <button class="form__btn form__btn--full" type="submit">Schedule review</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'NotesReviewModal',
    components: {},
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
