'use strict';

describe('genestimate.version module', function() {
  beforeEach(module('genestimate.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
