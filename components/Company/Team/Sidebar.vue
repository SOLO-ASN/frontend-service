<template>
  <aside class="sidebar">
    <div class="side-mobile">
      <h4 class="mb-3 use-text-subtitle2 use-text-medium text-uppercase">
        {{ $t('about_me') }}
      </h4>
      <p class="use-text-paragraph">
        {{ $t('auth_desc') }}
        {{ $t('culture_desc1') }}
      </p>
      <ul class="property">
        <li>
          <span>Project Views</span>
          <strong>1445</strong>
        </li>
        <li>
          <span>Appreciations</span>
          <strong>230</strong>
        </li>
        <li>
          <span>Member since</span>
          <strong>2018</strong>
        </li>
        <li>
          <span>Email</span>
          <strong>john.doe@example.com</strong>
        </li>
      </ul>
      <h4 class="mb-3 use-text-subtitle2 use-text-medium text-uppercase">
        {{ $t('about_skills') }}
      </h4>
      <div class="tags">
        <v-chip class="use-bg-primary-light">Designs</v-chip>
        <v-chip class="use-bg-secondary-light">Architect</v-chip>
        <v-chip class="use-bg-accent-light">Programming</v-chip>
        <v-chip class="use-bg-accent2-light">Photography</v-chip>
      </div>
    </div>
    <div class="side-mobile">
      <h4 class="mb-3 use-text-subtitle2 use-text-medium text-uppercase">
        {{ $t('about_people') }}
      </h4>
      <div class="about_skills">
        <v-list bg-color="transparent" density="comfortable">
          <v-list-item
            v-for="(item, index) in people"
            :key="index"
            :title="item.name"
            :subtitle="item.title"
          >
            <template v-slot:prepend>
              <v-avatar class="avatar" alt="avatar" :image="item.img" title="avatar" />
            </template>
            <template v-slot:append>
              <v-btn variant="outlined" size="small">follow</v-btn>
            </template>
          </v-list-item>
        </v-list>
      </div>
      <div class="btn-area">
        <v-btn icon><v-icon>mdi-share-variant</v-icon></v-btn>
        <v-btn icon><v-icon>mdi-dots-horizontal</v-icon></v-btn>
      </div>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
@import './sidebar-style.scss';
</style>

<script setup>
import imgAPI from '@/assets/images/imgAPI';

const people = [{
  img: imgAPI.avatar[6],
  name: 'John Doe',
  title: '@john'
},
{
  img: imgAPI.avatar[1],
  name: 'Jean Doe',
  title: '@doe_jead'
},
{
  img: imgAPI.avatar[7],
  name: 'Jim Doe',
  title: '@jimdoe'
},
{
  img: imgAPI.avatar[2],
  name: 'Jihan Doe',
  title: '@doe_jihan'
},
{
  img: imgAPI.avatar[0],
  name: 'Jena Doe',
  title: '@jena_doe'
},
{
  img: imgAPI.avatar[9],
  name: 'Johan Doe',
  title: '@johan'
}];
</script>
