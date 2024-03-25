<template>
  <footer class="footer" :class="{'has-bg': bg}">
    <v-container class="max-lg">
      <nav>
        <ul>
          <li
            v-for="(item, index) in menu.inner"
            :key="index"
          >
            <a :href="'#' + item.id">
              {{ $t('ai-landing.header_'+item.id) }}
            </a>
          </li>
        </ul>
      </nav>
      <div class="socmed">
        <v-btn icon variant="text" size="small" class="icon">
          <i class="ion-logo-twitter" />
        </v-btn>
        <v-btn icon variant="text" size="small" class="icon">
          <i class="ion-logo-facebook" />
        </v-btn>
        <v-btn icon variant="text" size="small" class="icon">
          <i class="ion-logo-instagram" />
        </v-btn>
      </div>
    </v-container>
    <div class="copyright">
      <p class="body-2 text-center">
        &copy;
        {{ brand.footerText }}
      </p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import './footer-basic';
</style>

<script setup>
import brand from '@/assets/text/brand';
import menu from '../Header/data/single';

const { bg } = defineProps({
  bg: {
    type: Boolean,
    default: false,
  },
});
</script>
