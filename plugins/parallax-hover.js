import VueKinesis from 'vue-kinesis';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(VueKinesis);
});
