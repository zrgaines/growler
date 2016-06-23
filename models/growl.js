function Growl(options) {
  this.id = Growl.all.length;
  this.growl = options.growl;
  Growl.all.push(this);
}


Growl.find = function(id) {
  return Growl.all.find(function(product) {
    return growl.id === id;
  });
}
Growl.all = [];

module.exports = Growl;
