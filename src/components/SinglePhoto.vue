<template>
  <div class="photo_div">
    <img
      :class="size"
      :src="encodeURI(`http://react.sprint.s3.amazonaws.com/${fileName}`)"
      :alt="fileName"
      @click="select"
    />
  </div>
</template>

<script>
import store from "../vuex";

export default {
  name: "SinglePhoto",
  props: ["fileName", "size"],
  created: function() {
    const name = this.fileName;
  },
  methods: {
    select() {
      store.commit("selectPhoto", this.fileName);
    }
  }
};
</script>

<style scoped>
img.small {
  height: 100px;
  width: 100px;
  margin: 10px;
  cursor: pointer;
  border: 2px solid white;
}

img.full_screen {
  width: 100%;
  height: 100%;
}

img.small:hover {
  border: 2px solid grey;
}

.photo_div {
  display: inline;
}
</style>
