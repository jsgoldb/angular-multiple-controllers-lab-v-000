function StaffController() {
  this.name = '';
  this.email = '';
  this.phone = '';
}

angular 
  .module('app')
  .controller('StaffController', StaffController)