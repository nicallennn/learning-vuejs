
new Vue({
  el: '#app',
  data: {
    counter: 0,
    x: 0,
    y: 0
  },
  computed: {
    output: function () {
      return this.counter > 5 ? 'Greater than 5' : 'Less than five'
    }
  },
  watch: {
    counter: function (value) {
      var vm = this   //get vue instance for callback
      setTimeout(function () {
        //wait 2 secs then reset counter
        vm.counter = 0
      }, 2000)
    }
  },
  methods: {
    increaseCounter: function (incrementAmount) {
      this.counter += incrementAmount
      console.log($event)
    },
    updateCoordinates: function (event) {
      this.x = event.clientX
      this.y = event.clientY
    }
  }
})