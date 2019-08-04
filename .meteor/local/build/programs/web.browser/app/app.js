var require = meteorInstall({"imports":{"api":{"links.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                 //
// imports/api/links.js                                                                            //
//                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////////////////////////////////////////

}},"ui":{"App.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                 //
// imports/ui/App.jsx                                                                              //
//                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                   //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Hello;
module.link("./Hello.jsx", {
  Hello(v) {
    Hello = v;
  }

}, 1);
let Info;
module.link("./Info.jsx", {
  default(v) {
    Info = v;
  }

}, 2);

const App = () => React.createElement("div", null, React.createElement("h1", null, "Welcome to Meteor!"), React.createElement(Hello, null), React.createElement(Info, null));

module.exportDefault(App);
/////////////////////////////////////////////////////////////////////////////////////////////////////

},"Hello.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                 //
// imports/ui/Hello.jsx                                                                            //
//                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                   //
module.export({
  Hello: () => Hello
});
let React, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  }

}, 0);

function Hello() {
  const [count, setCount] = useState(0);
  return React.createElement("div", null, React.createElement("button", {
    onClick: () => setCount(count + 1)
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
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let withTracker;
module.link("meteor/react-meteor-data", {
  withTracker(v) {
    withTracker = v;
  }

}, 1);
let Links;
module.link("../api/links", {
  Links(v) {
    Links = v;
  }

}, 2);

class Info extends Component {
  render() {
    const links = this.props.links.map(link => this.makeLink(link));
    return React.createElement("div", null, React.createElement("h2", null, "Learn Meteor!"), React.createElement("ul", null, links));
  }

  makeLink(link) {
    return React.createElement("li", {
      key: link._id
    }, React.createElement("a", {
      href: link.url,
      target: "_blank"
    }, link.title));
  }

}

module.exportDefault(InfoContainer = withTracker(() => {
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
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let render;
module.link("react-dom", {
  render(v) {
    render = v;
  }

}, 2);
let App;
module.link("/imports/ui/App", {
  default(v) {
    App = v;
  }

}, 3);
Meteor.startup(() => {
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