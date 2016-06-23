function Growl(options) {
  this.id = Growl.all.length;
  this.growl = options.growl;
  Growl.all.push(this);
}

Growl.all = [];

module.exports = Growl;
