<template>
  <input
    type="file"
    ref="file"
    name="image"
    @change="onFilePicked($event.target.files)"
    accept="image/*"
    style="display:none">
</template>

<script>
  import * as dragDrop from 'drag-drop';

  export default {
    name: 'DownloadImage',
    data() {
      return {
        hasError: false,
        msgError: '',
        maxSize: 1024
      }
    },
    props: ['dropTarget', 'value'],
    components: {},
    mounted() {
      this.$emit('elementRef', this.$refs.file);

      if (!this.dropTarget) return;

      dragDrop(this.dropTarget, {
        onDrop: (files, pos, fileList, directories) => this.onFilePicked(files),
        onDragEnter: _ => this.$emit('dragEnter'),
        onDragOver: _ => this.$emit('dragOver'),
        onDragLeave: _ => this.$emit('dragLeave')
      });
    },
    computed: {},
    watch: {
      value: {
        handler: function (val, oldVal) {
          if (!val) this.$refs.file.value = null;
        },
        deep: false
      }
    },
    methods: {
      onFilePicked(file) {
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
            this.createFile(pickedFile);
          }
        }
      },
      createFile(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.$emit('input', {
            url: e.target.result,
            file
          });
        };
        reader.readAsDataURL(file);
      }
    }
  }
</script>

<style scoped>
</style>
