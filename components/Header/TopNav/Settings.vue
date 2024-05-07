<template>
  <v-menu
    v-model="open"
    :close-on-content-click="false"
    location="bottom"
    class="ma-0"
  >
    <template #activator="{ props }">
      <div class="setting">
        <v-btn
          :class="{ invert: invert, active: open }"
          v-bind="props"
          icon="mdi-cog"
          variant="text"
        />
      </div>
    </template>
    <v-list class="popover cyber-var">
      <div class="mode-menu">
        <v-list-subheader>{{ $t('header_theme') }}</v-list-subheader>
        <v-list-item>
          <div class="flex-menu">
            <span>
              {{ $t('header_light') }}
            </span>
            <v-switch
              :model-value="isDark"
              class="switch-toggle"
              hide-details
              color="primary"
              @change="switchDark()"
            />
            <span>
              {{ $t('header_dark') }}
            </span>
          </div>
        </v-list-item>
      </div>
<!--      <v-divider />-->
<!--      <div class="lang-menu">-->
<!--        <v-list-subheader>{{ $t('header_language') }}</v-list-subheader>-->
<!--        <v-list-item-->
<!--          v-for="(lang, index) in langList"-->
<!--          :key="index"-->
<!--          :value="lang.code"-->
<!--          :to="switchLocalePath(lang.code)"-->
<!--          nuxt-->
<!--          @click="switchLang(lang.code)"-->
<!--        >-->
<!--          <template #prepend>-->
<!--            <v-avatar class="flag">-->
<!--              <i :class="lang.code" />-->
<!--            </v-avatar>-->
<!--          </template>-->
<!--          <v-list-item-title class="lang-opt">-->
<!--            {{ $t(lang.code) }}-->
<!--          </v-list-item-title>-->
<!--          <template #append>-->
<!--            <v-icon-->
<!--              v-if="lang.code === curLang"-->
<!--              color="primary"-->
<!--            >-->
<!--              mdi-check-->
<!--            </v-icon>-->
<!--          </template>-->
<!--        </v-list-item>-->
<!--      </div>-->
    </v-list>
  </v-menu>
</template>

<style lang="scss" scoped>
@import '../header-style.scss';
</style>

<script>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useSwitchLocalePath } from 'vue-i18n-routing';
import { toggleDark, setRtl } from '@/composables/uiTheme';

export default {
  props: {
    invert: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const isDark = ref(true);
    const i18n = useI18n();
    const isLoaded = ref(false);
    const curLang = i18n.locale.value;

    const switchLocalePath = useSwitchLocalePath();

    onMounted(() => {
      isLoaded.value = true;
      isDark.value = localStorage.getItem('bungalionTheme') === 'dark';
    });

    function switchDark() {
      isDark.value = !isDark.value;
      toggleDark();
    }

    function switchLang(locale) {
      // i18n.setLocale(locale);
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

    return {
      isLoaded,
      isDark,
      curLang,
      switchDark,
      switchLang,
      switchLocalePath,
    };
  },
  data: () => ({
    open: false,
  }),
  computed: {
    langList() {
      return this.$i18n.locales;
    },
  },
};
</script>
