<template>
  <div class="py-sm-3">
    <v-row :class="isDesktop ? 'spacing6' : 'spacing2'" justify="center">
      <v-col lg="4" md="5" sm="10" cols="12" class="px-6">
        <div class="mb-3">
          <h4 class="use-text-subtitle mb-3">
            {{ $t('list_desc') }}
          </h4>
        </div>
        <p class="mb-4">Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <p class="mb-4">Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero. Proin varius, tortor faucibus tempor pharetra, nunc mi consectetur enim, nec posuere ante magna vitae quam.</p>
        <div class="properties">
          <v-row>
            <v-col cols="6">
              <h6 class="text-capitalize">artist</h6>
              <p>Lipsum</p>
            </v-col>
            <v-col cols="6">
              <h6 class="text-capitalize">Artist URL</h6>
              <p><a href="#">https://bungalion.io/collection/…</a></p>
            </v-col>
            <v-col cols="6">
              <h6 class="text-capitalize">ERC20</h6>
              <p>0x12345678910111</p>
            </v-col>
            <v-col cols="6">
              <h6 class="text-capitalize">symbol</h6>
              <p>CRO10</p>
            </v-col>
          </v-row>
        </div>
        <div class="details">
          <h4 class="use-text-subtitle mb-3">
            {{ $t('faq_topic') }}
          </h4>
          <ul>
            <li>
              <span>Contract Address</span>
              <strong><a href="#">0x1234..789a</a></strong>
            </li>
            <li>
              <span>Token ID</span>
              <strong><a href="#">230</a></strong>
            </li>
            <li>
              <span>Token Standard</span>
              <strong>ABC-2018</strong>
            </li>
            <li>
              <span>Last Updated</span>
              <strong>2 days ago</strong>
            </li>
            <li>
              <span>Creator Fee</span>
              <strong>1.5%</strong>
            </li>
          </ul>
        </div>
      </v-col>
      <v-col md="7" sm="10" cols="12" class="px-6">
        <div class="accordion" v-if="loaded">
          <v-expansion-panels
            v-model="panel"
            multiple
          >
            <v-expansion-panel class="paper" value="price">
              <v-expansion-panel-title class="use-text-subtitle">
                <v-icon class="icon">mdi-chart-timeline-variant</v-icon>
                Price History
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <p class="y-label">Volume (ETH)</p>
                <div class="chart">
                  <line-chart
                    v-if="loaded"
                    :height="200"
                    :options="chartOpt"
                    :chart-data="chartData"
                    :labels="dataLabels"
                    type="up"
                  />
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel class="paper" value="listing">
              <v-expansion-panel-title class="use-text-subtitle">
                <v-icon class="icon">mdi-format-list-bulleted</v-icon>
                Listing
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-table class="table">
                  <thead>
                    <tr>
                      <th>Unit Price</th>
                      <th align="right" class="text-right">USD Price</th>
                      <th align="right" class="text-right">Quantity</th>
                      <th>Expiration</th>
                      <th>From</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(row, index) in rowsListing" :key="index">
                      <td align="left">
                        <strong>{{ row.price }}</strong>
                      </td>
                      <td align="right"><strong>{{ row.usd }}</strong></td>
                      <td align="right">{{ row.qty }}</td>
                      <td align="left">{{ row.exp }}</td>
                      <td align="left"><a href="#">{{ row.from }}</a></td>
                    </tr>
                  </tbody>
                </v-table>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel class="paper" value="offer">
              <v-expansion-panel-title class="use-text-subtitle">
                <v-icon class="icon">mdi-tag</v-icon>
                Offer
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-table class="table">
                  <thead>
                    <tr>
                      <th>Unit Price</th>
                      <th align="right" class="text-right">USD Price</th>
                      <th align="right" class="text-right">Quantity</th>
                      <th>Expiration</th>
                      <th>From</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(row, index) in rowsOffers" :key="index">
                      <td align="left">
                        <strong>{{ row.price }}</strong>
                      </td>
                      <td align="right"><strong>{{ row.usd }}</strong></td>
                      <td align="right">{{ row.qty }}</td>
                      <td align="left">{{ row.exp }}</td>
                      <td align="left"><a href="#">{{ row.from }}</a></td>
                    </tr>
                  </tbody>
                </v-table>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel class="paper" value="activity">
              <v-expansion-panel-title class="use-text-subtitle">
                <v-icon class="icon">mdi-sort-variant</v-icon>
                Activity
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-table class="table">
                  <thead>
                    <tr>
                      <th>Event</th>
                      <th>Unit Price</th>
                      <th align="right" class="text-right">Quantity</th>
                      <th>From</th>
                      <th>To</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(row, index) in rowsActivity" :key="index">
                      <td align="left">
                        <v-icon v-if="row.event === 'Transfer'" class="icon-tb">mdi-cart</v-icon>
                        <v-icon v-if="row.event === 'Sale'" class="icon-tb">mdi-upload</v-icon>
                        <strong>{{ row.event }}</strong>
                      </td>
                      <td align="right"><strong>{{ row.price }}</strong></td>
                      <td align="right">{{ row.qty }}</td>
                      <td align="left"><a href="#">{{ row.from }}</a></td>
                      <td align="left"><a href="#">{{ row.to }}</a></td>
                      <td align="left"><a href="#">{{ row.date }}</a></td>
                    </tr>
                  </tbody>
                </v-table>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
