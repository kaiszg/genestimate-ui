'use strict';

function NavigationBarCtrl() {
	
}

angular.module('genestimate').component('genestimateNavigationBar', {
  templateUrl: 'components/navigation/navigation-bar.html',
  controller: NavigationBarCtrl,
  bindings: {
  	links : '='
  }
});
