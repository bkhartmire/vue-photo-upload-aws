<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>{{ title }}</h1>

    <navbar
      v-on:view-all="viewAll"
      v-bind:title="selectedPhoto.fileName"
      :uploadFunction="uploadPhoto"
    />

    <div v-if="currentView==='All'">
      <singlephoto
        v-for="photo in photos"
        v-bind:key="photo.id"
        v-bind:fileName="photo.fileName"
        size="small"
        v-on:select="selectPhoto"
      />
    </div>
    <div v-if="currentView==='Single'">
      <singlephoto size="full_screen" v-bind:fileName="selectedPhoto.fileName" />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import SinglePhoto from "./components/SinglePhoto";
import { listObjects, saveObject } from "../utils/index";

export default {
  name: "App",
  components: {
    navbar: Navbar,
    singlephoto: SinglePhoto
  },
  data: () => ({
    title: "Photo Upload App",
    currentView: "All",
    photos: [],
    selectedPhoto: { fileName: "" }
  }),
  created: function() {
    listObjects().then(res => {
      let counter = 0;
      this.photos = res.map(obj => {
        return {
          id: ++counter,
          fileName: obj.Key
        };
      });
    });
  },

  methods: {
    viewAll() {
      this.currentView = "All";
      this.selectedPhoto.fileName = "";
    },
    selectPhoto(payload) {
      this.currentView = "Single";
      this.selectedPhoto.fileName = payload;
    },
    uploadPhoto(e) {
      const file = e.target.files[0];
      saveObject(file).then(() => {
        this.currentView = "Single";
        this.selectedPhoto.fileName = file.name;
      });
    }
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
