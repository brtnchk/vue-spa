<template>
  <div class="section__wrapper-right">
    <Spinner v-if="isNoteItemsLoading" line-fg-color="#00bd70" size="large"></Spinner>
    <div v-if="!isNoteItemsLoading" class="section__title section__title--notes">
      <div class="section__title-wrap">
        <div class="section__title-left">
          <div class="section__title-icon">
            <i class="icon-font icon-bill"></i>
          </div>
          <span>{{ currentNote.title }}</span>
        </div>
        <div class="section__title-right">
          <!--<a href="#" title=""><i class="icon-font icon-notify"></i></a>-->
          <!--<a class="ml-3" href="#" title=""><i class="icon-font icon-info"></i></a>-->
          <div class="c-dropdown ml-4">
            <div class="dropdown">
              <a
                class="dropdown__btn"
                href="#"
                id="notesFlashcardTitle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                <span></span><span></span><span></span>
              </a>
              <div
                class="dropdown-menu dropdown-menu-right"
                aria-labelledby="notesFlashcardTitle">
                <!--<a class="dropdown-item" href="#">-->
                  <!--<div><i class="icon-font icon-import"></i></div>-->
                  <!--<span>Import</span>-->
                <!--</a>-->
                <a @click.prevent="onDeleteNote(currentNote.id)" class="dropdown-item" href="#">
                  <div><i class="icon-font icon-remove"></i></div>
                  <span>Remove</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!isNoteItemsLoading" class="bill">
      <div class="bill__wrapper">
        <div :style="{margin: 0}" class="bill__row bill__row-0 bill__row--info">
          {{ currentNote.description }}
        </div>
        <div class="bill__row bill__row-0 bill__row--info">
          <!--<a href="#" title="">-->
            <!--<i class="icon-font icon-profile"></i><span>Owner name</span>-->
          <!--</a>-->
          <!--<a href="#" title="">-->
            <!--<i class="icon-font icon-select"></i><span>12K</span>-->
          <!--</a>-->
          <!--<a href="#" title="">-->
            <!--<i class="icon-font icon-like"></i><span>567</span>-->
          <!--</a>-->
          <!--<a href="#" title="">-->
            <!--<i class="icon-font icon-save"></i><span>67</span>-->
          <!--</a>-->
          <a href="#" title="">
            <i class="icon-font icon-recent"></i><span>{{ currentNote.created_at | moment("from", "now") }}</span>
          </a>
        </div>
        <div class="bill__row bill__row-1 bill__row--view">
          <div class="bill__view bill__view--half">
            <Redaction :mode="'simple'"></Redaction>
          </div>
        </div>
        <div class="bill__row bill__row-2 bill__row--info">
          <a href="#" title="">
            <i class="icon-font icon-notes"></i>
            <span>Flashcards in this note (<i>{{ currentNoteItems.length }}</i>)</span>
          </a>
          <!-- <a href="#" title="">
            <div class="forum__box-badge"></div>
            <span>Comments (<i>0</i>)</span>
          </a> -->
        </div>
        <Tabs
          :tabs="[
            {title: 'Original', active: true},
            {title: 'Alphabetical', active: false},
            {title: 'Favorite', active: false}
          ]"></Tabs>
        <form class="form bill__row bill__row-4 bill__row--card bill__block-wrapper" action="" method="">
          <div
            v-if="currentNote.type === 'flashcard'"
            v-for="(item, index) in currentNoteItems"
            :class="{'form__field--image': item.term_image || item.term_image2}"
            class="section__block bill__block bill__block--three bill__block--text">
            <div class="bill__block-left">
              <div><span>{{ index + 1 }}</span></div>
              <div :class="{'form__input-wrap': item.term_image}">
                <p
                  v-if="!item.term_image"
                  :style="{'white-space': 'pre-wrap'}">
                  {{ item.term_text }}
                </p>
                <img v-else :src="baseImgUrl + item.term_image" alt="">
              </div>
            </div>
            <div :class="{'form__input-wrap': item.term_image2}" class="bill__block-middle">
              <p
                v-if="!item.term_image2"
                :style="{'white-space': 'pre-wrap'}">
                {{ item.term_definition }}
              </p>
              <img v-else :src="baseImgUrl + item.term_image2" alt="">
            </div>
            <!--<div class="bill__block-right">-->
              <!--<a class="bill__block-btn" href="#" title=""><i class="icon-font icon-edit"></i></a>-->
              <!--<a class="bill__block-btn" href="#" title=""><i class="icon-font icon-star-full"></i></a>-->
            <!--</div>-->
          </div>
          <div
            v-if="currentNote.type !== 'flashcard'"
            v-for="(item, index) in currentNoteItems"
            :class="{'form__field--image': item.term_image || item.term_image2}"
            class="section__block bill__block bill__block--three bill__block--text">
            <div :style="{width: '100%', 'padding-left': 0}" class="bill__block-left non-after-style">
              <div><span>{{ index + 1 }}</span></div>
              <div :class="{'form__input-wrap': item.term_image}">
                <p :style="{'white-space': 'pre-wrap'}">{{ item.passage_text }}</p>
              </div>
            </div>
            <!--<div  :class="{'form__input-wrap': item.term_image2}" class="bill__block-middle">-->
              <!--<p v-if="!item.term_image2">{{ item.term_definition }}</p>-->
              <!--<img v-else :src="item.term_image2" alt="">-->
            <!--</div>-->
            <div class="bill__block-right">
              <!--<a class="bill__block-btn" href="#" title=""><i class="icon-font icon-edit"></i></a>-->
              <!--<a class="bill__block-btn" href="#" title=""><i class="icon-font icon-star-full"></i></a>-->
            </div>
          </div>
        </form>
        <div
          @click.prevent="onNoteEditClick(currentNote)"
          v-if="currentNote.user_id === user.id"
          :style="{'justify-content': 'center', 'display': 'flex'}"
          class="bill__row bill__row-5 bill__row--btn">
          <a :style="{margin: 0}" href="" title="" class="btn c-btn c-btn--bigH c-btn--darkGreen mr-0">
            Add or Remove
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters,
    mapActions,
    mapMutations
  } from 'vuex';

  import Redaction from '../../Tools/Redaction/Redaction.vue';
  import Tabs from '../../Controls/Tabs.vue';
  import { addNote } from '../mixins';
  import confirmLeave from '../../../mixins/confirmLeave';

  export default {
    name: 'NoteView',
    mixins: [
      addNote,
      confirmLeave
    ],
    components: {
      Redaction,
      Tabs
    },
    props: [],
    data() {
      return {
        modalName: 'endSession'
      };
    },
    mounted() {
    },
    created() {
      this.setDisplayedSidebarMenu('notes');
      if (this.downloadNote) this.getNote(this.$route.params.id);
      this.getNoteItems(this.$route.params.id)
        .then(_ => {
          let redactionContent = this.currentNoteItems.map(item => {
            return {
              id: item.id,
              type: this.currentNote.type,
              hiddenPercent: 0,
              touched: false,
              content: this.currentNote.type === 'flashcard' ? [
                {
                  value: item.term_image ? item.term_image : item.term_text,
                  mask: null,
                  type: item.term_image ? 'img' : 'text'
                },
                {
                  value: item.term_image2 ? item.term_image2 : item.term_definition,
                  mask: null,
                  type: item.term_image2 ? 'img' : 'text'
                }
              ] : [
                {
                  value: item.passage_text,
                  mask: null,
                  type: 'text'
                }
              ]
            };
          });
          this.setRedactionContents(redactionContent);
        });
    },
    computed: {
      ...mapGetters({
        currentNote: 'notes/currentNote',
        currentNoteItems: 'notes/currentNoteItems',
        isNoteItemsLoading: 'notes/isNoteItemsLoading',
        collectStatistics: 'notes/collectStatistics',
        user: 'auth/user'
      }),
      allowLeavePage() {
        return !this.collectStatistics;
      },
      baseImgUrl() {
        return process.env.STATIC_URL;
      }
    },
    methods: {
      ...mapMutations({
        setDisplayedSidebarMenu: 'setDisplayedSidebarMenu',
        setCurrentNote: 'notes/SET_CURRENT_NOTE',
        setRedactionContents: 'notes/SET_REDACTION_CONTENTS',
      }),
      ...mapActions({
        startCollectStatistics: 'notes/startCollectStatistics',
        finishCollectStatistics: 'notes/finishCollectStatistics',
        deleteNote: 'notes/deleteNote'
      }),
      onNoteEditClick(note) {
        if (this.currentNote.user_id !== this.user.id) return;
        this.setCurrentNote(note);
        this.$router.push({name: `edit-${note.type}`, params: {id: note.id}});
      },
      onConfirmedLeavePage() {
        this.finishCollectStatistics(false);
      },
      async onDeleteNote(noteId) {
        this.deletedNoteId = noteId;
        await this.deleteNote(noteId);
        this.$router.push({name: 'notes'});
      }
    }
  }
</script>

<style scoped>
  .non-after-style:after {
    background: transparent;
    width: 0;
  }
</style>
