<template>
  <div class="section__wrapper-right">
    <h1 class="section__title">
      <div class="section__title-wrap">
        <div class="section__title-left">
          <div class="section__title-icon"><i class="icon-font icon-billing"></i></div><span>Billing methods</span>
        </div>
        <div class="section__title-right">
          <a href="#" title="" @click.prevent="showModal({name: 'addCard'})">
            <i class="icon-font icon-plus"></i>
          </a>
        </div>
      </div>
    </h1>
    <div class="section__block section__block--billing" v-for="card in cardItems">
      <div>
        <p class="section__block-title">{{ card.brand }} ending in {{ card.last4 }}</p>
        <p class="section__block-subtitle">{{ card.default ? 'Primary' : '' }}</p>
      </div>
      <div>
        <!--<p class="section__block-title">EUR</p>-->
      </div>
      <div>
        <div class="dropdown">
          <a class="dropdown__btn" href="#" id="billingDropdown0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="billingDropdown0">
            <!--<a class="dropdown-item" href="#">-->
            <!--<div><i class="icon-font icon-edit"></i></div>-->
            <!--<span>Edit</span>-->
            <!--</a>-->
            <!--<a class="dropdown-item" href="#">-->
            <!--<div><i class="icon-font icon-star-full"></i></div>-->
            <!--<span>Set as primary</span>-->
            <!--</a>-->
            <a class="dropdown-item" href="#" @click.prevent="onDeleteCard(card.id)">
              <div><i class="icon-font icon-remove"></i></div>
              <span>Remove</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters,
    mapMutations,
    mapActions
  } from 'vuex';

  export default {
    name: "BillingMethods",
    mounted() {
      this.getCardItems();
    },
    created() {
      this.setDisplayedSidebarMenu('settings');
    },
    computed: {
      ...mapGetters({
        cardItems: 'settings/cardItems'
      })
    },
    methods: {
      ...mapMutations({
        setCardItems: 'notes/SET_CARD_ITEMS',
        setDisplayedSidebarMenu: 'setDisplayedSidebarMenu'
      }),
      ...mapActions({
        deleteCard: 'settings/deleteCard',
        getCardItems: 'settings/getCardItems',
      }),
      ...mapActions(['hideModal', 'showModal']),
      onDeleteCard(cardId) {
        this.deleteCard(cardId);
      }
    }
  }
</script>

<style scoped>

</style>
