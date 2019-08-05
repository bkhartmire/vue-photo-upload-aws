<template>
  <div id="upload">
    <input type="file" v-on:change.prevent="uploadFunction" />
  </div>
</template>

<script>
export default {
  name: "Upload",
  props: ["uploadFunction"]
};
</script>

<style>
#upload {
  width: 33%;
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
}

input {
  color: rgb(54, 73, 93);
}
</style>
