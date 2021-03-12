<template>
  <li class="product-list__item">
    <article
      class="product"
      itemscope
      itemtype="http://schema.org/Product"
    >
      <figure class="product__image-wrapper">
        <img
          class="product__image"
          :src="productItemData.cover_image_url"
          alt="Product"
          itemprop="image"
        >
        <button 
          class="product__wishlist-button button button--round button--wishlist"
          :class="{
            'active': isActivityInWishlist
          }"
          @click="addToWishlist(productItemData.uuid)"
        >
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
        </button>
      </figure>
      <div class="product__details">
        <h1
          class="product__title"
          itemprop="brand"
        >
          {{ productItemData.title }}
        </h1>
        <p
          class="product__subtitle"
          itemprop="description"
        >
          {{ productItemData.description }}
        </p>
        <div
          class="product__price"
          itemscope
          itemtype="http://schema.org/Offer"
        >
          <span class="product__price--strike">
            £{{ productItemData.original_retail_price.value }}
          </span>
          <span
            class="product__price--discounted"
            itemprop="price"
          >£{{ productItemData.retail_price.value }}</span>
        </div>
        <button
          class="product__add-to-cart button button--primary"
          :class="{
            'button--in-cart': isActivityInCart
          }"
          @click="addToCart"
        >
          {{ isActivityInCart ? 'In Cart' : 'Add To Cart' }}
        </button>
      </div>
    </article>
  </li>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  props: {
    productItemData: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      uuidH: 'dc99d6d9-8cf3-4983-968e-e503907ca029'
    }
  },

  computed: {
    ...mapGetters([
      'WISHLIST_LIST',
      'CART_ITEMS_LIST'
    ]),

    isActivityInWishlist() {
      const { uuid } = this.productItemData;

      return this.WISHLIST_LIST.includes(uuid);
    },

    isActivityInCart() {
      const { uuid } = this.productItemData;
      const similarID = (item) => item.id === uuid;

      return this.CART_ITEMS_LIST.some(similarID);
    }
  },

  methods: {
    ...mapActions([
      'addActivityToWishlist',
      'addActivityToCart'
    ]),

    addToWishlist(uuid) {
      return this.addActivityToWishlist(uuid);
    },

    addToCart() {
      const {
        uuid,
        title,
        retail_price: { value },
        cover_image_url
      } = this.productItemData;

      const productData = {
        id: uuid,
        title: title,
        price: value,
        imgSrc: cover_image_url
      }

      return this.addActivityToCart(productData);
    }
  }
}
</script>

<style lang="scss">
.product {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #ffff;

  &__image-wrapper {
    padding: 20px;
    position: relative;
    text-align: center;
  }

  &__image {
    max-width: 100%;
    height: auto;
  }

  &__details {
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
    padding: 10px 20px 20px;
    text-align: center;
  }

  &__title {
    padding-bottom: 10px; 
    // font-family: 'Lato-Bold', sans-serif;
    font-size: 14px;
    letter-spacing: 1.37px;
    text-transform: uppercase;
  }

  &__subtitle {
    padding-bottom: 10px; 
    font-size: 12px;
    line-height: 19px;
    letter-spacing: 0.43px;
    color: #808080;
  }

  &__price {
    padding-bottom: 20px;
    // font-family: 'Lato-Bold', sans-serif;
    font-size: 14px;
    letter-spacing: 2.33px;

    &--strike {
      margin-right: 10px;
      text-decoration: line-through;
    }

    &--discounted {
      color: #F54B5E;
    }
  }

  &__wishlist-button {
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 10px;
    right: 10px;
  }

  &__add-to-cart {
    width: 100%;
    margin-top: 10px;
    margin-top: auto;
  }
}
</style>
