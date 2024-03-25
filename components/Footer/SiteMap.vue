<template>
  <footer class="footer">
    <v-container class="root" :class="{ 'fixed-width': isMobile }">
      <v-row>
        <v-col
          md="3"
          cols="12"
        >
          <div class="logo-area">
            <logo type="landscape" />
          </div>
          <p class="text-body-2">
            {{ $t('ai-landing.banner_desc') }}
          </p>
          <p v-if="isDesktop" class="text-body-2">&copy;&nbsp; {{ brand.footerText }}</p>
        </v-col>
        <v-col
          class="pa-4"
          md="6"
          cols="12"
        >
          <v-expansion-panels v-if="isMobile" class="accordion-root">
            <v-expansion-panel
              v-for="(footer, index) in footers"
              :key="index"
              class="accordion-content"
            >
              <v-expansion-panel-title>
                <h6 class="title-main mb-4">
                  {{ $t('footer_'+footer.title) }}
                </h6>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <ul>
                  <li
                    v-for="(item, index) in footer.description"
                    :key="index"
                    class="use-text-subtitle2 mb-4"
                  >
                    <nuxt-link :to="footer.link[index]">
                      {{ item }}
                    </nuxt-link>
                  </li>
                </ul>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-row
            v-if="isDesktop"
            justify="space-around"
          >
            <v-col
              v-for="(footer, index) in footers"
              :key="index"
              class="pa-4 site-map-item"
            >
              <h6 class="title text-capitalize mb-4">
                {{ $t('footer_'+footer.title) }}
              </h6>
              <ul>
                <li
                  v-for="(item, index) in footer.description"
                  :key="index"
                >
                  <nuxt-link :to="footer.link[index]">
                    {{ item }}
                  </nuxt-link>
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          md="3"
          cols="12"
          class="pa-4"
        >
          <div class="socmed">
            <v-btn
              size="small"
              variant="text"
              icon
              class="button"
            >
              <span class="ion-logo-facebook icon" />
            </v-btn>
            <v-btn
              size="small"
              variant="text"
              icon
              class="button"
            >
              <span class="ion-logo-twitter icon" />
            </v-btn>
            <v-btn
              size="small"
              variant="text"
              icon
              class="button"
            >
              <span class="ion-logo-instagram icon" />
            </v-btn>
            <v-btn
              size="small"
              variant="text"
              icon
              class="button"
            >
              <span class="ion-logo-linkedin icon" />
            </v-btn>
          </div>
          <v-select
            v-model="lang"
            :items="langList()"
            :value="curLang"
            variant="outlined"
            class="select-lang"
            color="primary"
            prepend-inner-icon="mdi-web"
            @update:model-value="switchLang(lang)"
          />
          <p v-if="isMobile" class="body-2 text-center">
            &copy;&nbsp;
            {{ brand.footerText }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<style scoped lang="scss">
@import './footer-sitemap';
</style>

<script setup>
import { ref } from 'vue';
import { useDisplay } from 'vuetify';
import { useI18n } from 'vue-i18n';
import { useSwitchLocalePath } from 'vue-i18n-routing';
import { setRtl } from '@/composables/uiTheme';
import brand from '@/assets/text/brand';
import Logo from '../Branding/Logo';
import { navigateTo } from '#app';

const { smAndDown: isMobile } = useDisplay();
const { mdAndUp: isDesktop } = useDisplay();

const switchLocalePath = useSwitchLocalePath();

const i18n = useI18n();
const curLang = i18n.locale.value;
const lang = ref(curLang);

function switchLang(locale) {
  navigateTo(switchLocalePath(locale));
  lang.value = locale;

  // Set RTL and Document attr
  document.documentElement.setAttribute('lang', locale);

  if (locale === 'ar') {
    setRtl(true);
    document.documentElement.setAttribute('dir', 'rtl');
  } else {
    setRtl(false);
    document.documentElement.setAttribute('dir', 'ltr');
  }
}

const footers = [
  {
    title: 'company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
    link: ['#', '#', '#', '#'],
  },
  {
    title: 'resources',
    description: [
      'Resource',
      'Resource name',
      'Another resource',
      'Final resource',
    ],
    link: ['#', '#', '#', '#'],
  },
  {
    title: 'legal',
    description: ['Privacy policy', 'Terms of use'],
    link: ['#', '#'],
  },
];

const langList = () => {
  const list = [];
  const i18nList = i18n.locales.value;
  i18nList.map((locale) => {
    list.push({ title: locale.name, value: locale.code });
    return false;
  });
  return list;
}

</script>
