<template>
  <div
    :style="imgStyles"
    class="img-content-control">
    <img
      @load="onLoad($event)"
      :style="imgStyles"
      :src="src"
      ref="img"
      alt="">
    <div
      :style="imgStyles"
      class="img-content-control__brick-wrapper">
      <div
        v-for="(mask, index) in contentMask"
        :class="{'img-content-control__brick_hidden': mask}"
        :style="brickStyles(index)"
        :data-index="index"
        class="img-content-control__brick"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ImgContentControl',
    components: {},
    props: {
      content: {
        type: Object,
        default: {}
      }
    },
    data() {
      return {
        imgSize: {
          width: 0,
          height: 0
        },
        brickSize: {
          width: 0,
          height: 0
        },
        imgStyles: {}
      };
    },
    mounted() {
    },
    created() {
      this.$nextTick(_ => {
        this.imgSize = {
          width: this.$refs.img.offsetWidth,
          height: this.$refs.img.offsetHeight
        };
      });
    },
    watch: {
      content: {
        handler(val) {
          if (this.content.mask === null) return;
          this.$nextTick(_ => {
            this.setBrickSize(this.$refs.img);
          });
        }
      },
      immediate: true
    },
    computed: {
      contentMask() {
        if (this.content.mask) return this.content.mask.mask;
        return [];
      },
      baseImgUrl() {
        return process.env.STATIC_URL;
      },
      src() {
        if (this.content.base64) return this.content.value;

        return process.env.STATIC_URL + this.content.value;
      }
    },
    methods: {
      setBrickSize(img) {
        let aspectRatio = this.getAspectRatio(this.content.mask.bricks);
        this.imgSize = {
          width: img.offsetWidth,
          height: img.offsetHeight
        };
        this.brickSize = {
          width: img.offsetWidth/(this.content.mask.bricks/aspectRatio.x),
          height: img.offsetHeight/(this.content.mask.bricks/aspectRatio.y)
        };
      },
      getAspectRatio(count) {
        let sqrt = Math.sqrt(count);
        if (Math.round(sqrt) === sqrt) return {x: sqrt, y: sqrt};

        let x = Math.floor(sqrt);
        for (let i = 1; i < x; x--) {
          let y = count/x;
          if (Math.round(y) === y) return {x, y};
        }

        return {x: 1, y: count};
      },
      brickStyles(brickIndex) {
        let brickHeight = this.brickSize.height;
        let brickWidth = this.brickSize.width;
        let aspectRatio = this.getAspectRatio(this.content.mask.bricks);
        let left = brickWidth*(brickIndex%aspectRatio.y);
        let top = brickHeight*(Math.floor(brickIndex/aspectRatio.y));

        return {
          top: top + 'px',
          left: left + 'px',
          height: brickHeight + 'px',
          width: brickWidth + 'px'
        };
      },
      onLoad(e) {
        this.imgStyles = {
          'width': `${e.path[2].clientWidth/this.getImgCoef(e.target) - 110}px`
        };
      },
      getImgCoef(img) {
        let coef = img.offsetWidth/img.offsetHeight;
        if (coef >= 1.5) return 1;
        if (coef <= 1.5 && coef >= 0.5) return 2;

        return 3;
      }
    }
  }
</script>

<style scoped>
  .img-content-control {
    position: relative;
    display: block;
    margin: auto;
  }

  .img-content-control img {
    display: block;
    margin: auto;
  }

  .img-content-control .img-content-control__brick-wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

  .img-content-control .img-content-control__brick {
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid rgba(234, 231, 231, 0.4);
  }

  .img-content-control .img-content-control__brick_hidden {
    background: rgba(255, 255, 255, 1);
    cursor: pointer;
    transition: background .3s;
  }

  .img-content-control .img-content-control__brick_hidden:hover {
    box-shadow: none;
    border: transparent;
    background: rgba(255, 255, 255, 0);
  }
</style>
