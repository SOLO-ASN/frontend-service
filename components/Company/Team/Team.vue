<template>
  <div class="root" v-scroll="handleScroll">
    <div class="background" :class="bg">
      <template v-if="bg === 'images'">
        <div class="scrollactive-nav scroll-bg">
          <li class="bg-big" :style="{ backgroundImage: `url(${imgAPI.photosL[15]})` }" :class="{ active: activeMenu === 'big' }">
            <a href="#big">&nbsp;</a>
          </li>
          <li class="bg-medium" :style="{ backgroundImage: `url(${imgAPI.photosL[16]})` }" :class="{ active: activeMenu === 'medium' }">
            <a href="#medium">&nbsp;</a>
          </li>
          <li class="bg-small" :style="{ backgroundImage: `url(${imgAPI.photosL[55]})` }" :class="{ active: activeMenu === 'small' }">
            <a href="#small">&nbsp;</a>
          </li>
        </div>
        <div class="bg-gradient" />
      </template>
      <template v-if="bg === 'parallax'">
        <div class="parallax-wrap">
          <div class="inner-parallax full">
            <div class="figure" v-if="loaded">
              <scroll-parallax
                :speed="0.15"
                direction="y"
              >
                <span class="oval big">
                  <span class="gradient" />
                </span>
              </scroll-parallax>
            </div>
            <div class="figure" v-if="loaded">
              <scroll-parallax
                :speed="0.15"
                direction="y"
              >
                <div class="dots">
                  <svg
                    fill="#cccccc"
                    width="845"
                    height="1099"
                    class="parallax-vertical parallax-dot"
                  >
                    <use xlink:href="/images/decoration/dot-deco.svg#dot" />
                  </svg>
                </div>
              </scroll-parallax>
            </div>
          </div>
        </div>
      </template>
      <v-container>
        <title-main :text="$t('team_title')" align="center" />
        <div class="scroll-nav-content">
          <v-row
            class="section"
            :class="isMobile ? 'spacing2' : 'spacing6'"
            id="big"
            justify="center"
          >
            <v-col md="10" cols="12">
              <profile-card
                :href="link.profile"
                :avatar="imgAPI.avatar[26]"
                size="big"
                name="John Doe"
                title="Founder & CEO"
                desc="Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero. Quisque ut metus sit amet augue rutrum feugiat."
                :socmed="['facebook', 'linkedin', 'twitter', 'instagram']"
              />
            </v-col>
          </v-row>
          <v-row
            class="section"
            :class="isMobile ? 'spacing2' : 'spacing6'"
            id="medium"
            justify="center"
          >
            <v-col md="6" cols="12">
              <profile-card
                :href="link.profile"
                size="medium"
                :avatar="imgAPI.avatar[18]"
                name="John Doe"
                title="Founder & CEO"
                desc="In vel pulvinar est, at euismod libero. Quisque ut metus sit amet augue rutrum feugiat."
                :socmed="['facebook', 'linkedin', 'twitter', 'instagram']"
              />
            </v-col>
            <v-col md="6" cols="12">
              <profile-card
                :href="link.profile"
                size="medium"
                :avatar="imgAPI.avatar[24]"
                name="John Doe"
                title="Founder & CEO"
                desc="In vel pulvinar est, at euismod libero. Quisque ut metus sit amet augue rutrum feugiat."
                :socmed="['facebook', 'linkedin', 'twitter', 'instagram']"
              />
            </v-col>
            <v-col md="6" cols="12">
              <profile-card
                :href="link.profile"
                size="medium"
                :avatar="imgAPI.avatar[23]"
                name="John Doe"
                title="Founder & CEO"
                desc="Cras convallis lacus orci, tristique tincidunt magna consequat in."
                :socmed="['facebook', 'linkedin', 'twitter', 'instagram']"
              />
            </v-col>
            <v-col md="6" cols={12}>
              <profile-card
                :href="link.profile"
                size="medium"
                :avatar="imgAPI.avatar[25]"
                name="John Doe"
                title="Founder & CEO"
                desc="Cras convallis lacus orci, tristique tincidunt magna consequat in."
                :socmed="['facebook', 'linkedin', 'twitter', 'instagram']"
              />
            </v-col>
          </v-row>
          <v-row
            class="section"
            :class="isMobile ? 'spacing2' : 'spacing6'"
            id="small"
            justify="center"
          >
            <v-col md="3" sm="4" cols="6">
              <profile-card
                :href="link.profile"
                size="small"
                :avatar="imgAPI.avatar[0]"
                name="John Doe"
                title="Founder & CEO"
                :socmed="['facebook', 'linkedin', 'twitter', 'instagram']"
              />
            </v-col>
            <v-col md="3" sm="4" cols="6">
              <profile-card
                :href="link.profile"
                size="small"
                :avatar="imgAPI.avatar[10]"
                name="John Doe"
                title="Founder & CEO"
                :socmed="['facebook', 'linkedin', 'twitter', 'instagram']"
              />
            </v-col>
            <v-col md="3" sm="4" cols="6">
              <profile-card
                :href="link.profile"
                size="small"
                :avatar="imgAPI.avatar[2]"
                name="John Doe"
                title="Founder & CEO"
                :socmed="['facebook', 'linkedin', 'twitter', 'instagram']"
              />
            </v-col>
            <v-col md="3" sm="4" cols="6">
              <profile-card
                :href="link.profile"
                size="small"
                :avatar="imgAPI.avatar[5]"
                name="John Doe"
                title="Founder & CEO"
                :socmed="['facebook', 'linkedin', 'twitter', 'instagram']"
              />
            </v-col>
            <v-col md="3" sm="4" cols="6">
              <profile-card
                :href="link.profile"
                size="small"
                :avatar="imgAPI.avatar[7]"
                name="John Doe"
                title="Founder & CEO"
                :socmed="['facebook', 'linkedin', 'twitter', 'instagram']"
              />
            </v-col>
            <v-col md="3" sm="4" cols="6">
              <profile-card
                :href="link.profile"
                size="small"
                :avatar="imgAPI.avatar[9]"
                name="John Doe"
                title="Founder & CEO"
                :socmed="['facebook', 'linkedin', 'twitter', 'instagram']"
              />
            </v-col>
            <v-col md="3" sm="4" cols="6">
              <profile-card
                :href="link.profile"
                size="small"
                :avatar="imgAPI.avatar[4]"
                name="John Doe"
                title="Founder & CEO"
                :socmed="['facebook', 'linkedin', 'twitter', 'instagram']"
              />
            </v-col>
            <v-col md="3" sm="4" cols="6">
              <profile-card
                :href="link.profile"
                size="small"
                :avatar="imgAPI.avatar[6]"
                name="John Doe"
                title="Founder & CEO"
                :socmed="['facebook', 'linkedin', 'twitter', 'instagram']"
              />
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './team-style.scss';
</style>

<script setup>
import { ref, onMounted } from 'vue';
import { useDisplay } from 'vuetify';
import AOS from 'aos';
import imgAPI from '@/assets/images/imgAPI';
import link from '@/assets/text/link';
import TitleMain from '../../Title';
import ProfileCard from '../../Cards/Profile/ProfileDecoCard';

const { smAndDown: isMobile } = useDisplay();
const sections = ref({});
const activeMenu = ref('');
const loaded = ref(false);

const { bg } = defineProps({
  bg: {
    type: String,
    default: 'images'
  }
});

onMounted(() => {
  loaded.value = true;
  const section = document.querySelectorAll('.scroll-nav-content > *');
  Array.prototype.forEach.call(section, (e) => {
    const rect = e.getBoundingClientRect();
    sections.value[e.id] = rect.y;
  });
});

function handleScroll() {
  const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  const topPosition = scrollPosition + 100;

  Object.keys(sections.value).forEach((i) => {
    if (sections.value[i] <= topPosition) {
      activeMenu.value = i;
    }
  });
}
</script>