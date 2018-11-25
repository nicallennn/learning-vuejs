
new Vue({
  el: '#app',
  data: {
    title: 'Vue JS Start2',
    message: 'Hello World!',
    link: 'http://google.com',
    finishedLink: '<a href="http://google.com">Finished Link</a>'
  },
  methods: {
    sayHello: function () {
      return this.message
    }
  }
})