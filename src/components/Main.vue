<template>
  <div class="main">
    <div class="main_left">
      <DataView />
      <DiagnosisView />
    </div>
    <div class="main_right">
      <CasualGraphView />
    </div>
  </div>
</template>

<script>
import DataView from './DataView.vue';
import DiagnosisView from './DiagnosisView.vue';
import CasualGraphView from './CasualGraphView.vue';

export default {
  name: 'Main',
  components: {
    DataView,
    DiagnosisView,
    CasualGraphView
  }
}
</script>

<style scoped>
.main {
  flex: 1 0 0;
  display: flex;
  padding: 8px;
  background-color: #EDF0F4;
}

.main_left {
  flex-shrink: 0;
  width: 600px;
  display: flex;
  flex-direction: column;
}

.main_right {
  flex: 1 0 0;
  display: flex;
}
</style>