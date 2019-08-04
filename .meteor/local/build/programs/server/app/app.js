var require = meteorInstall({"imports":{"api":{"links.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// imports/api/links.js                                                                      //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////
                                                                                             //
module.export({
  Links: () => Links
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
const Links = new Mongo.Collection('links');
///////////////////////////////////////////////////////////////////////////////////////////////

}}},"server":{"main.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// server/main.js                                                                            //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////
                                                                                             //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Links;
module.link("/imports/api/links", {
  Links(v) {
    Links = v;
  }

}, 1);

function insertLink(title, url) {
  Links.insert({
    title,
    url,
    createdAt: new Date()
  });
}

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (Links.find().count() === 0) {
    insertLink('Do the Tutorial', 'https://www.meteor.com/tutorials/react/creating-an-app');
    insertLink('Follow the Guide', 'http://guide.meteor.com');
    insertLink('Read the Docs', 'https://docs.meteor.com');
    insertLink('Discussions', 'https://forums.meteor.com');
  }
});
///////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".jsx"
  ]
});

var exports = require("/server/main.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvbGlua3MuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9tYWluLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydCIsIkxpbmtzIiwiTW9uZ28iLCJsaW5rIiwidiIsIkNvbGxlY3Rpb24iLCJNZXRlb3IiLCJpbnNlcnRMaW5rIiwidGl0bGUiLCJ1cmwiLCJpbnNlcnQiLCJjcmVhdGVkQXQiLCJEYXRlIiwic3RhcnR1cCIsImZpbmQiLCJjb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFBQ0MsT0FBSyxFQUFDLE1BQUlBO0FBQVgsQ0FBZDtBQUFpQyxJQUFJQyxLQUFKO0FBQVVILE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLGNBQVosRUFBMkI7QUFBQ0QsT0FBSyxDQUFDRSxDQUFELEVBQUc7QUFBQ0YsU0FBSyxHQUFDRSxDQUFOO0FBQVE7O0FBQWxCLENBQTNCLEVBQStDLENBQS9DO0FBRXBDLE1BQU1ILEtBQUssR0FBRyxJQUFJQyxLQUFLLENBQUNHLFVBQVYsQ0FBcUIsT0FBckIsQ0FBZCxDOzs7Ozs7Ozs7OztBQ0ZQLElBQUlDLE1BQUo7QUFBV1AsTUFBTSxDQUFDSSxJQUFQLENBQVksZUFBWixFQUE0QjtBQUFDRyxRQUFNLENBQUNGLENBQUQsRUFBRztBQUFDRSxVQUFNLEdBQUNGLENBQVA7QUFBUzs7QUFBcEIsQ0FBNUIsRUFBa0QsQ0FBbEQ7QUFBcUQsSUFBSUgsS0FBSjtBQUFVRixNQUFNLENBQUNJLElBQVAsQ0FBWSxvQkFBWixFQUFpQztBQUFDRixPQUFLLENBQUNHLENBQUQsRUFBRztBQUFDSCxTQUFLLEdBQUNHLENBQU47QUFBUTs7QUFBbEIsQ0FBakMsRUFBcUQsQ0FBckQ7O0FBRzFFLFNBQVNHLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCQyxHQUEzQixFQUFnQztBQUM5QlIsT0FBSyxDQUFDUyxNQUFOLENBQWE7QUFBRUYsU0FBRjtBQUFTQyxPQUFUO0FBQWNFLGFBQVMsRUFBRSxJQUFJQyxJQUFKO0FBQXpCLEdBQWI7QUFDRDs7QUFFRE4sTUFBTSxDQUFDTyxPQUFQLENBQWUsTUFBTTtBQUNuQjtBQUNBLE1BQUlaLEtBQUssQ0FBQ2EsSUFBTixHQUFhQyxLQUFiLE9BQXlCLENBQTdCLEVBQWdDO0FBQzlCUixjQUFVLENBQ1IsaUJBRFEsRUFFUix3REFGUSxDQUFWO0FBS0FBLGNBQVUsQ0FDUixrQkFEUSxFQUVSLHlCQUZRLENBQVY7QUFLQUEsY0FBVSxDQUNSLGVBRFEsRUFFUix5QkFGUSxDQUFWO0FBS0FBLGNBQVUsQ0FDUixhQURRLEVBRVIsMkJBRlEsQ0FBVjtBQUlEO0FBQ0YsQ0F2QkQsRSIsImZpbGUiOiIvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuXG5leHBvcnQgY29uc3QgTGlua3MgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignbGlua3MnKTtcbiIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuaW1wb3J0IHsgTGlua3MgfSBmcm9tICcvaW1wb3J0cy9hcGkvbGlua3MnO1xuXG5mdW5jdGlvbiBpbnNlcnRMaW5rKHRpdGxlLCB1cmwpIHtcbiAgTGlua3MuaW5zZXJ0KHsgdGl0bGUsIHVybCwgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpIH0pO1xufVxuXG5NZXRlb3Iuc3RhcnR1cCgoKSA9PiB7XG4gIC8vIElmIHRoZSBMaW5rcyBjb2xsZWN0aW9uIGlzIGVtcHR5LCBhZGQgc29tZSBkYXRhLlxuICBpZiAoTGlua3MuZmluZCgpLmNvdW50KCkgPT09IDApIHtcbiAgICBpbnNlcnRMaW5rKFxuICAgICAgJ0RvIHRoZSBUdXRvcmlhbCcsXG4gICAgICAnaHR0cHM6Ly93d3cubWV0ZW9yLmNvbS90dXRvcmlhbHMvcmVhY3QvY3JlYXRpbmctYW4tYXBwJ1xuICAgICk7XG5cbiAgICBpbnNlcnRMaW5rKFxuICAgICAgJ0ZvbGxvdyB0aGUgR3VpZGUnLFxuICAgICAgJ2h0dHA6Ly9ndWlkZS5tZXRlb3IuY29tJ1xuICAgICk7XG5cbiAgICBpbnNlcnRMaW5rKFxuICAgICAgJ1JlYWQgdGhlIERvY3MnLFxuICAgICAgJ2h0dHBzOi8vZG9jcy5tZXRlb3IuY29tJ1xuICAgICk7XG5cbiAgICBpbnNlcnRMaW5rKFxuICAgICAgJ0Rpc2N1c3Npb25zJyxcbiAgICAgICdodHRwczovL2ZvcnVtcy5tZXRlb3IuY29tJ1xuICAgICk7XG4gIH1cbn0pO1xuIl19
