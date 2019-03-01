<template>
  <header class="header" id="header">
    <div class="c-grid">
      <div class="header__wrapper">
        <div class="header__wrapper-left header__wrapper-start" v-bind:class="{ 'header__wrapper-start': isAuth }">
          <div class="logo logo--header">
            <a @click.prevent="goTo('notes')" href="/study/notes" class="logo__link" v-if="isAuth">
              <p class="logo__text">Memscore</p>
            </a>
            <a @click.prevent="goTo('home')" href="/" class="logo__link"  v-else>
              <p class="logo__text">Memscore</p>
            </a>
          </div>
        </div>
        <div class="header__wrapper-end" v-if="isAuth">
          <div class="search">
            <div class="search__wrapper">
              <input
                @input="setSearchPhrase($event.target.value ? $event.target.value : null)"
                @keyup.enter="onSearch"
                class="search__input"
                type="text"
                name="searchValue"
                placeholder="Search"
                search-js>
              <button @click.prevent="onSearch" class="search__btn" type="button">
                <i class="icon-font icon-search"></i>
              </button>
            </div>
            <div class="search__drop" search-drop-js>
              <ul class="search__drop-list">
                <li class="search__drop-item"><a href="#" title="">Lorem Ipsum is simply dummy</a></li>
                <li class="search__drop-item"><a href="#" title="">Lorem Ipsum</a></li>
                <li class="search__drop-item"><a href="#" title="">Lorem Ipsum is simply dummy</a></li>
                <li class="search__drop-item"><a href="#" title="">Lorem Ipsum</a></li>
                <li class="search__drop-item"><a href="#" title="">Lorem Ipsum is simply dummy</a></li>
                <li class="search__drop-item"><a href="#" title="">Lorem Ipsum</a></li>
              </ul>
            </div>
          </div>
          <div class="profile">
            <div class="profile__left c-dropdown">
              <a
                class="profile__link"
                href="#"
                id="createNotesHeader"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                <i class="icon-font icon-switcher-add"></i>
                <span>Create note</span>
              </a>
              <div
                class="dropdown-menu dropdown-menu-right"
                aria-labelledby="createNotesHeader"
                x-placement="bottom-end"
                style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(-150px, 19px, 0px);">
                <a
                  @click.prevent="$router.push({name: 'create-book'})"
                  class="dropdown-item"
                  href="notes/book/create">
                  <span>Book</span>
                </a>
                <a
                  @click.prevent="$router.push({name: 'create-passage'})"
                  class="dropdown-item"
                  href="notes/passage/create">
                  <span>Passage</span>
                </a>
                <a
                  @click.prevent="$router.push({name: 'create-flashcard'})"
                  class="dropdown-item"
                  href="notes/flashcard/create">
                  <span>Flashcards</span>
                </a>
              </div>
            </div>
            <div class="profile__right">
              <div class="dropdown">
                <a class="dropdown__btn" href="#" id="profileDropdown0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img
                    v-if="profilePhotoUrl"
                    :src="baseImgUrl + profilePhotoUrl"
                    class="rounded-circle"
                    alt="Avatar"
                    title="">
                  <i
                    v-else
                    :style="{
                      'font-size': '20px',
                      'color': '#fff'
                    }"
                     class="icon-font icon-profile"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="profileDropdown0">
                  <div class="dropdown-item">
                    <div class="dropdown-item--left">
                      <div class="dropdown-item-circle">
                        <img
                          v-if="profilePhotoUrl"
                          :src="baseImgUrl + profilePhotoUrl"
                          class="rounded-circle"
                          alt="Avatar"
                          title="">
                        <i
                          v-else
                          :style="{'font-size': '20px'}"
                          class="icon-font icon-profile"></i>
                      </div>
                    </div>
                    <div class="dropdown-item--right">
                      <p>User Name</p><span>Student</span>
                    </div>
                  </div><a class="dropdown-item" href="#">
                  <div><i class="icon-font icon-profile"></i></div><span>Profile</span></a>
                  <a @click.prevent="handleLogout" class="dropdown-item" href="#">
                    <div><i class="icon-font icon-logout"></i></div>
                    <span>Log out</span>
                  </a>
                  <router-link class="dropdown-item" to="/settings">
                    <div><i class="icon-font icon-setting"></i></div>
                    <span>Setting</span>
                  </router-link>
                  <a class="dropdown-item" href="#">
                    <div><i class="icon-font icon-send-feedback"></i></div>
                    <span>Send feedback</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="header__wrapper-right d-flex align-items-center justify-content-end" v-else>
          <a class="header__link" href="#" title="" @click.prevent="showModal({name: 'login'})">Log in</a>
          <a class="header__btn c-btn c-btn--darkGreen" href="#" title="" @click.prevent="showModal({name: 'pricing'})">Sign up</a></div>
      </div>
    </div>
  </header>
</template>

<script>
  import { mapActions, mapGetters, mapMutations } from 'vuex';

  export default {
    name: "Header",
    computed: {
      ...mapGetters({
        isAuth: 'auth/isAuth',
        user: 'auth/user',
        searchPhrase: 'searchPhrase',
        searchFilter: 'searchFilter'
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
        setSearchPhrase: 'setSearchPhrase'
      }),
      ...mapActions({
        showModal: 'showModal',
        logout: 'auth/logout',
        getNotes: 'notes/getNotes',
      }),
      handleLogout() {
        this.logout().then(() => {
          this.$router.push({name: 'home'})
        })
      },
      goTo(routeName) {
        this.$router.push({name: routeName})
      },
      onSearch() {
        if (this.$route.name !== 'search') {
          this.goTo('search');

          return;
        }

        this.searchFilter.setQuery(this.searchPhrase);
        this.getNotes(this.searchFilter.json());
      }
    }
  }
</script>

<style scoped>
  .logo__link:focus {
    color: #fff;
  }

  .c-dropdown.show > a.create-note__button i {
    color: #fff;
  }

  .c-dropdown.show,
  .c-dropdown.show > a.create-note__button:hover,
  .c-dropdown.show > a.create-note__button:focus,
  .c-dropdown.show > a.create-note__button:active {
    color: #fff;
  }

  .c-dropdown,
  .c-dropdown > a.create-note__button:hover,
  .c-dropdown > a.create-note__button:focus,
  .c-dropdown > a.create-note__button:active {
    color: #fff;
  }
</style>
