<template>
  <div class="casual_graph_view">
    <div class="title">
      <div class="title_left">
        <img src="../assets/icons/casual_graph_view_icon.png" />
        <span class="desc">Casual Graph View</span>
      </div>
      <div class="title_right">
        <div class="possible_cause">
          <span>Possible Cause</span>
          <a-select
          class="select"
          :value="selected_value"
          @change="handleSelectChange"
        >
          <a-select-option value="tom">tom</a-select-option>
          <a-select-option value="eve">eve</a-select-option>
          <a-select-option value="jack">jack</a-select-option>
        </a-select>
        </div>
        <div class="casuality_threshold">
          <span>Casuality Threshold</span>
          <a-slider 
            class="slider"
            :value="casuality_threshold" 
            :min="0" 
            :max="100" 
          />
        </div>
      </div>
    </div>
    <a-divider style="margin: 4px 0" />
  </div>
</template>

<script>
export default {
  name: 'CasualGraphView',
  data() {
    return {
      selected_value: 'jack',
      casuality_threshold: 10
    }
  },
  methods: {
    handleSelectChange(selected_value) {
      this.selected_value = selected_value;
    },
  }
}
</script>

<style scoped>
.casual_graph_view {
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  padding: 8px;
  background-color: #fff;
  flex: 1 0 0;
  margin-left: 8px;
}

.title {
  display: flex;
  justify-content: space-between;
  height: 40px;
}

.title_left {
  display: flex;
  align-items: center;
}

.title_right {
  display: flex;
}

.possible_cause {
  display: flex;
  align-items: center;
}

.select {
   margin-left: 8px;
}

.casuality_threshold {
  margin-left: 8px;
  display: flex;
  align-items: center;
}

.desc {
  font-size: 24px;
  margin-left: 4px;
}

.slider {
  margin-left: 8px; 
  width: 100px;
}
</style>