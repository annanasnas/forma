import Vue from "vue";
import Vuex from "vuex";

//load Vuex
Vue.use(Vuex);

// save our state (isPanel open or not) 
export const store = Vue.observable({
    isNavOpen: false
});

// We call toggleNav anywhere we need it in our app
export const mutations = {
    toggleNav() {
        store.isNavOpen = !store.isNavOpen
    }
}
