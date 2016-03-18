'use strict';

module.exports = class Tournament {

  constructor() {
    this.participants = [];
    this.groups = [];
  }

  addGroup(title) {
    this.groups.push({
      title: title
    });
  }

  removeGroup(index) {
    if (typeof index != "number")
      this.groups = this.groups.filter(e => e.title == index);
    else
      this.groups.splice(index, 1);
  }

  get html() {
    return "";
  }

  clear() {
    this.participants = [];
    this.groups = [];
  }

}
