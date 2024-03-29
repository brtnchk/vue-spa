/**
 * @desc - Глобальная undo/redo функциональность. По-умолчанию следит за всеми мутациями.
 *
 * @example
 *
 * Vue.use(Vuex);
 * Vue.use(VuexUndoRedo, { mutations: ['notes/NEW_NUMBER'] });
 *
 * mutations принимает строку или массив строк (wildcard character - подстоновочные строки).
 * Можно подкоючить или отключить как любую мутацию так и любой модуль используя шаблоны.
 * https://www.npmjs.com/package/matcher
 * */
const matcher = require('matcher');
const EMPTY_STATE = 'emptyState';

export default {
  install(Vue, options = {}) {
    if (!Vue._installedPlugins.find(plugin => plugin.Store)) {
      throw new Error("VuexUndoRedo plugin must be installed after the Vuex plugin.")
    }
    Vue.mixin({
      data() {
        return {
          done: [],
          undone: [],
          newMutation: true,
          mutations: options.mutations || '**'
        };
      },
      created() {
        if (this.$store) {
          this.$store.subscribe(mutation => {
            let ignoreMutation = true;
            if (typeof this.mutations === 'string') {
              ignoreMutation = matcher.isMatch(mutation.type, this.mutations);
            }
            if (Array.isArray(this.mutations)) {
              ignoreMutation = matcher([mutation.type], this.mutations).length;
            }
            if (mutation.type !== EMPTY_STATE && ignoreMutation) {
              this.done.push(mutation);
            }
            if (this.newMutation) {
              this.undone = [];
            }
          });
        }
      },
      computed: {
        canRedo() {
          return this.undone.length;
        },
        canUndo() {
          return this.done.length;
        }
      },
      methods: {
        redo() {
          let commit = this.undone.pop();
          this.newMutation = false;
          switch (typeof commit.payload) {
            case 'object':
              this.$store.commit(`${commit.type}`, Object.assign({}, commit.payload));
              break;
            default:
              this.$store.commit(`${commit.type}`, commit.payload);
          }
          this.newMutation = true;
        },
        undo() {
          this.undone.push(this.done.pop());
          this.newMutation = false;
          // this.$store.commit(EMPTY_STATE);
          this.done.forEach(mutation => {
            switch (typeof mutation.payload) {
              case 'object':
                this.$store.commit(`${mutation.type}`, Object.assign({}, mutation.payload));
                break;
              default:
                this.$store.commit(`${mutation.type}`, mutation.payload);
            }
            this.done.pop();
          });
          this.newMutation = true;
        },
        cleanUndoRedo() {
          this.undone = [];
          this.done = [];
        }
      }
    });
  }
};
