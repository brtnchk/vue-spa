<template>
    <!--<div class="body login" v-if="pricingModalState">-->
        <!--<section class="c-modal c-modal&#45;&#45;plan" id="c-modal">-->
            <!--<div class="c-modal__wrapper">-->
                <!--<div class="c-modal__header">-->
                    <!--<p class="c-modal__subtitle">Pricing plan</p>-->
                    <!--<p class="c-modal__title subtitle">Memscore Premium</p>-->
                    <!--<a class="c-modal__close" href="#" title="" @click.prevent="hideModal('pricing')">-->
                        <!--Close-->
                        <!--<svg class="icon-svg icon-error ">-->
                            <!--<use xlink:href="./static/img/sprite.svg#error"></use>-->
                        <!--</svg>-->
                    <!--</a>-->
                <!--</div>-->
                <!--<div class="c-modal__body">-->
                    <!--<p class="c-modal__info">$9.99</p>-->
                    <!--<p class="c-modal__subinfo">per month</p>-->
                    <!--<ul class="c-modal__list">-->
                        <!--<li>-->
                            <!--<div>-->
                                <!--<svg class="icon-svg icon-check ">-->
                                    <!--<use xlink:href="./static/img/sprite.svg#check"></use>-->
                                <!--</svg>-->
                            <!--</div>-->
                            <!--<p>Create courses and notes</p>-->
                        <!--</li>-->
                        <!--<li>-->
                            <!--<div>-->
                                <!--<svg class="icon-svg icon-check ">-->
                                    <!--<use xlink:href="./static/img/sprite.svg#check"></use>-->
                                <!--</svg>-->
                            <!--</div>-->
                            <!--<p>Study books, passages, and flashcards</p>-->
                        <!--</li>-->
                        <!--<li>-->
                            <!--<div>-->
                                <!--<svg class="icon-svg icon-check ">-->
                                    <!--<use xlink:href="./static/img/sprite.svg#check"></use>-->
                                <!--</svg>-->
                            <!--</div>-->
                            <!--<p>Analyze statistics to improve performance</p>-->
                        <!--</li>-->
                        <!--<li>-->
                            <!--<div>-->
                                <!--<svg class="icon-svg icon-check ">-->
                                    <!--<use xlink:href="./static/img/sprite.svg#check"></use>-->
                                <!--</svg>-->
                            <!--</div>-->
                            <!--<p>Use spaced repetition to increase efficiency</p>-->
                        <!--</li>-->
                        <!--<li>-->
                            <!--<div>-->
                                <!--<svg class="icon-svg icon-check ">-->
                                    <!--<use xlink:href="./static/img/sprite.svg#check"></use>-->
                                <!--</svg>-->
                            <!--</div>-->
                            <!--<p>Discuss and collaborate with others</p>-->
                        <!--</li>-->
                    <!--</ul>-->
                    <!--<form class="form" action="" method="">-->
                        <!--<div class="form__field form__field&#45;&#45;btn">-->
                            <!--<button class="form__btn form__btn&#45;&#45;full" type="submit" @click.prevent="showNext">Start 14-day free trial</button>-->
                        <!--</div>-->
                    <!--</form>-->
                <!--</div>-->
            <!--</div>-->
        <!--</section>-->
    <!--</div>-->
    <div class="body login"
         v-if="pricingModalState">
        <section class="c-modal c-modal--plan" id="c-modal">
            <div class="c-modal__wrapper">
                <div class="c-modal__header">
                    <p class="c-modal__subtitle">Pricing plan</p>
                    <!-- <p class="c-modal__title subtitle">Memscore Premium</p> -->
                    <a class="c-modal__close" href="#" title="">
                        <i class="icon-font icon-error"
                           @click.prevent="hideModal({name: 'pricing'})"></i>
                    </a>
                </div>
                <div class="c-modal__body">
                    <p class="c-modal__info">$4.99</p>
                    <p class="c-modal__subinfo">per month</p>
                    <ul class="c-modal__list">
                        <li>
                            <div><i class="icon-font icon-check"></i></div>
                            <p>Create courses and notes</p>
                        </li>
                        <li>
                            <div><i class="icon-font icon-check"></i></div>
                            <p>Study books, passages, and flashcards</p>
                        </li>
                        <li>
                            <div><i class="icon-font icon-check"></i></div>
                            <p>Analyze statistics to improve performance</p>
                        </li>
                        <li>
                            <div><i class="icon-font icon-check"></i></div>
                            <p>Use spaced repetition to increase efficiency</p>
                        </li>
                        <li>
                            <div><i class="icon-font icon-check"></i></div>
                            <p>Discuss and collaborate with others</p>
                        </li>
                    </ul>
                    <form class="form" action="" method="">
                        <div class="form__field form__field--btn">
                            <button class="form__btn form__btn--full"
                                    type="submit"
                                    @click.prevent="showNext">
                                Start 7-day free trial
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  export default {
    name: "PricingPlanModal",
    methods: {
      ...mapActions(['hideModal', 'showModal']),
      showNext() {
        this.hideModal({name: 'pricing'});
        this.showModal({name: 'register'})
      }
    },
    computed: {
      ...mapGetters(['pricingModalState'])
    }
  }
</script>

<style scoped>

</style>
