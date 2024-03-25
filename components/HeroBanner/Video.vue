<template>
  <div class="video">
    <YouTube
      ref="youtube"
      :src="videoId"
      :vars="playerVars"
      :width="1080"
      :height="720"
      @ready="playing"
      @state-change="ended"
    />
  </div>
</template>

<style lang="scss" scoped>
@import './hero-style.scss';
</style>

<script>
export default {
  data() {
    return {
      videoId: 'iB_9BlFuHqA',
      playerVars: {
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0,
        mute: 1,
        origin: 'http://localhost:8002',
      },
      play: false,
    };
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },
  },
  methods: {
    playing() {
      this.play = true;
      this.playCtrl = true;
    },
    ended(val) {
      if (val.data === 0) {
        this.player.playVideo();
      }
    },
  },
};
</script>
