<template>
  <div class="section__wrapper-right">
    <div class="section__title section__title--notes">
      <div class="section__title-wrap">
        <div class="section__title-left">
          <div class="section__title-icon">
            <i class="icon-font icon-bill"></i>
          </div>
          <span>Edit book</span>
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
              <!--<p class="bill__public-lock"><i class="icon-font icon-lock-2"></i><span>Share access</span></p>-->
              <form class="form" action="" method="">
                <div class="form__field form__field--swipe">
                  <input
                    v-model="currentNote.public"
                    type="checkbox"
                    id="publicSwipe"
                    name="">
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
        <!--<div class="bill__row bill__row&#45;&#45;title pt-0"><span>Preview</span></div>-->
        <!--<div class="bill__row bill__row-9 bill__row&#45;&#45;preview">-->
        <!--<div class="bill__preview">-->
        <!--<div class="bill__preview-head d-flex justify-content-end">-->
        <!--<div class="c-dropdown">-->
        <!--<div class="dropdown"><a class="dropdown__btn" href="#" id="notesFlashcardTitle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span></span><span></span><span></span></a>-->
        <!--<div class="dropdown-menu dropdown-menu-right" aria-labelledby="notesFlashcardTitle"><a class="dropdown-item" href="#">-->
        <!--<div><i class="icon-font icon-edit"></i></div><span>Edit</span></a><a class="dropdown-item" href="#">-->
        <!--<div><i class="icon-font icon-star-full"></i></div><span>Set as primary</span></a><a class="dropdown-item" href="#">-->
        <!--<div><i class="icon-font icon-remove"></i></div><span>Remove</span></a></div>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="bill__preview-body">-->
        <!--<div class="tool">-->
        <!--<div class="tool__wrapper">-->
        <!--<div class="tool__preview">-->
        <!--<div class="tool__preview-control d-flex align-items-center justify-content-between">-->
        <!--<div class="d-flex align-items-center">-->
        <!--<input type="text" value="2"><span>of <i>4</i></span>-->
        <!--</div>-->
        <!--<div class="d-flex justify-content-end"><a href="#" title=""><i class="icon-font icon-edit"></i></a></div>-->
        <!--</div>-->
        <!--<div class="tool__preview-scroll"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>-->
        <!--<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>-->
        <!--<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
        <Spinner v-if="isNoteItemsLoading" line-fg-color="#00bd70" size="large"></Spinner>
        <div v-else class="bill__box section__block">
          <div class="form__field form__field--textarea">
            <label class="form__label" :for="'notesCreateText'">Book</label>
            <div class="form__textarea-wrap">
              <textarea
                @input="onBookTextInput($event.target.value)"
                :value="joinedPassages"
                class="form__textarea"
                :id="'notesCreateText'"
                :name="'notesCreateText'"
                placeholder="Book"></textarea>
            </div>
            <div class="form__notify form__notify--hide"></div>
          </div>
        </div>
        <md-progress-bar v-if="isNoteUpdateLoading" md-mode="indeterminate"></md-progress-bar>
        <div class="bill__row bill__row-5 bill__row--btn">
          <a
            @click.prevent="updateBookNote({currentNote, currentNoteItems, deletedItems})"
            :class="{'disabled': isNoteUpdateLoading}"
            class="btn c-btn c-btn--bigH c-btn--darkGreen mr-0"
            href="#"
            title="">
            Edit
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import confirmLeave from '../../../mixins/confirmLeave';
  import { addNote } from '../mixins';

  import DragAndDropArea from '../../Controls/DragAndDropArea.vue';
  import SelectControl from '../../Controls/SelectControl.vue';
  import TextareaAutosize from '../../Controls/TextareaAutosize.vue';

  export default {
    name: 'EditBook',
    mixins: [
      confirmLeave,
      addNote
    ],
    components: {
      DragAndDropArea,
      SelectControl,
      TextareaAutosize
    },
    data() {
      return {
        deletedItems: null,
        descriptionHeight: '54px'
      };
    },
    created() {
      this.currentNote.type = 'book';
      if (this.downloadNote) this.getNote(this.$route.params.id);
      this.getNoteItems(this.$route.params.id);
    },
    computed: {
      joinedPassages() {
        return this.currentNoteItems.map(_ => _.passage_text).join('\n\n');
      }
    },
    methods: {
      onBookTextInput(text) {
        if (this.deletedItems === null) this.deletedItems = this.currentNoteItems;

        let passages = text
          .replace(/\n{2,}/, '\n\n')
          .split('\n\n')
          .reduce((prev, next, index) => {
            // на каждом третьем элементе добавлять новый элемент в массив
            if (index%3 === 0) {
              prev.push(next);

              return prev;
            }
            // иначе приклеивать значение в последний элемент массива
            prev[prev.length - 1] += `\n\n${next}`;

            return prev;
          }, [])
          .map((passage_text, i) => ({
            id: i + 1,
            new: true,
            passage_text,
            term_text: "",
            term_image: null,
            term_image2: null,
            term_definition: "",
            position: 0,
          }));

        this.setCurrentNoteItems(passages);
      },
      onResize(height) {
        this.descriptionHeight = height;
      }
    }
  }
</script>

<style scoped>
  .form__field--textarea {
    width: 100%;
  }

  .form__textarea {
    background-color: #fff;
  }

  .form__textarea-wrap .form__textarea {
    resize: none;
    outline: none;
    position: relative;
    width: 100%;
    height: 130px;
    padding: 20px;
    border-radius: 4px;
    border: 1px solid #cbcecb;
    background-color: transparent;
  }
</style>
