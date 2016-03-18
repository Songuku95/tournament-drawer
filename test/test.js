'use strict';

var Tournament = require('../index');
var assert = require('assert');

describe('Tournament', function() {
  describe('Basic get/set function', function() {
    var tournament = new Tournament();

    afterEach(function() {
      tournament.clear();
    });

    it('should add new group', function() {
      tournament.addGroup('final');

      assert.equal(1, tournament.groups.length);
      assert.equal('final', tournament.groups[0].title);
    });

    it('should remove group by index', function() {
      tournament.addGroup('semi-final');
      tournament.addGroup('final');

      tournament.removeGroup(0);

      assert.equal(1, tournament.groups.length);
      assert.equal('final', tournament.groups[0].title);
    });

    it('should remove group by name', function() {
      tournament.addGroup('semi-final');
      tournament.addGroup('final');

      tournament.removeGroup('final');

      assert.equal(1, tournament.groups.length);
      assert.equal('final', tournament.groups[0].title);
    })
  });
});
