function Growl(object) {
  this.id = Growl.all.length;
  this.text = object.text;
  Growl.all.push(this);
}

Growl.all = [];

module.exports = Growl;
