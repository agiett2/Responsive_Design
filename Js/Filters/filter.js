'use strict';
app.filter('percentage', ['$filter', function ($filter) {
    //this filter makes the assumption that the input(number to format) will be in decimal form.
  return function (input, decimals) {
    return $filter('number')(input * 1, decimals) + '%';
  };
}]);