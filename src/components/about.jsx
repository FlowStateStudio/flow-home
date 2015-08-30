/**
 * Created by Oakley Hall on 8/29/15.
 */
import React from 'react';

const divStyle = {
  height: '100%',
  width: '100%'
};

const textStyle = {
  padding: '400px'
};

export default React.createClass({
  render() {
      return <div style={divStyle} >
        <h1 style={textStyle}>ABOUT</h1>
      </div>
  }
});