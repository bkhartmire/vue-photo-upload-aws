<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>{{ title }}</h1>
    <navbar v-on:view-all="currentView='All'" />
    <div v-if="currentView==='All'">
      <singlephoto v-for="photo in photos" v-bind:key="photo.id" v-bind:fileName="photo.fileName" />
    </div>
    <div v-if="currentView==='Single'">
      <singlephoto />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import SinglePhoto from "./components/SinglePhoto";
import { listObjects } from "../utils/index";

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
  }
};
</script>

<style>
#app {
  text-align: center;
}
</style>
