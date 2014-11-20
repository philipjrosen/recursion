// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var root = arguments[1] || document.body;
  var results = arguments[2] || [];
  var A = Array.prototype;

  A.indexOf.call(root.classList, className) > -1  && results.push(root);
  A.forEach.call(root.children, function(child) {
    getElementsByClassName(className, child, results);
  });
  return results;
};
