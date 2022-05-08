import { createApp } from 'vue';
import App from './App.vue';
import { Button, Slider, Divider, Select, DatePicker, Input, Table } from 'ant-design-vue';

createApp(App)
  .use(Divider)
  .use(Select)
  .use(DatePicker)
  .use(Input)
  .use(Button)
  .use(Table)
  .use(Slider)
  .mount('#app');
