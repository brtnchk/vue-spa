<template lang="html">
  <div class="section__block-wrap">
    <slot></slot>
    <a class="c-btn c-btn--bigH c-btn--darkGreen" href="#" @click="launch">Change photo</a>
    <a class="c-btn c-btn--bigH c-btn--lightGray" href="#" @click="remove">Remove photo</a>
    <input
      type="file"
      ref="file"
      name="avatar"
      @change="onFilePicked($event.target.name, $event.target.files)"
      accept="image/*"
      style="display:none">
    <div v-if="hasError" class="text-danger">{{ msgError }}</div>
  </div>
</template>

<script>
  export default {
    name: 'Avatar',
    data() {
      return {
        hasError: false,
        msgError: '',
        maxSize: 1024
      }
    },
    props: {
      avatar: {
        type: Object
      },
    },
    methods: {
      launch() {
        this.hasError = false;
        this.$refs.file.click();
      },
      onFilePicked(fieldName, file) {
        const { maxSize } = this;
        const pickedFile = file[0];

        if (file.length > 0) {
          const size = pickedFile.size / maxSize / maxSize;
          if (!pickedFile.type.match('image.*')) {
            this.hasError = true;
            this.msgError = 'Please choose an image file';
          } else if ( size > 1) {
            this.hasError = true;
            this.msgError = 'Your file is too big! Please select an image under 1MB'
          } else {
            this.createAvatar(pickedFile);
          }
        }
      },
      createAvatar(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.$emit('input', {
            'url': e.target.result,
            file
          });
        };
        reader.readAsDataURL(file);
      },
      remove() {
        this.$emit('remove');
      }
    }
  }
</script>

<style lang="css">
</style>
