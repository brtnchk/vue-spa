<template>
  <div>
    <div
      v-if="isValue"
      :class="[
        classes,
        {
          'drag-and-drop-area--ensbled': !classes,
          'drag-and-drop-area--hover': isHovered
        }
      ]"
      class="drag-and-drop-area drag-and-drop-area--piced-img">
      <a
        @click.prevent="onImgRemoveClick"
        href="#"
        title="">
        <i class="icon-font icon-remove"></i>
      </a>
      <img
        :srcset="baseImgUrl + value"
        class="drag-and-drop-area__image"
        alt=""
        title="">
    </div>
    <div
      v-else
      @click.prevent="onAreaClick"
      :class="[
        classes,
        {
          'drag-and-drop-area--ensbled': !classes,
          'drag-and-drop-area--hover': isHovered
        }
      ]"
      class="drag-and-drop-area">
      <md-progress-bar v-if="isLoading && isImgLoading" md-mode="indeterminate" class="me-snuggle-top"></md-progress-bar>
      <div class="drag-and-drop-area__spread"></div>
      <img
        srcset="../../assets/img/img-create.png, ../../assets/img/img-create@2x.png 2x"
        alt=""
        title="">
      <p>Drag and drop any image or choose an image</p>
    </div>
    <DownloadImage
      v-if="!isValue"
      v-model="itemImgData"
      @elementRef="itemRef=$event"
      @dragEnter="isHovered=true"
      @dragLeave="isHovered=false"
      :dropTarget="'.drag-and-drop-area__spread'"></DownloadImage>
  </div>
</template>

<script>
  import {
    mapGetters,
    mapActions,
    mapMutations
  } from 'vuex';

  import DownloadImage from './DownloadImage.vue';

  export default {
    name: 'DragAndDropArea',
    data() {
      return {
        itemRef: null,
        itemImgData: null,
        isHovered: false,
        isLoading: false
      };
    },
    props: ['value', 'classes'],
    watch: {
      itemImgData(val) {
        if (!val) {
          this.$emit('input', null);

          return;
        }

        const fd = new FormData();
        fd.append('image', val.file);
        this.isLoading = true;
        this.uploadImg(fd)
          .then(profile_photo => {
            if (!profile_photo) return this.isLoading = false;

            this.$emit('input', profile_photo);
            this.isLoading = false;
          })
          .catch(_ => this.isLoading = false);
      }
    },
    components: {
      DownloadImage
    },
    computed: {
      ...mapGetters({
        isImgLoading: 'isImgLoading'
      }),
      isValue() {
        return Boolean(this.value);
      },
      baseImgUrl() {
        return process.env.STATIC_URL;
      },
    },
    methods: {
      ...mapActions({
        uploadImg: 'uploadImg'
      }),
      onAreaClick() {
        if (this.itemImgData) return;

        this.itemRef.click();
      },
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
  .drag-and-drop-area.drag-and-drop-area--ensbled {
    cursor: pointer;
    position: relative;
    overflow: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 257px;
    height: 263px;
    padding: 10px;
    border-radius: 4px;
    border: 1px dashed #979797;
    background-color: #fff;
    text-align: center;
  }

  .drag-and-drop-area.drag-and-drop-area--hover {
    background: #F0F0F0;
  }

  .drag-and-drop-area.drag-and-drop-area--piced-img {
    border: transparent;
  }

  .drag-and-drop-area > .drag-and-drop-area__spread {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .drag-and-drop-area a {
    position: absolute;
    z-index: 5;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 29px;
    height: 29px;
    top: 10px;
    right: 10px;
    transform: translateY(0);
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.1);
  }

  .drag-and-drop-area > a i {
    color: #0e1111;
    font-size: 15px;
  }

  .drag-and-drop-area .drag-and-drop-area__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .drag-and-drop-area.drag-and-drop-area--ensbled p {
    font-size: 14px;
  }

  .drag-and-drop-area.drag-and-drop-area--ensbled img {
    margin-bottom: 30px;
  }
</style>
