import Vue from 'vue'
import Header from '../../../src/components/Header'

describe('Header.vue', () => {
  it('is a sample test', () => {
    const Constructor = Vue.extend(Header)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
