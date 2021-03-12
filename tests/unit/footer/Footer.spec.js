import { mount } from '@vue/test-utils';
import Footer from '@/components/footer/Footer.vue';

describe('Footer.vue', () => {
  const wrapper = mount(Footer);
  const footerText = 'Footer';

  it('component rendered <footer>', () => {
    expect(wrapper.find('footer')).toBeTruthy();
  });

  it('component have correct text', () => {
    const p = wrapper.find('footer > p');

    expect(p.text()).toEqual(footerText);
  })
});
