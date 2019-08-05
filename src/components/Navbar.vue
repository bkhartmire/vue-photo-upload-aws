<template>
  <div id="navbar">
    <div id="view-all">
      <button v-on:click="$emit('view-all')">View All</button>
    </div>
    <div id="title">
      <h1>{{title}}</h1>
    </div>
    <upload :uploadFunction="uploadFunction" />
  </div>
</template>

<script>
import Upload from "./Upload";
export default {
  name: "Navbar",
  components: {
    upload: Upload
  },
  props: ["title", "uploadFunction"]
};
</script>

<style scoped>
#navbar {
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  background-color: rgb(65, 184, 131);
  height: 60px;
  margin: 0;
  width: 100%;
}
h1 {
  font-size: 1em;
  color: rgb(54, 73, 93);
}
#view-all {
  width: 33%;
}
#title {
  width: 33%;
  margin-top: auto;
  margin-bottom: auto;
}
button {
  color: rgb(54, 73, 93);
  background: none;
  border: none;
  font-size: 1.5em;
}

button:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
