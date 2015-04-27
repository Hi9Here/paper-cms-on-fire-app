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
  app.appName = 'Paper CMS';
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
    scope.pageVisible = function(page) {
      if (scope.user === null) {
        if (page.mod[7] === 'r') {
          return true;
        }
      } else {
        var uid = CryptoJS.SHA256(this.user.uid) + '';
        if (page.mod[7] === 'r') { // All
          return true;
        } else if (page.mod[4] === 'r') { // Group
          return scope.userGroup(uid,page.group);
        } else if (page.mod[1] === 'r') { // User
          return uid === page.own;
        }
      }
      return true;// remove
      return false;
    };
    scope.pageWrite = function(page) {
      if (scope.user === null) {
        if (page.mod[8] === 'w') {
          return true;
        }
      } else {
        var uid = CryptoJS.SHA256(this.user.uid) + '';
        if (page.mod[8] === 'w') { // All
          return true;
        } else if (page.mod[5] === 'w') { // Group
          return scope.userGroup(uid,page.group);
        } else if (page.mod[2] === 'w') { // User
          return uid === page.own;
        }
      }
      return true;// remove
      return false;
    };

    scope.userGroup = function(uid,group){
//      if (scope.users[uid].group === group) {  
        return true;
  //    }
      return false;
    };

    scope.pageOn = 0;

//    scope.pages.forEach(function(thepage) {
//      page(thepage.url,fn);
  //  });
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
      if (value !== undefined) {
        value.forEach(function(entry) {
          if (firstType(entry,data)) {
            output.push(entry); 
          }
        });
      }
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
    scope.updatePages = function() {
    };
    scope.updateUsers = function() {
    };
    scope.updateSite = function() {
      app.appName = scope.site.title;
      document.title = scope.site.pagetitle;
    };
    scope.addUser = function() {
      var uid = CryptoJS.SHA256(this.user.uid) + '';
      console.log('add user ' + uid);
      if (this.users[uid] !== undefined ) {
        this.users[uid] = {group : 'user'}
      }
    };
    scope.drawerClose = function() {
      drawer.closeDrawer();
    };
    scope.cardFilter = 'All';
  });
 
})(wrap(document));
