<template>
  <div class="section__wrapper-right">
    <h1 class="section__title">
      <div class="section__title-wrap">
        <div class="section__title-left">
          <div class="section__title-icon"><i class="icon-font icon-refer"></i></div><span>Refer a friend</span>
        </div>
      </div>
    </h1>
    <div class="section__block section__block--promo">
      <p class="section__block-title">Your promo code</p>
      <p class="section__block-text">Share this link with friends - when they pay for their first month, we will give you and them a significant discount.</p>
      <form class="form" action="" method="">
        <div class="form__field form__field--group">
          <div class="form__field form__field--input">
            <div class="form__input-wrap">
              <input class="form__input" type="text" id="" name="" placeholder="" value="Q4xFqmln">
            </div>
            <div class="form__notify form__notify--hide"></div>
          </div>
          <div class="form__field form__field--btn-group">
            <div class="form__field form__field--btn">
              <button class="c-btn c-btn--bigH c-btn--lightGray" type="submit">Copy</button>
            </div>
            <div class="form__field form__field--btn">
              <button class="c-btn c-btn--bigH c-btn--darkGreen" type="submit">Share</button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="section__block section__block--referrals">
      <p class="section__block-title">Your referrals</p>
      <p class="section__block-text">Refer friends each month to receive a maximum discount of 100%.</p>
      <div class="section__block-wrap">
        <div class="section__block-left">
          <div class="section__block-img"><img srcset="../../../assets/img/img-user.png, ../../../assets/img/img-user@2x.png 2x" alt="" title=""></div>
          <p>Stephen Evans</p>
        </div>
        <div class="section__block-right">
          <p>25% discount</p><span>Successful referral</span>
        </div>
      </div>
      <div class="section__block-wrap">
        <div class="section__block-left">
          <div class="section__block-img"><img srcset="../../../assets/img/img-user.png, ../../../assets/img/img-user@2x.png 2x" alt="" title=""></div>
          <p>Stephen Evans</p>
        </div>
        <div class="section__block-right">
          <p>25% discount</p><span>Successful referral</span>
        </div>
      </div>
      <div class="section__block-wrap">
        <div class="section__block-left">
          <div class="section__block-img"><img srcset="../../../assets/img/img-user.png, ../../../assets/img/img-user@2x.png 2x" alt="" title=""></div>
          <p>Stephen Evans</p>
        </div>
        <div class="section__block-right">
          <p>25% discount</p><span>Successful referral</span>
        </div>
      </div>
      <p class="section__block-subtitle">75% discount applies to billing cycle: Sep 12, 2019 — Oct 11, 2019</p>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex';

  export default {
    name: "ReferFriend",
    created() {
      this.setDisplayedSidebarMenu('settings');
    },
    methods: {
      ...mapMutations({
        setDisplayedSidebarMenu: 'setDisplayedSidebarMenu'
      })
    }
  }
</script>

<style scoped>

</style>
