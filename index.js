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
    this.groups[this.groups.length - 1].matches = new Array();
  }

  removeGroup(index) {
    this.groups.splice(index, 1);
  }

  getGroup(group_index){
    if (this.groups.length <= group_index)
      return null;
    return this.groups[group_index];
  }

  addMatch(group_index, match){
    if (this.groups.length <= group_index) return;
    this.groups[group_index].matches.push(match);
  }

  removeMatchById(match_id){
    for (var i = 0; i < this.groups.length; i++){
      for (var j = 0; j < this.groups[i].matches.length; j++)
        if (this.groups[i].matches[j].id == match_id) {
          this.groups[i].matches.splice(j,1);
          return;
        } 
    }
  }

  removeMatch(group_index, match_index){
    this.groups[group_index].matches.splice(match_index,1);
  }


  addPlayer(player){
    this.participants.push(player);
  }

  addPlayers(players){
    this.participants.push.apply(this.participants, players);
  }

  updateMatchById(match_id, match){
   for (var i = 0; i < this.groups.length; i++){
      for (var j = 0; j < this.groups[i].matches.length; j++)
        if (this.groups[i].matches[j].id == match_id) {
          this.updateMatch(i, j, match);
          return;
        } 
    } 
  }

  updateMatch(group_index,match_index, match){
    for (var i in match){
      this.groups[group_index].matches[match_index][i] = match[i];
    }
  }

  getMatchById(match_id){
    for (var i = 0; i < this.groups.length; i++){
      for (var j = 0; j < this.groups[i].matches.length; j++)
        if (this.groups[i].matches[j].id == match_id) {
          return this.groups[i].matches[j];
        } 
    }  
    return null;
  }

  getMatch(group_index, match_index){
    if (this.groups.length <= group_index)
      return null;
    if (this.groups[group_index].matches.length <= match_index)
      return null;
    return this.groups[group_index].matches[match_index];
  }

  removePlayerById(player){
    for (var i = 0; i < this.participants.length; i++)
      if (this.participants[i] == player){
        this.participants.splice(i,1);
        return
      }
  }

  removePlayer(player_index){
    this.participants.splice(player_index,1);
  }

  get html() {
    return "";
  }

}

