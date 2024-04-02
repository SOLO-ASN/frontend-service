<template>
  <div class="leaderboard">
    <el-table
      :data="tableData"
      style="width: 100%"
      :height=1000
      :cell-style="{ textAlign: 'center' }"
      :default-sort="{ prop: 'date', order: 'descending' }"
      border
      :header-cell-style="{backgroundColor: '#1F1D36', color: 'white', textAlign: 'center'}"
    >
      <el-table-column prop="ranking" label="Ranking" sortable  width="200">
        <template #default="scope">
          <span class="ranking">{{ scope.row.ranking }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="user" label="User" width="280">
        <template #default="scope">
          <img :src="scope.row.avatar" class="avatar" />
          <span class="username">{{ scope.row.user }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="point" label="Point" sortable width="200">
        <template #default="scope">
          <span class="points">{{ scope.row.point }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="twitter" label="Twitter" width="250">
        <template #default="scope">
          <i class="fab fa-twitter twitter-icon"></i>
        </template>
      </el-table-column>
      <el-table-column prop="discord" label="Discord" width="250">
        <template #default="scope">
          <i class="fab fa-discord discord-icon"></i>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
interface User {
  ranking: number;
  user: string;
  point: number;
  avatar: string;
  twitter: string;
  discord: string;
}

const tableData: User[] = [
  // Populate with your actual data
   {
    ranking: 21,
    user: 'Aeryn',
    point: 1027,
    avatar: 'path-to-aeryn-avatar.png', // Replace with the actual path to the avatar image
    twitter: 'aeryn_twitter_handle', // Replace with actual Twitter handle if needed
    discord: 'aeryn_discord_handle', // Replace with actual Discord handle if needed
  },
  {
    ranking: 22,
    user: 'WzrdEms',
    point: 1019,
    avatar: 'path-to-wzrdems-avatar.png', // Replace with the actual path to the avatar image
    twitter: 'wzrdems_twitter_handle', // Replace with actual Twitter handle if needed
    discord: 'wzrdems_discord_handle', // Replace with actual Discord handle if needed
  },
  {
    ranking: 23,
    user: 'ZerOne',
    point: 1017,
    avatar: 'path-to-zerone-avatar.png', // Replace with the actual path to the avatar image
    twitter: 'zerone_twitter_handle', // Replace with actual Twitter handle if needed
    discord: 'zerone_discord_handle', // Replace with actual Discord handle if needed
  },
   {
    ranking: 21,
    user: 'Aeryn',
    point: 1027,
    avatar: 'path-to-aeryn-avatar.png', // Replace with the actual path to the avatar image
    twitter: 'aeryn_twitter_handle', // Replace with actual Twitter handle if needed
    discord: 'aeryn_discord_handle', // Replace with actual Discord handle if needed
  },
  {
    ranking: 22,
    user: 'WzrdEms',
    point: 1019,
    avatar: 'path-to-wzrdems-avatar.png', // Replace with the actual path to the avatar image
    twitter: 'wzrdems_twitter_handle', // Replace with actual Twitter handle if needed
    discord: 'wzrdems_discord_handle', // Replace with actual Discord handle if needed
  },
  {
    ranking: 23,
    user: 'ZerOne',
    point: 1017,
    avatar: 'path-to-zerone-avatar.png', // Replace with the actual path to the avatar image
    twitter: 'zerone_twitter_handle', // Replace with actual Twitter handle if needed
    discord: 'zerone_discord_handle', // Replace with actual Discord handle if needed
  },
   {
    ranking: 21,
    user: 'Aeryn',
    point: 1027,
    avatar: 'path-to-aeryn-avatar.png', // Replace with the actual path to the avatar image
    twitter: 'aeryn_twitter_handle', // Replace with actual Twitter handle if needed
    discord: 'aeryn_discord_handle', // Replace with actual Discord handle if needed
  },
  {
    ranking: 22,
    user: 'WzrdEms',
    point: 1019,
    avatar: 'path-to-wzrdems-avatar.png', // Replace with the actual path to the avatar image
    twitter: 'wzrdems_twitter_handle', // Replace with actual Twitter handle if needed
    discord: 'wzrdems_discord_handle', // Replace with actual Discord handle if needed
  },
  {
    ranking: 23,
    user: 'ZerOne',
    point: 1017,
    avatar: 'path-to-zerone-avatar.png', // Replace with the actual path to the avatar image
    twitter: 'zerone_twitter_handle', // Replace with actual Twitter handle if needed
    discord: 'zerone_discord_handle', // Replace with actual Discord handle if needed
  },
   {
    ranking: 21,
    user: 'Aeryn',
    point: 1027,
    avatar: 'path-to-aeryn-avatar.png', // Replace with the actual path to the avatar image
    twitter: 'aeryn_twitter_handle', // Replace with actual Twitter handle if needed
    discord: 'aeryn_discord_handle', // Replace with actual Discord handle if needed
  },
  {
    ranking: 22,
    user: 'WzrdEms',
    point: 1019,
    avatar: 'path-to-wzrdems-avatar.png', // Replace with the actual path to the avatar image
    twitter: 'wzrdems_twitter_handle', // Replace with actual Twitter handle if needed
    discord: 'wzrdems_discord_handle', // Replace with actual Discord handle if needed
  },
  {
    ranking: 23,
    user: 'ZerOne',
    point: 1017,
    avatar: 'path-to-zerone-avatar.png', // Replace with the actual path to the avatar image
    twitter: 'zerone_twitter_handle', // Replace with actual Twitter handle if needed
    discord: 'zerone_discord_handle', // Replace with actual Discord handle if needed
  },
   {
    ranking: 21,
    user: 'Aeryn',
    point: 1027,
    avatar: 'path-to-aeryn-avatar.png', // Replace with the actual path to the avatar image
    twitter: 'aeryn_twitter_handle', // Replace with actual Twitter handle if needed
    discord: 'aeryn_discord_handle', // Replace with actual Discord handle if needed
  },
  {
    ranking: 22,
    user: 'WzrdEms',
    point: 1019,
    avatar: 'path-to-wzrdems-avatar.png', // Replace with the actual path to the avatar image
    twitter: 'wzrdems_twitter_handle', // Replace with actual Twitter handle if needed
    discord: 'wzrdems_discord_handle', // Replace with actual Discord handle if needed
  },
  {
    ranking: 23,
    user: 'ZerOne',
    point: 1017,
    avatar: 'path-to-zerone-avatar.png', // Replace with the actual path to the avatar image
    twitter: 'zerone_twitter_handle', // Replace with actual Twitter handle if needed
    discord: 'zerone_discord_handle', // Replace with actual Discord handle if needed
  },
   {
    ranking: 21,
    user: 'Aeryn',
    point: 1027,
    avatar: 'path-to-aeryn-avatar.png', // Replace with the actual path to the avatar image
    twitter: 'aeryn_twitter_handle', // Replace with actual Twitter handle if needed
    discord: 'aeryn_discord_handle', // Replace with actual Discord handle if needed
  },
  {
    ranking: 22,
    user: 'WzrdEms',
    point: 1019,
    avatar: 'path-to-wzrdems-avatar.png', // Replace with the actual path to the avatar image
    twitter: 'wzrdems_twitter_handle', // Replace with actual Twitter handle if needed
    discord: 'wzrdems_discord_handle', // Replace with actual Discord handle if needed
  },
  {
    ranking: 23,
    user: 'ZerOne',
    point: 1017,
    avatar: 'path-to-zerone-avatar.png', // Replace with the actual path to the avatar image
    twitter: 'zerone_twitter_handle', // Replace with actual Twitter handle if needed
    discord: 'zerone_discord_handle', // Replace with actual Discord handle if needed
  },
   {
    ranking: 21,
    user: 'Aeryn',
    point: 1027,
    avatar: 'path-to-aeryn-avatar.png', // Replace with the actual path to the avatar image
    twitter: 'aeryn_twitter_handle', // Replace with actual Twitter handle if needed
    discord: 'aeryn_discord_handle', // Replace with actual Discord handle if needed
  },
  {
    ranking: 22,
    user: 'WzrdEms',
    point: 1019,
    avatar: 'path-to-wzrdems-avatar.png', // Replace with the actual path to the avatar image
    twitter: 'wzrdems_twitter_handle', // Replace with actual Twitter handle if needed
    discord: 'wzrdems_discord_handle', // Replace with actual Discord handle if needed
  },
  {
    ranking: 23,
    user: 'ZerOne',
    point: 1017,
    avatar: 'path-to-zerone-avatar.png', // Replace with the actual path to the avatar image
    twitter: 'zerone_twitter_handle', // Replace with actual Twitter handle if needed
    discord: 'zerone_discord_handle', // Replace with actual Discord handle if needed
  },
   {
    ranking: 21,
    user: 'Aeryn',
    point: 1027,
    avatar: 'path-to-aeryn-avatar.png', // Replace with the actual path to the avatar image
    twitter: 'aeryn_twitter_handle', // Replace with actual Twitter handle if needed
    discord: 'aeryn_discord_handle', // Replace with actual Discord handle if needed
  },
  {
    ranking: 22,
    user: 'WzrdEms',
    point: 1019,
    avatar: 'path-to-wzrdems-avatar.png', // Replace with the actual path to the avatar image
    twitter: 'wzrdems_twitter_handle', // Replace with actual Twitter handle if needed
    discord: 'wzrdems_discord_handle', // Replace with actual Discord handle if needed
  },
  {
    ranking: 23,
    user: 'ZerOne',
    point: 1017,
    avatar: 'path-to-zerone-avatar.png', // Replace with the actual path to the avatar image
    twitter: 'zerone_twitter_handle', // Replace with actual Twitter handle if needed
    discord: 'zerone_discord_handle', // Replace with actual Discord handle if needed
  },
];

const formatter = (row: User, column: TableColumnCtx<User>) => {
  return row.address
}

</script>

<style scoped>
.leaderboard {
  background-color: #29263F; /* Table background color */
  padding: 20px;
  border-radius: 10px;
}

.el-table .cell {
  color: white;
}

.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}

.username {
  vertical-align: middle;
}

.points {
  font-weight: bold;
}

.twitter-icon {
  color: #1DA1F2;
}

.discord-icon {
  color: #7289DA;
}
</style>