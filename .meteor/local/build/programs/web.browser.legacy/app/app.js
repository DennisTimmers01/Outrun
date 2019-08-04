var require = meteorInstall({"imports":{"api":{"links.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                 //
// imports/api/links.js                                                                            //
//                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                   //
module.export({
  Links: function () {
    return Links;
  }
});
var Mongo;
module.link("meteor/mongo", {
  Mongo: function (v) {
    Mongo = v;
  }
}, 0);
var Links = new Mongo.Collection('links');
/////////////////////////////////////////////////////////////////////////////////////////////////////

}},"ui":{"App.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                 //
// imports/ui/App.jsx                                                                              //
//                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                   //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Hello;
module.link("./Hello.jsx", {
  Hello: function (v) {
    Hello = v;
  }
}, 1);
var Info;
module.link("./Info.jsx", {
  "default": function (v) {
    Info = v;
  }
}, 2);

var App = function () {
  return React.createElement("div", null, React.createElement("h1", null, "Welcome to Meteor!"), React.createElement(Hello, null), React.createElement(Info, null));
};

module.exportDefault(App);
/////////////////////////////////////////////////////////////////////////////////////////////////////

},"Hello.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                 //
// imports/ui/Hello.jsx                                                                            //
//                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                   //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

module.export({
  Hello: function () {
    return Hello;
  }
});
var React, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 0);

function Hello() {
  var _useState = useState(0),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  return React.createElement("div", null, React.createElement("button", {
    onClick: function () {
      return setCount(count + 1);
    }
  }, "Click Me"), React.createElement("p", null, "You've pressed the button ", count, " times."));
}
/////////////////////////////////////////////////////////////////////////////////////////////////////

},"Info.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                 //
// imports/ui/Info.jsx                                                                             //
//                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                   //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React, Component;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  Component: function (v) {
    Component = v;
  }
}, 0);
var withTracker;
module.link("meteor/react-meteor-data", {
  withTracker: function (v) {
    withTracker = v;
  }
}, 1);
var Links;
module.link("../api/links", {
  Links: function (v) {
    Links = v;
  }
}, 2);

var Info =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(Info, _Component);

  function Info() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Info.prototype;

  _proto.render = function () {
    function render() {
      var _this = this;

      var links = this.props.links.map(function (link) {
        return _this.makeLink(link);
      });
      return React.createElement("div", null, React.createElement("h2", null, "Learn Meteor!"), React.createElement("ul", null, links));
    }

    return render;
  }();

  _proto.makeLink = function () {
    function makeLink(link) {
      return React.createElement("li", {
        key: link._id
      }, React.createElement("a", {
        href: link.url,
        target: "_blank"
      }, link.title));
    }

    return makeLink;
  }();

  return Info;
}(Component);

module.exportDefault(InfoContainer = withTracker(function () {
  return {
    links: Links.find().fetch()
  };
})(Info));
/////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"client":{"main.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                 //
// client/main.jsx                                                                                 //
//                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                   //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 1);
var render;
module.link("react-dom", {
  render: function (v) {
    render = v;
  }
}, 2);
var App;
module.link("/imports/ui/App", {
  "default": function (v) {
    App = v;
  }
}, 3);
Meteor.startup(function () {
  render(React.createElement(App, null), document.getElementById('react-target'));
});
/////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".jsx",
    ".css"
  ]
});

var exports = require("/client/main.jsx");