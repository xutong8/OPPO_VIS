<template>
  <div class="data_view">
    <div class="title">
      <div class="title_left">
        <img src="../assets/icons/data_view_icon.png" />
        <span class="desc">Data View</span>
      </div>
      <div class="title_right">
        <a-select
          class="select"
          :value="selected_value"
          @change="handleSelectChange"
        >
          <a-select-option value="tom">tom</a-select-option>
          <a-select-option value="eve">eve</a-select-option>
          <a-select-option value="jack">jack</a-select-option>
        </a-select>
        <a-range-picker
          class="picker"
          :value="date_range"
          @change="handlePanelChange"
        />
      </div>
    </div>
    <a-divider style="margin: 4px 0" />
    <div class="content">
      <div class="search">
        <div>#memory</div>
        <div class="search_widget">
          <a-input
            :value="search_text"
            placeholder="Pleast enter"
            style="width: 200px"
          />
          <div class="search_widget_right">
            <a-button>Clear</a-button>
            <a-button type="primary" style="margin-left: 8px">
              Search
            </a-button>
          </div>
        </div>
      </div>
      <div class="table_container">
        <a-table class="table" :dataSource="dataSource" :columns="columns" />
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import { Pie } from "@antv/g2plot";

export default {
  name: "DataView",
  data() {
    const dateFormat = "YYYY/MM/DD";
    return {
      selected_value: "jack",
      date_range: [
        dayjs("2015/01/01", dateFormat),
        dayjs("2015/01/01", dateFormat),
      ],
      search_text: "",
      dataSource: [
        {
          key: "1",
          name: "胡彦斌",
          age: 32,
          address: "西湖区湖底公园1号",
        },
        {
          key: "2",
          name: "胡彦祖",
          age: 42,
          address: "西湖区湖底公园1号",
        },
      ],
      columns: [
        {
          title: "姓名",
          dataIndex: "name",
          key: "name",
          customRender: () => {
            return (
              <div class="name">
                <p>姓名</p>
                <div id="pie_container"></div>
              </div>
            );
          },
        },
        {
          title: "年龄",
          dataIndex: "age",
          key: "age",
        },
        {
          title: "住址",
          dataIndex: "address",
          key: "address",
        },
      ],
    };
  },
  methods: {
    handleSelectChange(selected_value) {
      this.selected_value = selected_value;
    },
    handlePanelChange(date_range) {
      this.date_range = date_range;
    },
  },
  mounted() {
    const data = [
      { type: "分类一", value: 27 },
      { type: "分类二", value: 25 },
      { type: "分类三", value: 18 },
      { type: "分类四", value: 15 },
      { type: "分类五", value: 10 },
      { type: "其他", value: 5 },
    ];
    const piePlot = new Pie("pie_container", {
      appendPadding: 10,
      data,
      angleField: "value",
      colorField: "type",
      radius: 0.9,
      label: {
        type: "inner",
        offset: "-30%",
        content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
        style: {
          fontSize: 14,
          textAlign: "center",
        },
      },
      interactions: [{ type: "element-active" }],
    });

    piePlot.render();
  },
};
</script>

<style scoped>
.data_view {
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  border-radius: 4px;
  padding: 8px;
  background-color: #fff;
  height: 498px;
}

.select {
  width: 100px;
}

.picker {
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

.desc {
  font-size: 24px;
  margin-left: 4px;
}

.content {
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
}

.search {
  display: flex;
  padding: 8px;
  flex-direction: column;
}

.search_widget {
  display: flex;
  justify-content: space-between;
}

.search_widget_right {
  display: flex;
}

.table_container {
  flex: 1 0 0;
  display: flex;
  overflow: hidden;
}

.table {
  flex: 1 0 0;
  overflow: auto;
}

.name {
  display: flex;
  flex-direction: column;
}
</style>
