<template>
  <v-container class="root">
    <v-row :class="{ 'spacing-4': !isMobile }" class="mt-md-10">
      <v-col md="8" cols="12">
        <title-main :text="$t('service_alacarte_title')" />
        <p class="use-text-subtitle2">
          {{ $t('service_alacarte_desc') }}
        </p>
        <v-row class="mt-sm-15 mt-8" :class="{ 'spacing4': !isMobile }">
          <v-col sm="6" cols="12">
            <div
              v-if="!isTablet"
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-delay="0"
              data-aos-duration="500"
            >
              <arrow-button :href="link.contact" color="accent" :text="$t('service_btn_arrow1')" />
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="100"
              data-aos-duration="500"
              class="py-2"
            >
              <single-card
                title="Mobile App Development"
                desc="Vestibulum consequat hendrerit a massa vestibulum. Nam vitae scelerisque lorem, quis tempus libero."
                :img="imgAPI.inner[18]"
                color="accent"
                :href="link.serviceDetail"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="300"
              data-aos-duration="500"
              class="py-2"
            >
              <single-card
                title="Blockchain Project"
                desc="Vestibulum consequat hendrerit a massa vestibulum. Nam vitae scelerisque lorem, quis tempus libero."
                :img="imgAPI.inner[14]"
                bordered
                color="secondary"
                :href="link.serviceDetail"
              />
            </div>
          </v-col>
          <v-col sm="6" cols="12">
            <div
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="500"
              data-aos-duration="500"
              class="py-2"
            >
              <single-card
                title="UI & UX Design Development"
                desc="Vestibulum consequat hendrerit a massa vestibulum. Nam vitae scelerisque lorem, quis tempus libero."
                :img="imgAPI.inner[15]"
                color="primary"
                :href="link.serviceDetail"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="700"
              data-aos-duration="500"
              class="py-2"
            >
              <single-card
                title="SEO and Marketing"
                desc="Vestibulum consequat hendrerit a massa vestibulum. Nam vitae scelerisque lorem, quis tempus libero."
                :img="imgAPI.inner[13]"
                bordered
                color="secondary"
                :href="link.serviceDetail"
              />
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col md="4" cols="12">
        <v-row :class="{ 'spacing-4': !isMobile }">
          <v-col md="12" sm="6" cols="12">
            <div
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="900"
              data-aos-duration="500"
            >
              <single-card
                title="Website Development"
                desc="Vestibulum consequat hendrerit a massa vestibulum. Nam vitae scelerisque lorem, quis tempus libero."
                :img="imgAPI.inner[16]"
                color="secondary"
                :href="link.serviceDetail"
              />
            </div>
          </v-col>
          <v-col md="12" sm="6" cols="12">
            <div
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="1100"
              data-aos-duration="500"
            >
              <single-card
                title="QA and Tester Engineering"
                desc="Vestibulum consequat hendrerit a massa vestibulum. Nam vitae scelerisque lorem, quis tempus libero."
                :img="imgAPI.inner[17]"
                color="accent"
                bordered
                :href="link.serviceDetail"
              />
            </div>
          </v-col>
          <v-col md="12" sm="6" cols="12">
            <div
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-delay="1100"
              data-aos-duration="500"
            >
              <arrow-button color="secondary" :href="link.product" :text="$t('service_btn_arrow2')" />
            </div>
          </v-col>
          <v-col md="12" sm="6" cols="12">
            <div
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-delay="1100"
              data-aos-duration="500"
            >
              <arrow-button color="primary" :href="link.portfolio" :text="$t('service_btn_arrow3')" />
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
@import './services-style.scss';
</style>

<script setup>
import { onMounted } from 'vue';
import { useDisplay } from 'vuetify';
import AOS from 'aos';
import imgAPI from '@/assets/images/imgAPI';
import link from '@/assets/text/link';
import ArrowButton from '../../Forms/ArrowButton/Standard';
import SingleCard from '../../Cards/Apps/SingleCard';
import TitleMain from '../../Title';

const { smAndDown: isMobile } = useDisplay();
const { sm: isTablet } = useDisplay();

onMounted(() => {
  AOS.init({
    once: true,
  });
});
</script>