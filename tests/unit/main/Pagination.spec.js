import { mount } from '@vue/test-utils';
import { createStore } from 'vuex';
import Pagination from '@/components/main/Pagination.vue';

const totalActivities = 4;
const activitiesOnPage = 6;

const createVuexStore = () => {
  return createStore({
    getters: {
      TOTAL_ACTIVITIES: () => totalActivities,
      ACTIVITIES_ON_PAGE: () => activitiesOnPage
    }
  });
}

function factory() {
  const store = createVuexStore();

  return mount(Pagination, {
    global: {
      plugins: [store]
    }
  });
}

describe('Pagination.vue', () => {
  const wrapper = factory();

  it('previously page link triggered emit event', () => {
    const prevPageLink = wrapper.find('[prev-page]');

    prevPageLink.trigger('click');
    prevPageLink.trigger('click');

    expect(wrapper.emitted()).toHaveProperty('prevPage');
  });

  it('naxt page link triggered emit event', () => {
    const prevPageLink = wrapper.find('[next-page]');

    prevPageLink.trigger('click');
    prevPageLink.trigger('click');

    expect(wrapper.emitted()).toHaveProperty('nextPage');
  });

  it('direct page link triggered emit event', () => {
    const directPageLink = wrapper.find('[direct-page-link]');

    directPageLink.trigger('click');
    directPageLink.trigger('click');

    expect(wrapper.emitted()).toHaveProperty('directPage');
  });
});
