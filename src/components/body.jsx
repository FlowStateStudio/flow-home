/**
 * Created by Oakley Hall on 6/16/15.
 */
import React from 'react';
import mui from 'material-ui';
let ThemeManager = new mui.Styles.ThemeManager();
let AppBar = mui.AppBar;
let AppCanvas = mui.AppCanvas;
let MenuItem = mui.MenuItem;
let LeftNav = mui.LeftNav;

export default React.createClass({
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
        route: 'get-started',
        text: 'About' },
      {
        text: 'Blog',
        type: MenuItem.Types.LINK,
        payload: 'http://blog.flowstate.io'
      }
    ];
  },
  render() {
    return <AppCanvas
              style={{
                backgroundImage: 'url(/imgs/flowLogo.png)'
              }}>
            <AppBar title="FlowState Studios"
                    onLeftIconButtonTouchTap={this._iconTouchHandler}
              />
            <LeftNav ref="LeftNav"
                     menuItems={this._menuItems()}
                     docked={false}
                     isInitiallyOpen="false"
              />
          </AppCanvas>;
  }
});
