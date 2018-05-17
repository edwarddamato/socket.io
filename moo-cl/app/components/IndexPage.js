import React from 'react';
import CustomDiv from './CustomDiv';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div>Index</div>
        <CustomDiv className="moo moo-head" width='200px' height='200px' />
      </div>
    );
  }
};