import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      modalName: 'discardWork' // имя модальника которое будет открыто для подтверждение ухода со страницы
    };
  },
  beforeRouteLeave (to, from, next) {
    // если разрешено покидать страницу без подтверждения установим запрет на выполнение перехода и выполним
    // переход на другой url.
    if (this.allowLeavePage) {
      this.setAllowToLeavePage(false);

      return next();
    }

    // Передаст в действие имя модальника который нужно открыть и функцию (которая будет сохранена в голабльном
    // хранилище) которая будет вызвана после закрытия модальника.
    this.showModal({
      name: this.modalName, // например, 'discardWork'
      cb: (discard) => {
        if (discard) {
          if (this.onConfirmedLeavePage) this.onConfirmedLeavePage();
        } else {
          if (this.onConfirmedStayedPage) this.onConfirmedStayedPage();
        }
        next(discard);
      }
    });
  },
  computed: {
    ...mapGetters(['allowLeavePage'])
  },
  methods: {
    ...mapActions(['showModal'])
  }
}

