<template>
  <paper :title="$t('blog_album')" icon="ion-ios-images" color="transparent">
    <div>
      <v-item-group
        v-model="selected"
        multiple
      >
        <v-row class="ma-0">
          <v-col
            v-for="(item, i) in images"
            :key="i"
            cols="6"
            class="gallery-item pa-2"
          >
            <v-item v-slot="{ active, toggle }">
              <v-img
                :src="item.src"
                height="150"
                class="text-right pa-1"
                cover
                @click="toggle"
              >
                <v-btn
                  icon
                  variant="text"
                  color="white"
                >
                  <v-icon>
                    {{ active ? 'mdi-heart' : 'mdi-heart-outline' }}
                  </v-icon>
                </v-btn>
              </v-img>
            </v-item>
          </v-col>
        </v-row>
      </v-item-group>
      <v-btn variant="text" block color="primary">
        {{ $t('btn_seeall') }}
      </v-btn>
    </div>
  </paper>
</template>

<style scoped lang="scss">
@import '../blog-style.scss';
</style>

<script>
import imgAPI from '@/assets/images/imgAPI';
import Paper from '../../../Cards/Paper';

export default {
  components: {
    Paper,
  },
  data() {
    return {
      imgAPI,
      images: [
        {
          src: imgAPI.photosL[3],
        },
        {
          src: imgAPI.photosL[5],
        },
        {
          src: imgAPI.photosL[9],
        },
        {
          src: imgAPI.photosL[10],
        },
      ],
      selected: [],
    };
  },
};
</script>
