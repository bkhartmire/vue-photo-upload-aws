<template>
  <div id="navbar">
    <button v-on:click="$emit('view-all')">View All</button>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: ["title"]
};
</script>

<style scoped>
#navbar {
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  background-color: rgb(65, 184, 131);
  height: 60px;
  width: 100%;
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
