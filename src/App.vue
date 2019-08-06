<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>{{ title }}</h1>

    <navbar :title="selectedPhoto.fileName" />

    <div v-if="currentView==='All'">
      <singlephoto v-for="photo in photos" :key="photo.id" :fileName="photo.fileName" size="small" />
    </div>

    <div v-if="currentView==='Single'">
      <singlephoto size="full_screen" :fileName="selectedPhoto.fileName" />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import SinglePhoto from "./components/SinglePhoto";
import store from "./vuex.js";

export default {
  name: "App",
  components: {
    navbar: Navbar,
    singlephoto: SinglePhoto
  },
  computed: {
    title() {
      return store.state.title;
    },
    photos() {
      return store.state.photos;
    },
    selectedPhoto() {
      return store.state.selectedPhoto;
    },
    currentView() {
      return store.state.currentView;
    }
  },
  created: function() {
    store.commit("getPhotos");
  }
};
</script>

<style>
body {
  margin: 0;
}

#app {
  text-align: center;
}
</style>
