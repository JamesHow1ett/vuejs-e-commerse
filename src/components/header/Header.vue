<template>
  <header class="header container">
    <h1 class="page-title">
      BRAND
    </h1>
    <aside class="header-bag">
      <div class="header-bag__item header-bag__count">
        <div class="header-bag__price">
          £{{ TOTAL_ACTIVITIES_PRICE }}
        </div>
        <svg
          class="icon"
          width="17px"
          height="18px"
          viewBox="36 8 17 18"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          @click="openBag"
        >
          <title>Bag Icon</title>
          <path
            id="Bag-Icon"
            d="M52.997701,12.8571429 L49.3553365,12.8571429 L49.3553365,8 L39.6423645,8 L39.6423645,12.8571429 L36,12.8571429 L36,25 L52.997701,25 L52.997701,12.8571429 Z M42.0706075,10.4285714 L46.9270935,10.4285714 L46.9270935,12.8571429 L42.0706075,12.8571429 L42.0706075,10.4285714 Z"
            stroke="none"
            fill-rule="evenodd"
          />
        </svg>
        <span class="bag__item-counter">{{ QUANTITY_ITEMS_IN_CART }}</span>
      </div>
      <div class="header-bag__item header-bag__wishlist-count">
        <svg
          class="icon"
          width="20px"
          height="20px"
          viewBox="0 6 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <title>Wishlist Icon</title>
          <polygon
            id="Wishlist-Icon"
            stroke="none"
            fill-rule="evenodd"
            points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6"
          />
        </svg>
        <span class="bag__item-counter">{{ QUANTITY_ITEMS_IN_WISHLIST }}</span>
      </div>
    </aside>
    <Bag v-if="isBagOpen" />
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import Bag from './Bag.vue';

export default {
  components: {
    Bag
  },
  computed: {
    ...mapGetters([
      'TOTAL_ACTIVITIES_PRICE',
      'QUANTITY_ITEMS_IN_CART',
      'QUANTITY_ITEMS_IN_WISHLIST',
      'IS_BAG_OPEN'
    ]),

    isBagOpen() {
      return this.IS_BAG_OPEN && this.QUANTITY_ITEMS_IN_CART > 0;
    }
  },

  methods: {
    ...mapActions(['openCloseBag']),

    openBag() {
      return this.openCloseBag();
    }
  }
}
</script>

<style lang="scss">
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
}

.page-title {
  font-size: 20px;
}

.header-bag {
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  &__item {
    height: 25px;
    display: flex;
    align-items: flex-end;

    .icon {
      height: auto;
      fill: #444A59;
    }
  }

  &__price {
    margin-right: 5px;
    font-size: 12px;
    line-height: 12px;
  }

  &__count {
    margin-left: 10px;

    &.icon {
      width: 17px;
    }
  }

  &__wishlist-count {
    margin-left: 10px;
  }
}

.bag {
  &__item-counter {
    width: 13px;
    height: 13px;
    margin-left: -1px;
    display: flex;
    align-self: flex-start;
    justify-content: center;
    align-items: center;
    font-family: 'Lato-Bold', sans-serif;
    font-size: 8px;
    text-align: center;
    border-radius: 50%;
    color: #ffffff;
    background-color: #358ED7;
  }
}
</style>
