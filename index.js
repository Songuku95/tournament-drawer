'use strict';

module.exports = class Tournament {

  constructor() {
    this.participants = []
    this.groups = []
  }

  addGroup(title) {
    this.groups.push({
      title: title
    });
  }

  removeGroup(index) {
    this.groups.splice(index, 1);
  }

  get html() {
    return "";
  }

}
