<template>
  <div :style="{height: hasImage ? 'auto' : calcHeight}" class="me-input-with-img">
    <div
      v-if="hasImage"
      class="form__field form__field--input form__field--icon form__field--image">
      <label class="form__label" :for="'notesCreate' + index">{{ lable }}</label>
      <div class="form__input-wrap">
        <a
          @click.prevent="onImgRemoveClick"
          href="#"
          title="">
          <i class="icon-font icon-remove"></i>
        </a>
        <img
          :src="baseImgUrl + value"
          alt=""
          title="">
      </div>
      <div class="form__notify form__notify--hide"></div>
    </div>
    <div
      v-else
      class="form__field form__field--input form__field--icon">
      <label class="form__label" :for="'notesCreate' + index">{{ lable }}</label>
      <div class="form__input-wrap">
        <a
          @click.prevent="itemRef.click()"
          href="#"
          title="">
          <i class="icon-font icon-picture"></i>
        </a>
        <textarea
          v-model="internalText"
          :id="'notesCreate' + index"
          :name="'notesCreate' + index"
          :rows="rows"
          :style="{height: 'auto', overflow: 'hidden', 'padding-right': '43px'}"
          ref="field"
          class="form__textarea"
          type="text"
          placeholder="Lorem Ipsum is simply dummy text"></textarea>
        <DownloadImage
          v-model="itemImgData"
          @elementRef="itemRef=$event"></DownloadImage>
      </div>
      <md-progress-bar v-if="isLoading && isImgLoading" md-mode="indeterminate"></md-progress-bar>
      <div class="form__notify form__notify--hide"></div>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters,
    mapActions,
    mapMutations
  } from 'vuex';

  import DownloadImage from './DownloadImage.vue';
  import { autoScaleTextarea } from '../Notes/NoteItems/mixins';

  export default {
    name: 'InputWithImg',
    components: {
      DownloadImage
    },
    props: ['value', 'text', 'classes', 'index', 'lable', 'autoFocus'],
    mixins: [
      autoScaleTextarea
    ],
    data() {
      return {
        itemRef: null,
        itemImgData: null,
        internalText: null,
        isLoading: false
      };
    },
    mounted() {
    },
    created() {
      if (this.autoFocus) this.$nextTick(_ => {
        if (this.$refs.field) this.$refs.field.focus();
      });
    },
    watch: {
      itemImgData(val) {
        if (!val) {
          this.$emit('input', null);

          return;
        }

        const fd = new FormData();
        fd.append('image', val.file);
        this.isLoading = true;
        this.uploadImg(fd).then(profile_photo => {
          if (!profile_photo) return this.isLoading = false;

          this.$emit('input', profile_photo);
          this.internalText = null;
          this.isLoading = false;
        }).catch(_ => this.isLoading = false);
      },
      text: {
        immediate: true,
        handler(val) {
          this.internalText = val;
        }
      },
      internalText(val = [], oldVal = []) {
        val = val ? val : '';
        oldVal = oldVal ? oldVal : '';
        this.$emit('inputText', val);

        this.setRows(oldVal ? val.length < oldVal.length : false);
      }
    },
    computed: {
      ...mapGetters({
        isImgLoading: 'isImgLoading'
      }),
      hasImage() {
        return Boolean(this.value);
      },
      baseImgUrl() {
        return process.env.STATIC_URL;
      }
    },
    methods: {
      ...mapActions({
        uploadImg: 'uploadImg'
      }),
      onImgRemoveClick() {
        this.$nextTick(_ => {
          this.itemImgData = null;
          this.$emit('input', null);
        });
      }
    }
  }
</script>

<style scoped>
  .me-input-with-img {
    width: 100%;
  }
</style>
