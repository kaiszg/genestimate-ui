'use strict';

angular.module('genestimate.version', [
  'genestimate.version.interpolate-filter',
  'genestimate.version.version-directive'
])

.value('version', '0.1');
