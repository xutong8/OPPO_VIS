<template>
  <div class="diagnosis-view">
    <div class="title">
      <div class="title-left">
        <img src="../assets/icons/diagnosis_view_icon.png" />
        <span class="desc">Diagnosis View</span>
      </div>
      <div class="title-right">
        <a-button>Export</a-button>
      </div>
    </div>
    <a-divider style="margin: 4px 0" />
    <div class="content">
      <div class="issues">
        <div class="block-title">
          Quality issues
        </div>
        <div class="issue-search">
          <a-input 
            placeholder="issues_001345"
            style="width: 200px"
          />
          <a-button
            type="primary"
          >
            Find root cause
          </a-button>
        </div>
      </div>
      <div class="issues">
        <div class="block-title">
          influence path
        </div>
        <div class="path-line">
          <div>Path1</div>
          <div id="column-plot-container"></div>
          <div id="line-plot-container"></div>
          <div id="line-plot2-container"></div>
        </div>
      </div>
      <div class="issues">
        <div class="block-title">
          Explanation
        </div>
        <a-textarea
          :value="explain_text"
          :auto-size="{ minRows: 2, maxRows: 5}"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { TinyColumn, TinyLine } from '@antv/g2plot';

export default {
  name: "DiagnosisView",
  data() {
    return {
      explain_text: "FINDX3 model released a new version of Ota_versionA22, which caused the front shell temperature to exceed 45 degrees, thus limiting the CPU frequency, and eventually causing the startup class to lag when using WeChat_17_1_0 to open the page PluginProxyActivity."
    }
  },
  methods: {
  },
  mounted() {
    const data = [100, 125];
    const columnPlot = new TinyColumn("column-plot-container", {
      height: 50,
      width: 100,
      autoFit: false,
      data,
    })
    columnPlot.render();

    const lineData = [
      264,
      417,
      438,
      887,
      309,
      397,
    ];
    const linePlot = new TinyLine("line-plot-container", {
      height: 50,
      width: 100,
      autoFit: false,
      data: lineData,
      smooth:true,
    })
    linePlot.render();

    const lineData2 = [
      983,
      340,
      539,
      243,
      226,
      192,
    ];
    const linePlot2 = new TinyLine("line-plot2-container", {
      height: 50,
      width: 100,
      autoFit: false,
      data: lineData2,
      smooth:true,
    })
    linePlot2.render();
  }
}
</script>

<style scoped>
.diagnosis-view {
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  padding: 8px;
  background-color: #fff;
  height: 498px;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
}

.title-left {
  display: flex;
  align-items: center;
}

.desc {
  font-size: 24px;
  margin-left: 4px;
}

.issue-search {
  display: flex;
  justify-content: space-between;
}

.block-title {
  font-size: 18px;
  margin: 5px 0;
}

.path-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>