<template>
  <div class="job">
    <v-container>
      <div class="tab">
        <v-row class="spacing2" justify="center">
          <v-col lg="8" md="10" sm="12" cols="12">
            <title-main
              :text="$t('career_joblist')"
              align="center"
            />
            <v-tabs
              v-model="tab"
              class="tabs"
              align-tabs="center"
            >
              <v-tab class="tab-label" :value="1">
                <span>All</span>
              </v-tab>
              <v-tab class="tab-label" :value="2">
                <span>Engineering</span>
              </v-tab>
              <v-tab class="tab-label" :value="3">
                <span>Marketing</span>
              </v-tab>
              <v-tab class="tab-label" :value="4">
                <span>Designs</span>
              </v-tab>
              <v-tab class="tab-label" :value="5">
                <span>Research</span>
              </v-tab>
            </v-tabs>
            <div class="tab-content">
              <v-window v-model="tab">
                <v-window-item :value="1">
                  <div>
                    <v-expansion-panels
                      v-model="expanded"
                      variant="accordion"
                      active-class="expanded"
                    >
                      <v-expansion-panel
                        v-for="(item, index) in jobs"
                        class="paper item"
                        rounded="rounded-pill"
                        :key="index"
                        :value="index"
                      >
                        <v-expansion-panel-title class="content">
                          <v-icon class="icon">mdi-expand-more-icon</v-icon>
                          <div class="heading">
                            <v-chip size="small">{{ item.category }}</v-chip>
                            <h6 class="use-text-subtitle">{{ item.name }}</h6>
                          </div>
                          <div v-if="expanded !== index" class="d-flex pe-4 ms-12 ms-sm-0">
                            <p class="me-3">{{ item.location }}</p>
                            <p>{{ item.type }}</p>
                          </div>
                          <div v-else class="d-flex justify-space-between align-center ma-2">
                            <h3 v-if="!isMobile" class="use-text-paragraph font-weight-medium">Share</h3>
                            <div class="socmed">
                              <v-btn size="small" icon href="#" class="icon-btn"><i class="ion-md-link" /></v-btn>
                              <v-btn size="small" icon href="#" class="icon-btn"><i class="ion-logo-linkedin" /></v-btn>
                              <v-btn size="small" icon href="#" class="icon-btn"><i class="ion-logo-twitter" /></v-btn>
                              <v-btn size="small" icon href="#" class="icon-btn"><i class="ion-ios-mail" /></v-btn>
                            </div>
                          </div>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text class="detail">
                          <v-row container justify="center" class="isMobile ? spacing2 : spacing6">
                            <v-col md="7" class="ps-sm-0 ps-4 pe-12">
                              <p>Type Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Suspendisse eleifend nunc non varius rhoncus. Nam posuere accumsan porta. </p>
                              <p class="font-weight-medium">Job Description</p>
                              <ul>
                                <li>Type Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. </li>
                                <li>Type Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. </li>
                                <li>Type Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. </li>
                              </ul>
                              <p class="font-weight-medium">Requirements</p>
                              <ul>
                                <li>Type Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. </li>
                                <li>Type Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. </li>
                                <li>Type Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. </li>
                              </ul>
                            </v-col>
                            <v-col md="5" class="ps-sm-0 ps-4 pe-4">
                              <aside class="sidebar">
                                <v-btn color="secondary" block size="large">APPLY NOW</v-btn>
                                <ul class="property">
                                  <li>
                                    <span>Location</span>
                                    <strong>{{ item.location }}</strong>
                                  </li>
                                  <li>
                                    <span>Type</span>
                                    <strong>{{ item.type }}</strong>
                                  </li>
                                  <li>
                                    <span>Qualification</span>
                                    <strong>{{ item.qualification }}</strong>
                                  </li>
                                  <li>
                                    <span>Posted</span>
                                    <strong>{{ item.posted }}</strong>
                                  </li>
                                </ul>
                                <arrow-button :href="link.contact" color="primary" :text="$t('faq_help1')" />
                                <arrow-button :href="link.blog" color="secondary" :text="$t('faq_help3')" />
                              </aside>
                            </v-col>
                          </v-row>
                        </v-expansion-panel-text>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </div>
                </v-window-item>
              </v-window>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './career-style.scss'
</style>

<script setup>
import { ref } from 'vue';
import { useDisplay } from 'vuetify';
import link from '@/assets/text/link';
import ArrowButton from '../../Forms/ArrowButton/Standard';
import TitleMain from '../../Title';

const { lgAndDown: isTablet } = useDisplay();
const { smAndDown: isMobile } = useDisplay();

const tab = ref(null);
const expanded = ref(0);

const jobs = [
  {
    name: 'Head of Product',
    category: 'Marketing',
    location: 'Yokohama',
    type: 'Full Time',
    qualification: 'Fresh Graduate',
    posted: '22 Dec 2023',
  },
  {
    name: 'Head of Product',
    category: 'Marketing',
    location: 'Yokohama',
    type: 'Full Time',
    qualification: 'Fresh Graduate',
    posted: '22 Dec 2023',
  },
  {
    name: 'Head of Product',
    category: 'Marketing',
    location: 'Yokohama',
    type: 'Full Time',
    qualification: 'Fresh Graduate',
    posted: '22 Dec 2023',
  },
  {
    name: 'Head of Product',
    category: 'Marketing',
    location: 'Yokohama',
    type: 'Full Time',
    qualification: 'Fresh Graduate',
    posted: '22 Dec 2023',
  },
  {
    name: 'Head of Product',
    category: 'Marketing',
    location: 'Yokohama',
    type: 'Full Time',
    qualification: 'Fresh Graduate',
    posted: '22 Dec 2023',
  },
  {
    name: 'Head of Product',
    category: 'Marketing',
    location: 'Yokohama',
    type: 'Full Time',
    qualification: 'Fresh Graduate',
    posted: '22 Dec 2023',
  },
  {
    name: 'Head of Product',
    category: 'Marketing',
    location: 'Yokohama',
    type: 'Full Time',
    qualification: 'Fresh Graduate',
    posted: '22 Dec 2023',
  }
];
</script>