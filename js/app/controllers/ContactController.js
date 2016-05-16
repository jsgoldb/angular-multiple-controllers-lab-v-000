function ContactController(){

  this.name = '';
  this.email = '';
  this.phone = '';

  var vm = this;

  this.changeName = function(newName) {
    vm.name = newName;
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController)