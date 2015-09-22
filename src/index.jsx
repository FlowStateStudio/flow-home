/**
 * Created by Oakley Hall on 6/16/15.
 */

import React from 'react';
import Body from './components/body';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Router from 'react-router';
import Home from './components/home'
import About from './components/about'

const Route = Router.Route;

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();


// declare our routes and their hierarchy
const routes = (
  <Route handler={Body}>
    <Route name='home' path='' handler={Home}/>
    <Route name='about' path='about' handler={About}/>
  </Route>
);

Router.run(routes, Router.HashLocation, (Body) => {
  React.render( <Body/>, document.body );
});

