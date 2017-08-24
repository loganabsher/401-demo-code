'use strict';

module.exports = function(req, res, next){
  res.append('Acess-Control-Allow-Origin', '*');
  res.append('Acess-Control-Allow-Headers', '*');
  next();
}
