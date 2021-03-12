<template>
  <main class="product-page">
    <div class="container">
      <ul class="product-list">
        <ProductItem
          v-for="activity of pagitatedActivities"
          :key="activity.uuid"
          :product-item-data="activity"
        />        
      </ul>
      <Pagination
        @next-page="goToNextPage"
        @prev-page="goToPrevPage"
        @direct-page="directMoveToPage"
      />
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import ProductItem from './ProductItem.vue';
import Pagination from './Pagination.vue';

const activitiesOnPage = 6;

export default {
  components: {
    ProductItem,
    Pagination
  },

  data() {
    return {
      page: 1
    }
  },

  computed: {
    ...mapGetters([
      'ACTIVITIES_LIST'
    ]),

    startPagination() {
      return (this.page - 1) * activitiesOnPage;
    },

    endPagination() {
      return (this.page * activitiesOnPage);
    },

    pagitatedActivities() {
      return this.ACTIVITIES_LIST.slice(this.startPagination, this.endPagination);
    },

    hasNextPage() {
      return this.ACTIVITIES_LIST.length > this.endPagination;
    }
  },

  watch: {
    page() {
      window.history.pushState(
        null,
        document.title,
        `${window.location.pathname}?page=${this.page}`
      )
    }
  },

  mounted() {
    return this.loadActivities();
  },

  methods: {
    ...mapActions(['loadActivities']),

    goToNextPage() {
      if (!this.hasNextPage) { return; }

      this.page += 1;
    },

    goToPrevPage() {
      if (this.page - 1 < 1) { return; }

      this.page -= 1;
    },

    directMoveToPage(pageNumber) {
      this.page = pageNumber;
    }
  },

}
</script>

<style lang="scss">
.product-list {
  display: flex;
  flex: 0 1 auto;
  flex-flow: row wrap;
  margin: 0 -10px;

  &__item {
    padding: 10px;
    flex: 1 0 33.3333%;
    max-width: 33.3333%;
  }
}
</style>
