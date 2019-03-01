<template>
  <div class="notes__box-wrapper">
    <div
      v-for="(note, index) in notes"
      :class="'notes__box notes__box-' + index">
      <md-progress-bar
        v-if="isNoteDeleteLoading && (deletedNoteId === note.id)"
        class="me-snuggle-top"
        md-mode="indeterminate"></md-progress-bar>
      <div
        @click.prevent="$emit('view', note)"
        :style="{cursor: 'pointer'}"
        class="notes__box-left">
        <img
          v-if="note.cover_image"
          :srcset="baseImgUrl + note.cover_image"
          alt=""
          title="">
      </div>
      <div
        @click.prevent="$emit('view', note)"
        :style="{cursor: 'pointer'}"
        class="notes__box-middle">
        <p class="notes__box-title">{{ note.title }}</p>
        <div class="notes__box-info">
          <!--<a href="#" title="">-->
          <!--<i class="icon-font icon-select"></i>-->
          <!--<span>12K</span>-->
          <!--</a>-->
          <!--<a href="#" title="">-->
          <!--<i class="icon-font icon-like"></i>-->
          <!--<span>567</span>-->
          <!--</a>-->
          <!--<a href="#" title="">-->
          <!--<i class="icon-font icon-save"></i>-->
          <!--<span>67</span>-->
          <!--</a>-->
          <!--<a href="#" title="">-->
          <!--<i class="icon-font icon-profile"></i>-->
          <!--<span>Owner Name</span>-->
          <!--</a>-->
          <a href="#" title="">
            <i class="icon-font icon-recent"></i>
            <span>{{ note.created_at | moment("from", "now") }}</span>
          </a>
        </div>
      </div>
      <div class="notes__box-right">
        <div v-if="eventDropdown" class="notes__box-drop c-dropdown">
          <div class="dropdown">
            <a
              :id="'notesBox' + index"
              class="dropdown__btn"
              href="#"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              <span></span><span></span><span></span>
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="notesBox0">
              <a
                v-if="editEvent"
                @click.prevent="$emit('edit', note)"
                :href="note.type + '/edit'"
                class="dropdown-item">
                <div><i class="icon-font icon-edit"></i></div>
                <span>Edit</span>
              </a>
              <!--<a class="dropdown-item" href="#">-->
              <!--<div><i class="icon-font icon-star-full"></i></div>-->
              <!--<span>Set as primary</span>-->
              <!--</a>-->
              <a @click.prevent="onNoteDelete(note)" class="dropdown-item" href="">
                <div><i class="icon-font icon-remove"></i></div>
                <span>Remove</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NoteBox',
    components: {},
    props: {
      notes: {
        type: Array,
        default: []
      },
      isNoteDeleteLoading: {
        type: Boolean,
        default: false
      },
      editEvent: {
        type: Boolean,
        default: true
      },
      eventDropdown: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        deletedNoteId: null,
      };
    },
    mounted() {
    },
    created() {
    },
    computed: {
      baseImgUrl() {
        return process.env.STATIC_URL;
      }
    },
    methods: {
      onNoteDelete(note) {
        this.deletedNoteId = note.id;
        this.$emit('delete', note);
      }
    }
  }
</script>

<style scoped>
</style>
