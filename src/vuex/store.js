import { createStore } from "vuex";
import storeModules from './index';

const { state, mutations, actions, getters } = storeModules;

const store = createStore({ state, mutations, actions, getters });

export default store;
