function Howl(options) {
  this.id = Howl.all.length;
  this.howl = options.howl;
  howl.all.push(this);
}

Howl.all = [];

module.exports = Howl;
