<template>
  <div class="photo_div">
    <img :src="encodeURI(`http://react.sprint.s3.amazonaws.com/${fileName}`)" :alt="fileName" />
  </div>
</template>

<script>
export default {
  name: "SinglePhoto",
  props: ["fileName"],
  created: function() {
    const name = this.fileName;
  }
};
</script>

<style>
img {
  height: 100px;
  width: 100px;
  margin: 10px;
  cursor: pointer;
  border: 2px solid white;
}

img:hover {
  border: 2px solid grey;
}

.photo_div {
  display: inline;
}
</style>
