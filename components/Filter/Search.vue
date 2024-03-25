<template>
  <section class="search-banner">
    <div class="search">
      <v-text-field
        :placeholder="$t('list_search')"
        variant="outlined"
        color="primary"
        single-line
        hide-details
      />
      <v-icon class="search-icon">
        mdi-magnify
      </v-icon>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import './filter';
</style>
