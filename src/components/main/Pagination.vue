<template>
  <nav class="pagination">
    <ul class="pagination__list">
      <li class="pagination__item">
        <button
          class="pagination__link pagination__link_arrow prevPage"
          prev-page
          @click="prevPage"
        >
          <svg
            class="icon"
            width="8px"
            height="10px"
            viewBox="18 18 8 10"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <title>Arrow Left</title>
            <polygon
              id="Left-Icon"
              stroke="none"
              fill-rule="evenodd"
              transform="translate(22.027061, 23.000000) scale(-1, 1) translate(-22.027061, -23.000000) "
              points="22.9427745 22.9999999 19 26.9458774 20.0541226 28 25.0541226 23 20.0541226 18 19 19.0541226"
            />
          </svg>
        </button>
      </li>
      <li
        v-for="(page, idx) of paginationList"
        :key="idx"
        class="pagination__item"
      >
        <a
          class="pagination__link"
          direct-page-link
          :data-page="page.pageString"
          @click="idx !== 3
            ? directMoveToPage(page.pageNumber)
            : null"
        >
          {{ idx !== 3 ? page.pageString : '...' }}
        </a>
      </li>
      <li class="pagination__item">
        <a
          class="pagination__link pagination__link_arrow"
          next-page
          @click="nextPage"
        >
          <svg
            class="icon"
            width="8px"
            height="10px"
            viewBox="18 18 8 10"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <title>Arrow Right</title>
            <polygon
              id="Left-Iocn"
              stroke="none"
              fill-rule="evenodd"
              points="22.9427745 22.9999999 19 26.9458774 20.0541226 28 25.0541226 23 20.0541226 18 19 19.0541226"
            />
          </svg>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  emits: ['prevPage', 'nextPage', 'directPage'],

  computed: {
    ...mapGetters([
      'TOTAL_ACTIVITIES',
      'ACTIVITIES_ON_PAGE'
    ]),

    totalPossiblePages() {
      return Math.round(this.TOTAL_ACTIVITIES / this.ACTIVITIES_ON_PAGE);
    },

    totalPossiblePagesArray() {
      return new Array(this.totalPossiblePages).fill(0);
    },

    paginationList() {
      const pagesList = this.totalPossiblePagesArray.map((page, idx, arr) => {
        if (idx > 3 && idx < arr.length - 1) { return }

        const obj = {
          pageNumber: idx + 1,
          pageString: String(idx + 1)
        }
      
        page = obj;
      
        return page;
      }).filter(page => !!page);

      return pagesList;
    }
  },

  methods: {
    nextPage() {
      this.$emit('nextPage');
    },

    prevPage() {
      this.$emit('prevPage');
    },

    directMoveToPage(pageNumber) {
      this.$emit('directPage', pageNumber);
    }
  }
}
</script>

<style lang="scss">
.pagination {
  height: 45px;
  margin: 30px auto;
  text-align: center;

  &__list {
    height: 100%;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
  }

  &__item {
    height: 100%;
    width: 45px;
    font-family: 'Lato-Bold', sans-serif;
    font-size: 13px;
    letter-spacing: 1.39px;
    text-align: center;
  }

  &__link {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #444A59;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }

    &_arrow {
      &:hover {
        border: 1px solid #444A59;
      }
    }

    .icon {
      width: 8px;
      fill: #444A59;
    }
  }
}
</style>
