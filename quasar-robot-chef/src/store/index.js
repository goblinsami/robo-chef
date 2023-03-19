import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import recipes from "./recipes";
import createPersistedState from "vuex-persistedstate";
import { useStore } from "vuex";

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      recipes,
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    /*     strict: process.env.DEBUGGING, */
    plugins: [createPersistedState()],
  });

  return Store;
});
