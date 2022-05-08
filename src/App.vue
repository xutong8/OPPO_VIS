<template>
  <div id="app">
    <Header title="CasualAnalyzer" />
    <Main />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';

export default {
  name: "App",
  components: {
    Header,
    Main
  },
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
