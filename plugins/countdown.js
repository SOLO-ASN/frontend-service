import VueCountdown from '@chenfengyuan/vue-countdown';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component(VueCountdown.name, VueCountdown);
});
