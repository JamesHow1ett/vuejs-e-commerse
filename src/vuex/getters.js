const getters = {
  TOTAL_PRICE(state) {
    return state.cartTotalPrice;
  },

  QUANTITY_ITEMS_IN_CART(state) {
    return state.cartItems.length;
  },

  QUANTITY_ITEMS_IN_WISHLIST(state) {
    return state.wishlistItems.length;
  },

  ACTIVITIES_LIST(state) {
    return state.activitiesList;
  },

  WISHLIST_LIST(state) {
    return state.wishlistItems;
  },

  CART_ITEMS_LIST(state) {
    return state.cartItems;
  },

  TOTAL_ACTIVITIES(state) {
    return state.activitiesList.length;
  },

  TOTAL_ACTIVITIES_PRICE(state) {
    const totalPrice = state.cartItems.reduce((acc, cur) => {
      return acc + cur.price
    }, 0)

    return totalPrice;
  }
}

export default getters;
