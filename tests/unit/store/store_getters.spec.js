import getters from '@/vuex/getters.js';

const localState = {
  activitiesOnPage: 6,
  cartItems: [
    {
      price: 1
    },
    {
      price: 2
    },
    {
      price: 3
    }
  ],
  wishlistItems: [1, 1, 1, 1, 1],
  activitiesList: [4, 4, 4, 4, 4, 4, 4, 4]
}

describe('store getters.js', () => {
  const {
    ACTIVITIES_ON_PAGE,
    QUANTITY_ITEMS_IN_CART,
    QUANTITY_ITEMS_IN_WISHLIST,
    ACTIVITIES_LIST,
    WISHLIST_LIST,
    CART_ITEMS_LIST,
    TOTAL_ACTIVITIES,
    TOTAL_ACTIVITIES_PRICE
  } = getters;

  it('ACTIVITIES_ON_PAGE correct return', () => {
    expect(ACTIVITIES_ON_PAGE(localState)).toEqual(6);
  });

  it('QUANTITY_ITEMS_IN_CART correct return', () => {
    expect(QUANTITY_ITEMS_IN_CART(localState)).toEqual(3);
  });

  it('QUANTITY_ITEMS_IN_WISHLIST correct return', () => {
    expect(QUANTITY_ITEMS_IN_WISHLIST(localState)).toEqual(5);
  });

  it('ACTIVITIES_LIST correct return', () => {
    expect(Array.isArray(ACTIVITIES_LIST(localState))).toBe(true);
  });

  it('WISHLIST_LIST correct return', () => {
    expect(Array.isArray(WISHLIST_LIST(localState))).toBe(true);
  });

  it('CART_ITEMS_LIST correct return', () => {
    expect(Array.isArray(CART_ITEMS_LIST(localState))).toBe(true);
  });

  it('TOTAL_ACTIVITIES correct return', () => {
    expect(TOTAL_ACTIVITIES(localState)).toEqual(8);
  });

  it('TOTAL_ACTIVITIES_PRICE correct return if price is number', () => {
    expect(TOTAL_ACTIVITIES_PRICE(localState)).toEqual(6);
  });

  it('TOTAL_ACTIVITIES_PRICE correct return if price is NaN', () => {
    const state = { cartItems: [] }

    expect(TOTAL_ACTIVITIES_PRICE(state)).toEqual(0);
  });
});

