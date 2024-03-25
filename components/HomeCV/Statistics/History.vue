<template>
  <div class="root">
    <div class="history">
      <h5 class="mb-5 ml-sm-n5 title-timeline use-text-subtitle text-uppercase">
        {{ $t('profile.stats_subtitle3') }}
      </h5>
      <div>
        <ul>
          <li>
            <div
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-duration="300"
            >
              <div class="list">
                <figure>
                  <img :src="imgAPI.logos[1]" alt="event" />
                </figure>
                <div>
                  <h3 class="use-text-subtitle2 pb-2">
                    Creative Director
                  </h3>
                  <p class="mb-2">
                    at Fourth Company
                  </p>
                  <p class="time">
                    2015 - Present
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-duration="300"
            >
              <div class="list">
                <figure>
                  <img :src="imgAPI.logos[13]" alt="event" />
                </figure>
                <div>
                  <h3 class="use-text-subtitle2 pb-2">
                    Senior UI/UX Designer
                  </h3>
                  <p class="mb-2">
                    at Third Company
                  </p>
                  <p class="time">
                    2013 - 2015
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-duration="300"
            >
              <div class="list">
                <figure>
                  <img :src="imgAPI.logos[61]" alt="event" />
                </figure>
                <div>
                  <h3 class="use-text-subtitle2 pb-2">
                    Senior UI/UX Designer
                  </h3>
                  <p class="mb-2">
                    at Second Company
                  </p>
                  <p class="time">
                    2012 - 2013
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-duration="300"
            >
              <div class="list">
                <figure>
                  <img :src="imgAPI.logos[10]" alt="event" />
                </figure>
                <div>
                  <h3 class="use-text-subtitle2 pb-2">
                    Senior UI/UX Designer
                  </h3>
                  <p class="mb-2">
                    at First Company
                  </p>
                  <p class="time">
                    2009 - 2011
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-duration="300"
            >
              <div class="list">
                <figure>
                  <img :src="imgAPI.logos[12]" alt="event" />
                </figure>
                <div>
                  <h3 class="use-text-subtitle2 pb-2">
                    Senior UI/UX Designer
                  </h3>
                  <p class="mb-2">
                    at First Company
                  </p>
                  <p class="time">
                    2009 - 2011
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-duration="300"
            >
              <div class="list">
                <figure>
                  <img :src="imgAPI.logos[16]" alt="event" />
                </figure>
                <div>
                  <h3 class="use-text-subtitle2 pb-2">
                    Senior UI/UX Designer
                  </h3>
                  <p class="mb-2">
                    at First Company
                  </p>
                  <p class="time">
                    2009 - 2011
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './styles/history-style.scss'
</style>

<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import imgAPI from '@/assets/images/imgAPI';

onMounted(() => {
  AOS.init({
    once: true,
  });
});
</script>