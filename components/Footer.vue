<template>
  <footer class="footer" id="footer">
    <div class="c-grid">
      <div class="footer__wrapper" v-bind:class="{ 'hidden': isAuth }">
        <div class="footer__wrapper-top">
          <div class="row">
            <div class="footer__col footer__col-0 col-2 text-center">
              <!-- <div class="logo logo--footer">
                <a class="logo__link" href="/" title=""><p class="logo__text">Memscore</p></a>
              </div> -->
            </div>
            <div class="footer__col footer__col-1 col-2">
              <p class="nav__title">About</p>
              <nav class="nav nav--footer">
                <ul class="nav__list">
                  <li class="nav__item nav__item-0">
                    <a @click.prevent="goTo('company')" class="nav__link nav__link-0" href="/about/company" title="">
                      Company
                    </a>
                  </li>
                  <li class="nav__item nav__item-1">
                    <a @click.prevent="goTo('privacy')" class="nav__link nav__link-1" href="/about/privacy" title="">
                      Privacy
                    </a>
                  </li>
                  <li class="nav__item nav__item-2">
                    <a @click.prevent="goTo('terms')" class="nav__link nav__link-2" href="/about/terms" title="">
                      Terms
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="footer__col footer__col-2 col-2">
              <p class="nav__title">Connect</p>
              <nav class="nav nav--footer">
                <ul class="nav__list">
                  <li class="nav__item nav__item-0"><a @click.prevent="goTo('help')" class="nav__link nav__link-0" href="/about/help" title="">Help center</a></li>
                  <li class="nav__item nav__item-1"><a @click.prevent="goTo('studies')" class="nav__link nav__link-1" href="/about/studies" title="">Scientific studies</a></li>
                  <li class="nav__item nav__item-2"><a @click.prevent="goTo('testimonials')" class="nav__link nav__link-2" href="/about/testimonials" title="">Testimonials</a></li>
                </ul>
              </nav>
            </div>
            <div class="footer__col footer__col-3 col-2">
              <p class="nav__title">More</p>
              <nav class="nav nav--footer">
                <ul class="nav__list">
                  <li class="nav__item nav__item-0"><a @click.prevent="goTo('features')" class="nav__link nav__link-0" href="/about/features" title="">Features</a></li>
                  <li class="nav__item nav__item-1"><a class="nav__link nav__link-1" href="#" title="">Mobile</a></li>
                  <li class="nav__item nav__item-2"><a class="nav__link nav__link-2" href="#" title="">Updates</a></li>
                </ul>
              </nav>
            </div>
            <div class="footer__col footer__col-4 col-4">
              <p>Do you have a question? Send us a word.</p><a href="mailto:support@memscore.com" title="">support@memscore.com</a>
              <div class="social d-flex align-items-center"><a href="#" title="">
                <svg class="icon-svg icon-i-fb ">
                  <use xlink:href="./static/img/sprite.svg#i-fb"></use>
                </svg></a><a href="#" title="">
                <svg class="icon-svg icon-i-gp ">
                  <use xlink:href="./static/img/sprite.svg#i-gp"></use>
                </svg></a></div>
            </div>
          </div>
        </div>
        <div class="footer__wrapper-bottom d-flex align-items-center justify-content-sm-between">
          <div class="copyright">
            <p>© 2019 Memscore</p>
          </div>
          <!-- <div class="dropdown">
            <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span>English</span>
              <svg class="icon-svg icon-arrow ">
                <use xlink:href="./static/img/sprite.svg#arrow"></use>
              </svg>
            </button>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton"><a class="dropdown-item" href="#" title="">Action</a><a class="dropdown-item" href="#" title="">Another action</a><a class="dropdown-item" href="#" title="">Something else here</a></div>
          </div> -->
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: "Footer",
    computed: {
      ...mapGetters({
        isAuth: 'auth/isAuth'
      })
    },
    methods: {
      goTo(routeName, params) {
        this.$router.push({name: routeName, params})
      }
    }
  }
</script>

<style scoped>

</style>
