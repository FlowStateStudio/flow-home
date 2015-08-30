/**
 * Created by Oakley Hall on 6/16/15.
 */
import React from 'react';
import mui from 'material-ui';
import Router from 'react-router';
import {Navigation} from 'react-router';

const RouteHandler = Router.RouteHandler;


const ThemeManager = new mui.Styles.ThemeManager();
const AppBar = mui.AppBar;
const AppCanvas = mui.AppCanvas;
const MenuItem = mui.MenuItem;
const LeftNav = mui.LeftNav;



export default React.createClass({
  mixins: [Navigation],
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  _iconTouchHandler() {
    this.refs.LeftNav.toggle();
  },
  _menuItems() {
    return [
      {
        text: 'Home',
        type: MenuItem.Types.LIGHT,
        payload: '/'
      },
      {
        text: 'About',
        type: MenuItem.Types.LIGHT,
        payload: 'about'
      },
      {
        text: 'Blog',
        type: MenuItem.Types.LINK,
        payload: 'http://blog.flowstate.io'
      }
    ];
  },
  render() {
    return <AppCanvas>
              <AppBar title="FlowState Studios"
                    onLeftIconButtonTouchTap={this._iconTouchHandler}
              />
              <LeftNav ref="LeftNav"
                     menuItems={this._menuItems()}
                     docked={false}
                     onChange={(e, key, selected) => {
                      this.transitionTo(selected.payload);
                     }}
                     isInitiallyOpen="false"
              />
            <RouteHandler/>
    </AppCanvas>;
  }
});
