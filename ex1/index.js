
new Vue({
  el: '#exercise',
  data: {
    name: 'Nick Allen',
    age: 28,
    imageLink: 'https://phys.org/newman/gfx/news/hires/2015/5666a45b218f7.jpg'
  },
  methods: {
    sayHello: function () {
      return this.message
    },
    ageTimesTwo: function () {
      return this.age * 2
    },
    getRandomFloat: function () {
      return Math.random()
    }
  }
})