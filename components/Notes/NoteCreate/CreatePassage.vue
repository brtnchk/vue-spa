<template>
  <div class="section__wrapper-right">
    <div class="section__title section__title--notes">
      <div class="section__title-wrap">
        <div class="section__title-left">
          <div class="section__title-icon">
            <i class="icon-font icon-bill"></i>
          </div>
          <span>Create passage</span>
        </div>
        <div class="section__title-right">
          <a @click.prevent="$router.push({name: 'notes'})" href="#" title="">
            <i class="icon-font icon-error"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="bill">
      <div class="bill__wrapper">
        <div class="bill__row bill__row-6 bill__row--create">
          <form class="form" action="" method="">
            <div class="bill__create">
              <div class="bill__create-left">
                <label class="form__label">Cover</label>
                <DragAndDropArea v-model="currentNote.cover_image"></DragAndDropArea>
              </div>
              <div class="bill__create-right d-flex flex-column justify-content-between">
                <div class="form__field form__field--input">
                  <label class="form__label" for="createTitle">Title</label>
                  <div class="form__input-wrap">
                    <input
                      v-model="currentNote.title"
                      class="form__input"
                      type="text"
                      id="createTitle"
                      name="createTitle"
                      placeholder="Type your title">
                  </div>
                  <div class="form__notify form__notify--hide"></div>
                </div>
                <div class="form__field form__field--input">
                  <label class="form__label" for="createDescription">Description  (optional)</label>
                  <div :style="{height: descriptionHeight}" class="form__input-wrap">
                    <!--<input-->
                      <!--v-model="currentNote.description"-->
                      <!--class="form__input"-->
                      <!--type="text"-->
                      <!--id="createDescription"-->
                      <!--name="createDescription"-->
                      <!--placeholder="Type your description">-->
                    <textarea-autosize
                      v-model="currentNote.description"
                      @resize="onResize($event)"
                      :min-height="54"
                      :max-height="125"
                      class="form__textarea"
                      id="createDescription"
                      placeholder="Type your description"
                    ></textarea-autosize>
                  </div>
                  <div class="form__notify form__notify--hide"></div>
                </div>
                <div class="form__field form__field--group d-flex justify-content-between">
                  <div>
                    <label class="form__label">Course  (optional)</label>
                    <div class="form__field form__field--select">
                      <div class="form__select-wrap">
                        <SelectControl v-model="currentNote.course_id" :items="courses"></SelectControl>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label class="form__label">Category (optional)</label>
                    <div class="form__field form__field--select">
                      <div class="form__select-wrap">
                        <SelectControl v-model="currentNote.category_id" :items="categories"></SelectControl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="bill__row bill__row-7 bill__row--public">
          <div class="bill__public d-flex align-items-center justify-content-between">
            <div class="bill__public-left">
              <!--<p>+ Import from Word, Excel, Google Docs, etc.</p>-->
            </div>
            <div class="bill__public-right d-flex justify-content-end">
              <!--<p class="bill__public-lock"><i class="icon-font icon-lock"></i><span>Access for 2 members</span></p>-->
              <form class="form" action="" method="">
                <div class="form__field form__field--swipe">
                  <input v-model="currentNote.public" type="checkbox" id="publicSwipe" name="">
                  <label for="publicSwipe">
                    <div>
                      <i v-if="currentNote.public" class="icon-font icon-safety"></i>
                      <p v-if="currentNote.public">Public note</p>
                      <p v-else>Private note</p>
                    </div>
                    <div></div>
                    <div></div>
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
        <form class="form" action="" method="">
          <div class="bill__row bill__row-8 bill__row--box">
            <NotePassageItem
              v-for="(item, index) in currentNoteItems"
              @removeItem="onRemoveNoteItem($event)"
              :key="item.position"
              :item="item"
              :index="index"
              ref="cards"></NotePassageItem>
            <AddNewPassageItem
              @add="onAddNoteItem"
              :itemCount="itemCount"></AddNewPassageItem>
          </div>
          <md-progress-bar v-if="isNoteCreateLoading" md-mode="indeterminate"></md-progress-bar>
          <div class="bill__row bill__row-5 bill__row--btn">
            <a
              @click.prevent="createNote({currentNote, currentNoteItems})"
              :class="{'disabled': isNoteCreateLoading}"
              class="btn c-btn c-btn--bigH c-btn--darkGreen mr-0"
              href="#"
              title="">
              Create
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import confirmLeave from '../../../mixins/confirmLeave';
  import { addNote } from '../mixins';

  import NotePassageItem from '../NoteItems/NoteItemsEdit/NotePassageItem.vue';
  import AddNewPassageItem from '../NoteItems/NoteItemsAdd/AddNewPassageItem.vue';
  import DragAndDropArea from '../../Controls/DragAndDropArea.vue';
  import SelectControl from '../../Controls/SelectControl.vue';
  import TextareaAutosize from '../../Controls/TextareaAutosize.vue';

  export default {
    name: 'CreatePassage',
    data() {
      return {
        mode: 'create',
        descriptionHeight: '54px'
      };
    },
    mixins: [
      confirmLeave,
      addNote
    ],
    components: {
      NotePassageItem,
      AddNewPassageItem,
      DragAndDropArea,
      SelectControl,
      TextareaAutosize
    },
    created() {
      this.currentNote.type = 'passage';
    },
    computed: {},
    methods: {
      onResize(height) {
        this.descriptionHeight = height;
      }
    }
  }
</script>

<style scoped>
  .form__textarea {
    background-color: #fff;
  }
</style>
