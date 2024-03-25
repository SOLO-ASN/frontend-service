<template>
  <div class="root">
    <article class="article">
      <section class="socmed-share">
        <div class="btn-area">
          <v-btn icon>
            <i class="ion-logo-linkedin indigo-btn" />
          </v-btn>
          <v-btn icon>
            <i class="ion-logo-pinterest red-btn" />
          </v-btn>
          <v-btn icon>
            <i class="ion-logo-facebook blue-btn" />
          </v-btn>
          <v-btn icon>
            <i class="ion-logo-twitter cyan-btn" />
          </v-btn>
          <v-btn icon>
            <i class="ion-ios-mail" />
          </v-btn>
          <v-btn icon>
            <i class="ion-md-link" />
          </v-btn>
        </div>
        <h6 class="subtitle">
          Share
        </h6>
      </section>
      <div class="content">
        <h6 class="category-blog">
          Maecenas rutrum
        </h6>
        <title-main strictAlign text="Interdum et Malesuada Fames Curabitur Blandit" />
        <time class="caption">June 19, 2020 by Oliver &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;  12 min to read</time>
        <figure class="image-blog">
          <img :src="imgAPI.photosL[16]" alt="blog">
        </figure>
        <p>Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
        <p>Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
        <strong>Heading</strong>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <strong>Sub-heading</strong>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Example code block Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo. Tortor mauris condimentum nibh, ut fermentum massa.</p>
        <strong>Sub-heading</strong>
        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        <figure class="image-blog">
          <img :src="imgAPI.photosL[6]" alt="blog">
        </figure>
        <ul class="list">
          <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
          <li>Donec id elit non mi porta gravida at eget metus.</li>
          <li>Nulla vitae elit libero, a pharetra augue.</li>
        </ul>
        <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a  pharetra augue.</p>
        <ol>
          <li>Vestibulum id ligula porta felis euismod semper.</li>
          <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur  ridiculus mus.</li>
          <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
        </ol>
      </div>
    </article>
    <div class="my-6" my={10}>
      <quote-card
        :avatar="imgAPI.avatar[36]"
        text="Praesent commodo cursus magna, vel scelerisque nisl consectetur et."
        name="Jena Doe"
        title="Client"
      />
    </div>
    <div v-if="!isDesktop" class="share-mobile">
      <h6 class="use-text-subtitle text-center">
        {{ $t('blog_share') }}
      </h6>
      <div class="btn-area">
        <div class="d-flex justify-center my-3">
          <v-btn icon>
            <i class="ion-logo-linkedin indigo-btn" />
          </v-btn>
          <v-btn icon>
            <i class="ion-logo-pinterest red-btn" />
          </v-btn>
          <v-btn icon>
            <i class="ion-logo-facebook blue-btn" />
          </v-btn>
          <v-btn icon>
            <i class="ion-ios-mail" />
          </v-btn>
          <v-btn icon>
            <i class="ion-md-link" />
          </v-btn>
        </div>
      </div>
    </div>
    <section class="comment">
      <h3 class="use-text-subtitle2 text-center mb-5">
        {{ $t('blog_write') }}
        &nbsp;(4)
      </h3>
      <comment-form :avatar="imgAPI.avatar[6]" />
      <v-list bg-color="transparent" lines="three">
        <comment-item
          v-for="(item, index) in comments"
          :key="index"
          :avatar="item.avatar"
          :name="item.name"
          :date="item.date"
          :comment="item.comment"
          :last="index >= comments.length - 1"
        />
      </v-list>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import './blog-style.scss';
</style>

<script setup>
import { useDisplay } from 'vuetify';
import imgAPI from '@/assets/images/imgAPI';
import QuoteCard from '../../Cards/Testimonial/QuoteCard';
import TitleMain from '../../Title';
import CommentForm from '../../Comment/Form';
import CommentItem from '../../Comment/Item';

const comments = [
  {
    name: 'John Doe',
    avatar: '/images/avatars/pp_boy4.svg',
    date: '13 Jan 2020',
    comment:
      'Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam. Vestibulum feugiat rhoncus metus. In non erat et ipsum molestie porta sit amet ut felis. Vestibulum a massa vestibulum, gravida odio id, fringilla ipsum.',
  },
  {
    name: 'John Doe',
    avatar: '/images/avatars/pp_boy4.svg',
    date: '13 Jan 2020',
    comment:
      'Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam. Vestibulum feugiat rhoncus metus. In non erat et ipsum molestie porta sit amet ut felis. Vestibulum a massa vestibulum, gravida odio id, fringilla ipsum.',
  },
  {
    name: 'John Doe',
    avatar: '/images/avatars/pp_boy4.svg',
    date: '13 Jan 2020',
    comment:
      'Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam. Vestibulum feugiat rhoncus metus. In non erat et ipsum molestie porta sit amet ut felis. Vestibulum a massa vestibulum, gravida odio id, fringilla ipsum.',
  },
  {
    name: 'John Doe',
    avatar: '/images/avatars/pp_boy4.svg',
    date: '13 Jan 2020',
    comment:
      'Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam. Vestibulum feugiat rhoncus metus. In non erat et ipsum molestie porta sit amet ut felis. Vestibulum a massa vestibulum, gravida odio id, fringilla ipsum.',
  },
];

const { smAndUp: isDesktop } = useDisplay();

</script>