@import './product-style.scss';
</style>

<script setup>
import { ref, onMounted } from 'vue';
import { useDisplay } from 'vuetify';
import imgAPI from '@/assets/images/imgAPI';
import LineChart from './LineChart';

const { mdAndUp: isDesktop } = useDisplay();

// Accordion Settings
const panel = ref(['price', 'listing']);
const loaded = ref(false);

// Chart Settings
const dataLabels = ['1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
const chartData = [13, 11, 5, 16, 11, 10, 11];
const chartOpt = {
  gradientBackground: true,
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
  interaction: {
    mode: 'index',
    intersect: false,
  },
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  elements: {
    line: {
      tension: 0,
    },
    point: {
      radius: 1,
    },
  },
  scales: {
    x: {
      border: {
        display: true,
      },
      grid: {
        display: false,
      },
    },
    y: {
      border: {
        display: false,
      },
      grid: {
        color: '#838383',
      }
    },
  },
};

// Table Settings
function createListing(price, usd, qty, exp, from) {
  return {
    price, usd, qty, exp, from
  };
}

function createActivity(event, price, qty, from, to, date) {
  return {
    event, price, qty, from, to, date
  };
}

const rowsListing = ref([]);
const rowsOffers = ref([]);
const rowsActivity = ref([]);

onMounted(() => {
  loaded.value = true;
  rowsListing.value = [
    createListing(0.27, 315.26, 2, 'about 11 hours', '234569'),
    createListing(0.27, 315.26, 1, 'about 11 hours', '234569'),
    createListing(0.27, 315.26, 4, 'about 10 hours', 'John'),
    createListing(0.27, 315.26, 5, '2 days', 'Doe'),
    createListing(0.27, 315.26, 5, '2 days', '234569'),
  ];

  rowsOffers.value = [
    createListing(0.27, 315.26, 2, 'about 11 hours', '234569'),
    createListing(0.27, 315.26, 1, 'about 11 hours', '234569'),
    createListing(0.27, 315.26, 4, 'about 10 hours', 'John'),
    createListing(0.27, 315.26, 5, '2 days', 'Doe'),
    createListing(0.27, 315.26, 5, '2 days', '234569'),
  ];

  rowsActivity.value = [
    createActivity('Transfer', 0.223, 1, 'John Deo', 'Jin Deo', '2 May 2023'),
    createActivity('Sale', 0.223, 1, 'John Deo', 'Jin Deo', '2 May 2023'),
    createActivity('Transfer', 0.223, 1, 'John Deo', 'Jin Deo', '2 May 2023'),
    createActivity('Sale', 0.223, 1, 'John Deo', 'Jin Deo', '2 May 2023'),
    createActivity('Transfer', 0.223, 1, 'John Deo', 'Jin Deo', '2 May 2023'),
  ];
});
</script>
