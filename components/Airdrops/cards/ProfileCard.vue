<template>
<!--  <v-container class="profile">-->
<!--    <slot name="decoration" />-->
<!--    <div class="avatar">-->
<!--      <span class="deco-circle-line"/>-->
<!--      <v-avatar alt="avatar" :image="avatar"/>-->
<!--    </div>-->
<!--    <v-card class="profile-cover">-->
<!--      <figure>-->
<!--        <img :src="cover" alt="cover"/>-->
<!--      </figure>-->
<!--          <div class="avatar">-->
<!--            <span class="deco-circle-line"/>-->
<!--            <v-avatar alt="avatar" :image="avatar"/>-->
<!--          </div>-->
<!--          <h3 class="use-text-title2">{{ name }}</h3>-->
<!--          <p> {{ desc }}</p>-->

<!--          <div v-if="socmed.length>0" class="socmed">-->
<!--            <v-btn icon variant="text" v-for="(item,index) in socmed" :key="index" href="#">-->
<!--              <i :class="'ion-logo-' + item"  />-->
<!--            </v-btn>-->
<!--          </div>-->


<!--    </v-card>-->

<!--    <slot name="decoration" />-->
<!--    <div class="avatar">-->
<!--      <span class="deco-circle-line" />-->
<!--      <v-avatar alt="avatar" :image="avatar" />-->
<!--    </div>-->
<!--    <v-card class="profile-cover">-->
<!--      <figure>-->
<!--        <img :src="cover" alt="cover" />-->
<!--      </figure>-->
<!--      <h3 class="use-text-title2">{{ name }}</h3>-->
<!--      <p>{{ desc }}</p>-->
<!--      <div v-if="socmed.length > 0" class="socmed">-->
<!--        <v-btn icon variant="text" v-for="(item, index) in socmed" :key="index" href="#">-->
<!--          <i :class="'ion-logo-'+item" />-->
<!--        </v-btn>-->
<!--      </div>-->
<!--    </v-card>-->
<!--  </v-container>-->
<!--  <div :class="size" class="profile-card">-->
<!--    <div class="avatar">-->
<!--&lt;!&ndash;      <template v-if="size === 'big'">&ndash;&gt;-->
<!--&lt;!&ndash;        <svg class="primary">&ndash;&gt;-->
<!--&lt;!&ndash;          <use xlink:href="/images/decoration/deco-liquid-line.svg#main" />&ndash;&gt;-->
<!--&lt;!&ndash;        </svg>&ndash;&gt;-->
<!--&lt;!&ndash;      </template>&ndash;&gt;-->

<!--&lt;!&ndash;      <template v-if="size === 'medium'">&ndash;&gt;-->
<!--&lt;!&ndash;        <svg class="primary">&ndash;&gt;-->
<!--&lt;!&ndash;          <use xlink:href="/images/decoration/deco-leaf-line.svg#main" />&ndash;&gt;-->
<!--&lt;!&ndash;        </svg>&ndash;&gt;-->
<!--&lt;!&ndash;      </template>&ndash;&gt;-->

<!--&lt;!&ndash;      <div class="bg"> <span /> </div>&ndash;&gt;-->

<!--      <figure>-->
<!--        <img :src="avatar" alt="avatar" />-->
<!--      </figure>-->
<!--    </div>-->

<!--    <div class="property" >-->
<!--      <h1>{{ name }}</h1>-->
<!--      <p>{{ desc }}</p>-->
<!--      <div v-if="socmed.length > 0" class="socmed">-->
<!--        <v-btn icon variant="text" v-for="(item, index) in socmed" :key="index" href="#">-->
<!--          <i :class="'ion-logo-'+item" />-->
<!--        </v-btn>-->
<!--      </div>-->
<!--    </div>-->


<!--  </div>-->

  <div :class="size" class="profile-card">
    <div class="avatar">
      <template v-if="size === 'big'">
        <svg class="primary">
          <use xlink:href="/images/decoration/deco-liquid-line.svg#main" />
        </svg>
        <svg class="secondary">
          <use xlink:href="/images/decoration/deco-liquid-line.svg#main" />
        </svg>
      </template>
      <template v-if="size === 'medium'">
        <svg class="primary">
          <use xlink:href="/images/decoration/deco-leaf-line.svg#main" />
        </svg>
        <svg class="secondary">
          <use xlink:href="/images/decoration/deco-leaf-line.svg#main" />
        </svg>
      </template>
      <span v-if="size === 'small'" class="deco-circle" />
      <div v-else class="bg">
        <span />
      </div>
      <figure>
        <img alt="avatar" :src="`https://source.boringavatars.com/marble/120/${name}`" />
      </figure>
    </div>
    <div class="property">
      <h1>{{ name }}</h1>
<!--      <p> {{ desc ? desc : $t('empty_desc')}}</p>-->
      <div class="socmed">
        <v-btn variant="text" icon size="large" v-for="(item, index) in socmed" :key="index">
          <i :class="'ion-logo-'+item" />
        </v-btn>
      </div>
    </div>
    <a v-if="href" v-ripple class="link" :href="href" />
  </div>


</template>


<script setup>
// import Counter from '@/components/Counter.vue'

// import Counter from "~/components/Counter/Counter.vue";

const {avatar, name, desc, cover, socmed, size} = defineProps({
  avatar: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  cover:{
    type: String,
    required: true,
  },
  socmed:{
    type: Array,
    required: true,
  },
  size: {
    type: String,
    default: 'medium',
  },
})

</script>

<style lang="scss" scoped>
@import './profile-deco-card';
</style>

