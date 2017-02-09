angular
  .module('myApp', ['bar', 'baz'])
  .config(function () { console.log('myApp config') })
  .config(function(fnord) {console.log(fnord)})
  .run(function () { console.log('myApp run') });
  
angular.module('myApp').filter('greet', function() {
 return function(name) {
    return 'Hello, ' + name + '!';
  };
});  


// bar

angular
  .module('bar', ['baz'])
  .config(function () { console.log('bar config') })
  .config(function ($provide) {
    $provide.constant('fnord', 5);
  })
  .run(function () { console.log('bar run') });
  
// baz  
  
  
angular
  .module('baz', [])
  .config(function () { console.log('baz config') })
  .run(function () { console.log('baz run') });