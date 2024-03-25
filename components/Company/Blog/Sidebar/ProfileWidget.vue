<template>
  <paper
    :title="$t('blog_about')"
    color="transparent"
    subtitle="commodo augue. In dictum leo nec odio euismod pretium."
    icon="ion-ios-contact-outline"
  >
    <div>
      <v-list bg-color="transparent" lines="two">
        <v-list-item>
          <template #prepend>
            <v-avatar :color="currentTheme === 'dark' ? 'grey-darken-4' : 'grey-lighten-4'">
              <v-icon class="grey lighten-3" color="primary">
                mdi-calendar
              </v-icon>
            </v-avatar>
          </template>
          <div>
            <v-list-item-title>{{ $t('blog_born') }}</v-list-item-title>
            <v-list-item-subtitle>Jan 9, 1974</v-list-item-subtitle>
          </div>
        </v-list-item>
        <v-list-item>
          <template #prepend>
            <v-avatar :color="currentTheme === 'dark' ? 'grey-darken-4' : 'grey-lighten-4'">
              <v-icon class="grey lighten-3" color="primary">
                mdi-phone
              </v-icon>
            </v-avatar>
          </template>
          <div>
            <v-list-item-title>{{ $t('blog_phone') }}</v-list-item-title>
            <v-list-item-subtitle>(+62)8765432190</v-list-item-subtitle>
          </div>
        </v-list-item>
        <v-list-item three-line>
          <template #prepend>
            <v-avatar :color="currentTheme === 'dark' ? 'grey-darken-4' : 'grey-lighten-4'">
              <v-icon class="grey lighten-3" color="primary">
                mdi-google-maps
              </v-icon>
            </v-avatar>
          </template>
          <div>
            <v-list-item-title>{{ $t('blog_address') }}</v-list-item-title>
            <v-list-item-subtitle>Chicendo Street no.105  Block A/5A - Barcelona, Spain</v-list-item-subtitle>
          </div>
        </v-list-item>
      </v-list>
    </div>
  </paper>
</template>

<script setup>
import { useTheme } from 'vuetify';
import Paper from '../../../Cards/Paper';

const { name: currentTheme } = useTheme();
</script>
