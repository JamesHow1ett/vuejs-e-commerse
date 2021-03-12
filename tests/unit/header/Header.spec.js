import { mount } from '@vue/test-utils';
import { createStore } from 'vuex';
import Header from '@/components/header/Header.vue';

const totalPrice = 4;
const itemsInCart = 23;
const itemsInWishlist = 33;

const createVuexStore = () => {
  return createStore({
    getters: {
      TOTAL_ACTIVITIES_PRICE: () => totalPrice,
      QUANTITY_ITEMS_IN_CART: () => itemsInCart,
      QUANTITY_ITEMS_IN_WISHLIST: () => itemsInWishlist
    }
  });
}

function factory() {
  const store = createVuexStore();

  return mount(Header, {
    global: {
      plugins: [store]
    }
  });
}

describe('Header.vue', () => {
  const wrapper = factory();  

  it('header rendered <header>', () => {
    expect(wrapper.find('header')).toBeTruthy();
  });

  it('bag total price rendered data from store.getters', () => {
    const currencyIcon = '£';
    const bagPrice = wrapper.find('div.header-bag__price');

    expect(bagPrice.text()).toEqual(currencyIcon + totalPrice);
  });

  it('bag cart item counter rendered data from store.getters', () => {
    const bagItemCounter = wrapper.find('.header-bag__count .bag__item-counter');

    expect(Number(bagItemCounter.text())).toEqual(itemsInCart);
  });

  it('bag wishlist item counter rendered data from store.getters', () => {
    const bagItemCounter = wrapper.find('.header-bag__wishlist-count .bag__item-counter');

    expect(Number(bagItemCounter.text())).toEqual(itemsInWishlist);
  })
});
