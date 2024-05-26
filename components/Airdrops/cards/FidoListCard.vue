<template>
  <div id="app" v-cloak>
    <div class="up-app">
      <div id="page-send" class="page-sign page">
        <!-- Table header -->
        <div class="table-header">
          <div class="table-cell">FIDO ID</div>
          <div class="table-cell" style="text-align: right;">OPERATION</div>
        </div>
        <!-- Table body -->
        <div class="table-container">
          <div class="table-row" v-for="(item, index) in tableData" :key="item.fidoId">
            <div class="table-cell fido-id" :title="item.fidoId">{{ item.fidoId }}</div>
            <div class="table-cell" style="text-align: right;">
              <div v-if="item.fidoId !== currentFidoId" class="delete-button" @click="handleDelete(index, item)">delete</div>
              <div v-else class="current-device">当前设备</div>
            </div>
          </div>
          <!-- Add button row -->
          <div class="table-row">
            <div class="table-cell" style="text-align: center;" colspan="2">
              <button class="add-button" @click="showAddConfirm = true">Add</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Add Confirm Dialog -->
      <div v-if="showAddConfirm" class="dialog-overlay">
        <div class="dialog">
          <div class="dialog-content">
            <span>Continue to add fido device.</span>
            <div class="dialog-footer">
              <button @click="showAddConfirm = false">Cancel</button>
              <button @click="addFidoDevice">Continue</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Delete Confirm Dialog -->
      <div v-if="showDeleteConfirm" class="dialog-overlay">
        <div class="dialog">
          <div class="dialog-content">
            <span>Do you want to delete the device with fido id "{{ deleteFidoId }}"?</span>
            <div class="dialog-footer">
              <button @click="showDeleteConfirm = false">Cancel</button>
              <button @click="deleteFidoDevice">Confirm</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import url from '@/assets/text/url';
import axios from 'axios';

export default {
  data() {
    return {
      loadingVisible: false,
      showAddConfirm: false,
      showDeleteConfirm: false,
      tableData: [
      ],
      currentFidoId: '',
      deleteFidoId: '',
    };
  },
  mounted() {
    this.updatefido();
    // 确保 handlePostMessage 方法存在
    if (this.handlePostMessage) {
        window.addEventListener('message', this.handlePostMessage);
    } else {
        console.error('handlePostMessage method is not defined');
    }
  },
  methods: {
    updatefido() {
        // 第二个 axios 请求
    axios.get(url.fidoUrl + "/api/credential/list", { withCredentials: true })
    .then(response => {
        const { code, message, data } = response.data;
        if (code !== 1) throw new Error(message);
        return data;
    })
    .then(data => {
        console.info(data);
        this.tableData = data.map(item => ({ fidoId: item }));
    })
    .catch(error => console.error(error));

    // 第三个 axios 请求
    axios.get(url.fidoUrl + "/api/userInfo", { withCredentials: true })
    .then(response => {
        const { code, message, data } = response.data;
        if (code !== 1) throw new Error(message);
        return data;
    })
    .then(data => {
        console.info(data);
        this.currentFidoId = data.fidoPublicKey;
    })
    .catch(error => console.error(error));
    },
    addFidoDevice() {
      // Add Fido device logic
      this.showAddConfirm = false;
      const currentPage = window.location.href;
      const addFidoWindow = window.open(url.fidoUrl + `/addfido.html?redirect=${encodeURIComponent(currentPage)}`, 'Addfido', 'width=400,height=500');
    },
    deleteFidoDevice() {
      // Delete Fido device logic
      this.showDeleteConfirm = false;
      const currentPage = window.location.href;
      const deleteFidoWindow = window.open(url.fidoUrl + `/deletefido.html?redirect=${encodeURIComponent(currentPage)}&fidoId=${encodeURIComponent(this.deleteFidoId)}`, 'Deletefido', 'width=600,height=600');
    },
    handleDelete(index, row) {
      this.deleteFidoId = row.fidoId;
      this.showDeleteConfirm = true;
    },
    handlePostMessage(event) {
      if (event.origin === url.fidoUrl) {
        const data = event.data;
        if (data.type === 'Success' && data.msg && data.fidolist) {
          alert(data.msg);
          this.updatefido();
        }
      }
    },
  },
};
</script>

<style>
/* Remove background color and set text color */
.page-sign {
  background-color: transparent;
  color: inherit;
  padding: 20px;
  border-radius: 8px;
}

/* Table header styles */
.table-header {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
  font-weight: bold;
  color: inherit;
  background-color: transparent;
  align-items: center;
}

/* Add button styles */
.add-button {
  background-color: blue;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

/* Table container styles */
.table-container {
  width: 100%;
  max-height: 722px;
  overflow-y: auto;
}

/* Table row styles */
.table-row {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
  color: inherit;
  background-color: transparent;
}

/* Table cell styles */
.table-cell {
  flex: 1;
  padding: 0 10px;
  background-color: transparent;
}

/* FIDO ID cell styles */
.fido-id {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px; /* Adjust as needed */
}

/* Button and tag styles */
.delete-button {
  color: white;
  background-color: red;
  border: 2px solid red;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
}

.current-device {
  color: white;
  background-color: green;
  border: 2px solid green;
  padding: 4px 8px;
  border-radius: 4px;
  display: inline-block;
}

/* Dialog overlay styles */
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Dialog styles */
.dialog {
  background-color: black; /* Set background color to black */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 40%;
  max-width: 500px;
  text-align: center;
}

/* Dialog content styles */
.dialog-content {
  font-size: 1.2em;
  color: white; /* Set text color to white */
}

/* Dialog footer styles */
.dialog-footer {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}

.dialog-footer button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.dialog-footer button:nth-child(1) {
  background-color: gray;
  color: white;
}

.dialog-footer button:nth-child(2) {
  background-color: blue;
  color: white;
}
</style>
