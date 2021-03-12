<template>
  <div class="bag">
    <div
      v-for="product of CART_ITEMS_LIST"
      :key="product.uuid"
      class="bag-item"
    >
      <div class="bag-item__img-wrapper">
        <img
          :src="product.imgSrc"
          alt="img"
          class="bag-item__img"
        >
      </div>
      <div class="bag-item__product-details">
        <div class="bag-item__detail-group">
          <div
            class="bag-item__title"
            :data-full-title="product.title"
          >
            {{ trimTitle(product.title) }}
          </div>
          <span class="bag-item__quantity">
            {{ product.quantity }}
          </span>
          <span> X </span>
          <span class="bag-item__product-price">
            £{{ product.price }}
          </span>
        </div>
        <div class="bag-item__btn">
          <button @click="removeActivity(product.uuid)">X</button>
        </div>
      </div>
    </div>
    <div class="bag-total">
      <div class="bag-total__title">
        Cart Subtotal:
      </div>
      <div class="bag-total__price">
        £{{ TOTAL_ACTIVITIES_PRICE }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'CART_ITEMS_LIST',
      'TOTAL_ACTIVITIES_PRICE'
    ])
  },

  methods: {
    ...mapActions(['removeActivityFromCart']),

    trimTitle(title) {
      return `${title.slice(0, 15)}...`;
    },

    removeActivity(uuid) {
      return this.removeActivityFromCart(uuid);
    }
  }
}
</script>

<style scoped lang="scss">
.bag {
  padding-bottom: 20px;
  position: absolute;
  top: 60px;
  right: 0;
  z-index: 2020;
  background-color: #fff;
  -webkit-box-shadow: 3px 5px 7px 4px rgba(34, 60, 80, 0.29);
  -moz-box-shadow: 3px 5px 7px 4px rgba(34, 60, 80, 0.29);
  box-shadow: 3px 5px 7px 4px rgba(34, 60, 80, 0.29);
}

.bag-item {
  display: flex;
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid silver;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &__img-wrapper {
    img {
      width: 100px;
      height: 100px;   
    }
  }

  &__product-details {
    min-width: 200px;
    display: flex;
    justify-content: space-between;
    padding-left: 10px;
  }

  &__title {
    color: black;
    position: relative;
    margin: 5px 0 10px;
    transition: all 0.3s ease-in-out;

    &:hover {
      &::after{
        content: attr(data-full-title);
        position: absolute;
        top: 20px;
        left: 0;
        background-color: #fff;
        border: 1px solid silver;
        color: black;
        padding: 5px;
        z-index: 2020;
      }
    }
  }

  &__btn {
    button {
      font-weight: 700;
      height: 30px;
      width: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      cursor: pointer;
      color: #fff;
      background-color: #cdd4cf;

      &:hover {
        background-color: #6e6e6e;
      }
    }
  }
}

.bag-total {
  padding: 30px 20px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dotted #5e5e5e;

  &__price {
    color: #5e5e5e;
    font-weight: 700;
  }
}
</style>
