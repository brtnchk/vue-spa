<template>
  <div class="section__wrapper-right">
    <h1 class="section__title">
      <div class="section__title-wrap">
        <div class="section__title-left">
          <div class="section__title-icon"><i class="icon-font icon-account"></i></div><span>Account</span>
        </div>
      </div>
    </h1>
    <!-- <div class="section__block section__block--upgrade">
        <p class="section__block-title">Upgrade to get more out of Memscore</p>
        <p class="section__block-text">Get extra features like...</p>
        <div class="section__block-footer">
            <button class="c-btn c-btn--bigH c-btn--darkGreen" type="submit">Upgrade</button>
        </div>
    </div> -->
    <div class="section__block section__block--support">
      <p class="section__block-title">You have a Memscore account</p>
      <p class="section__block-text">Thanks for your support. Your upgrade expires on March 20, 2020.</p>
      <div class="section__block-footer">
        <button class="c-btn c-btn--bigH c-btn--darkGreen" type="submit">View order receipt</button>
      </div>
    </div>
    <div class="section__block section__block--storage">
      <p class="section__block-title"><span>Personal storage space</span><span>Using 1.27 GB of 10 GB</span></p>
      <div class="section__block-progress"></div>
      <div class="section__block-footer">
        <button class="c-btn c-btn--bigH c-btn--darkGreen" type="submit">Upgrade</button>
      </div>
    </div>
    <!-- <div class="section__block">
        <div class="section__block-title section__block-title--wp">
            <p>Night theme</p>
            <div><a class="c-btn c-btn--bigH c-btn--darkGreen" href="#" title="">On</a><a class="c-btn c-btn--bigH c-btn--lightGray" href="#" title="">Off</a></div>
        </div>
    </div> -->
    <!-- <div class="section__block section__block--google">
        <p class="section__block-title">Are you on Google?</p>
        <p class="section__block-text">Connect your  Memscore  account with Google to log in with just one click.</p>
        <div class="section__block-footer">
            <button class="c-btn c-btn--bigH c-btn--darkGreen" type="submit">Link your account to Google</button>
        </div>
    </div> -->
    <!-- <div class="section__block section__block--facebook">
        <p class="section__block-title">Successfully linked with Facebook</p>
        <p class="section__block-text section__block-text--p">Memscore is linked with your Facebook account. You can now log in using Facebook!</p>
        <p class="section__block-subtitle">3 Facebook friends on Memscore</p>
        <div class="section__block-img">
            <div><img srcset="../../../assets/img/img-user.png, ../../../assets/img/img-user@2x.png 2x" alt="" title=""></div>
            <div><img srcset="../../../assets/img/img-user.png, ../../../assets/img/img-user@2x.png 2x" alt="" title=""></div>
            <div><img srcset="../../../assets/img/img-user.png, ../../../assets/img/img-user@2x.png 2x" alt="" title=""></div>
        </div>
    </div> -->
    <!-- <div class="section__block section__block--facebook">
        <p class="section__block-title">Successfully linked with Facebook</p>
        <p class="section__block-text section__block-text--p">Memscore is linked with your Facebook account. You can now log in using Facebook!</p>
        <p class="section__block-subtitle">1 Facebook friend on Memscore</p>
        <div class="section__block-img">
            <div><img srcset="../../../assets/img/img-user.png, ../../../assets/img/img-user@2x.png 2x" alt="" title=""></div>
        </div>
    </div> -->
    <div class="section__block section__block--updateEmail">
      <p class="section__block-title">Update your email address</p>
      <p class="section__block-text">Your current email is username@gmail.com.</p>
      <form class="form" action="" method="">
        <div class="form__field form__field--group">
          <div class="form__field form__field--input">
            <label class="form__label" for="updateEmailNew">New email</label>
            <div class="form__input-wrap">
              <input class="form__input" type="text" id="updateEmailNew" name="" placeholder="">
            </div>
            <div class="form__notify form__notify--hide"></div>
          </div>
          <div class="form__field form__field--input">
            <label class="form__label" for="memscorePass">Memscore password</label>
            <div class="form__input-wrap">
              <input class="form__input" type="text" id="memscorePass" name="" placeholder="">
            </div>
            <div class="form__notify form__notify--hide"></div>
          </div>
        </div>
        <div class="section__block-footer">
          <button class="c-btn c-btn--bigH c-btn--darkGreen" type="submit">Change email</button>
        </div>
      </form>
    </div>
    <div class="section__block section__block--changePass">
      <p class="section__block-title">Change password</p>
      <form class="form" action="" method="">
        <div class="form__field form__field--group">
          <div class="form__field form__field--input">
            <label class="form__label" for="changePassCurr">Current password</label>
            <div class="form__input-wrap">
              <input class="form__input" type="text" id="changePassCurr" name="" placeholder="">
            </div>
            <div class="form__notify form__notify--hide"></div>
          </div>
          <div class="form__field form__field--input">
            <label class="form__label" for="changePassNew">New password</label>
            <div class="form__input-wrap">
              <input class="form__input" type="text" id="changePassNew" name="" placeholder="">
            </div>
            <div class="form__notify form__notify--hide"></div>
          </div>
          <div class="form__field form__field--input">
            <label class="form__label" for="changePassConfirm">Confirm new password</label>
            <div class="form__input-wrap">
              <input class="form__input" type="text" id="changePassConfirm" name="" placeholder="">
            </div>
            <div class="form__notify form__notify--hide"></div>
          </div>
        </div>
        <div class="section__block-footer">
          <button class="c-btn c-btn--bigH c-btn--darkGreen" type="submit">Change password</button>
        </div>
      </form>
    </div>
    <div class="section__block section__block--pDelete">
      <div>
        <p class="section__block-title">Permanently delete</p>
        <p class="section__block-text">Be careful - this will delete all your data and cannot be undone.</p>
      </div>
      <div><a class="c-btn c-btn--bigH c-btn--lightGray" href="#" title="">Delete account</a></div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex';

  export default {
    name: "Account",
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
