
new Vue({
  el: '#exercise',
  data: {
    value: 0
  },
  computed: {
    result: function () {
      //if counter value is === 30 print message, else print not there yet
      return this.value === 32 ? 'Equal to 32' : 'Not there yet'
    }
  },
  watch: {
    result: function (value) {
      //get the vue instance and store in variable
      var vm = this
      //call setTimeout function, reset vue instance 'value' property in callback (after 5 seconds)
      setTimeout(function () {
        vm.value = 0
      }, 5000)
    }
  },
  methods: {

  }
})