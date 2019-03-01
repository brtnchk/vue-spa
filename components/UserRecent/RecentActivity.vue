<template>
  <div class="section__wrapper-right">
    <div class="section__title section__title--recent">
      <div class="section__title-wrap">
        <div class="section__title-left">
          <div class="section__title-icon">
            <i class="icon-font icon-recent"></i>
          </div>
          <span>Recent</span>
        </div>
        <div class="section__title-right">
          <div class="notes__search">
            <input
              v-model="searchPhrase"
              class="notes__search-input"
              type="text"
              name=""
              placeholder="Search recent">
            <button class="notes__search-btn" type="submit">
              <i class="icon-font icon-search"></i>
            </button>
            <a class="notes__search-clear" href="#" title="">
              <i class="icon-font icon-error"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="notes__box-wrapper">
      <p v-if="groupedRecent.lastTwelveHoursRecents.length" class="recent__subtitle">A couple of hours ago</p>
      <NoteBox
        v-if="groupedRecent.lastTwelveHoursRecents.length || !isRecentsloading"
        @view="onNoteViewClick($event)"
        :notes="groupedRecent.lastTwelveHoursRecents"
        :isNoteDeleteLoading="isRecentsloading"
        :eventDropdown="false"></NoteBox>
      <p v-if="groupedRecent.lastSevenDaysRecents.length" class="recent__subtitle">Last 7 days</p>
      <NoteBox
        v-if="groupedRecent.lastSevenDaysRecents.length || !isRecentsloading"
        @view="onNoteViewClick($event)"
        :notes="groupedRecent.lastSevenDaysRecents"
        :isNoteDeleteLoading="isRecentsloading"
        :eventDropdown="false"></NoteBox>
      <p v-if="groupedRecent.olderThatSevenDaysRecents.length" class="recent__subtitle">Later on</p>
      <NoteBox
        v-if="groupedRecent.olderThatSevenDaysRecents.length || !isRecentsloading"
        @view="onNoteViewClick($event)"
        :notes="groupedRecent.olderThatSevenDaysRecents"
        :isNoteDeleteLoading="isRecentsloading"
        :eventDropdown="false"></NoteBox>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex';
  import moment from 'moment';

  import { filterBy } from '../../helpers';
  import NoteBox from '../Controls/NoteBox.vue';

  export default {
    name: 'RecentActivity',
    components: {
      NoteBox
    },
    data() {
      return {
        searchPhrase: ''
      };
    },
    mounted() {
      this.getRecent();
    },
    created() {
      this.setDisplayedSidebarMenu('main');
    },
    computed: {
      ...mapGetters({
        recents: 'recents/recents',
        isRecentsloading: 'recents/isRecentsloading'
      }),
      filtredRecents() {
        return filterBy(this.recents, this.searchPhrase);
      },
      groupedRecent() {
        let now = (new Date()).getTime();
        return this.filtredRecents.reduce((prev, next) => {
          let twelveHours = 1000*60*60*12;
          let sevenDays = twelveHours*2*7;
          let timePassed = now - (+moment(next.created_at));
          if (timePassed <= twelveHours) {
            prev.lastTwelveHoursRecents.push(next);
            return prev;
          }
          if (timePassed <= sevenDays) {
            prev.lastSevenDaysRecents.push(next);
            return prev;
          }

          prev.olderThatSevenDaysRecents.push(next);
          return prev;
        }, {lastTwelveHoursRecents: [], lastSevenDaysRecents: [], olderThatSevenDaysRecents: []});
      }
    },
    methods: {
      ...mapMutations(['setDisplayedSidebarMenu']),
      ...mapMutations({
        setCurrentNote: 'notes/SET_CURRENT_NOTE'
      }),
      ...mapActions({
        getRecent: 'recents/getRecent'
      }),
      onNoteViewClick(data) {
        let name, note;
        if (data.event === "note_view") {
          note = data.note;
          name = 'view-note';
        } else {
          note = data.course;
          name = 'course';
        }

        this.setCurrentNote(note);
        this.$router.push({name, params: {id: note.id}});
      },
    }
  }
</script>

<style scoped>
</style>
