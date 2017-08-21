angular.module('url.constants', [])
.constant('urlsConst', (function(){
  var protocol = 'http://';
  var domain = 'www.mydomain.com';
  var base = '/api/';

  return {
    category:               protocol + domain + base + 'category/',
    home:                   protocol + domain + base +  'home/',
    products:               protocol + domain + base + 'products/'
  }

})()
);
