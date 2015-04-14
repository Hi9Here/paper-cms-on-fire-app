(function (document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');
  app.appName = 'Hi9';

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('template-bound', function(e) {
    console.log('Our app is ready to rock!');
    var scope = e.target;
    var fbLogin = document.querySelector('#login');
    var drawer = document.querySelector('core-drawer-panel');
    scope.login = function() {
      try {
        this.params = JSON.parse(document.querySelector('#params').value);
      } catch (e) {
        this.params = null;
      }
      fbLogin.login();
    };
    scope.justTypes = function(value,data){
      console.log('value :' + value);
      var output = [];
      value.forEach(function(entry) {
        if (firstType(entry,data)) {
          output.push(entry); 
        };
      });
      
      return output;
    };
    scope.logout = function() {
      fbLogin.logout();
    };
    scope.drawerClose = function() {
      drawer.closeDrawer();
      drawer.selected; // 'main'
    }
  });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
 
})(wrap(document));

//PolymerExpressions.prototype.justTypes = function(value,data){
  //if (firstType(value,data)) return value; 
//}

function firstType (value,data) {
  var isFirst_value = value;
  var isFirst = false;
  for(var index in data) { 
    var attr = data[index].type; 
    if (data[isFirst_value].type == attr) {
      if (isFirst) {
        return false;
      } else {
        isFirst = true;
      }
      if (index == isFirst_value) return isFirst; 
    }
  }
  return true;
}  
