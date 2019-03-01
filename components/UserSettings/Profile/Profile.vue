<template>
  <div class="section__wrapper-right">
    <h1 class="section__title">
      <div class="section__title-wrap">
        <div class="section__title-left">
          <div class="section__title-icon"><i class="icon-font icon-profile"></i></div><span>Profile</span>
        </div>
      </div>
    </h1>
    <md-progress-bar v-if="isImgLoading" md-mode="indeterminate"></md-progress-bar>
    <div class="section__block section__block--photo">
      <p class="section__block-title">Profile photo</p>
      <p class="section__block-text section__block-text--p">Maximum size of 1MB. JPG, GIF, or PNG.</p>
      <avatar
        v-model="avatar"
        @input="onLoad"
        @remove="removeAvatar">
        <div class="section__block-img">
          <img
            v-if="profilePhotoUrl"
            :src="baseImgUrl + profilePhotoUrl"
            class="rounded-circle"
            alt="Avatar"
            title="">
          <i
            v-else
            :style="{'font-size': '100px'}"
            class="icon-font icon-profile"></i>
        </div>
        <!--<div v-else class="section__block-img">-->
          <!--<img :src="avatar.url" alt="Avatar" class="rounded-circle" title="">-->
        <!--</div>-->
      </avatar>
    </div>
    <ChangePassword></ChangePassword>
    <ChangeUsername></ChangeUsername>
    <!-- <AccountType></AccountType> -->
    <!-- <AccountAppear></AccountAppear> -->
  </div>
</template>


<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex';
  import Avatar from './Avatar';
  import ChangePassword from './ChangePassword';
  import ChangeUsername from './ChangeUsername';
  import AccountType from './AccountType';
  import AccountAppear from './AccountAppear';

  export default {
    name: "Profile",
    components: {
      Avatar,
      ChangePassword,
      ChangeUsername,
      AccountType,
      AccountAppear
    },
    data() {
      return {
        avatar: null
      }
    },
    created() {
      this.setDisplayedSidebarMenu('settings');
    },
    computed: {
      ...mapGetters({
        user: 'auth/user',
        isImgLoading: 'isImgLoading'
      }),
      baseImgUrl() {
        return process.env.STATIC_URL;
      },
      profilePhotoUrl() {
        return this.user ? this.user.settings.profile_photo : '';
      }
    },
    methods: {
      ...mapMutations({
        setDisplayedSidebarMenu: 'setDisplayedSidebarMenu'
      }),
      ...mapActions({
        uploadImg: 'uploadImg',
        updateProfileSettings: 'settings/update'
      }),
      onLoad() {
        const fd = new FormData();
        fd.append('image', this.avatar.file);
        this.uploadImg(fd)
          .then(profile_photo => {
            if (!profile_photo) return;

            this.updateProfileSettings({ profile_photo });
          });
      },
      removeAvatar() {
        this.avatar = null;
        this.updateProfileSettings({ profile_photo: null });
      }
    },
  }
</script>

<style scoped>

</style>
