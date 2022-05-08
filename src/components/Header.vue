<template>
  <div class="header">
    <div class="header_left">
      <img src="../assets/icons/header.png" />
      <span class="title">{{ title }}</span>
    </div>
    <div class="header_right">
      <img src="../assets/icons/converse_language.png" style="margin-right: 8px;" />
      <img src="../assets/icons/help.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 60px;
  display: flex;
  background-color: #2c2c2c;
  padding: 12px;
  justify-content: space-between;
}

.header_left {
  display: flex;
}

.header_right {
  display: flex;
}

.title {
  margin-left: 8px;
  color: #fff;
  font-size: 32px;
  line-height: 36px;
}
</style>