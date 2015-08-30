/**
 * Created by Oakley Hall on 8/29/15.
 */
import React from 'react';
import {CurvedCarousel} from 'curved-carousel';
import _ from 'lodash';

const logos = [
  'HTML5',
  'angular',
  'backbone',
  'browserify',
  'css3',
  'grunt',
  'hapi',
  'js',
  'node',
  'react',
  'webpack'
];

const divStyle = {
  backgroundImage: 'url(imgs/flowLogo.png)',
  height: '100%',
  width: '100%'
};

export default React.createClass({
  render() {
    return <div style={divStyle}>
      <CurvedCarousel
        childWidth={150}
        style={{ paddingTop: 100, height: 500 }}
        rotation={true}
        friction={0}
        curve={25}
        spacing={0}>
        {
          _.map(logos, (logo) => {
            return <img src={"imgs/carousel/" + logo + ".png"} />
          })
        }
      </CurvedCarousel>
    </div>
  }
});
