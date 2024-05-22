<template>
  <v-card flat >

    <v-data-table
        v-model:items-per-page="itemsPerPage"
        :headers="headers"
        :items="listItems"
        :total-items="totalItems"
        :loading="loading"
        :loading-text="loadingText"
        @update:options="loadItems"
    >

      <template v-slot:item.hash="{ item }">
        <div class="text-start">
          <a :href='`https://etherscan.io/tx/${item.hash}`' >{{ truncate(item.hash, 8) }}</a>
        </div>
      </template>

      <template v-slot:item.from="{ item }">
        <div class="text-start">
          <p>{{ truncate(item.from, 15) }}</p>
        </div>
      </template>

      <template v-slot:item.to="{ item }">
        <div class="text-start">
          <p>{{ truncate(item.to, 15) }}</p>
        </div>
      </template>

      <template v-slot:item.InOut="{ item }">
        <div class="text-end">
          <v-chip
              variant="tonal"
              class="text-uppercase"
              size="small"
              :color="item.InOut ? 'success' : 'warning'"
              prepend-icon="mdi-checkbox-marked-circle"
          >
            {{ item.InOut ? ' In' : 'Out' }}
          </v-chip>
        </div>
      </template>

    </v-data-table>

  </v-card>
</template>

<script setup>
import { reactive } from 'vue';
import {ref} from 'vue';


const { txsList, mainAddress } = defineProps({
  txsList: {
    type: Array,
    required: true,
    default: []
  },
  mainAddress: {
    type: String,
    required: true,
    default: ''
  },
});

const itemsPerPage = ref(10);
const headers = [
  { title: 'Tx Hash', align: 'start', sortable: false, key: 'hash' },
  { title: 'From', key: 'from', align: 'end' },
  { title: '', key: 'InOut', align: 'center' },
  { title: 'To', key: 'to', align: 'end' },
  { title: 'Value', key: 'amount', align: 'end' },
];
const totalItems = ref(0);
const loading = ref(true);
const loadingText = ref('Loading...');



const listItems = ref([]);
const expanded = ref(null);

const toggle = (index) => {
  expanded.value = expanded.value === index ? null : index;
}

// const maxLength = 8;
function truncate(str, maxLength)  {
  const length = Number(maxLength);
  if (str.length <= length) {
    return str;
  } else {
    const start = str.slice(0, length/2 +1);
    const end = str.slice(str.length - length/2);
    return `${start}...${end}`;
  }
}

async function pack({ page, itemsPerPage, sortBy }) {
  const data = reactive(
      txsList.map(tx => ({
        hash: tx.hash,
        from: tx.from,
        to: tx.to,
        time: new Date(tx.timestamp * 1000).toLocaleString(),
        amount: (parseInt(tx.value, 16) / 1e18).toString(),
        InOut: _toLowerCase(tx.to) === _toLowerCase(mainAddress),
        color: tx.status === 3 ? "success" : "warning"
      }))
  );
  return {
    items: data,
    total: data.length
  }
}

function loadItems({ page, itemsPerPage, sortBy }) {
  loading.value = true;
  pack({
    page,
    itemsPerPage,
    sortBy,
  }).then(({ items, total }) => {
    listItems.value = items;
    totalItems.value = total;
    loading.value = false;
  })
};

function _toLowerCase(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  return str.toLowerCase();
}


onMounted(() => {
})

</script>

<style scoped>
@import './token-card.scss';
</style>
