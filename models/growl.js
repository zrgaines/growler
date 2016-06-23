function Growl(text) {
  this.id = Growl.all.length;
  this.text = text;
  Growl.all.push(this);
}

Growl.all = [];

module.exports = Growl;
