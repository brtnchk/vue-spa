import {
  mapGetters
} from 'vuex';

export const noteItemMethods = {
  data() {
    return {
      amIRemoving: false
    };
  },
  computed: {
    ...mapGetters({
      isNoteItemRemoveLoading: 'notes/isNoteItemRemoveLoading'
    })
  },
  methods: {
    onRemoveItem(item) {
      if (this.isNoteItemRemoveLoading) return;
      this.amIRemoving = true;
      this.$emit('removeItem', item);
    },
    focusOnInput() {
      if (this.$refs.field) this.$refs.field.focus();
    }
  }
};

export const autoScaleTextarea = {
  data() {
    return {
      rows: 1,
      defaultElemHeight: 80,
      lineHeight: 20
    };
  },
  created() {
    this.$nextTick(_ => {
      if (this.hasImage) return;
      this.lineHeight = parseFloat(getComputedStyle(this.$refs.field).lineHeight);
      this.setRows(false);
    });
  },
  computed: {
    calcHeight() {
      return `${this.defaultElemHeight + (this.lineHeight * (this.rows - 1))}px`;
    }
  },
  methods: {
    setRows(deleted) {
      if (this.hasImage) return;

      if (deleted) {
        this.rows = 1;
        this.$nextTick(_ => this.rows = this.getRows());

        return;
      }
      if (this.$refs.field.scrollHeight === this.$refs.field.clientHeight) return;

      this.rows = this.getRows();
    },
    getRows() {
      let addedHeight = this.$refs.field.scrollHeight - this.$refs.field.clientHeight;
      let newRows = Math.round(addedHeight / this.lineHeight);
      let rows = this.rows + newRows;

      if (rows < 1) rows = 1;
      if (rows > 2) rows++;

      return rows;
    }
  }
};
