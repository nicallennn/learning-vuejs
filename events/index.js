
new Vue({
  el: '#app',
  data: {
    counter: 0,
    x: 0,
    y: 0
  },
  methods: {
    increaseCounter: function (incrementAmount) {
      this.counter += incrementAmount
      console.log($event)
    },
    updateCoordinates: function (event) {
      this.x = event.clientX
      this.y = event.clientY
    },
    alertMe: function () {
      alert("alertMe")
    }
  }
})