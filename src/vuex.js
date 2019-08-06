import Vuex from "vuex";
import Vue from "vue";
import { listObjects, saveObject } from "../utils/index";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    title: "Photo Upload App",
    currentView: "All",
    photos: [],
    selectedPhoto: { fileName: "" }
  },
  mutations: {
    viewAll: state => {
      state.currentView = "All";
      state.selectedPhoto.fileName = "";
    },
    selectPhoto: (state, payload) => {
      state.currentView = "Single";
      state.selectedPhoto.fileName = payload;
    },
    uploadPhoto: (state, e) => {
      const file = e.target.files[0];
      saveObject(file).then(() => {
        state.currentView = "Single";
        state.selectedPhoto.fileName = file.name;
      });
    },
    getPhotos: state => {
      listObjects().then(res => {
        let counter = 0;
        state.photos = res.map(obj => {
          return {
            id: ++counter,
            fileName: obj.Key
          };
        });
      });
    }
  }
});
