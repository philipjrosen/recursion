// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  if (typeof obj === 'number' || typeof obj === 'boolean') return obj.toString();
  if (obj === null) return "null";
  if (typeof obj === 'string') return '"' + obj + '"';
  if (Array.isArray(obj)) return "[]";
};
