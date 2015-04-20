function firstType (value,data) {
  var isFirst = false;
  for(var index in data) { 
    var attr = data[index].type; 
    if (data[value].type === attr) {
      if (isFirst) {
        return false;
      } else {
        isFirst = true;
      }
      if (index === value) {
        return isFirst;
      }
    }
  }
  return true;
}  
function ofType (value,data,type) {
  if (data[value].type !== type) {
    return false;
  } else {
    return true;
  }
}
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
   // var fbData = document.querySelector('#base');
    var drawer = document.querySelector('core-drawer-panel');
    scope.dataChange = function() {
      scope.processedKeys = scope.justCardsOfType(scope.keys,scope.data,scope.cardFilter);
    };
    scope.pageVisible = function() {
      return true;
    };
    scope.pages = [
      {"title":"Home","url":"/","mod":"-rwxrwxr-x","own":"root:root","html":'<firebase-element id="base" location="https://hi9.firebaseio.com/data/card" data="{{data}}" keys="{{keys}}" on-data-change="{{dataChange}}"></firebase-element><firebase-login id="login" user="{{user}}" statusKnown="{{statusKnown}}" location="https://hi9.firebaseio.com" provider="google"></firebase-login><section><paper-button on-tap="{{setCardFilter}}">All</paper-button><template repeat="{{key in keys | justTypes(data)}}"><paper-button on-tap="{{setCardFilter}}">{{data[key].type}}</paper-button></template></section><h1>{{cardFilter}}</h1><section><template repeat="{{key in processedKeys}}"><paper-card class="{{data[key].type}}" class="fancy" disableswipe image="{{data[key].image}}"><a content href="{{data[key].url}}">{{data[key].card_title}}</a></paper-card></template></section>'},
      {"title":"Administrator","url":"/admin","mod":"----------","own":"root:root","html":'<h1>Account</h1> <paper-button on-tap="{{logout}}" hidden?="{{!statusKnown || !user}}">Logout</paper-button>'}
    ];
    scope.login = function() {
      try {
        this.params = JSON.parse(document.querySelector('#params').value);
      } catch (e) {
        this.params = null;
      }
      fbLogin.login();
    };
    scope.justTypes = function(value,data){
      var output = [];
      value.forEach(function(entry) {
        if (firstType(entry,data)) {
          output.push(entry); 
        }
      });
      return output;
    };
    scope.justCardsOfType = function(value,data,type){
      if (type === 'All') {
        return value;
      } else {
        var output = [];
        value.forEach(function(entry) {
          if (ofType(entry,data,type)) {
            output.push(entry); 
          }
        });
        return output;
      }
    };
    scope.logout = function() {
      fbLogin.logout();
    };
    scope.setCardFilter = function(e) {
      scope.cardFilter = e.currentTarget.innerHTML;
      scope.processedKeys = scope.justCardsOfType(scope.keys,scope.data,scope.cardFilter);
    };
    scope.drawerClose = function() {
      drawer.closeDrawer();
    };
    scope.cardFilter = 'All';

  });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
 
})(wrap(document));
