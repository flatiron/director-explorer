var de       = exports,
    traverse = require('traverse');

exports.table = function (router) {

  var niceRoutes = router.routes,
      verbs = ['get', 'post', 'put', 'delete'],
      str = '';

  traverse(niceRoutes).forEach(visitor);

  function visitor () {
    var path = this.path, 
    pad = '';
    if (path[path.length - 1] && verbs.indexOf(path[path.length - 1]) !== -1) {
      pad += path.pop().toUpperCase();
      for (var i = pad.length; i < 8; i++) {
        pad += ' ';
      }
      path = path.join('/');
      str += pad + '/' + path  + ' \n'
    }
  }
  
  return str;
}